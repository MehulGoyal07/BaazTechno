import { FaArrowRight, FaChartLine, FaCode } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden">
      <div className="px-8 py-12 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to <span className="text-primary">Elevate</span> Your Web Presence?
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            BaazTechno delivers high-performance web solutions that drive real business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-2">
                <FaCode className="text-primary text-xl" />
                <h4 className="font-semibold text-white">Web Development</h4>
              </div>
              <p className="text-sm text-gray-400">Custom solutions tailored to your needs</p>
            </div>
            
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center justify-center gap-3 mb-2">
                <FaChartLine className="text-primary text-xl" />
                <h4 className="font-semibold text-white">Performance</h4>
              </div>
              <p className="text-sm text-gray-400">Lightning-fast user experiences</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://baaztechno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <FaArrowRight />
            </a>
            <a
              href="https://www.baaztechno.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-600 hover:border-primary text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              Trusted by 250+ clients worldwide with 98% satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}