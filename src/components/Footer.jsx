import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com" },
    { icon: <FaTwitter />, url: "https://www.twitter.com" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com" },
    { icon: <FaInstagram />, url: "https://www.instagram.com" }
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

const contactInfo = [
  { icon: <FaMapMarkerAlt />, text: "Operating Remotely from India 🇮🇳" },
  { icon: <FaPhoneAlt />, text: "+91 9520671308" },
  { icon: <FaEnvelope />, text: "baaztechno@gmail.com" }
];


  return (
    <footer className="bg-cardBg text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-primary-500 font-heading text-3xl font-bold">Baaz</span>
              <span className="text-white font-heading text-3xl font-bold">Techno</span>
            </div>
            <p className="text-muted text-lg leading-relaxed">
              We create innovative digital solutions that help businesses thrive in the modern landscape.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-500 transition-colors duration-300 text-xl"
                  aria-label={`${social.icon.type.displayName} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-500">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="flex items-center text-lg text-white hover:text-primary-300 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-500">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 mt-1 mr-3">{info.icon}</span>
                  <span className="text-white text-lg">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-primary-500">Newsletter</h3>
            <p className="text-muted text-lg">
              Subscribe to get updates on our latest offers and tech insights.
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-darkBackground border border-gray-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-700 text-darkBackground font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-button"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-muted">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BaazTechno. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="hover:text-primary-500 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms-conditions" className="hover:text-primary-500 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;