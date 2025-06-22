import Footer from "../components/Footer";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar/>
      <div className='mt-5'><WhyUs /></div>
      <Testimonials />
      <Footer />
    </>
  )
}

export default About