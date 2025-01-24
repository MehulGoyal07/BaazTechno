import { useState } from 'react';
import img3 from '../assets/portfolio/all-gallary-6.png';
import img1 from '../assets/portfolio/ui-ux-gallary-3.png';
import img2 from '../assets/portfolio/ui-ux-gallary-4.png';

const PortfolioSection = () => {
  // Define the project types and associated images
  const projectData = {
    ecommerce: [img1, img1, img1, img1],
    events: [img2, img2, img2, img2],
    services: [img3, img3, img3, img3],
  };

  // State to manage the active project type
  const [activeProject, setActiveProject] = useState('ecommerce');

  return (
    <section>
      {/* Section above the buttons */}
      <div
        className="min-h-[50vh] py-12 px-5"
        style={{
          background: 'linear-gradient(42deg, #421979 0.01%, #8e1670 100%)',
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
          {/* Left-aligned Heading and Subheading */}
          <div className="text-left lg:w-2/3">
            <h2 className="text-4xl font-bold text-white mb-3">
              Our Latest Projects
            </h2>
            <p className="text-base text-white mb-5">
              Take a look at some of the amazing projects we have delivered for
              our clients across various sectors. From ecommerce to event websites, 
              we bring creativity and functionality to every project. Whether you’re a start-up 
              or an enterprise, our designs are tailor-made to meet your goals.
            </p>
          </div>

          {/* View All Projects Button */}
          <div className="lg:w-1/3 flex justify-end">
            <button className="py-2 px-6 bg-white text-[#7436bb] rounded-lg font-semibold transition duration-300 hover:bg-gray-200 shadow-lg">
              View All Projects
            </button>
          </div>
        </div>

        {/* Project Type Buttons */}
        <div className="flex justify-center space-x-3 mb-4">
          {Object.keys(projectData).map((projectType) => (
            <button
              key={projectType}
              onClick={() => setActiveProject(projectType)}
              className={`py-2 px-5 rounded-lg text-white font-semibold transition duration-300 ${
                activeProject === projectType
                  ? 'bg-[#b520a3] border-4 border-[#7436bb]'
                  : 'bg-[#7436bb] hover:bg-[#b520a3]'
              }`}
            >
              {projectType.charAt(0).toUpperCase() + projectType.slice(1)} Websites
            </button>
          ))}
        </div>
      </div>

      {/* Section below the buttons */}
      <div
        className="py-10 px-5"
        style={{
          background: 'linear-gradient(42deg, #301455 0.01%, #5e1453 100%)',
        }}
      >
        {/* Line Break */}
        <div className="border-b-2 border-gray-400 w-1/4 mx-auto mb-6"></div>

        {/* Project Images Collage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition duration-300 overflow-hidden">
          {projectData[activeProject].map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`${activeProject} project ${index + 1}`}
                className="w-full h-[250px] lg:h-[300px] xl:h-[350px] object-cover rounded-lg shadow-md transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
