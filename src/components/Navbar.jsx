import { useState } from 'react';
import { FaBriefcase, FaHome, FaPhoneAlt, FaServicestack, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import heroBg from '../assets/bg/hero_bg.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 w-full bg-cover bg-center flex items-center z-50 shadow-md"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-16">
        {/* Left: Logo */}
        <div className="text-2xl text-white font-bold">
          <Link to="/">Baaztechno</Link>
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
            to="/home"
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
        <div className="hidden md:flex text-white items-center space-x-2">
          <span>Contact Us:</span>
          <a
            href="tel:+1234567890"
            className="hover:text-yellow-500 transition"
          >
            +1 234 567 890
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
            to="/home"
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
        {/* <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          X
        </button> */}
      </div>
    </header>
  );
}
