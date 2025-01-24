/* eslint-disable no-unused-vars */
import React from 'react'
import Footer from '../components/Footer'
import ContactUs from '../components/Home/ContactUs/ContactUs'
import Hero from '../components/Home/Hero/Hero'
import Testimonials from '../components/Home/Testimonials/Testimonials'
import WhyChooseUs from '../components/Home/WhyUs/WhyUs'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WhyChooseUs/>
      <Portfolio/>
      <ContactUs/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home