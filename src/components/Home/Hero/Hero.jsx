import { motion } from 'framer-motion'; // Framer Motion for animations
import { Link } from 'react-router-dom'; // React Router for navigation
import heroImage from '../../../assets/bg/hero.png'; // Hero overlay image
import heroBg from '../../../assets/bg/hero_bg.png'; // Common background image

export default function Hero() {
  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden + slightly below)
      whileInView={{ opacity: 1, y: 0 }} // Visible state (fade in + move up)
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% is in view
      transition={{ duration: 0.8 }} // Smooth animation
    >
      {/* Overlay hero.png image */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-w-md lg:max-w-2xl mx-auto opacity-90" // Overlapping hero image
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-wide sm:tracking-wider">
          Digital Services
        </h1>
        <p className="text-2xl sm:text-4xl mb-10 tracking-widest">
          Best Solutions for Your Business
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <Link
            to="/contact"
            className="bg-yellow-500 text-black px-10 py-4 rounded-full hover:bg-yellow-600 transition-all duration-200 text-center text-lg sm:text-xl tracking-wide"
          >
            Get Quote
          </Link>
          <Link
            to="/Portfolio"
            className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-10 py-4 rounded-full hover:bg-yellow-600 hover:text-black transition-all duration-200 text-center text-lg sm:text-xl tracking-wide"
          >
            Discover More
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
