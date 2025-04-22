import React, { useEffect, useState } from "react";
import { FiClock, FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";
import { ImSpinner8 } from "react-icons/im";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashPosts = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdDelete] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch posts");
        }
        setUserPosts(data.posts);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id, currentUser.isAdmin]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <ImSpinner8 className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/30 border border-red-800 text-red-300 p-4 rounded-lg max-w-4xl mx-auto">
        Error: {error}
      </div>
    );
  }

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(
        `/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch more posts");
      }
      setUserPosts((prevPosts) => [...prevPosts, ...data.posts]);
      if (data.posts.length < 9) {
        setShowMore(false);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
      setError(error.message);
    }
  };

  const handleDeletePost = async () => {
    try {
      const res = await fetch(
        `/api/post/deletepost/${postIdToDelete}/${currentUser._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to delete post");
      }
      setUserPosts((prevPosts) =>
        prevPosts.filter((post) => post._id !== postIdToDelete)
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting post:", error);
      setError(error.message);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Manage Posts
        </h1>
        <Link
          to="/create-post"
          className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-darkBackground font-medium rounded-lg hover:shadow-lg transition-all"
        >
          Create New Post
        </Link>
      </div>

      {userPosts.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    <FiClock className="mr-2" /> Last Updated
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Featured Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-800/50 divide-y divide-gray-700">
              {userPosts.map((post) => (
                <tr
                  key={post._id}
                  className="hover:bg-gray-800 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/post/${post.slug}`} className="block">
                      <img
                        src={post.image || "/placeholder-post.jpg"}
                        alt={post.title}
                        className="w-20 h-12 object-cover rounded-md bg-gray-700"
                        onError={(e) => {
                          e.target.src = "/placeholder-post.jpg";
                        }}
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link
                      to={`/post/${post.slug}`}
                      className="text-sm font-medium text-white hover:text-primary transition-colors line-clamp-2"
                      title={post.title}
                    >
                      {post.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300 capitalize">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-4">
                      <Link
                        to={`/post/${post.slug}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        title="View"
                      >
                        <FiEye className="h-5 w-5" />
                      </Link>
                      <Link
                        to={`/update-post/${post._id}`}
                        className="text-gray-400 hover:text-teal-400 transition-colors"
                        title="Edit"
                      >
                        <FiEdit2 className="h-5 w-5" />
                      </Link>
                      <button
                        onClick={() => {
                          setShowModal(true);
                          setPostIdDelete(post._id);
                        }}
                        className="text-gray-400 hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            {showMore && (
              <button
                onClick={handleShowMore}
                className="w-full text-teal-500 self-center text-sm py-7"
              >
                Show More
              </button>
            )}
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="max-w-md mx-auto bg-gray-800/50 rounded-xl p-8 border border-gray-700">
            <h3 className="text-xl font-medium text-gray-300 mb-4">
              No Posts Found
            </h3>
            <p className="text-gray-400 mb-6">
              You haven't created any posts yet. Start sharing your knowledge!
            </p>
            <Link
              to="/create-post"
              className="inline-block px-6 py-2 bg-gradient-to-r from-primary to-primary/80 text-darkBackground font-medium rounded-lg hover:shadow-lg transition-all"
            >
              Create Your First Post
            </Link>
          </div>
        </div>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-white mb-4">
              Are you sure you want to delete this post?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-700 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeletePost()}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashPosts;
