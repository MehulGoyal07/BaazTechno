/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import WhyUs from "../components/Home/WhyUs/WhyUs";
import Testimonials from "../components/Home/Testimonials/Testimonials"
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
      <Navbar/>
      <WhyUs />
      <Testimonials />
      <Footer />
    </>
  )
}

export default About