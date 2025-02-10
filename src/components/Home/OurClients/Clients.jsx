import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import client1 from '../../../assets/clients/client1.png';
import client2 from '../../../assets/clients/client2.png';
import client3 from '../../../assets/clients/client3.png';

const LogoMarqueeSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Company logos data
  const logos = [client1, client2, client3];

  return (
    <section
      className="py-20 px-5 bg-cover bg-center text-white"
      style={{
        background: 'linear-gradient(45deg, #261447 0%, #431a6d 100%)',
      }}
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
        Companies We&apos;ve Worked With
      </h2>

      {/* Logo Marquee */}
      <motion.div
        className="overflow-hidden whitespace-nowrap"
        data-aos="fade-up"
      >
        <motion.div
          className="flex animate-marquee gap-12"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-20 opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
          ))}
          {/* Duplicate logos for seamless looping */}
          {logos.map((logo, index) => (
            <motion.img
              key={`dup-${index}`}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-20 opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LogoMarqueeSection;
