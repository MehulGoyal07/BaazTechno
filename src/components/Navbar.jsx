import { useState } from 'react';
import { FaBriefcase, FaHome, FaPhoneAlt, FaServicestack, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import heroBg from '../assets/bg/hero_bg.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleHomeClick = () => {
    setIsOpen(false);
    window.location.href = "/";
  };

  return (
    <header
      className="fixed top-0 w-full bg-cover bg-center flex items-center z-50 shadow-md"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Left: Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" onClick={handleHomeClick} className="flex items-center">
            <span className="text-yellow-400">Baaz</span>
            <span className="text-white">Techno</span>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex space-x-6 text-white text-lg items-center">
          <Link
            to="/" onClick={handleHomeClick}
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
          >
            <FaServicestack />
            <span>Services</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
          >
            <FaUserAlt />
            <span>About</span>
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
          >
            <FaBriefcase />
            <span>Portfolio</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
          >
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>
        </div>

        {/* Right: Contact Info */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:baaztechno@gmail.com?subject=Enquiry&body=Hello!I want to discuss something!"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition duration-300"
          >
            Contact Us : baaztechno@gmail.com
          </a>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-gray-900 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <nav className="flex flex-col space-y-6 text-lg p-8">
          <Link
            to="/"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaServicestack />
            <span>Services</span>
          </Link>
          <Link
            to="/about"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaUserAlt />
            <span>About</span>
          </Link>
          <Link
            to="/portfolio"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaBriefcase />
            <span>Portfolio</span>
          </Link>
          <Link
            to="/contact"
            className="flex items-center space-x-2 hover:text-yellow-500 transition"
            onClick={() => setIsOpen(false)}
          >
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
