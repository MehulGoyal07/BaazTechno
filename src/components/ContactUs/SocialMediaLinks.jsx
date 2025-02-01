import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialMediaLinks() {
  return (
    <div className="social-media-links text-center p-6 rounded-lg" style={{ backgroundColor: "rgb(61, 15, 65)" }}>
      {/* "Follow Us" Header with Color */}
      <h3 className="text-2xl font-semibold text-white mb-6">
        Follow Us
      </h3>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-8">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/YourCompany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition-colors duration-300"
        >
          <FaFacebook size={40} />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/YourCompany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <FaTwitter size={40} />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/YourCompany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-600 transition-colors duration-300"
        >
          <FaInstagram size={40} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/YourCompany"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-700 transition-colors duration-300"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </div>
  );
}