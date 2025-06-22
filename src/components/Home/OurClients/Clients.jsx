import { motion } from 'framer-motion';
import client1 from '../../../assets/clients/client1.png';
import client2 from '../../../assets/clients/client2.png';
import client3 from '../../../assets/clients/client3.png';

const LogoMarqueeSection = () => {
  // Company logos data
  const logos = [client1, client2, client3];
  const logoSet = [...logos, ...logos]; // Duplicate for seamless loop

  return (
    <section className="py-16 md:py-24 bg-cardBg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading text-primary-500">
          Trusted by Industry Leaders
        </h2>

        {/* Logo Marquee Container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-darkBackground to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-darkBackground to-transparent z-10" />

          {/* Marquee Animation */}
          <motion.div
            className="flex"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {logoSet.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-8 md:mx-12 px-4 py-2 transition-all duration-300 hover:shadow-glow"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index % logos.length + 1}`}
                  className="h-12 md:h-16 lg:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-muted mt-12 max-w-3xl mx-auto">
          We&apos;ve partnered with innovative companies across industries to deliver exceptional digital experiences.
        </p>
      </div>
    </section>
  );
};

export default LogoMarqueeSection;