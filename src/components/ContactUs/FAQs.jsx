import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern stacks including React, Next.js, Node.js, Tailwind CSS, and various CMS platforms like WordPress and Shopify."
  }
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-darkBackground" id="faqs">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-500 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl bg-cardBg shadow-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-cardBg rounded-xl"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? (
                    <FaChevronUp className="text-primary-500 text-xl" />
                  ) : (
                    <FaChevronDown className="text-muted text-xl" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.4, ease: "easeOut" },
                        opacity: { duration: 0.3, delay: 0.1 }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="px-6 pb-6"
                  >
                    <div className="prose prose-invert text-muted">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted mb-6">
            Still have questions? We&apos;d love to help.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary-500 hover:bg-primary-700 text-white font-medium py-3 px-8 rounded-lg shadow-button hover:shadow-glow transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}