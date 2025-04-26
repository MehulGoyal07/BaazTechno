import React, { useEffect, useMemo, useState } from "react";
import { FiChevronDown, FiChevronUp, FiClock, FiTrash2, FiX } from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";
import { useSelector } from "react-redux";

const DashComments = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [commentIdToDelete, setCommentIdToDelete] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/comment/getcomments`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch comments");
        }
        setComments(data.comments);
        setShowMore(data.comments.length >= 9);
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser.isAdmin) {
      fetchComments();
    }
  }, [currentUser._id, currentUser.isAdmin]);

  const handleShowMore = async () => {
    const startIndex = comments.length;
    try {
      const res = await fetch(`/api/comment/getcomments?startIndex=${startIndex}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch more comments");
      }
      setComments((prev) => [...prev, ...data.comments]);
      setShowMore(data.comments.length >= 9);
    } catch (error) {
      console.error("Error fetching more comments:", error);
      setError(error.message);
    }
  };

  const handleDeleteComment = async () => {
    try {
      const res = await fetch(`/api/comment/deletecomment/${commentIdToDelete}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to delete comment");
      }
      setComments((prev) => prev.filter((comment) => comment._id !== commentIdToDelete));
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting comment:", error);
      setError(error.message);
    }
  };

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedComments = useMemo(() => {
    let sortableItems = [...comments];
    if (searchTerm) {
      sortableItems = sortableItems.filter(
        (comment) =>
          comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          comment.userId.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [comments, sortConfig, searchTerm]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 z-50">
        <ImSpinner8 className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-lg max-w-4xl mx-auto mt-8">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 w-full">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Manage Comments
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search comments..."
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {sortedComments.length > 0 ? (
          <div className="border border-gray-700 rounded-xl shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto w-full">
              <table className="min-w-full divide-y divide-gray-700 w-full">
                <thead className="bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer min-w-[160px]"
                      onClick={() => requestSort("createdAt")}
                    >
                      <div className="flex items-center">
                        <FiClock className="mr-2" />
                        Date Created
                        {sortConfig.key === "createdAt" &&
                          (sortConfig.direction === "asc" ? (
                            <FiChevronUp className="ml-1" />
                          ) : (
                            <FiChevronDown className="ml-1" />
                          ))}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider min-w-[200px]"
                    >
                      Content
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider cursor-pointer min-w-[120px]"
                      onClick={() => requestSort("numberOfLikes")}
                    >
                      Likes
                      {sortConfig.key === "numberOfLikes" &&
                        (sortConfig.direction === "asc" ? (
                          <FiChevronUp className="ml-1 inline" />
                        ) : (
                          <FiChevronDown className="ml-1 inline" />
                        ))}
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider min-w-[120px]"
                    >
                      Author
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider min-w-[120px]"
                    >
                      Post
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider min-w-[120px]"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800/50 divide-y divide-gray-700">
                  {sortedComments.map((comment) => (
                    <tr
                      key={comment._id}
                      className="hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {new Date(comment.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-300 max-w-xs truncate">
                        {comment.content}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {comment.numberOfLikes}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {comment.userId}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {comment.postId}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => {
                            setShowModal(true);
                            setCommentIdToDelete(comment._id);
                          }}
                          className="text-gray-400 hover:text-red-400 transition-colors p-1"
                          title="Delete"
                        >
                          <FiTrash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {showMore && (
              <div className="w-full text-center py-4 bg-gray-800/50 border-t border-gray-700">
                <button
                  onClick={handleShowMore}
                  className="text-teal-400 hover:text-teal-300 font-medium text-sm px-4 py-2 rounded-lg transition-colors flex items-center justify-center mx-auto"
                >
                  Load More Comments
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 w-full">
            <div className="max-w-md mx-auto bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-medium text-gray-300 mb-4">
                {searchTerm ? "No matching comments found" : "No Comments Found"}
              </h3>
              <p className="text-gray-400 mb-6">
                {searchTerm
                  ? "Try a different search term"
                  : "There are no comments yet."}
              </p>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm p-4">
            <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-2xl max-w-md w-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-lg font-semibold text-white">
                  Confirm Deletion
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">
                  Are you sure you want to delete this comment? This action cannot be undone.
                </p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDeleteComment}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center"
                  >
                    <FiTrash2 className="mr-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashComments;