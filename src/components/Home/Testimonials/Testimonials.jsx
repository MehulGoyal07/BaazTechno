import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import divyanshuimg from '../../../assets/Testimonials/Divyanshu.jpg';
import nikunjvermaimg from '../../../assets/Testimonials/Nikunj_Verma.jpg';
import pratikmunderimg from '../../../assets/Testimonials/Pratik_Munder.jpg';
import vipulsharmaimg from '../../../assets/Testimonials/Vipul_Sharma.jpg';

const TestimonialsSection = () => {
  // Testimonial data
  const testimonials = [
    {
      name: 'Divyanshu',
      location: 'Rajasthan, India',
      text: 'Working with BaazTechno on our Shopify store was a game-changer! They delivered a sleek, high-performing e-commerce site that boosted our sales. Their attention to detail and quick turnaround made the entire process stress-free.',
      image: vipulsharmaimg,
      rating: 5,
      featured: true
    },
    {
      name: 'Vipul Sharma',
      location: 'Pune, India',
      text: 'BaazTechno developed a custom React-based race bib management dashboard for us, and it\'s been a lifesaver! The system is intuitive, efficient, and has streamlined our operations.',
      image: divyanshuimg,
      rating: 4.5
    },
    {
      name: 'Nikunj Verma',
      location: 'Zurich, Switzerland',
      text: 'BaazTechno transformed our outdated website into a modern, user-friendly platform. Their WordPress expertise ensured seamless functionality and stunning design.',
      image: nikunjvermaimg,
      rating: 5
    },
    {
      name: 'Pratik Munder',
      location: 'Pune, India',
      text: 'BaazTechno built our e-commerce platform from scratch, and the results have been phenomenal. The site is fast, secure, and easy to manage.',
      image: pratikmunderimg,
      rating: 4
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-darkBackground to-cardBg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-white">
          What Our <span className="text-primary-500">Clients Say</span>
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12 text-lg">
          Don&apos;t just take our word for it - hear from businesses we&apos;ve transformed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Testimonial (larger card) */}
          <div className="md:col-span-2 lg:row-span-2 bg-cardBg rounded-2xl p-8 shadow-glow hover:shadow-primary-500/30 transition-all duration-300 group">
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src={testimonials[0].image} 
                alt={testimonials[0].name} 
                className="w-16 h-16 rounded-full border-2 border-primary-500 object-cover"
                loading="lazy"
              />
              <div>
                <h4 className="text-xl font-bold text-white">{testimonials[0].name}</h4>
                <p className="text-muted text-sm">{testimonials[0].location}</p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${i < testimonials[0].rating ? 'text-primary-500' : 'text-muted/30'} w-4 h-4`} 
                    />
                  ))}
                </div>
              </div>
            </div>
            <FaQuoteLeft className="text-primary-500/20 text-5xl mb-4" />
            <p className="text-white text-lg italic relative z-10">
              &quot;{testimonials[0].text}&quot;
            </p>
          </div>

          {/* Regular testimonials */}
          {testimonials.slice(1).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-cardBg rounded-2xl p-6 shadow-card hover:shadow-primary-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-primary-500 object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-muted text-xs">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-primary-500' : 'text-muted/30'} w-4 h-4`} 
                  />
                ))}
              </div>
              <p className="text-muted text-sm italic">
                &quot;{testimonial.text.length > 120 ? `${testimonial.text.substring(0, 120)}...` : testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "50+", label: "Projects Completed" },
            { value: "24/7", label: "Support Available" },
            { value: "5★", label: "Average Rating" },
          ].map((item, index) => (
            <div key={index} className="p-4">
              <div className="text-primary-500 text-3xl font-bold mb-2 animate-pulse-slow">
                {item.value}
              </div>
              <div className="text-muted text-sm uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;