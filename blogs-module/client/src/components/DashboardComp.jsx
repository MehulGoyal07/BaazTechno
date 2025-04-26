import { useEffect, useState } from 'react';
import {
    HiAnnotation,
    HiArrowNarrowUp,
    HiDocumentText,
    HiOutlineUserGroup
} from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const [loading, setLoading] = useState({
    users: false,
    posts: false,
    comments: false
  });
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      if (!currentUser.isAdmin) return;

      try {
        setLoading(prev => ({...prev, users: true}));
        const usersRes = await fetch('/api/user/getusers?limit=5');
        const usersData = await usersRes.json();
        if (usersRes.ok) {
          setUsers(usersData.users);
          setTotalUsers(usersData.totalUsers);
          setLastMonthUsers(usersData.lastMonthUsers);
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      } finally {
        setLoading(prev => ({...prev, users: false}));
      }

      try {
        setLoading(prev => ({...prev, posts: true}));
        const postsRes = await fetch('/api/post/getposts?limit=5');
        const postsData = await postsRes.json();
        if (postsRes.ok) {
          setPosts(postsData.posts);
          setTotalPosts(postsData.totalPosts);
          setLastMonthPosts(postsData.lastMonthPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error.message);
      } finally {
        setLoading(prev => ({...prev, posts: false}));
      }

      try {
        setLoading(prev => ({...prev, comments: true}));
        const commentsRes = await fetch('/api/comment/getcomments?limit=5');
        const commentsData = await commentsRes.json();
        if (commentsRes.ok) {
          setComments(commentsData.comments);
          setTotalComments(commentsData.totalComments);
          setLastMonthComments(commentsData.lastMonthComments);
        }
      } catch (error) {
        console.error('Error fetching comments:', error.message);
      } finally {
        setLoading(prev => ({...prev, comments: false}));
      }
    };

    fetchData();
  }, [currentUser]);

  if (!currentUser.isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center p-6 max-w-md bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Admin Access Required</h2>
          <p className="text-gray-300 mb-6">
            You don't have permission to view this dashboard. Please contact your administrator.
          </p>
          <Link 
            to="/" 
            className="inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Users Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm uppercase font-medium">Total Users</p>
              <h3 className="text-2xl font-bold text-white mt-1">
                {loading.users ? '...' : totalUsers.toLocaleString()}
              </h3>
              <div className="flex items-center mt-3 text-sm">
                <span className={`flex items-center ${lastMonthUsers >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <HiArrowNarrowUp className={`mr-1 ${lastMonthUsers < 0 && 'transform rotate-180'}`} />
                  {Math.abs(lastMonthUsers)}
                </span>
                <span className="text-gray-400 ml-2">Last month</span>
              </div>
            </div>
            <div className="bg-primary/10 p-3 rounded-full">
              <HiOutlineUserGroup className="text-primary text-2xl" />
            </div>
          </div>
        </div>

        {/* Comments Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm uppercase font-medium">Total Comments</p>
              <h3 className="text-2xl font-bold text-white mt-1">
                {loading.comments ? '...' : totalComments.toLocaleString()}
              </h3>
              <div className="flex items-center mt-3 text-sm">
                <span className={`flex items-center ${lastMonthComments >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <HiArrowNarrowUp className={`mr-1 ${lastMonthComments < 0 && 'transform rotate-180'}`} />
                  {Math.abs(lastMonthComments)}
                </span>
                <span className="text-gray-400 ml-2">Last month</span>
              </div>
            </div>
            <div className="bg-indigo-500/10 p-3 rounded-full">
              <HiAnnotation className="text-indigo-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Posts Card */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-400 text-sm uppercase font-medium">Total Posts</p>
              <h3 className="text-2xl font-bold text-white mt-1">
                {loading.posts ? '...' : totalPosts.toLocaleString()}
              </h3>
              <div className="flex items-center mt-3 text-sm">
                <span className={`flex items-center ${lastMonthPosts >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  <HiArrowNarrowUp className={`mr-1 ${lastMonthPosts < 0 && 'transform rotate-180'}`} />
                  {Math.abs(lastMonthPosts)}
                </span>
                <span className="text-gray-400 ml-2">Last month</span>
              </div>
            </div>
            <div className="bg-green-500/10 p-3 rounded-full">
              <HiDocumentText className="text-green-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Data Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Users */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="font-semibold text-lg text-white">Recent Users</h3>
            <Link 
              to="/dashboard?tab=users" 
              className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-700">
            {loading.users ? (
              <div className="p-6 text-center text-gray-400">Loading users...</div>
            ) : users.length > 0 ? (
              users.map(user => (
                <Link 
                  key={user._id} 
                  to={`/dashboard?tab=users&userId=${user._id}`}
                  className="flex items-center p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <img 
                    src={user.profilePicture} 
                    alt={user.username} 
                    className="w-10 h-10 rounded-full object-cover mr-3" 
                  />
                  <div>
                    <p className="font-medium text-white">{user.username}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-6 text-center text-gray-400">No users found</div>
            )}
          </div>
        </div>

        {/* Recent Comments */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="font-semibold text-lg text-white">Recent Comments</h3>
            <Link 
              to="/dashboard?tab=comments" 
              className="text-sm px-4 py-2 bg-indigo-500/10 text-indigo-500 rounded-lg hover:bg-indigo-500/20 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-700">
            {loading.comments ? (
              <div className="p-6 text-center text-gray-400">Loading comments...</div>
            ) : comments.length > 0 ? (
              comments.map(comment => (
                <div key={comment._id} className="p-4 hover:bg-gray-700/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white line-clamp-2">{comment.content}</p>
                    <span className="flex items-center text-sm bg-gray-700 px-2 py-1 rounded-full ml-3">
                      {comment.numberOfLikes} <span className="ml-1">👍</span>
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    By {comment.userId.username || 'Anonymous'} • {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-400">No comments found</div>
            )}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-gray-700">
            <h3 className="font-semibold text-lg text-white">Recent Posts</h3>
            <Link 
              to="/dashboard?tab=posts" 
              className="text-sm px-4 py-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20 transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="divide-y divide-gray-700">
            {loading.posts ? (
              <div className="p-6 text-center text-gray-400">Loading posts...</div>
            ) : posts.length > 0 ? (
              posts.map(post => (
                <Link 
                  key={post._id} 
                  to={`/post/${post.slug}`}
                  className="flex p-4 hover:bg-gray-700/50 transition-colors"
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-16 h-12 object-cover rounded-md mr-3" 
                  />
                  <div>
                    <p className="font-medium text-white line-clamp-1">{post.title}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400 ml-2">
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-6 text-center text-gray-400">No posts found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}