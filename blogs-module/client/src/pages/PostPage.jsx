/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaCalendarAlt, FaChevronLeft, FaClock } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";
import { Link, useParams } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

const PostPage = () => {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await response.json();
        
        if (!response.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        setPost(data.posts[0]);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const res = await fetch('/api/post/getposts?limit=3');
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };
    fetchRecentPosts();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900/80 z-50">
        <ImSpinner8 className="animate-spin text-4xl text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-400 mb-6">The requested post could not be loaded.</p>
        <Link 
          to="/" 
          className="flex items-center px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition-colors"
        >
          <FaChevronLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  const readingTime = Math.ceil(post.content.length / 1000);

  return (
    <main className="bg-gray-900 min-h-screen text-gray-100">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-400 hover:text-primary transition-colors"
        >
          <FaChevronLeft className="mr-2" /> All Posts
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 pb-12">
        {/* Category */}
        <div className="flex justify-center mb-6">
          <Link
            to={`/search?category=${post.category}`}
            className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
          >
            {post.category}
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 mb-8">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" />
            {new Date(post.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2" />
            {readingTime} min read
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-10 shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        {/* Content */}
        <div 
          className="prose prose-invert max-w-none post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>

      </article>

      {/* Call to Action */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <CallToAction />
        </div>
      </div>

      {/* Comments Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <CommentSection postId={post._id} />
      </div>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <div className="bg-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">More Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((recentPost) => (
                <PostCard key={recentPost._id} post={recentPost} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PostPage;