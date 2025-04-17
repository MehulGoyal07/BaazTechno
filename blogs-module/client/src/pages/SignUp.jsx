import { FaArrowRight, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CompanyLogo from '../assets/baaztechno.png';

export default function SignUp() {
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
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Join Our Tech Community</h2>
              <p className="text-white/80 mb-8 text-center md:text-left max-w-md">
                Access premium tech content and connect with industry professionals.
              </p>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaUser className="text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Expert Insights</h3>
                  <p className="text-sm text-white/70">Learn from top tech professionals</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaLock className="text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Exclusive Content</h3>
                  <p className="text-sm text-white/70">Member-only articles and resources</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="max-w-xs mx-auto md:mx-0">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Create Account</h1>
              <p className="text-gray-500 dark:text-gray-400 mb-8">
                Begin your journey with BaazTechno
              </p>

              <form className="space-y-5">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter your username"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

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
                      placeholder="Create a password"
                      className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                >
                  Sign Up <FaArrowRight className="ml-2" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-primary hover:text-primary-600 font-medium transition-colors"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}