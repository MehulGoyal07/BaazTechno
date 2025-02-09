import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ServicesPage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Services data
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "We create stunning, responsive, and high-performance websites tailored to your business needs.",
      icon: "💻",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "Build seamless and user-friendly mobile applications for iOS and Android platforms.",
      icon: "📱",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Craft intuitive and visually appealing designs to enhance user experience and engagement.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description:
        "Develop scalable and secure e-commerce platforms to grow your online business.",
      icon: "🛒",
    },
    {
      id: 5,
      title: "SEO & Digital Marketing",
      description:
        "Boost your online presence with our expert SEO and digital marketing strategies.",
      icon: "📈",
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description:
        "Leverage the power of cloud computing for scalable and efficient business solutions.",
      icon: "☁️",
    },
  ];

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mt-5 min-h-screen bg-gradient-to-br from-[#1a0b2e] to-[#2f1c4a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-white mb-8"
          data-aos="fade-down"
        >
          Our Services
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-300 mb-12"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          We provide a wide range of web solutions to help your business grow and
          succeed in the digital world.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              data-aos="fade-up"
              data-aos-delay={service.id * 100}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {service.title}
              </h2>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;