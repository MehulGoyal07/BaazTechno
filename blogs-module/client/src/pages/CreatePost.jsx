/* eslint-disable no-unused-vars */
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useRef, useState } from 'react';
import { FaRegSave } from 'react-icons/fa';
import { FiCheck, FiUpload, FiX } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';

const CreatePost = () => {
  const navigate = useNavigate();
  
  // Editor configuration
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Start writing your post content here...</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto focus:outline-none min-h-[300px] p-4 text-gray-300',
      },
    },
  });

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    category: 'uncategorized',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const fileInputRef = useRef(null);

  // Categories data
  const categories = [
    { value: 'uncategorized', label: 'Select a category' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'reactjs', label: 'React.js' },
    { value: 'nextjs', label: 'Next.js' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'express', label: 'Express.js' },
  ];

  // Handle file selection and upload to Firebase
  const handleImageUpload = async () => {
    try {
      if (!formData.image) {
        setImageUploadError('Please select an image');
        return;
      }
      
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + formData.image.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, formData.image);
      
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setUploadProgress(0);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploadProgress(0);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setUploadProgress(0);
      console.error(error);
    }
  };

  // Handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.match('image.*')) {
      setError('Please select an image file (JPEG, PNG, GIF)');
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setError('Image size must be less than 2MB');
      return;
    }

    setError(null);
    setFormData({ ...formData, image: file });
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
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

      // If image is a file (not yet uploaded), upload it first
      if (formData.image instanceof File) {
        await handleImageUpload();
        throw new Error('Please complete image upload before submitting');
      }

      // Prepare post data
      const postData = {
        title: formData.title,
        category: formData.category,
        image: formData.image,
        content: editor.getHTML()
      };

      // Submit to backend
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.message || 'Failed to create post');
      }

      setSuccess('Post created successfully!');
      navigate(`/post/${data.slug}`);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Remove selected image
  const removeImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Create New Post
          </h1>
          <p className="mt-2 text-gray-400 max-w-md mx-auto">
            Share your knowledge with the BaazTechno community
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
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter post title"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-200"
                required
              />
            </div>

            {/* Category Select */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
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
            </div>
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Featured Image
            </label>
            <div className={`border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${imagePreview ? 'border-primary/30 bg-gray-800' : 'border-gray-700 bg-gray-800 hover:border-primary/50'}`}>
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
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg cursor-pointer transition-colors duration-200 text-sm"
                    >
                      Select Image
                    </label>
                    <p className="text-xs text-gray-500">JPEG, PNG (Max 2MB)</p>
                  </div>
                </>
              )}
            </div>
            
            {/* Upload progress and actions */}
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
            
            {imagePreview && typeof formData.image === 'object' && (
              <button
                type="button"
                onClick={handleImageUpload}
                disabled={uploadProgress > 0}
                className={`mt-3 w-full px-4 py-2 rounded-lg font-medium ${
                  uploadProgress > 0
                    ? 'bg-primary/70 cursor-not-allowed text-gray-900'
                    : 'bg-primary hover:bg-primary/90 text-gray-900'
                }`}
              >
                {uploadProgress > 0 ? 'Uploading...' : 'Upload Image'}
              </button>
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
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || (formData.image && typeof formData.image === 'object')}
              className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 ${
                isSubmitting || (formData.image && typeof formData.image === 'object')
                  ? 'bg-primary/70 cursor-not-allowed text-gray-900'
                  : 'bg-primary hover:bg-primary/90 text-gray-900 hover:shadow-lg hover:shadow-primary/20'
              }`}
            >
              {isSubmitting ? (
                <>
                  <ImSpinner8 className="animate-spin mr-2" />
                  Publishing...
                </>
              ) : (
                <>
                  <FaRegSave className="mr-2" />
                  Publish Post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;