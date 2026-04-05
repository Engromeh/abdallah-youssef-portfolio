import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import ContactSection from './Components/ContactSection'
import PortfolioSection from './Components/Portfolio/PortfolioSection'
import ProjectDetails from './Components/Portfolio/ProjectDetails'

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </>
  )
}

export default App