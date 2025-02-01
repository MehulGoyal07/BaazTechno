import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCode, FaDesktop, FaMobileAlt, FaPalette } from 'react-icons/fa';

const PortfolioSection = () => {
  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaDesktop /> },
    { id: 'web', label: 'Web Development', icon: <FaCode /> },
    { id: 'mobile', label: 'Mobile Apps', icon: <FaMobileAlt /> },
    { id: 'design', label: 'UI/UX Design', icon: <FaPalette /> },
  ];

  const projects = {
    all: [
      {
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        tech: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Fitness Tracking App",
        category: "Mobile Apps",
        image: "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tech: ["React Native", "Firebase"],
      },
      {
        title: "Banking Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tech: ["Figma", "Adobe XD"],
      },
      {
        title: "Social Media Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        tech: ["Next.js", "GraphQL"],
      },
    ],
  };

  projects.web = projects.all.filter(p => p.category === "Web Development");
  projects.mobile = projects.all.filter(p => p.category === "Mobile Apps");
  projects.design = projects.all.filter(p => p.category === "UI/UX Design");

  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#1a0b2e] to-[#2f1c4a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <br />
          <br />  
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Latest Work
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects that showcase our expertise
            in creating innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects[activeCategory].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110" />
                <div className={`absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 ${hoveredProject === index ? 'opacity-100' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.tech.join(' • ')}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
