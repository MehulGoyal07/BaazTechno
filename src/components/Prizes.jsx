import { motion } from 'framer-motion';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹15,000",
      popular: false,
      features: [
        "5 Page Website",
        "Mobile Responsive",
        "Basic SEO Setup",
        "Contact Form",
        "1 Month Support",
        "Free Domain (1 Year)*"
      ],
      cta: "Start with Starter"
    },
    {
      name: "Business",
      price: "₹35,000",
      popular: true,
      features: [
        "15 Page Website",
        "Advanced SEO",
        "CMS Integration",
        "WhatsApp Integration",
        "3 Months Support",
        "Free Hosting (1 Year)",
        "Google My Business Setup"
      ],
      cta: "Choose Business"
    },
    {
      name: "Premium",
      price: "₹75,000",
      popular: false,
      features: [
        "Unlimited Pages",
        "E-commerce Ready",
        "Payment Gateway Setup",
        "Multi-language Support",
        "6 Months Support",
        "Social Media Integration",
        "Monthly Analytics Report"
      ],
      cta: "Go Premium"
    }
  ];

  return (
    <motion.section 
      id="pricing"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-darkBackground"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-500 mb-4 font-heading"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Affordable Plans for Indian Businesses
          </motion.h2>
          <motion.p
            className="text-lg text-muted max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose a plan tailored for Indian SMEs and startups with UPI payment options and GST invoicing included.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 bg-cardBg ${plan.popular ? 'border-2 border-primary-500' : 'border border-gray-700'}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 text-darkBackground px-4 py-1 rounded-full text-sm font-semibold shadow-button">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-primary-500' : 'text-white'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-muted">/ one-time</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-primary-500 text-darkBackground hover:bg-primary-700 shadow-button'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
              </motion.button>

              {index === 1 && (
                <div className="mt-4 text-sm text-primary-300 text-center">
                  GST Invoice Available
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Indian-specific info */}
        <motion.div 
          className="mt-16 bg-cardBg rounded-xl p-6 sm:p-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Special Offers for Indian Startups</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-muted">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              UPI & EMI Payment Options
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Made in India Hosting
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Local Language Support
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;