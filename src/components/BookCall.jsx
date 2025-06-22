/* eslint-disable no-unused-vars */
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

const BookCall = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("your_service_id", "your_template_id", e.target, "your_user_id")
      .then(
        (result) => {
          setIsSubmitting(false);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsSubmitting(false);
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-darkBackground py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-primary-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss potential opportunities?
            Reach out and let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start">
              <div className="bg-primary-900 p-3 rounded-full mr-6">
                <FaPhoneAlt className="text-primary-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-heading text-white mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+919520671308"
                  className="text-muted hover:text-primary-500 transition-colors duration-300 text-lg"
                >
                  +91 9520671308
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-900 p-3 rounded-full mr-6">
                <FaEnvelope className="text-primary-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-heading text-white mb-2">
                  Email
                </h3>
                <a
                  href="mailto:baaztechno@gmail.com"
                  className="text-muted hover:text-primary-500 transition-colors duration-300 text-lg"
                >
                  baaztechno@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-900 p-3 rounded-full mr-6">
                <FaMapMarkerAlt className="text-primary-500 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-heading text-white mb-2">
                  Location
                </h3>
                <p className="text-muted text-lg">
                  Operating Remotely from India
                  <br />
                  Based in Noida, Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-heading text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2">
                <p className="text-muted flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM</span>
                </p>
                <p className="text-muted flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </p>
                <p className="text-muted flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-cardBg p-8 rounded-2xl shadow-card"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="col-span-1">
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-darkBackground border border-muted text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="col-span-1">
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-darkBackground border border-muted text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-darkBackground border border-muted text-white py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 min-h-[150px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-700 to-primary-500 text-white font-semibold py-4 px-6 rounded-lg shadow-button hover:shadow-glow transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
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
                  ) : (
                    <FaPaperPlane className="mr-3" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
