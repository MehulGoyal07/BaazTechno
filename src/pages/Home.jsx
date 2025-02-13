/* eslint-disable no-unused-vars */
import React from 'react'
import BookCall from '../components/BookCall'
import Footer from '../components/Footer'
import Hero from '../components/Home/Hero/Hero'
import Testimonials from '../components/Home/Testimonials/Testimonials'
import WhyChooseUs from '../components/Home/WhyUs/WhyUs'
import Navbar from '../components/Navbar'
// import Portfolio from '../components/PortfolioSection'
import Clients from '../components/Home/OurClients/Clients'
// import Projects from '../components/Home/ProjectsCompleted/Projects'
import PortfolioMain from '../components/Portfolio/PortfolioMain'
import Prizes from '../components/Prizes'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <WhyChooseUs/>
      {/* <Portfolio/> */}
      <PortfolioMain/>
      <Prizes/>
      <BookCall/>
      {/*<Projects/>*/}
      <Clients/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home