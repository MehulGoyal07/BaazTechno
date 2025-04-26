import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/post/getPosts?limit=6');
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch posts');
        }
        setPosts(data.posts);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Welcome to <span className="text-primary">BaazTechno</span> Blogs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Your premier destination for cutting-edge technology insights, tutorials, and industry trends. 
              Elevate your skills with our expert-curated content.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/search"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Articles <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary rounded-lg font-medium transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Recent Posts Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most recent publications on technology, development, and innovation.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  to="/search"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg font-medium transition-colors"
                >
                  View All Articles <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No articles found. Check back later!</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-gray-100 dark:bg-gray-700">
        <div className="container mx-auto px-4">
          <CallToAction />
        </div>
      </section>
    </div>
  );
}