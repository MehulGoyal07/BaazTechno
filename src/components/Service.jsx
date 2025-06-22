import { Link } from "react-router-dom";

const ServicesPage = () => {
  // Services data with expanded content
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies to drive engagement and conversions.",
      features: [
        "React/Next.js development",
        "Performance optimization",
        "CMS integration",
        "API development"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      cta: "Start your project"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications that deliver seamless user experiences.",
      features: [
        "React Native development",
        "iOS & Android apps",
        "Push notifications",
        "App store optimization"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      cta: "Build your app"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement and satisfaction.",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Design systems",
        "Usability testing"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      cta: "Design your vision"
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      description: "High-converting online stores with secure payment integrations.",
      features: [
        "Shopify/WordPress WooCommerce",
        "Payment gateway setup",
        "Inventory management",
        "Checkout optimization"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      cta: "Launch your store"
    },
    {
      id: 5,
      title: "SEO & Digital Marketing",
      description: "Data-driven strategies to increase visibility and drive qualified traffic.",
      features: [
        "Keyword research",
        "Content strategy",
        "Technical SEO audits",
        "PPC campaign management"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      cta: "Boost your traffic"
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Scalable infrastructure to support your business growth.",
      features: [
        "AWS/Azure architecture",
        "DevOps implementation",
        "Database management",
        "Serverless solutions"
      ],
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      cta: "Modernize your stack"
    }
  ];

  return (
    <div className="mt-5 min-h-screen bg-darkBackground py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-heading font-semibold text-lg mb-3 tracking-wider">
            WHAT WE OFFER
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
            Comprehensive <span className="text-primary-500">Digital Solutions</span>
          </h1>
          <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
            We deliver end-to-end digital services tailored to your business objectives, 
            combining technical excellence with strategic thinking.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-cardBg rounded-xl p-8 border border-gray-800 hover:border-primary-500 transition-all duration-300 hover:shadow-glow"
            >
              <div className="text-primary-500 mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-muted mb-5">{service.description}</p>
              
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className="inline-flex items-center text-primary-500 font-medium hover:text-primary-300 transition-colors duration-200"
              >
                {service.cta}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary-900/30 to-primary-700/30 p-8 rounded-xl border border-primary-500/20">
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to transform your digital presence?
          </h2>
          <p className="text-muted text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can help you achieve your business goals with our expert services.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-700 text-darkBackground font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-button text-lg"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;