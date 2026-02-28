
import './App.css'
import ComingSoon from './ComingSoon'
import About from './Components/About.JSX'
import AnimatedSection from './Components/AnimatedSection'
import ContactSection from './Components/ContactSection'
import HeroSection from './Components/HeroSection'
import Navbar from './Components/Navbar'
import PortfolioSection from './Components/Portfolio/PortfolioSection'

function App() {

  return (
    <>
     {/* <ComingSoon /> */}
      
      <Navbar />

      <HeroSection />

<AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <PortfolioSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
    </>
  )
}

export default App
