import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaBriefcase,
  FaChartLine,
  FaDesktop,
  FaHeart,
  FaHome,
  FaNewspaper,
  FaShoppingCart,
  FaWordpress
} from 'react-icons/fa';
import bakingoimg from '../../assets/portfolio/Bakingo.png';
import arcelormittalimg from '../../assets/portfolio/Business/ArcelorMittal.png';
import autolivimg from '../../assets/portfolio/Business/AutoLiv.png';
import boeingimg from '../../assets/portfolio/Business/Boeing.png';
import lonzaimg from '../../assets/portfolio/Business/Lonza.png';
import syngentaimg from '../../assets/portfolio/Business/Syngenta.png';
import thomsonreutersimg from '../../assets/portfolio/Business/ThomsonReuters.png';
import kahiimg from '../../assets/portfolio/Classified/Kahi.png';
import aqubiximg from '../../assets/portfolio/Consulting/AquBix.png';
import futurelinkconsulatntsimg from '../../assets/portfolio/Consulting/FutureLinkConsultants.png';
import pacasiaimg from '../../assets/portfolio/Consulting/PacAsia.png';
import zinnovimg from '../../assets/portfolio/Consulting/Zinnov.png';
import zsimg from '../../assets/portfolio/Consulting/zs.png';
import flowerauraimg from '../../assets/portfolio/FlowerAura.png';
import geckomonacoimg from '../../assets/portfolio/GeckoMonaco2.png';
import indyaimg from '../../assets/portfolio/Indya.png';
import lavalifeimg from '../../assets/portfolio/Matrimonial/LavaLife.png';
import nrishaadiimg from '../../assets/portfolio/Matrimonial/NriShaadi.png';
import seekingimg from '../../assets/portfolio/Matrimonial/Seeking.png';
import punecitymarathonimg from '../../assets/portfolio/PuneCityMarathon.png';
import puneeventsimg from '../../assets/portfolio/PuneEvents2.png';
import bellepropertyimg from '../../assets/portfolio/RealEstate/BelleProperty.png';
import harcourtsimg from '../../assets/portfolio/RealEstate/HarCourts.png';
import realtorcaimg from '../../assets/portfolio/RealEstate/RealtorCA.png';
import siteworksimg from '../../assets/portfolio/RealEstate/SiteWorksRealEstate.png';
import windermereimg from '../../assets/portfolio/RealEstate/WinderMereRealEstate.png';
import bartletttreeimg from '../../assets/portfolio/WordPress/BartlettTreeExperts.png';
import daveyimg from '../../assets/portfolio/WordPress/Davey.png';
import thebromaimg from '../../assets/portfolio/WordPress/TheBroma.png';
import thechocolateroomimg from '../../assets/portfolio/WordPress/TheChocolateRoom.png';
import treedoctorusaimg from '../../assets/portfolio/WordPress/TreeDoctorUSA.png';
import treeservicesmarketingimg from '../../assets/portfolio/WordPress/TreeServicesMarketing.png';

