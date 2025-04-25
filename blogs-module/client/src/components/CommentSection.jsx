/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FiTrash2, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Comment from "./Comment";

const CommentSection = ({ postId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (comment.length > 200) {
        return;
      }
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getpostcomments/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setComments(data);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    getComments();
  }, [postId]);

  const handleLike = async (commentId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`/api/comment/likeComment/${commentId}`, {
        method: "PUT",
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  likes: data.likes,
                  numberOfLikes: data.likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = async (comment, editedContent) => {
    setComments(
      comments.map((c) =>
        c._id === comment._id ? { ...c, content: editedContent } : c
      )
    );
  };

  const handleDelete = async (commentId) => {
    setShowModal(false);
    try {
      if (!currentUser) {
        navigate('/sign-in');
        return;
      }
      const res = await fetch(`/api/comment/deletecomment/${commentId}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        const data = await res.json();
        setComments(comments.filter((comment) => comment._id !== commentId));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-4">
      {/* User Info Section */}
      {currentUser ? (
        <div className="flex items-center gap-2 mb-6">
          <img
            className="h-8 w-8 object-cover rounded-full border border-primary/30"
            src={currentUser.profilePicture}
            alt={currentUser.username}
          />
          <div>
            <p className="text-sm text-gray-400">Commenting as</p>
            <Link
              className="text-sm font-medium text-primary hover:underline"
              to={"/dashboard?tab=profile"}
            >
              @{currentUser.username}
            </Link>
          </div>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-gray-300 text-sm">
            Please <Link to="/sign-in" className="text-primary font-medium hover:underline">sign in</Link> to leave a comment.
          </p>
        </div>
      )}

      {/* Comment Form */}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-gray-800/30 rounded-xl border border-gray-700 p-4"
        >
          <textarea
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
            placeholder="Share your thoughts..."
            rows="4"
            maxLength="200"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <div className="flex justify-between items-center mt-3">
            <p className={`text-xs ${comment.length > 180 ? 'text-red-400' : 'text-gray-500'}`}>
              {200 - comment.length} characters remaining
            </p>
            <button
              type="submit"
              disabled={!comment.trim()}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                !comment.trim()
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90 text-gray-900'
              }`}
            >
              Post Comment
            </button>
          </div>
          {commentError && (
            <p className="text-red-400 text-sm mt-2">{commentError}</p>
          )}
        </form>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-6">
            <p className="text-gray-400">No comments yet! Be the first to share your thoughts.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-medium text-gray-200">Comments</h3>
              <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                {comments.length}
              </span>
            </div>
            
            <div className="space-y-5">
              {comments.map((comment) => (
                <Comment
                  key={comment._id}
                  comment={comment}
                  onLike={handleLike}
                  onEdit={handleEdit}
                  onDelete={(commentId) => {
                    setShowModal(true);
                    setCommentToDelete(commentId);
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-blur-sm p-4">
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-white">Delete Comment</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Are you sure you want to delete this comment? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(commentToDelete)}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center"
              >
                <FiTrash2 className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;