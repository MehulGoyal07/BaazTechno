import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-darkBackground overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-primary-500 mix-blend-screen blur-[100px] opacity-20" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary-500 mix-blend-screen blur-[80px] opacity-15" />
          <div className="absolute top-1/2 left-1/4 w-40 h-40 rotate-45 bg-primary-500 mix-blend-screen blur-[60px] opacity-10" />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Pre-header with animated underline */}
            <div className="inline-block relative mb-6">
              <p className="text-primary-500 font-heading font-semibold text-lg tracking-wider inline-flex items-center">
                <span className="relative inline-block overflow-hidden">
                  <span className="inline-block transition-all duration-500 hover:translate-y-0">
                    INNOVATIVE SOLUTIONS
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </span>
                <span className="ml-2 text-primary-500">🚀</span>
              </p>
            </div>
            
            {/* Main Heading with gradient text effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight mb-8">
              <span className="text-white block mb-4">Elevate Your Business With</span>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#facc15,#3b82f6,#10b981)] animate-gradient">
                Premium Digital Services
              </span>
            </h1>
            
            {/* Description with animated border */}
            <div className="relative max-w-2xl mx-auto lg:mx-0 mb-12">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 opacity-20 blur-sm"></div>
              <p className="relative text-muted text-xl md:text-2xl leading-relaxed bg-cardBg/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
                We deliver cutting-edge web development, marketing strategies, and 
                data solutions tailored to accelerate your business growth in the digital landscape.
              </p>
            </div>
            
            {/* Stats/Highlights with hover effects */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "50+", label: "Satisfied Clients" },
                { value: "98%", label: "Success Rate" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-cardBg px-6 py-4 rounded-xl border border-gray-800 hover:border-primary-500 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-primary-500 font-bold text-2xl relative z-10">{stat.value}</p>
                  <p className="text-white relative z-10">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons with enhanced effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="relative overflow-hidden group bg-primary-500 hover:bg-primary-600 text-darkBackground font-bold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Your Free Consultation
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/services"
                className="relative overflow-hidden group border-2 border-primary-500 text-primary-500 hover:text-darkBackground font-bold px-8 py-4 rounded-lg transition-all duration-300 text-lg"
              >
                <span className="absolute inset-0 bg-primary-500 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 z-0" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Services
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          
          {/* Visual Content - Abstract 3D elements */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-xl">
              {/* Abstract shape 1 */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] animate-pulse" />
              
              {/* Main visual element */}
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="absolute w-full h-full bg-gradient-to-br from-primary-500/5 to-primary-500/20 rounded-3xl rotate-12" />
                <div className="absolute w-full h-full bg-gradient-to-tr from-primary-500/5 to-primary-500/15 rounded-3xl -rotate-6" />
                
                <div className="relative z-10 w-4/5 h-4/5 bg-cardBg/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-xl bg-primary-500/10 border border-primary-500/30 mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-lg bg-primary-500/20 border border-primary-500/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-md bg-primary-500/30 border border-primary-500/50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Digital Acceleration</h3>
                  <p className="text-muted text-center text-sm max-w-xs">
                    Transforming businesses through innovative technology solutions
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-primary-500/5 border border-primary-500/10 animate-float" />
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-lg bg-primary-500/5 border border-primary-500/10 animate-float-delay" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scrolling Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <div className="animate-bounce w-12 h-20 flex flex-col items-center">
          <div className="w-0.5 h-8 bg-gradient-to-t from-primary-500 to-transparent rounded-full" />
          <div className="w-3 h-3 rounded-full bg-primary-500 mt-1" />
        </div>
      </div>
    </section>
  );
}