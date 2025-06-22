import { Link } from 'react-router-dom';
import heroImage from '../../../assets/bg/hero.png';
import heroBg from '../../../assets/bg/hero_bg.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-darkBackground overflow-hidden">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-darkBackground/80 via-darkBackground/60 to-darkBackground/90" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Pre-header */}
            <p className="text-primary-500 font-heading font-semibold text-lg mb-4 tracking-wider">
              INNOVATIVE SOLUTIONS
            </p>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-6">
              <span className="text-white">Elevate Your Business With</span>{' '}
              <span className="text-primary-500">Premium Digital Services</span>
            </h1>
            
            {/* Description */}
            <p className="text-muted text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              We deliver cutting-edge web development, marketing strategies, and 
              data solutions tailored to accelerate your business growth in the digital landscape.
            </p>
            
            {/* Stats/Highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
              <div className="bg-cardBg px-6 py-4 rounded-xl border border-gray-800">
                <p className="text-primary-500 font-bold text-2xl">15+</p>
                <p className="text-white">Years Experience</p>
              </div>
              <div className="bg-cardBg px-6 py-4 rounded-xl border border-gray-800">
                <p className="text-primary-500 font-bold text-2xl">200+</p>
                <p className="text-white">Satisfied Clients</p>
              </div>
              <div className="bg-cardBg px-6 py-4 rounded-xl border border-gray-800">
                <p className="text-primary-500 font-bold text-2xl">98%</p>
                <p className="text-white">Success Rate</p>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="bg-primary-500 hover:bg-primary-700 text-darkBackground font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-button text-lg"
              >
                Get Your Free Consultation
              </Link>
              <Link
                to="/services"
                className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-darkBackground font-bold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
          
          {/* Image/Visual Content */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-xl">
              <img
                src={heroImage}
                alt="Digital Solutions Illustration"
                className="w-full h-auto object-contain animate-float"
              />
              <div className="absolute -z-10 w-full h-full bg-primary-500/10 rounded-full top-0 left-0 blur-xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce w-10 h-16 border-4 border-primary-500 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}