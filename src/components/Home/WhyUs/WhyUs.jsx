import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img from "../../../assets/bg/baaztechno.png";

export default function AboutUsSection() {
  return (
    <section className="bg-darkBackground min-h-screen py-20 px-4 sm:px-6 lg:px-8 flex items-center animate-fade-in">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            {/* Subheading */}
            <h3 className="text-primary-500 text-lg sm:text-xl font-medium tracking-wide">
              INNOVATIVE SOLUTIONS
            </h3>

            {/* Heading */}
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              About <span className="text-primary-500">BaazTechno</span>
            </h2>

            {/* Paragraph */}
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              We specialize in crafting innovative solutions that empower businesses to excel in today&apos;s dynamic digital landscape. Our team combines cutting-edge technology with strategic thinking to deliver exceptional results.
            </p>

            {/* Key Points */}
            <ul className="space-y-4">
              {[
                "Tailored solutions for businesses of all sizes",
                "Passionate team driving innovation globally",
                "Proven track record of successful projects",
                "Client-focused approach with 24/7 support"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-white text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
              <Link to="/contact" className="block">
                <button className="bg-primary-500 hover:bg-primary-700 text-darkBackground font-bold py-3 px-8 rounded-lg shadow-button hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  Get Started
                </button>
              </Link>
              <Link to="/portfolio" className="block">
                <button className="bg-transparent hover:bg-cardBg border-2 border-primary-500 text-primary-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1">
                  Our Work
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary/20 rounded-full w-full h-full blur-3xl opacity-40 -z-10"></div>
            
            {/* Image Container */}
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary-500/10 rounded-full blur-md group-hover:blur-lg transition-all duration-500 -z-10"></div>
              
              {/* Image with Gradient Border */}
              <div className="relative bg-gradient-to-br from-primary-500 to-secondary p-1 rounded-full shadow-card">
                <div className="bg-cardBg rounded-full p-2">
                  <img
                    src={img}
                    alt="BaazTechno Team"
                    className="rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 bg-primary-500/80 rounded-full w-16 h-16 flex items-center justify-center shadow-glow animate-pulse-slow">
                <span className="text-darkBackground font-bold text-xl">10+</span>
              </div>
              <div className="absolute -top-6 -left-6 bg-secondary/80 rounded-full w-20 h-20 flex items-center justify-center shadow-glow animate-pulse-slow delay-300">
                <span className="text-darkBackground font-bold text-xl">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}