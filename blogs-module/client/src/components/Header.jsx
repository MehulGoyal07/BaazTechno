import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import companyLogo from '../assets/baaztechno.png';

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-darkBackground/95 shadow-md backdrop-blur-sm' 
        : 'bg-darkBackground'
    } border-b border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Desktop Navigation */}
          <div className="flex items-center">
            {/* Logo - Made more prominent */}
            <Link 
              to="/" 
              className="flex items-center group hover:scale-105 transition-transform duration-200"
            >
              <img 
                src={companyLogo} 
                alt="BaazTechno Logo" 
                className="h-12 w-auto"  // Increased height for better visibility
              />
              <span className="ml-3 text-xl font-semibold text-primary">
                Blogs
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 ml-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-muted hover:text-primary'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search and Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Desktop Search */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-64 pl-4 pr-10 py-2 border border-gray-700 rounded-lg bg-darkBackground text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder-muted/50"
                />
                <AiOutlineSearch className="absolute right-3 top-2.5 h-5 w-5 text-muted" />
              </div>
            </div>

            {/* Mobile Search Button */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 rounded-full text-muted hover:text-primary focus:outline-none transition-colors duration-200"
              aria-label="Search"
            >
              <AiOutlineSearch className="h-6 w-6" />
            </button>

            {/* Sign In Button */}
            <Link
              to="/sign-in"
              className="hidden sm:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-md text-darkBackground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Sign In
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted hover:text-primary focus:outline-none lg:hidden transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        {searchOpen && (
          <div className="lg:hidden mb-3 transition-all duration-300">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-4 pr-10 py-2.5 border border-gray-700 rounded-lg bg-darkBackground text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-muted/50"
              />
              <AiOutlineSearch className="absolute right-3 top-3 h-5 w-5 text-muted" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 bg-darkBackground/95 backdrop-blur-sm border-t border-gray-800">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted hover:text-primary hover:bg-primary/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/sign-in"
              className="block w-full mt-2 px-4 py-3 rounded-md text-base font-medium text-center text-darkBackground bg-primary hover:bg-primary/90 transition-colors duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;