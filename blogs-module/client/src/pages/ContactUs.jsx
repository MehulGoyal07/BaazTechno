import { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import CompanyLogo from '../assets/baaztechno.png';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    // Clear error when user types
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-darkBackground flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Branding and Info */}
          <div className="w-full lg:w-2/5 bg-gradient-to-br from-primary to-primary-600 p-6 sm:p-8 text-white flex flex-col">
            <div className="flex flex-col items-center lg:items-start mb-8">
              <div className="flex items-center mb-6">
                <img 
                  src={CompanyLogo} 
                  alt="BaazTechno Logo" 
                  className="h-12 sm:h-14 w-auto mr-3 filter brightness-0 invert" 
                />
                <div className="border-l border-white/30 pl-3">
                  <div className="flex items-center text-xl sm:text-2xl font-bold tracking-tight">
                    <span>BaazTechno</span>
                    <span className="ml-2 font-light opacity-90">Blogs</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/80 mt-1">Innovate. Create. Dominate.</p>
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center lg:text-left">Get in Touch</h2>
              <p className="text-white/80 text-sm sm:text-base text-center lg:text-left max-w-md">
                Have questions or feedback? We'd love to hear from you. Our team is ready to help with any inquiries.
              </p>
            </div>
            
            <div className="space-y-5 mt-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-sm sm:text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Email Us</h3>
                  <p className="text-xs sm:text-sm text-white/70">contact@baaztechno.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-sm sm:text-lg" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Call Us</h3>
                  <p className="text-xs sm:text-sm text-white/70">+91 9876543210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-10">
            <div className="max-w-lg mx-auto">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">Contact Us</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className={`block w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-300 dark:border-gray-600 focus:ring-primary/50 focus:border-transparent'
                    }`}
                    onChange={handleChange}
                    value={formData.name}
                  />
                  {errors.name && <p className="mt-1 text-xs sm:text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    className={`block w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-300 dark:border-gray-600 focus:ring-primary/50 focus:border-transparent'
                    }`}
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && <p className="mt-1 text-xs sm:text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="How can we help?"
                    className={`block w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-300 dark:border-gray-600 focus:ring-primary/50 focus:border-transparent'
                    }`}
                    onChange={handleChange}
                    value={formData.subject}
                  />
                  {errors.subject && <p className="mt-1 text-xs sm:text-sm text-red-500 dark:text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message here..."
                    className={`block w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.message ? 'border-red-500 focus:ring-red-500/50' : 'border-gray-300 dark:border-gray-600 focus:ring-primary/50 focus:border-transparent'
                    }`}
                    onChange={handleChange}
                    value={formData.message}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-xs sm:text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitSuccess}
                  className={`w-full flex items-center justify-center px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 ${
                    isSubmitting 
                      ? 'bg-primary-400 cursor-not-allowed' 
                      : submitSuccess
                        ? 'bg-green-600 text-white'
                        : 'bg-primary hover:bg-primary-600 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white mr-2 sm:mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : submitSuccess ? (
                    <>
                      <FaCheckCircle className="mr-2 text-sm sm:text-base" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2 text-sm sm:text-base" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  For immediate assistance, please call us at <span className="text-primary">+91 9876543210</span> or email <span className="text-primary">contact@baaztechno.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}