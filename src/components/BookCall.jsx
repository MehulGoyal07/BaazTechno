import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bg from "../assets/bg/experience_bg.jpg"; // Background image

const BookACallSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const [message, setMessage] = useState(""); // To show success/error messages

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      // Updated API URL to Vercel backend
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
        setMessage("Your meeting request has been sent successfully!");
        setFormData({ name: "", email: "", date: "", time: "" }); // Clear form
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("Failed to send request. Please try again.");
    }
  };

  return (
    <motion.section
      className="flex flex-col lg:flex-row items-center justify-between bg-cover bg-center py-16 px-5"
      style={{ backgroundImage: `url(${bg})`, minHeight: "100vh" }}
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      {/* Left side with text and explanation */}
      <motion.div
        className="lg:w-1/2 text-left text-white px-6 py-8 lg:py-16 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        <h2 className="text-4xl font-bold mb-6 leading-tight">Book a Call with Us</h2>
        <p className="text-lg mb-6 leading-relaxed">
          Let’s schedule a quick meeting to discuss your website needs. Whether you are looking for website
          development, design consultation, or a full-scale web solution, we are here to help.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          This is a no-obligation, free consultation call. We look forward to collaborating with you!
        </p>
      </motion.div>

      {/* Right side with form to schedule a call */}
      <motion.div
        className="lg:w-1/2 bg-white shadow-xl rounded-lg p-8 w-full max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <h3 className="text-2xl font-semibold text-[#7436bb] mb-6">Schedule a Meeting</h3>
        {message && <p className="mb-4 text-center text-green-600">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7436bb] shadow-md"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-10 bg-[#7436bb] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#5a2a94] shadow-lg"
            >
              Schedule Call
            </button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default BookACallSection;
