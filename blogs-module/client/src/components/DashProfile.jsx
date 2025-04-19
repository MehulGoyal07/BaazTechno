/* eslint-disable no-unused-vars */
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import React, { createRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPen, FaSignOutAlt, FaTimes, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutSuccess,
  updateFailure,
  updateStart,
  updateSuccess
} from "../redux/user/userSlice";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] =
    useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);
  const [updateUserError, setUpdateUserError] = useState(null);
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
      setImageFileUrl(URL.createObjectURL(file));
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
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageFileUploadingProgress(progress.toFixed(0));
        },
        (error) => {
          setImageFileUploadError("Image upload failed");
          setImageFileUploadingProgress(null);
          setImageFile(null);
          setImageFileUrl(null);
          setImageFileUploading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setImageFileUrl(downloadURL);
            setFormData({ ...formData, profilePicture: downloadURL });
          } catch (error) {
            setImageFileUploadError("Failed to get image URL");
          } finally {
            setImageFileUploadingProgress(null);
            setImageFileUploading(false);
          }
        }
      );
    } catch (error) {
      setImageFileUploadError("Image upload failed");
      setImageFileUploadingProgress(null);
      setImageFile(null);
      setImageFileUrl(null);
      setImageFileUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdateUserError(null);
    setUpdateUserSuccess(null);

    if (imageFile && !imageFileUploadingProgress) {
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
        // Extract error message from response
        const errorMessage = data.message || "Update failed";
        dispatch(updateFailure(errorMessage)); // Pass string instead of object
        setUpdateUserError(errorMessage);
        return;
      }

      dispatch(updateSuccess(data));
      setUpdateUserSuccess("Profile updated successfully");
      setImageFile(null);
      setImageFileUrl(null);
    } catch (error) {
      const errorMessage = error.message || "Profile update failed";
      dispatch(updateFailure(errorMessage));
      setUpdateUserError(errorMessage);
    }
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
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to delete account");
      }
      dispatch(deleteUserSuccess());
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to sign out");
      }
      dispatch(signOutSuccess());
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 w-full">
      <h1 className="mb-8 text-center font-heading font-bold text-4xl text-primary">
        Profile
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-gray-800/50 rounded-xl p-8 shadow-card border border-gray-700"
      >
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
              <CircularProgressbar
                value={imageFileUploadingProgress || 0}
                text={`${imageFileUploadingProgress}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    background: "rgba(0,0,0,0.5)",
                  },
                  path: {
                    stroke: `rgba(255, 215, 0, ${
                      imageFileUploadingProgress / 100
                    })`,
                  },
                  text: {
                    fill: "#FFD700",
                    fontSize: "24px",
                  },
                }}
              />
            )}
            <img
              src={imageFileUrl || currentUser.profilePicture}
              alt="user"
              className={`w-full h-full object-cover ${
                imageFileUploadingProgress && imageFileUploadingProgress < 100
                  ? "opacity-60"
                  : "opacity-100"
              } transition-opacity duration-300`}
            />
          </div>
          <button
            type="button"
            onClick={() => filePickerRef.current.click()}
            className="absolute bottom-0 right-0 bg-primary p-3 rounded-full shadow-button 
                      transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                      transition-all duration-300 hover:bg-primary/90"
            disabled={imageFileUploadingProgress !== null}
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
        <div className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-muted mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="username"
              defaultValue={currentUser.username}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                        text-white placeholder-muted/50 focus:outline-none focus:ring-2 
                        focus:ring-primary/50 focus:border-transparent transition-all"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-muted mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="email"
              defaultValue={currentUser.email}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                        text-white placeholder-muted/50 focus:outline-none focus:ring-2 
                        focus:ring-primary/50 focus:border-transparent transition-all"
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-muted mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                        text-white placeholder-muted/50 focus:outline-none focus:ring-2 
                        focus:ring-primary/50 focus:border-transparent transition-all"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="mt-4 w-full py-3 px-6 bg-gradient-to-r from-primary to-primary/80 
                    text-darkBackground font-heading font-bold rounded-lg shadow-button
                    hover:shadow-lg transform hover:-translate-y-0.5 transition-all 
                    duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50
                    disabled:opacity-50"
          disabled={imageFileUploading}
        >
          {imageFileUploading ? "Uploading..." : "Update Profile"}
        </button>
      </form>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setShowDeleteModal(true)}
          className="flex items-center text-red-400 hover:text-red-300 transition-colors px-4 py-2 rounded-lg hover:bg-red-900/20"
          type="button"
        >
          <FaTrash className="mr-2" />
          <span className="font-medium">Delete Account</span>
        </button>

        <button
          className="flex items-center text-muted hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-gray-700/50"
          type="button"
          onClick={handleSignOut}
        >
          <FaSignOutAlt className="mr-2" />
          <span className="font-medium">
            Sign Out
          </span>
        </button>
      </div>

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

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-full max-w-md mx-4">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <div className="flex items-center">
                <FaTrash className="text-red-500 mr-2" />
                <h3 className="text-xl font-semibold text-white">
                  Delete Account
                </h3>
              </div>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete your account? This action cannot
                be undone. All your data will be permanently removed.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteUser}
                  className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center"
                >
                  <FaTrash className="mr-2" />
                  Delete Account
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
