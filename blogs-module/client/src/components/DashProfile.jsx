/* eslint-disable no-unused-vars */
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import React, { createRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPen, FaSignOutAlt, FaTimes, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, updateFailure, updateStart, updateSuccess } from "../redux/user/userSlice";

const DashProfile = () => {
  const { currentUser, error } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
  const [tempImageUrl, setTempImageUrl] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const filePickerRef = createRef();
  const dispatch = useDispatch();

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setImageFileUploadError("File size must be less than 2MB");
        return;
      }
      setImageFile(file);
      setTempImageUrl(URL.createObjectURL(file));
      setImageFileUploadError(null);
    }
  };

  const uploadImage = async () => {
    try {
      setImageFileUploading(true);
      setImageFileUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + imageFile.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageFileUploadingProgress(progress.toFixed(0));
        },
        (error) => {
          setImageFileUploadError("Image upload failed");
          setImageFileUploadingProgress(null);
          setImageFile(null);
          setTempImageUrl(null);
          setImageFileUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageFileUrl(downloadURL);
            setImageFileUploadingProgress(null);
            setFormData({ ...formData, profilePicture: downloadURL });
            setImageFileUploading(false);
            setTempImageUrl(null);
          });
        }
      );
    } catch (error) {
      setImageFileUploadError("Image upload failed");
      setImageFileUploadingProgress(null);
      setImageFile(null);
      setTempImageUrl(null);
      setImageFileUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);

    if (imageFile && !imageFileUrl) {
      await uploadImage();
      if (imageFileUploadError) return;
    }

    if (Object.keys(formData).length === 0 && !imageFileUrl) {
      setUpdateUserError("No changes made to update");
      return;
    }

    try {
      dispatch(updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ...(imageFileUrl && { profilePicture: imageFileUrl }),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(updateFailure(data));
        setUpdateUserError(data.message || "Update failed");
      } else {
        dispatch(updateSuccess(data));
        setUpdateUserSuccess("Profile updated successfully");
        setImageFile(null);
        setImageFileUrl(null);
        setTempImageUrl(null);
      }
    } catch (error) {
      dispatch(updateFailure(error.message));
      setUpdateUserError("Profile update failed");
    }
  };

  const handleCancelUpload = () => {
    setImageFile(null);
    setTempImageUrl(null);
    setImageFileUploadingProgress(null);
    setImageFileUploading(false);
    setImageFileUploadError(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDeleteUser = async () => {
    setShowDeleteModal(false);
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(deleteUserFailure(data));
      } else {
        dispatch(deleteUserSuccess());
      }
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 w-full">
      <h1 className="mb-6 text-center font-bold text-3xl text-primary">Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-700">
        {/* Profile Picture */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImgChange}
          ref={filePickerRef}
          className="hidden"
        />
        <div className="relative self-center group">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg relative">
            {imageFileUploadingProgress && (
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10">
                <CircularProgressbar
                  value={imageFileUploadingProgress || 0}
                  text={`${imageFileUploadingProgress}%`}
                  strokeWidth={5}
                  styles={{
                    root: { width: "80px", height: "80px" },
                    path: { stroke: `rgba(255, 215, 0, ${imageFileUploadingProgress / 100})` },
                    text: { fill: "#FFD700", fontSize: "24px" },
                  }}
                />
                <button
                  type="button"
                  onClick={handleCancelUpload}
                  className="mt-2 text-xs text-red-400 hover:text-red-300"
                >
                  Cancel Upload
                </button>
              </div>
            )}
            <img
              src={tempImageUrl || imageFileUrl || currentUser.profilePicture}
              alt="user"
              className={`w-full h-full object-cover ${
                imageFileUploadingProgress ? "opacity-60" : "opacity-100"
              } transition-opacity duration-300`}
            />
          </div>
          <button
            type="button"
            onClick={() => filePickerRef.current.click()}
            className="absolute bottom-0 right-0 bg-primary p-3 rounded-full shadow-lg 
                      transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 hover:bg-primary/90"
          >
            <FaPen className="text-darkBackground text-lg" />
          </button>
        </div>

        {imageFileUploadError && (
          <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-lg">
            <span className="font-medium">Error!</span> {imageFileUploadError}
          </div>
        )}

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-muted mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              defaultValue={currentUser.username}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                        text-white placeholder-muted/50 focus:outline-none focus:ring-2 
                        focus:ring-primary/50 focus:border-transparent transition-all"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={currentUser.email}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                        text-white placeholder-muted/50 focus:outline-none focus:ring-2 
                        focus:ring-primary/50 focus:border-transparent transition-all"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-muted mb-1">
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Leave blank to keep current"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                        text-white placeholder-muted/50 focus:outline-none focus:ring-2 
                        focus:ring-primary/50 focus:border-transparent transition-all"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Update Button */}
        <button
          type="submit"
          disabled={imageFileUploading}
          className="mt-4 w-full py-2 px-6 bg-gradient-to-r from-primary to-primary/80 
                    text-darkBackground font-bold rounded-lg shadow-lg
                    hover:shadow-xl transition-all duration-300 focus:outline-none 
                    focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {imageFileUploading ? "Uploading..." : "Update Profile"}
        </button>
      </form>

      {/* Status Messages */}
      {updateUserSuccess && (
        <div className="bg-green-900/30 border border-green-800 text-green-400 px-4 py-3 rounded-lg mt-4">
          <span className="font-medium">Success!</span> {updateUserSuccess}
        </div>
      )}
      {updateUserError && (
        <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-lg mt-4">
          <span className="font-medium">Error!</span> {updateUserError}
        </div>
      )}
      {error && (
        <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-lg mt-4">
          <span className="font-medium">Error!</span> {error}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setShowDeleteModal(true)}
          className="flex items-center text-red-400 hover:text-red-300 transition-colors"
        >
          <FaTrash className="mr-2" />
          <span className="font-medium">Delete Account</span>
        </button>

        <button className="flex items-center text-muted hover:text-primary transition-colors">
          <FaSignOutAlt className="mr-2" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl shadow-xl border border-gray-700 max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Confirm Deletion</h3>
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <FaTimes />
              </button>
            </div>
            <div className="text-center py-6">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-red-500/20 rounded-full mb-4">
                <FaTrash className="text-red-500 text-2xl" />
              </div>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete your account? This action cannot be undone.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleDeleteUser}
                  className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashProfile;