import { motion } from 'framer-motion'; // Import Framer Motion

const TestimonialsSection = () => {
  // Testimonial data
  const testimonials = [
    {
      name: 'Amit Kumar',
      location: 'New Delhi, India',
      text: 'The website design exceeded my expectations! The team understood exactly what I wanted and delivered it with precision.',
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      text: 'Absolutely fantastic work! The development was seamless, and the design was beyond amazing. My business is already seeing more traffic!',
    },
    {
      name: 'Rahul Singh',
      location: 'Bangalore, India',
      text: 'I am thrilled with the result! The team really helped bring my ideas to life, and the project was completed on time.',
    },
    {
      name: 'Neha Gupta',
      location: 'Chennai, India',
      text: 'I can’t recommend them enough! The website they created is exactly what I envisioned, and the user experience is outstanding.',
    },
  ];

  return (
    <section
      className="py-16 px-5 bg-cover bg-center text-white"
      style={{
        background: 'linear-gradient(45deg, #261447 0%, #431a6d 100%)', // Updated background gradient
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>

      {/* Testimonials with animation on scroll */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] mx-4 bg-[#ffffffcc] text-black rounded-lg shadow-2xl p-6"
            style={{
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)', // Shadow effect for depth
              backdropFilter: 'blur(10px)', // Subtle blur effect for card
            }}
            initial={{ opacity: 0, y: 50 }}   // Start from below and with zero opacity
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
            transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger animation for each card
            viewport={{ once: false }}   // Trigger the animation every time the card enters the viewport
          >
            <h4 className="font-semibold text-xl mb-2">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 mb-4">{testimonial.location}</p>
            <p className="text-lg italic">{`"${testimonial.text}"`}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
