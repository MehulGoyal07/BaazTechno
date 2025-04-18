import { useState } from 'react';
import { FaArrowRight, FaCheckCircle, FaEnvelope, FaLock } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CompanyLogo from '../assets/baaztechno.png';
import OAuth from '../components/OAuth';
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { loading, error } = useSelector((state) => state.user);
  const [successMessage, setSuccessMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value.trim()
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      dispatch(signInFailure('Both email and password are required'));
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      dispatch(signInFailure('Please enter a valid email address'));
      return false;
    }

    if (formData.password.length < 6) {
      dispatch(signInFailure('Password must be at least 6 characters'));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    
    if (!validateForm()) return;

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Sign in failed. Please try again.');
      }

      dispatch(signInSuccess(data));
      setSuccessMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBackground flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Branding */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-primary to-primary-600 p-8 text-white flex flex-col justify-center">
            <div className="mb-10 flex flex-col items-center md:items-start">
              <div className="flex items-center mb-6">
                <img 
                  src={CompanyLogo} 
                  alt="BaazTechno Logo" 
                  className="h-14 w-auto mr-3 filter brightness-0 invert" 
                />
                <div className="border-l border-white/30 pl-3">
                  <Link to="/" className="flex items-center text-2xl font-bold tracking-tight">
                    <span>BaazTechno</span>
                    <span className="ml-2 font-light opacity-90">Blogs</span>
                  </Link>
                  <p className="text-sm text-white/80 mt-1">Innovate. Create. Dominate.</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Welcome Back!</h2>
              <p className="text-white/80 mb-8 text-center md:text-left max-w-md">
                Continue your journey with premium tech content and community.
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Personalized Content</h3>
                  <p className="text-sm text-white/70">Tailored to your interests</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaLock className="text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Secure Access</h3>
                  <p className="text-sm text-white/70">Your data is always protected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-xs mx-auto md:mx-0">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Sign In</h1>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Access your BaazTechno account
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@company.com"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      onChange={handleChange}
                      value={formData.email}
                      autoComplete="username"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      onChange={handleChange}
                      value={formData.password}
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="mt-2 text-right">
                    <Link
                      to="/forgot-password"
                      className="text-xs text-primary hover:text-primary-600 font-medium transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex items-center justify-center px-5 py-3 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 ${
                    loading 
                      ? 'bg-primary-400 cursor-not-allowed' 
                      : 'bg-primary hover:bg-primary-600 text-white'
                  }`}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Signing In...
                    </>
                  ) : successMessage ? (
                    <>
                      <FaCheckCircle className="mr-2" />
                      Success!
                    </>
                  ) : (
                    <>
                      <FaArrowRight className="mr-2" />
                      Sign In
                    </>
                  )}
                </button>
                <OAuth />
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Don't have an account?{' '}
                  <Link
                    to="/sign-up"
                    className="text-primary hover:text-primary-600 font-medium transition-colors"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>

              {error && (
                <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg border border-red-200 dark:border-red-800">
                  {error}
                </div>
              )}

              {successMessage && (
                <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm rounded-lg border border-green-200 dark:border-green-800">
                  {successMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}