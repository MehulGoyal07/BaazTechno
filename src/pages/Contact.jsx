/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar';
import ContactForm from "../components/ContactUs/ContactForm";
import Footer from '../components/Footer';
import SocialMediaLinks from '../components/ContactUs/SocialMediaLinks';
import Faqs from '../components/ContactUs/FAQs';

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