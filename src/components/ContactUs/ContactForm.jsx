/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaRupeeSign,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import bgimage from "../../assets/bg/hero_bg.png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const services = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Services",
    "E-commerce Solutions",
    "Custom Software",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ text: "", type: "" });

    try {
      const response = await fetch(
        "https://backendemail-bp1dos9mp-amber305s-projects.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage({
          text: "Thank you! We'll contact you within 24 hours.",
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          business: "",
          phone: "",
          message: "",
          service: "",
        });
      } else {
        setMessage({
          text: data.error || "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setMessage({
        text: "Network error. Please check your connection.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="mt-5 relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4 py-16 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.7)), url(${bgimage})`,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-primary-500 opacity-10 blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary opacity-10 blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      {/* Header Section */}
      <motion.div
        className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          className="text-sm md:text-base uppercase tracking-widest text-primary-500 font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          CONTACT US
        </motion.h3>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2 leading-tight font-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let&apos;s Build Something{" "}
          <span className="text-primary-500">Amazing</span> Together
        </motion.h1>
        <motion.p
          className="text-gray-300 mt-4 text-sm sm:text-base max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          We help Indian businesses grow digitally. Share your requirements and
          our team will get back to you within 24 hours.
        </motion.p>
      </motion.div>

      {/* Contact Container */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Contact Form */}
        <motion.div
          className="bg-cardBg rounded-2xl p-6 sm:p-8 shadow-card border border-gray-800"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <FiSend className="mr-2 text-primary-500" />
            Send Your Query
          </h2>

          {message.text && (
            <motion.div
              className={`p-3 rounded-lg mb-6 ${
                message.type === "success"
                  ? "bg-green-900/50 text-green-300"
                  : "bg-red-900/50 text-red-300"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {message.text}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white transition-all"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white transition-all"
                    required
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <label
                htmlFor="business"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Business Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white transition-all"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9520671308"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white transition-all"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white transition-all"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Requirements
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white transition-all"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
                isSubmitting
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-primary-500 hover:bg-primary-700 text-darkBackground shadow-button"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Submit Query
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div
            className="bg-cardBg rounded-2xl p-6 sm:p-8 shadow-card border border-gray-800 h-full"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Our Contact Details
            </h2>

            <div className="space-y-5">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                  <FaPhone className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">Call Us</h3>
                  <a
                    href="tel:+919520671308"
                    className="text-white hover:text-primary-500 transition-colors block mt-1"
                  >
                    +91 9520671308
                  </a>
                  <a
                    href="tel:+919548551920"
                    className="text-white hover:text-primary-500 transition-colors block mt-1"
                  >
                    +91 9548551920
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                  <FaWhatsapp className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">WhatsApp</h3>
                  <a
                    href="https://wa.me/919520671308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-500 transition-colors block mt-1"
                  >
                    Chat Now (24/7 Support)
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                  <FaEnvelope className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">Email Us</h3>
                  <a
                    href="mailto:baaztechno@gmail.com"
                    className="text-white hover:text-primary-500 transition-colors block mt-1"
                  >
                    baaztechno@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="bg-primary-500/20 p-3 rounded-lg mr-4">
                  <FaRupeeSign className="text-primary-500 text-xl" />
                </div>
                <div>
                  <h3 className="text-gray-300 font-medium">Business Hours</h3>
                  <p className="text-white mt-1">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-white mt-1">Saturday: 10AM - 4PM</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
            >
              <h3 className="text-gray-300 font-medium mb-3">Our Office</h3>
              <address className="text-white not-italic">
                We operate remotely across India 🌐
                <br />
                Based in Noida, Uttar Pradesh
                <br />
                Contact us anytime!
              </address>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
