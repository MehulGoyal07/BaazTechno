/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* About Us Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">About Baazwear</h3>
          <p className="text-lg text-white">
            At Baazwear, we offer a wide range of trendy and high-quality clothing designed to fit every occasion. We are committed to providing comfort, style, and an exceptional shopping experience for our customers.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-accent transition duration-200">About Us</a>
            </li>
            <li>
              <a href="/categories" className="hover:text-accent transition duration-200">Categories</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent transition duration-200">Contact Us</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-accent transition duration-200">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-primary">Contact Us</h3>
          <p className="text-lg text-white">
            Feel free to reach out to us for any inquiries. We would love to hear from you.
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="text-accent">📞</span>
              <a href="tel:+1234567890" className="hover:text-accent transition duration-200">+1 234 567 890</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-accent">✉️</span>
              <a href="mailto:baazwear@gmail.com" className="hover:text-accent transition duration-200">baazwear@gmail.com</a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com" className="text-accent hover:text-primary transition duration-200">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" className="text-accent hover:text-primary transition duration-200">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" className="text-accent hover:text-primary transition duration-200">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" className="text-accent hover:text-primary transition duration-200">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-secondary text-white text-center py-4 mt-12">
        <p className="text-sm">&copy; 2024 Baazwear. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
