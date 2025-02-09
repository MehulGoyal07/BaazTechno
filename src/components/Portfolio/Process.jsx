import React from 'react';
import { FaRegLightbulb, FaTasks, FaCode, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Step = ({ title, description, icon }) => {
  return (
    <motion.div
      className="step flex flex-col items-center text-center mb-6 p-6 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 rounded-xl shadow-xl w-full md:w-3/4 mx-auto"
      initial="hidden"
      whileInView="visible"
      variants={stepVariants}
      viewport={{ once: true }}
    >
      <div className="circle bg-yellow-400 text-white flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-xl">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function Process() {
  return (
    <section className="process py-16 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-yellow-400 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Process
        </motion.h2>

        <div className="timeline">
          <Step
            title="Step 1: Ideation"
            description="We start by understanding your requirements and brainstorming creative solutions."
            icon={<FaRegLightbulb size={28} />}
          />
          <Step
            title="Step 2: Planning"
            description="We create a detailed roadmap, define tasks, and set clear objectives."
            icon={<FaTasks size={28} />}
          />
          <Step
            title="Step 3: Development"
            description="Our team develops a scalable and responsive product using the latest technologies."
            icon={<FaCode size={28} />}
          />
          <Step
            title="Step 4: Testing & Launch"
            description="We rigorously test the product and ensure a seamless user experience before launching."
            icon={<FaCheckCircle size={28} />}
          />
        </div>
      </div>
    </section>
  );
}