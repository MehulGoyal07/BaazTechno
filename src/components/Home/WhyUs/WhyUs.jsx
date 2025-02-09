import { motion } from 'framer-motion'; // Import Framer Motion
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from "../../../assets/bg/baaztechno.png";
export default function AboutUsSection() {
  return (
    <motion.section
      className="bg-[#3d0f41] min-h-screen py-16 px-4 flex items-center"
      initial={{ opacity: 0 }} // Only fade in without vertical movement
      whileInView={{ opacity: 1 }} // Fade in effect when section comes into view
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the section is visible
      transition={{ duration: 0.8 }} // Smooth fade-in transition
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-8"
          initial={{ opacity: 0 }} // Initial state (hidden)
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1 }}
        >
          {/* Heading */}
          <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
            About Us
          </h2>

          {/* Subheading */}
          <h3 className="text-[#b520a3] text-lg sm:text-2xl font-medium">
            Explore Endless Possibilities with BaazTechno
          </h3>

          {/* Paragraph */}
          <p className="text-white text-sm sm:text-base leading-relaxed">
            At BaazTechno, we specialize in crafting innovative solutions that
            empower businesses to excel in today’s dynamic world. From cutting-edge
            technology to unmatched support, we ensure that every step of your
            journey is seamless and rewarding.
          </p>

          {/* Key Points */}
          <ul className="space-y-4">
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="text-[#b520a3] text-xl" />
              <span className="text-white text-sm sm:text-base">
                Tailored solutions for businesses of all sizes.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="text-[#b520a3] text-xl" />
              <span className="text-white text-sm sm:text-base">
                A passionate team driving innovation globally.
              </span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start space-x-6">
            <Link to="/contact">
              <button className="bg-[#7436bb] hover:bg-[#b520a3] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
                Get Quote
              </button>
            </Link>
            <Link to="/Portfolio">
              <button className="bg-[#b520a3] hover:bg-[#7436bb] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 flex justify-center relative"
          initial={{ opacity: 0 }} // Initial state (hidden)
          whileInView={{ opacity: 1 }} // Fade in when in view
          transition={{ duration: 1 }}
        >
          {/* Enlarged Blob Background */}
          <div className="absolute bg-gradient-to-r from-[#7436bb] to-[#b520a3] rounded-full w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] blur-3xl opacity-30 z-0"></div>

          {/* Enlarged Circular Image */}
          <div className="relative bg-gradient-to-r from-[#7436bb] to-[#b520a3] rounded-full p-3 sm:p-6 shadow-xl">
            <img
              src={img}
              alt="Company Logo"
              className="rounded-full w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
