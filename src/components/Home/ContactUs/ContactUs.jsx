/* eslint-disable no-unused-vars */
import emailjs from "emailjs-com";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data via email using EmailJS
    emailjs
      .sendForm(
        "your_service_id",   // Your EmailJS service ID
        "your_template_id",   // Your EmailJS template ID
        e.target,
        "your_user_id"        // Your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Error sending message: " + error.text);
        }
      );
  };

  return (
    <section className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>

        {/* Phone */}
        <div className="flex justify-center items-center mb-8">
          <FaPhoneAlt size={40} className="text-primary mr-4" />
          <p className="text-xl font-semibold">Call Us:</p>
          <a
            href="tel:+1234567890"
            className="text-accent hover:text-buttonHover text-xl ml-4"
          >
            +1 234 567 890
          </a>
        </div>

        {/* Contact Form */}
        <div className="bg-background rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6">
              {/* Name Input */}
              <div className="flex-1">
                <label htmlFor="name" className="text-lg font-medium text-black">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white text-black py-3 px-4 rounded-lg mt-2"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div className="flex-1">
                <label htmlFor="email" className="text-lg font-medium text-black">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white text-black py-3 px-4 rounded-lg mt-2"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="text-lg font-medium text-black">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-white text-black py-3 px-4 rounded-lg mt-2"
                rows="5"
                placeholder="Enter your message here"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary text-white py-3 px-8 rounded-lg text-lg hover:bg-buttonHover transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
