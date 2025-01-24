import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="py-12 px-5 text-white"
      style={{
        background: 'linear-gradient(42deg, #7436bb 0.01%, #b520a3 100%)', // Footer background gradient
      }}
    >
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 gap-12">
        {/* Column 1: About Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">About Us</h3>
          <p className="text-lg">
            We are a creative agency specializing in innovative web solutions. From website design to development and digital marketing, we make sure your brand stands out.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#e995df]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#e995df]"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#e995df]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-[#e995df]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">Useful Links</h3>
          <ul className="space-y-4 text-lg">
            <li>
              <a href="#home" className="hover:text-[#e995df]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#e995df]">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#e995df]">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#e995df]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter Subscription */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-lg">
            Stay updated with our latest news, offers, and web development tips. Sign up for our newsletter today!
          </p>
          <form
            action="#"
            method="POST"
            className="flex items-center space-x-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-2/3 p-3 rounded-lg focus:outline-none text-black"
              required
            />
            <button
              type="submit"
              className="py-3 px-6 bg-[#b261a8] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#7436bb]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 text-center text-lg">
        <p>&copy; 2025 BaazTechno. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
