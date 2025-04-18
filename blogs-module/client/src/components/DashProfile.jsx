/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import React, { createRef, useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPen, FaSignOutAlt, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { app } from "../firebase";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const filePickerRef = createRef();

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        setImageFileUploadError('File size must be less than 2MB');
        return;
      }
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
      setImageFileUploadError(null);
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    try {
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
          setImageFileUploadError('Image upload failed');
          setImageFileUploadingProgress(null);
          setImageFile(null);
          setImageFileUrl(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageFileUrl(downloadURL);
            setImageFileUploadingProgress(null);
          });
        }
      );
    } catch (error) {
      setImageFileUploadError('Image upload failed');
      setImageFileUploadingProgress(null);
      setImageFile(null);
      setImageFileUrl(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 w-full">
      <h1 className="mb-8 text-center font-heading font-bold text-4xl text-primary">
        Profile
      </h1>

      <form className="flex flex-col gap-6 bg-gray-800/50 rounded-xl p-8 shadow-card border border-gray-700">
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
                    background: 'rgba(0,0,0,0.5)'
                  },
                  path: {
                    stroke: `rgba(255, 215, 0, ${imageFileUploadingProgress / 100})`,
                  },
                  text: {
                    fill: '#FFD700',
                    fontSize: '24px',
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
              disabled
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
          disabled={imageFileUploadingProgress !== null}
        >
          {imageFileUploadingProgress ? 'Uploading...' : 'Update Profile'}
        </button>
      </form>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-8">
        <button 
          className="flex items-center text-red-400 hover:text-red-300 transition-colors"
          type="button"
        >
          <FaTrash className="mr-2" />
          <span className="font-medium">Delete Account</span>
        </button>

        <button 
          className="flex items-center text-muted hover:text-primary transition-colors"
          type="button"
        >
          <FaSignOutAlt className="mr-2" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default DashProfile;