/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Categories from "./pages/Categories"
import Contact from './pages/Contact'
import Home from './pages/Home'
import Terms from './pages/Terms&Conditions'

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/terms' element={<Terms/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
