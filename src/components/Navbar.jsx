import { useEffect, useState } from 'react';
import { FaBars, FaBriefcase, FaHome, FaPhoneAlt, FaServicestack, FaTimes, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initialize scroll state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = [
    { to: "/", icon: <FaHome />, text: "Home" },
    { to: "/services", icon: <FaServicestack />, text: "Services" },
    { to: "/about", icon: <FaUserAlt />, text: "About" },
    { to: "/portfolio", icon: <FaBriefcase />, text: "Portfolio" },
    { to: "/contact", icon: <FaPhoneAlt />, text: "Contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMobile ? 'bg-cardBg shadow-navbar' : 'bg-darkBackground/90 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-primary-500 font-heading text-2xl md:text-3xl font-bold group-hover:text-primary-300 transition-colors">
              Baaz
            </span>
            <span className="text-white font-heading text-2xl md:text-3xl font-bold group-hover:text-muted transition-colors">
              Techno
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    to={link.to}
                    className="flex items-center space-x-2 text-white hover:text-primary-500 transition-colors font-medium group"
                  >
                    <span className="text-primary-500 group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary-500 after:transition-all after:duration-300 group-hover:after:w-full">
                      {link.text}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href="mailto:baaztechno@gmail.com"
              className="ml-6 px-5 py-2.5 rounded-full bg-primary-500 text-darkBackground font-medium hover:bg-primary-300 hover:shadow-lg transition-all duration-300 flex items-center group"
            >
              <span>Contact Us</span>
              <span className="hidden lg:inline ml-2 group-hover:translate-x-1 transition-transform">
                baaztechno@gmail.com
              </span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-500 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
        <div className="relative w-4/5 max-w-xs h-full bg-cardBg shadow-xl">
          <div className="flex flex-col h-full overflow-y-auto">
            <div className="px-6 pt-6 pb-4 border-b border-gray-700 flex justify-between items-center">
              <Link 
                to="/" 
                className="flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-primary-500 font-heading text-2xl font-bold">Baaz</span>
                <span className="text-white font-heading text-2xl font-bold">Techno</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:text-primary-500"
              >
                <FaTimes className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-6 py-6 flex-1">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.text}>
                    <Link
                      to={link.to}
                      className="flex items-center space-x-4 text-white hover:text-primary-500 transition-colors text-lg py-2 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-primary-500 group-hover:scale-125 transition-transform">
                        {link.icon}
                      </span>
                      <span className="border-b border-transparent group-hover:border-primary-500 transition-all">
                        {link.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="px-6 py-6 border-t border-gray-700">
              <a
                href="mailto:baaztechno@gmail.com"
                className="w-full px-4 py-3 text-center rounded-full bg-primary-500 text-darkBackground font-medium hover:bg-primary-300 transition-colors flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <span>Contact Us</span>
                <FaPhoneAlt className="text-sm" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}