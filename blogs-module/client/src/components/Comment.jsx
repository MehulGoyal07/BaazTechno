import moment from "moment";
import React, { useEffect, useState } from "react";
import { FaEdit, FaThumbsUp, FaTrash } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { useSelector } from "react-redux";

const Comment = ({ comment, onLike, onEdit, onDelete }) => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);
  const [isSaving, setIsSaving] = useState(false);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comment.userId}`);
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, [comment]);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedContent(comment.content);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/comment/editcomment/${comment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: editedContent,
        }),
      });
      if (res.ok) {
        setIsEditing(false);
        onEdit(comment, editedContent);
      }
    } catch (error) {
      console.error("Error saving comment:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="group relative p-6 hover:bg-gray-800/30 transition-colors duration-200 rounded-lg">
      {/* Comment Header */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <img
            className="w-10 h-10 rounded-full bg-gray-700 object-cover border-2 border-gray-600"
            src={user.profilePicture || '/default-profile.png'}
            alt={user.username}
            onError={(e) => {
              e.target.src = '/default-profile.png';
            }}
          />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-gray-100">
              {user ? `@${user.username}` : "anonymous"}
            </span>
            <span className="text-xs text-gray-500">
              {moment(comment.createdAt).fromNow()}
              {comment.updatedAt !== comment.createdAt && " (edited)"}
            </span>
          </div>

          {/* Comment Content */}
          {isEditing ? (
            <div className="mt-2 space-y-3">
              <textarea
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows="3"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-transparent border border-gray-600 hover:border-gray-500 text-gray-300 rounded-lg transition-colors"
                  onClick={() => setIsEditing(false)}
                  disabled={isSaving}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                  onClick={handleSave}
                  disabled={isSaving || !editedContent.trim()}
                >
                  {isSaving ? (
                    <>
                      <ImSpinner8 className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Update Comment"
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-1">
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {comment.content}
              </p>
              
              {/* Comment Actions */}
              <div className="flex items-center gap-4 mt-3 pt-2 border-t border-gray-800">
                <button
                  type="button"
                  className={`flex items-center gap-1.5 text-sm px-2 py-1 rounded-md transition-colors ${
                    currentUser && comment.likes.includes(currentUser._id)
                      ? "text-blue-400 bg-blue-900/20"
                      : "text-gray-400 hover:text-blue-400 hover:bg-gray-700/50"
                  }`}
                  onClick={() => onLike(comment._id)}
                >
                  <FaThumbsUp className="text-xs" />
                  <span className="text-xs font-medium">
                    {comment.numberOfLikes || 0}
                  </span>
                </button>

                {(currentUser?._id === comment.userId || currentUser?.isAdmin) && (
                  <div className="ml-auto flex gap-2">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-teal-400 px-2 py-1 rounded-md hover:bg-gray-700/50 transition-colors"
                      onClick={handleEdit}
                    >
                      <FaEdit className="text-xs" />
                      <span className="text-xs font-medium">Edit</span>
                    </button>
                    <button
                      type="button"
                      className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-red-400 px-2 py-1 rounded-md hover:bg-gray-700/50 transition-colors"
                      onClick={() => onDelete(comment._id)}
                    >
                      <FaTrash className="text-xs" />
                      <span className="text-xs font-medium">Delete</span>
                    </button>
                  </div>
                )}
                
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;