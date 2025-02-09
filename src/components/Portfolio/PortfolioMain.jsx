import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaShoppingCart, FaWordpress, FaHome, FaNewspaper, FaBriefcase, FaChartLine, FaHeart, FaDesktop } from 'react-icons/fa';
import puneeventsimg from '../../assets/portfolio/puneevents2.png';
import punecitymarathonimg from '../../assets/portfolio/punecitymarathon.png';
import geckomonacoimg from '../../assets/portfolio/geckomonaco2.png';
import flowerauraimg from '../../assets/portfolio/FlowerAura.png';
import bakingoimg from '../../assets/portfolio/Bakingo.png';
import indyaimg from '../../assets/portfolio/Indya.png';
import bellepropertyimg from '../../assets/portfolio/RealEstate/BelleProperty.png';
import harcourtsimg from '../../assets/portfolio/RealEstate/HarCourts.png';
import realtorcaimg from '../../assets/portfolio/RealEstate/RealtorCA.png';
import siteworksimg from '../../assets/portfolio/RealEstate/SiteWorksRealEstate.png';
import windermereimg from '../../assets/portfolio/RealEstate/WinderMereRealEstate.png';
import bartletttreeimg from '../../assets/portfolio/WordPress/BartlettTreeExperts.png';
import daveyimg from '../../assets/portfolio/WordPress/Davey.png';
import thebromaimg from '../../assets/portfolio/WordPress/thebroma.png';
import thechocolateroomimg from '../../assets/portfolio/WordPress/TheChocolateRoom.png';
import treedoctorusaimg from '../../assets/portfolio/WordPress/TreeDoctorUSA.png';
import treeservicesmarketingimg from '../../assets/portfolio/WordPress/TreeServicesMarketing.png';
import kahiimg from '../../assets/portfolio/Classified/kahi.png';
import aqubiximg from '../../assets/portfolio/Consulting/AquBix.png';
import futurelinkconsulatntsimg from '../../assets/portfolio/Consulting/futurelinkconsultants.png';
import pacasiaimg from '../../assets/portfolio/Consulting/PacAsia.png';
import zinnovimg from '../../assets/portfolio/Consulting/Zinnov.png';
import zsimg from '../../assets/portfolio/Consulting/zs.png';
import lavalifeimg from '../../assets/portfolio/Matrimonial/LavaLife.png';
import nrishaadiimg from '../../assets/portfolio/Matrimonial/NriShaadi.png';
import seekingimg from '../../assets/portfolio/Matrimonial/Seeking.png';
import arcelormittalimg from '../../assets/portfolio/Business/arcelormittal.png';
import autolivimg from '../../assets/portfolio/Business/AutoLiv.png';
import boeingimg from '../../assets/portfolio/Business/Boeing.png';
import lonzaimg from '../../assets/portfolio/Business/Lonza.png';
import syngentaimg from '../../assets/portfolio/Business/Syngenta.png';
import thomsonreutersimg from '../../assets/portfolio/Business/Thomson Reuters.png';


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

  const [activeCategory, setActiveCategory] = useState('wordpress');
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-[#1a0b2e] to-[#2f1c4a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Latest Work
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Explore our portfolio of successful projects that showcase our expertise in creating innovative digital solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="text-base sm:text-xl">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div className="relative overflow-hidden rounded-lg aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-white p-4 opacity-0 transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-100' : ''
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xs md:text-sm">{project.tech.join(' • ')}</p>
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
