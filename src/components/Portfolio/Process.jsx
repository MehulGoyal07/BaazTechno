import React, { useRef } from 'react';
import { FaRegLightbulb, FaTasks, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const stepVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const arrowVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const Step = ({ title, description, icon, direction }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px 0px" });

  return (
    <div
      ref={ref}
      className={`step flex flex-col md:flex-row items-center mb-12 relative ${
        direction === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-start"
        variants={stepVariants}
        custom={direction}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="box flex flex-col md:flex-row items-center bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 p-6 md:p-8 rounded-xl shadow-xl w-full md:w-auto">
          <div className="circle bg-yellow-400 text-white flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full mb-4 md:mb-0 md:mr-6 shadow-xl">
            {icon}
          </div>
          <div className="step-info text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-base md:text-lg text-gray-300">{description}</p>
          </div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        className="arrow absolute left-1/2 transform -translate-x-1/2 top-16 md:top-20 hidden md:block"
        variants={arrowVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="arrow-down bg-yellow-400 w-6 h-6 md:w-8 md:h-8 rotate-45 transform -translate-y-1/2"></div>
      </motion.div>
    </div>
  );
};

export default function Process() {
  return (
    <section className="process py-16 md:py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-yellow-400 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Process
        </motion.h2>

        <div className="timeline relative">
          <Step
            title="Step 1: Ideation"
            description="We start by understanding your requirements and brainstorming creative solutions."
            icon={<FaRegLightbulb size={24} />}
            direction="left"
          />
          <Step
            title="Step 2: Planning"
            description="We create a detailed roadmap, define tasks, and set clear objectives."
            icon={<FaTasks size={24} />}
            direction="right"
          />
          <Step
            title="Step 3: Development"
            description="Our team develops a scalable and responsive product using the latest technologies."
            icon={<FaCode size={24} />}
            direction="left"
          />
          <Step
            title="Step 4: Testing & Launch"
            description="We rigorously test the product and ensure a seamless user experience before launching."
            icon={<FaCheckCircle size={24} />}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
