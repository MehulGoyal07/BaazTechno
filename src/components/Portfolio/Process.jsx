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
    <div ref={ref} className={`step flex items-center mb-12 relative ${direction === "left" ? "flex-row-reverse" : ""}`}>
      <motion.div
        className="w-full lg:w-1/2 flex justify-start"
        variants={stepVariants}
        custom={direction}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="box flex items-center justify-between bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 p-8 rounded-xl shadow-xl w-full">
          <div className="circle bg-yellow-400 text-white flex items-center justify-center w-16 h-16 rounded-full mr-8 shadow-xl">
            {icon}
          </div>
          <div className="step-info">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="arrow absolute left-1/2 transform -translate-x-1/2 top-20"
        variants={arrowVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="arrow-down bg-yellow-400 w-8 h-8 rotate-45 transform -translate-y-1/2"></div>
      </motion.div>
    </div>
  );
};

export default function Process() {
  return (
    <section className="process py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-yellow-400 leading-tight"
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
            icon={<FaRegLightbulb size={28} />}
            direction="left"
          />
          <Step
            title="Step 2: Planning"
            description="We create a detailed roadmap, define tasks, and set clear objectives."
            icon={<FaTasks size={28} />}
            direction="right"
          />
          <Step
            title="Step 3: Development"
            description="Our team develops a scalable and responsive product using the latest technologies."
            icon={<FaCode size={28} />}
            direction="left"
          />
          <Step
            title="Step 4: Testing & Launch"
            description="We rigorously test the product and ensure a seamless user experience before launching."
            icon={<FaCheckCircle size={28} />}
            direction="right"
          />
        </div>
      </div>
    </section>
  );
}
    