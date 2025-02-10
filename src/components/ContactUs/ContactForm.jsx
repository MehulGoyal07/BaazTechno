import { useState } from "react";
import { FaUser, FaEnvelope, FaBuilding, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import bgimage from "../../assets/bg/hero_bg.png"; // existing bg image

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
  });

  const [message, setMessage] = useState(""); // Success/Error messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

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
        setMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", business: "", phone: "" }); // Clear form
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${bgimage})`, // Background image for the overall page
      }}
    >
      {/* Header with Framer Motion animation */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <br /><br />
        <h3 className="text-sm text-gray-200 uppercase tracking-wide">MEMBERS</h3>
        <h1 className="text-4xl font-bold text-white mt-2">
          We’ve been waiting for you.
        </h1>
        <p className="text-gray-300 mt-2">
          We want to hear from you. Let us know how we can help.
        </p>
      </motion.div>

      {/* Form Container with Framer Motion animation and transparent background */}
      <motion.div
        className="bg-gray-900 bg-opacity-50 border-2 border-gray-200 shadow-lg rounded-lg p-8 mt-6 w-full max-w-lg transition-all transform hover:scale-105 duration-300"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-gray-100 text-center">Send us a Message</h2>

        {/* Success/Error Message */}
        {message && <p className="mt-4 text-center text-green-500">{message}</p>}

        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <motion.div
            className="relative flex items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <FaUser className="absolute left-3 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="relative flex items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <FaEnvelope className="absolute left-3 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              required
            />
          </motion.div>

          {/* Business Name Input */}
          <motion.div
            className="relative flex items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <FaBuilding className="absolute left-3 text-gray-500" />
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              placeholder="Business name"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              required
            />
          </motion.div>

          {/* Phone Number Input */}
          <motion.div
            className="relative flex items-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <FaPhone className="absolute left-3 text-gray-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="w-full pl-10 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-medium hover:bg-purple-400 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
