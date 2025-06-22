import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      icon: <FaFacebook className="w-6 h-6" />,
      href: "https://www.facebook.com/YourCompany",
      color: "hover:text-[#1877F2]",
      label: "Facebook",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      href: "https://twitter.com/YourCompany",
      color: "hover:text-[#1DA1F2]",
      label: "Twitter",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      href: "https://www.instagram.com/YourCompany",
      color: "hover:text-[#E1306C]",
      label: "Instagram",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/YourCompany",
      color: "hover:text-[#0077B5]",
      label: "LinkedIn",
      animation: { y: [0, -5, 0] }
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/YourCompany",
      color: "hover:text-gray-400",
      label: "GitHub",
      animation: { y: [0, -5, 0] }
    }
  ];

  return (
    <section className="bg-cardBg rounded-xl p-8 shadow-card hover:shadow-glow transition-shadow duration-300">
      {/* Section Header */}
      <motion.h3 
        className="text-2xl md:text-3xl font-bold text-center mb-6 font-heading text-primary-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Connect With Us
      </motion.h3>
      
      <p className="text-muted text-center mb-8 max-w-md mx-auto">
        Follow our social channels for the latest updates, tips, and announcements.
      </p>

      {/* Social Media Icons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center group ${link.color} transition-colors duration-300`}
            aria-label={link.label}
            whileHover="hover"
            animate="rest"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.1 }
            }}
          >
            <motion.div
              className="bg-white p-4 rounded-full group-hover:bg-primary-900 transition-colors duration-300"
              variants={link.animation}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              {link.icon}
            </motion.div>
            <span className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {link.label}
            </span>
          </motion.a>
        ))}
      </motion.div>

      {/* Email Contact */}
      <div className="mt-8 text-center">
        <p className="text-muted mb-2">Or email us directly at:</p>
        <a 
          href="mailto:contact@yourcompany.com" 
          className="text-primary-500 hover:text-primary-300 font-medium transition-colors duration-300"
        >
          baaztechno@gmail.com
        </a>
      </div>
    </section>
  );
};

export default SocialMediaLinks;