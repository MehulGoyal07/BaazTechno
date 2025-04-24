import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { FiCheck, FiChevronDown, FiUpload, FiX } from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { app } from "../firebase";

const UpdatePost = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { postId } = useParams();

  // Editor configuration
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Loading post content...</p>",
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none min-h-[300px] p-4 text-gray-300",
      },
    },
  });

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    category: "uncategorized",
    image: "",
    content: "",
    slug: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const fileInputRef = useRef(null);

  // Categories data
  const categories = [
    { value: "uncategorized", label: "Select a category" },
    { value: "javascript", label: "JavaScript" },
    { value: "reactjs", label: "React.js" },
    { value: "nextjs", label: "Next.js" },
    { value: "nodejs", label: "Node.js" },
    { value: "mongodb", label: "MongoDB" },
    { value: "express", label: "Express.js" },
  ];

  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsSubmitting(true);
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch post data");
        }

        if (data.posts.length === 0) {
          throw new Error("Post not found");
        }

        const post = data.posts[0];
        setFormData({
          title: post.title,
          category: post.category,
          image: post.image,
          _id: post._id,
          slug: post.slug,
          content: post.content
        });

        if (editor && post.content) {
          editor.commands.setContent(post.content);
        }

        setError(null);
      } catch (error) {
        console.error(error);
        setError(error.message);
        navigate('/dashboard?tab=posts');
      } finally {
        setIsSubmitting(false);
      }
    };

    fetchPost();
  }, [postId, editor, navigate]);

  // Handle title change and generate slug
  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setFormData(prev => ({
      ...prev,
      title: newTitle,
    }));
  };

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.match('image.*')) {
      setImageUploadError('Please select an image file (JPEG, PNG, GIF)');
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setImageUploadError('Image size must be less than 2MB');
      return;
    }

    setImageUploadError(null);
    setImageFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Upload image to Firebase
  const uploadImage = async () => {
    try {
      if (!imageFile) {
        setImageUploadError('Please select an image first');
        return null;
      }

      setImageUploadError(null);
      setUploadProgress(0);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + imageFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress.toFixed(0));
          },
          (error) => {
            setImageUploadError('Image upload failed');
            setUploadProgress(0);
            reject(error);
          },
          async () => {
            try {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              setUploadProgress(0);
              setImageUploadError(null);
              resolve(downloadURL);
            } catch (error) {
              setImageUploadError('Failed to get image URL');
              setUploadProgress(0);
              reject(error);
            }
          }
        );
      });
    } catch (error) {
      setImageUploadError('Image upload failed');
      setUploadProgress(0);
      throw error;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.title.trim()) {
        throw new Error('Title is required');
      }

      if (formData.category === 'uncategorized') {
        throw new Error('Please select a category');
      }

      if (!editor.getText().trim()) {
        throw new Error('Post content cannot be empty');
      }

      let imageUrl = formData.image;
      
      // Upload new image if selected
      if (imageFile) {
        imageUrl = await uploadImage();
      }

      // Prepare post data
      const postData = {
        title: formData.title,
        category: formData.category,
        image: imageUrl,
        content: editor.getHTML(),
      };

      // Submit to backend
      const res = await fetch(`/api/post/updatepost/${formData._id}/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to update post');
      }

      setSuccess('Post updated successfully!');
      setTimeout(() => {
        navigate(`/post/${data.slug}`);
      }, 1500);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove selected image
  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Update Post
          </h1>
          <p className="mt-2 text-gray-400 max-w-md mx-auto">
            Edit and improve your existing post
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title and Category Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title Input */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Post Title *
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Enter post title"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-200"
                required
              />
              {formData.slug && (
                <div className="mt-1 text-xs text-gray-400">
                  URL Slug: {formData.slug}
                </div>
              )}
            </div>

            {/* Category Select */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <div className="relative">
                <select
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent text-gray-200 transition-all duration-200 appearance-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value} className="bg-gray-800">
                      {cat.label}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiChevronDown className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Featured Image
            </label>
            <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${imagePreview ? 'border-primary/30' : 'border-gray-700 hover:border-primary/50'} bg-gray-800`}>
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mx-auto h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
                  >
                    <FiX className="h-4 w-4" />
                  </button>
                </div>
              ) : formData.image ? (
                <div className="relative">
                  <img
                    src={formData.image}
                    alt="Current post"
                    className="mx-auto h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = '/placeholder-post.jpg';
                    }}
                  />
                  <div className="flex justify-center mt-4 gap-2">
                    
                    <label className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors cursor-pointer">
                      Change Image
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        accept="image/*"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <FiUpload className="h-10 w-10 text-gray-500" />
                    <p className="text-sm text-gray-400">
                      Drag and drop your image here, or click to browse
                    </p>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageChange}
                      accept="image/*"
                      className="hidden"
                      id="featured-image"
                    />
                    <label
                      htmlFor="featured-image"
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg cursor-pointer transition-colors duration-200 text-sm"
                    >
                      Select Image
                    </label>
                    <p className="text-xs text-gray-500">JPEG, PNG (Max 2MB)</p>
                  </div>
                </>
              )}
            </div>

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mt-3">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">Uploading: {uploadProgress}%</p>
              </div>
            )}

            {imageUploadError && (
              <div className="mt-3 p-3 bg-red-900/30 border border-red-800 text-red-300 rounded-lg">
                <div className="flex items-center">
                  <FiX className="mr-2 flex-shrink-0" />
                  {imageUploadError}
                </div>
              </div>
            )}
          </div>

          {/* Editor Section */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Post Content *
            </label>
            <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              {/* Editor Toolbar */}
              <div className="flex flex-wrap gap-2 p-3 border-b border-gray-700 bg-gray-800">
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleBold().run()}
                  className={`p-2 rounded hover:bg-gray-700 ${editor?.isActive('bold') ? 'bg-gray-700 text-primary' : 'text-gray-300'}`}
                >
                  <strong>B</strong>
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleItalic().run()}
                  className={`p-2 rounded hover:bg-gray-700 ${editor?.isActive('italic') ? 'bg-gray-700 text-primary' : 'text-gray-300'}`}
                >
                  <em>I</em>
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={`p-2 rounded hover:bg-gray-700 ${editor?.isActive('heading', { level: 2 }) ? 'bg-gray-700 text-primary' : 'text-gray-300'}`}
                >
                  H2
                </button>
                <button
                  type="button"
                  onClick={() => editor.chain().focus().toggleBulletList().run()}
                  className={`p-2 rounded hover:bg-gray-700 ${editor?.isActive('bulletList') ? 'bg-gray-700 text-primary' : 'text-gray-300'}`}
                >
                  • List
                </button>
              </div>
              <EditorContent
                editor={editor}
                className="min-h-[300px] p-4 focus:outline-none bg-gray-800"
              />
            </div>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="p-4 bg-red-900/30 border border-red-800 text-red-300 rounded-lg">
              <div className="flex items-center">
                <FiX className="mr-2 flex-shrink-0" />
                {error}
              </div>
            </div>
          )}
          {success && (
            <div className="p-4 bg-green-900/30 border border-green-800 text-green-300 rounded-lg">
              <div className="flex items-center">
                <FiCheck className="mr-2 flex-shrink-0" />
                {success}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/dashboard?tab=posts')}
              className="px-6 py-3 rounded-lg font-medium bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || uploadProgress > 0}
              className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 ${
                isSubmitting || uploadProgress > 0
                  ? 'bg-primary/70 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20'
              }`}
            >
              {isSubmitting ? (
                <>
                  <ImSpinner8 className="animate-spin mr-2" />
                  Updating...
                </>
              ) : (
                <>
                  <FaRegSave className="mr-2" />
                  Update Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;