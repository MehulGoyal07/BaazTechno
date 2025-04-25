import { FaArrowRight, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  const readingTime = Math.ceil(post.content.length / 1000);

  return (
    <div className="group relative w-full h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-primary/50">
      <Link to={`/post/${post.slug}`} className="block h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category Badge */}
          <span className="absolute top-3 left-3 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>

        {/* Content Container */}
        <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
          {/* Date and Read Time */}
          <div className="flex items-center text-gray-400 text-xs mb-3 gap-3">
            <span className="flex items-center">
              <FaCalendarAlt className="mr-1" />
              {new Date(post.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <span className="flex items-center">
              <FaClock className="mr-1" />
              {readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt - assuming you add an excerpt field to your post model */}
          <p className="text-gray-400 text-sm mb-5 line-clamp-3 flex-grow">
            {post.excerpt || post.content.substring(0, 150) + '...'}
          </p>

          {/* Read More Button */}
          <div className="mt-auto flex items-center text-primary font-medium text-sm group-hover:underline">
            Read article
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  );
}