import { motion } from 'framer-motion';
import { useState } from 'react';
import img3 from '../assets/portfolio/all-gallary-6.png';
import img1 from '../assets/portfolio/ui-ux-gallary-3.png';
import img2 from '../assets/portfolio/ui-ux-gallary-4.png';

const PortfolioSection = () => {
  const projectData = {
    ecommerce: [img1, img1, img1, img1],
    events: [img2, img2, img2, img2],
    services: [img3, img3, img3, img3],
  };

  const [activeProject, setActiveProject] = useState('ecommerce');

  return (
    <section>
      {/* Section above the buttons */}
      <div
        className="min-h-[50vh] py-10 px-6 sm:px-8"
        style={{
          background: 'linear-gradient(42deg, #421979 0.01%, #8e1670 100%)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
          {/* Left-aligned Heading and Subheading */}
          <div className="lg:w-2/3">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Latest Projects
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg text-white leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Take a look at some of the amazing projects we have delivered for
              our clients across various sectors. From ecommerce to event
              websites, we bring creativity and functionality to every project.
              Whether you’re a start-up or an enterprise, our designs are
              tailor-made to meet your goals.
            </motion.p>
          </div>

          {/* View All Projects Button */}
          <motion.div
            className="lg:w-1/3 flex justify-start lg:justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className="py-3 px-6 bg-white text-[#7436bb] rounded-lg font-semibold transition duration-300 hover:bg-gray-200 shadow-md w-full lg:w-auto text-center">
              View All Projects
            </button>
          </motion.div>
        </div>

        {/* Project Type Buttons */}
        <div className="flex flex-wrap justify-center mt-4 gap-2 sm:gap-3">
          {Object.keys(projectData).map((projectType) => (
            <motion.button
              key={projectType}
              onClick={() => setActiveProject(projectType)}
              className={`py-2 px-4 sm:px-6 rounded-full text-white font-semibold transition duration-300 ${
                activeProject === projectType
                  ? 'bg-[#b520a3] border-4 border-[#7436bb]'
                  : 'bg-[#7436bb] hover:bg-[#b520a3]'
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {projectType.charAt(0).toUpperCase() + projectType.slice(1)} Websites
            </motion.button>
          ))}
        </div>
      </div>

      {/* Section below the buttons */}
      <div
        className="pt-6 pb-8 px-6 sm:px-8"
        style={{
          background: 'linear-gradient(42deg, #301455 0.01%, #5e1453 100%)',
        }}
      >
        {/* Line Break */}
        <div className="border-b-2 border-gray-400 w-1/4 mx-auto mb-6"></div>

        {/* Project Images Collage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {projectData[activeProject].map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={image}
                alt={`${activeProject} project ${index + 1}`}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