const PortfolioSection = () => {
  const categories = [
    { id: 'all', label: 'All Projects', icon: <FaDesktop /> },
    { id: 'ecommerce', label: 'ECommerce', icon: <FaShoppingCart /> },
    { id: 'wordpress', label: 'WordPress', icon: <FaWordpress /> },
    { id: 'real-estate', label: 'Real Estate', icon: <FaHome /> },
    { id: 'classified', label: 'Classified', icon: <FaNewspaper /> },
    { id: 'consulting', label: 'Consulting', icon: <FaBriefcase /> },
    { id: 'business', label: 'Business', icon: <FaChartLine /> },
    { id: 'matrimonial', label: 'Matrimonial', icon: <FaHeart /> },
  ];

  const projects = {
    all: [
      {
        title: "Pune Events",
        category: "ECommerce",
        image: puneeventsimg,
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Pune City Marathon",
        category: "Business",
        image: punecitymarathonimg,
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Gecko Monaco",
        category: "ECommerce",
        image: geckomonacoimg,
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Indya",
        category: "ECommerce",
        image: indyaimg,
        tech: ["Next.js", "Stripe", "GraphQL"],
      },
      {
        title: "Bakingo",
        category: "ECommerce",
        image: bakingoimg,
        tech: ["WordPress", "PHP"],
      },
      {
        title: "Flower Aura",
        category: "ECommerce",
        image: flowerauraimg,
        tech: ["React", "Node.js"],
      },
      {
        title: "Belle Property",
        category: "Real Estate",
        image: bellepropertyimg,
        tech: ["React", "Node.js"],
      },
      {
        title: "Har Courts Real Estate",
        category: "Real Estate",
        image: harcourtsimg,
        tech: ["React", "Node.js"],
      },
      {
        title: "Realtor CA",
        category: "Real Estate",
        image: realtorcaimg,
        tech: ["React", "Node.js"],
      },
      {
        title: "Site Works Real Estate",
        category: "Real Estate",
        image: siteworksimg,
        tech: ["React", "Node.js"],
      },
      {
        title: "Winder Mere Realtor",
        category: "Real Estate",
        image: windermereimg,
        tech: ["React", "Node.js"],
      },
      {
        title: "Bartlett Tree Experts",
        category: "WordPress",
        image: bartletttreeimg,
        tech: ["WordPress", "MySQL"],
      },
      {
        title: "Davey",
        category: "WordPress",
        image: daveyimg,
        tech: ["WordPress", "MySQL"],
      },
      {
        title: "The Broma",
        category: "WordPress",
        image: thebromaimg,
        tech: ["WordPress", "MySQL"],
      },
      {
        title: "The Chocolate Room",
        category: "WordPress",
        image: thechocolateroomimg,
        tech: ["WordPress", "MySQL"],
      },
      {
        title: "Tree Doctor USA",
        category: "WordPress",
        image: treedoctorusaimg,
        tech: ["WordPress", "MySQL"],
      },
      {
        title: "Tree Services Marketing",
        category: "WordPress",
        image: treeservicesmarketingimg,
        tech: ["WordPress", "Elasticsearch"],
      },
      {
        title: "Kahi.in",
        category: "Classified",
        image: kahiimg,
        tech: ["Laravel", "MySQL"],
      },
      {
        title: "AquBix",
        category: "Consulting",
        image: aqubiximg,
        tech: ["Laravel", "MySQL"],
      },
      {
        title: "Future Link Consultants",
        category: "Consulting",
        image: futurelinkconsulatntsimg,
        tech: ["Django", "Python", "PostGreSQL"],
      },
      {
        title: "PacAsia",
        category: "Consulting",
        image: pacasiaimg,
        tech: ["Express.js", "MongoDB", "GraphQL"],
      },
      {
        title: "Zinnov",
        category: "Consulting",
        image: zinnovimg,
        tech: ["Laravel", "MySQL", "Redis"],
      },
      {
        title: "ZS",
        category: "Consulting",
        image: zsimg,
        tech: ["Laravel", "MySQL","Flask"],
      },
      {
        title: "LavaLife",
        category: "Matrimonial",
        image: lavalifeimg,
        tech: ["Laravel", "MySQL"],
      },
      {
        title: "Nri Shaadi",
        category: "Matrimonial",
        image: nrishaadiimg,
        tech: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Seeking",
        category: "Matrimonial",
        image: seekingimg,
        tech: ["HTML", "CSS", "Javascript"],
      },
      {
        title: "Arcelor Mittal",
        category: "Business",
        image: arcelormittalimg,
        tech: ["Angular", "Typescript", "MongoDB"],
      },
      {
        title: "AutoLiv",
        category: "Business",
        image: autolivimg,
        tech: ["Laravel", "PostgreSQL","Redis"],
      },
      {
        title: "Boeing",
        category: "Business",
        image: boeingimg,
        tech: ["React","Node.js", "MySQL"],
      },
      {
        title: "Lonza",
        category: "Business",
        image: lonzaimg,
        tech: ["Vue.js", "GraphQL"],
      },
      {
        title: "Syngenta",
        category: "Business",
        image: syngentaimg,
        tech: ["React", "Node.js", "Redis"],
      },
      {
        title: "Thomson Reuters",
        category: "Business",
        image: thomsonreutersimg,
        tech: ["TailWindCSS", "React"],
      },
    ],
  };

  projects.ecommerce = projects.all.filter(p => p.category === "ECommerce");
  projects.wordpress = projects.all.filter(p => p.category === "WordPress");
  projects["real-estate"] = projects.all.filter(p => p.category === "Real Estate");
  projects.classified = projects.all.filter(p => p.category === "Classified");
  projects.consulting = projects.all.filter(p => p.category === "Consulting");
  projects.business = projects.all.filter(p => p.category === "Business");
  projects.matrimonial = projects.all.filter(p => p.category === "Matrimonial");

  const [activeCategory, setActiveCategory] = useState('ecommerce');
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-darkBackground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Our <span className="text-primary-500">Portfolio</span> 
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-base md:text-lg">
            Showcasing our expertise in building high-performance online stores and digital marketplaces.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12 lg:mb-16 overflow-x-auto pb-2"
        >
          <div className="flex flex-nowrap justify-start md:justify-center gap-2 min-w-max">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-primary-500 text-darkBackground shadow-button hover:bg-primary-700'
                    : 'bg-cardBg text-white hover:bg-cardBg/80'
                }`}
                aria-label={`Filter by ${category.label}`}
              >
                <span className="text-base">{category.icon}</span>
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects[activeCategory].map((project, index) => (
            <motion.div
              key={`${activeCategory}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-video shadow-card hover:shadow-glow transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-darkBackground/90 via-darkBackground/30 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: hoveredProject === index ? 0 : 20 }}
                    transition={{ duration: 0.3 }}
                    className="transform"
                  >
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-primary-300 text-sm mb-3 font-medium">{project.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs bg-primary-900/50 text-primary-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        {projects[activeCategory].length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-500 text-darkBackground font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-button hover:shadow-glow"
            >
              View More Projects
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;