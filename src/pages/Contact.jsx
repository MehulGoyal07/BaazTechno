
import ContactForm from "../components/ContactUs/ContactForm";
import Faqs from '../components/ContactUs/FAQs';
import SocialMediaLinks from '../components/ContactUs/SocialMediaLinks';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactForm />
    <Faqs />
    <SocialMediaLinks />
    <Footer />
    </>
  )
}

export default Contact