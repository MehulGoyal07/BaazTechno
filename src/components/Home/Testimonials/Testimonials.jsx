import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const TestimonialsSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Testimonial data
  const testimonials = [
    {
      name: 'Amit Kumar',
      location: 'New Delhi, India',
      text: 'The website design exceeded my expectations! The team understood exactly what I wanted and delivered it with precision.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai, India',
      text: 'Absolutely fantastic work! The development was seamless, and the design was beyond amazing. My business is already seeing more traffic!',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      rating: 4.5,
    },
    {
      name: 'Rahul Singh',
      location: 'Bangalore, India',
      text: 'I am thrilled with the result! The team really helped bring my ideas to life, and the project was completed on time.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      rating: 5,
    },
    {
      name: 'Neha Gupta',
      location: 'Chennai, India',
      text: 'I can’t recommend them enough! The website they created is exactly what I envisioned, and the user experience is outstanding.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      rating: 4.5,
    },
  ];

  return (
    <section
      className="py-20 px-5 bg-cover bg-center text-white"
      style={{
        background: 'linear-gradient(45deg, #261447 0%, #431a6d 100%)',
      }}
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-up">
        What Our Clients Say
      </h2>

      {/* Swiper Slider */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="min-w-[300px] mx-4 bg-white text-black rounded-xl shadow-2xl p-8 flex flex-col items-center transform transition-all hover:scale-105"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500 shadow-lg"
                />
                <h4 className="font-semibold text-2xl mb-2">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 mb-4">{testimonial.location}</p>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic text-center text-gray-800">{`"${testimonial.text}"`}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;