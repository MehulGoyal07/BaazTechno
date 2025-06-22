/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaCode, FaRegLightbulb, FaTasks } from "react-icons/fa";

const ProcessStep = ({ step, title, description, icon, index }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Step connector line */}
      {index !== 0 && (
        <div className="absolute -top-14 left-8 h-14 w-0.5 bg-primary-500/30 group-hover:bg-primary-500 transition-colors duration-300" />
      )}

      <div className="flex gap-6 p-1">
        {/* Step number and icon */}
        <div className="flex flex-col items-center">
          <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cardBg border-2 border-primary-500 group-hover:bg-primary-500 transition-all duration-300 shadow-glow group-hover:shadow-lg">
            <span className="absolute -left-9 text-xs font-bold text-muted group-hover:text-primary-300 transition-colors duration-300">
              0{step}
            </span>
            <div className="text-primary-500 group-hover:text-darkBackground text-xl transition-colors duration-300">
              {icon}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-1">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
            <FaArrowRight className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </motion.h3>
          <motion.p 
            className="text-muted max-w-3xl group-hover:text-white transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Process() {
  const steps = [
    {
      step: 1,
      title: "Ideation & Discovery",
      description: "We dive deep into your business needs through workshops and research to craft innovative solutions tailored to your goals.",
      icon: <FaRegLightbulb />
    },
    {
      step: 2,
      title: "Strategic Planning",
      description: "Our team creates a detailed roadmap with clear milestones, deliverables, and success metrics for your project.",
      icon: <FaTasks />
    },
    {
      step: 3,
      description: "We build your solution using cutting-edge technologies with clean, maintainable code and rigorous version control.",
      title: "Development",
      icon: <FaCode />
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Every feature undergoes rigorous QA testing before we deploy your solution with comprehensive documentation and training.",
      icon: <FaCheckCircle />
    }
  ];

  return (
    <section className="py-24 bg-darkBackground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our <span className="text-primary-500">Process</span>
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            A proven methodology that delivers exceptional results every time
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-primary-900/20 blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-pulse-slow delay-1000" />
          
          <div className="relative space-y-16">
            {steps.map((step, index) => (
              <ProcessStep 
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}