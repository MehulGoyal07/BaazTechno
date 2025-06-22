import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Categories from "./pages/Categories"
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Services from './pages/Services'
import { default as Terms, default as TermsAndConditions } from './pages/TermsAndConditions'

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
          <Route path='/Portfolio' element={<Portfolio/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/terms-conditions' element={<TermsAndConditions/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
