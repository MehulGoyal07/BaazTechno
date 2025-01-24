const PricingSection = () => {
    return (
      <section
        className="py-16 px-5"
        style={{
          background: 'linear-gradient(45deg, #261447 0%, #431a6d 100%)',
        }}
      >
        <div className="max-w-screen-xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Pricing Plans</h2>
          <p className="text-white">
            Choose a plan that suits your needs. We offer affordable, feature-packed solutions for different types of websites.
          </p>
        </div>
  
        {/* Pricing Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Basic Plan */}
          <div
            className="bg-gradient-to-b from-[#FFDEE9] to-[#B5FFFC] shadow-lg rounded-lg p-8 w-full max-w-sm lg:max-w-xs"
            style={{ transition: 'transform 0.3s ease-in-out' }}
          >
            <h3 className="text-2xl font-semibold text-[#7436bb] mb-4">Basic Website</h3>
            <p className="text-4xl font-bold text-gray-800 mb-6">₹20,000</p>
            <ul className="text-left mb-6">
              <li className="text-gray-700 mb-2">✔️ 5 Pages</li>
              <li className="text-gray-700 mb-2">✔️ Basic SEO</li>
              <li className="text-gray-700 mb-2">✔️ Responsive Design</li>
              <li className="text-gray-700 mb-2">✔️ Contact Form</li>
            </ul>
            <div className="flex justify-center">
              <button className="py-2 px-6 bg-[#7436bb] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#5a2a94] shadow-md">
                Get Started
              </button>
            </div>
          </div>
  
          {/* Standard Plan (Highlighted, Slightly Larger) */}
          <div
            className="bg-gradient-to-b from-[#FFF1C1] to-[#FFD8B0] shadow-lg rounded-lg p-10 w-full max-w-sm lg:max-w-md transform scale-105"
            style={{ transition: 'transform 0.3s ease-in-out' }}
          >
            <h3 className="text-3xl font-semibold text-[#7436bb] mb-4">Standard Website</h3>
            <p className="text-5xl font-bold text-gray-800 mb-6">₹35,000</p>
            <ul className="text-left mb-6">
              <li className="text-gray-700 mb-2">✔️ 10 Pages</li>
              <li className="text-gray-700 mb-2">✔️ Advanced SEO</li>
              <li className="text-gray-700 mb-2">✔️ Fully Responsive Design</li>
              <li className="text-gray-700 mb-2">✔️ CMS Integration (WordPress)</li>
              <li className="text-gray-700 mb-2">✔️ Custom Contact Forms</li>
            </ul>
            <div className="flex justify-center">
              <button className="py-2 px-6 bg-[#7436bb] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#5a2a94] shadow-md">
                Get Started
              </button>
            </div>
          </div>
  
          {/* Premium Plan */}
          <div
            className="bg-gradient-to-b from-[#D9AFD9] to-[#97D9E1] shadow-lg rounded-lg p-8 w-full max-w-sm lg:max-w-xs"
            style={{ transition: 'transform 0.3s ease-in-out' }}
          >
            <h3 className="text-2xl font-semibold text-[#7436bb] mb-4">Premium Website</h3>
            <p className="text-4xl font-bold text-gray-800 mb-6">₹60,000</p>
            <ul className="text-left mb-6">
              <li className="text-gray-700 mb-2">✔️ Unlimited Pages</li>
              <li className="text-gray-700 mb-2">✔️ Advanced SEO & Analytics</li>
              <li className="text-gray-700 mb-2">✔️ Custom Web Applications</li>
              <li className="text-gray-700 mb-2">✔️ E-commerce Integration</li>
              <li className="text-gray-700 mb-2">✔️ 24/7 Support</li>
            </ul>
            <div className="flex justify-center">
              <button className="py-2 px-6 bg-[#7436bb] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#5a2a94] shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingSection;
  