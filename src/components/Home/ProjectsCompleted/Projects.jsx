/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Framer Motion number animation variants
const numberVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Component for each stats block (e.g., Projects, Clients)
const Stat = ({ title, endValue, delay }) => {
  const [number, setNumber] = useState(0);
  const statRef = useRef(null);
  const isInView = useInView(statRef, { once: true });

  // Animate number from 0 to the desired value when the section is in view
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration (2 seconds)
      const stepTime = Math.abs(Math.floor(duration / endValue));
      let currentValue = 0;
      const increment = () => {
        if (currentValue < endValue) {
          currentValue += 1;
          setNumber(currentValue);
        }
      };
      const timer = setInterval(increment, stepTime);

      // Clean up timer
      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <motion.div
      className="stat flex flex-col items-center text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl w-full md:w-auto mx-auto mb-8 hover:scale-105 transition-transform duration-300"
      initial="hidden"
      whileInView="visible"
      variants={numberVariants}
      viewport={{ once: true }}
      data-aos="fade-up"
      data-aos-delay={delay}
      ref={statRef} // reference to track the section visibility
    >
      <motion.h3
        className="text-5xl sm:text-6xl font-bold text-yellow-400 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {number}+
      </motion.h3>
      <p className="text-lg sm:text-xl text-white font-medium">{title}</p>
    </motion.div>
  );
};

export default function StatsSection() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="stats-section py-16 md:py-20 bg-[#3d0f41] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-yellow-400 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-aos="fade-down"
        >
          Our Achievements
        </motion.h2>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat title="Projects Completed" endValue={500} delay="100" />
          <Stat title="Clients Served" endValue={120} delay="200" />
          <Stat title="Global Reach" endValue={80} delay="300" />
          <Stat title="Awards Won" endValue={15} delay="400" />
        </div>
      </div>
    </section>
  );
}
