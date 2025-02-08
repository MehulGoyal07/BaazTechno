import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PortfolioMain from '../components/Portfolio/PortfolioMain'
import Process from '../components/Portfolio/Process'
import VideoShowcase from '../components/Portfolio/VideoShowcases'
const Portfolio = () => {
  return (
    <>
    <Navbar />
    <PortfolioMain />
    <Process />
    <VideoShowcase />
    <Footer />
    </>
  )
}

export default Portfolio
