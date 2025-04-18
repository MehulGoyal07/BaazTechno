import { FaFacebook, FaGithub, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import CompanyLogo from '../assets/baaztechno.png';

const Footer = () => {
  return (
    <footer className="bg-darkBackground text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={CompanyLogo} 
                alt="BaazTechno Logo" 
                className="h-10 w-auto mr-3" 
              />
              <span className="text-2xl font-bold text-primary">BaazTechno</span>
            </div>
            <p className="text-gray-400">
              Innovating technology solutions to help businesses dominate their industries through cutting-edge software development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Blog Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Blog Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Mobile Apps</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cloud Computing</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">DevOps</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <HiPhone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="ml-3 text-gray-400">+91 9520671308</p>
              </div>
              <div className="flex items-center">
                <HiOutlineMail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="ml-3 text-gray-400">info@baaztechno.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-12 p-6 bg-gray-800 rounded-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-3">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Get the latest tech news, tutorials, and special offers delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary-600 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <FaRegCopyright className="mr-2" />
            <span>{new Date().getFullYear()} BaazTechno. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;