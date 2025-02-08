import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer web design, development, and digital marketing services to help businesses establish an online presence and grow their brand."
  },
  {
    question: "How can I get a quote?",
    answer: "You can fill out the contact form on our website, and we will get back to you with a personalized quote based on your needs."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we provide ongoing support and maintenance services to ensure your website is always up-to-date and running smoothly."
  },
  {
    question: "What is your typical project timeline?",
    answer: "The timeline depends on the project scope, but typically, a basic website can take between 2-4 weeks, and larger projects may take longer."
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section py-12 bg-[rgb(61,15,65)] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ list with Framer Motion for item animation */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-white bg-opacity-20 p-6 rounded-lg shadow-md"
            >
              <motion.div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaChevronUp size={24} className="text-white" />
                ) : (
                  <FaChevronDown size={24} className="text-white" />
                )}
              </motion.div>

              {/* Dropdown answer section with Framer Motion */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  y: activeIndex === index ? 0 : -10,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                }}
              >
                {activeIndex === index && <p className="text-lg">{faq.answer}</p>}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
