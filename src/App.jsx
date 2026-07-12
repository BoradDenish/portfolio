import { useState, useEffect } from 'react'
import { ThemeProvider } from './hooks/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WaveDivider from './components/WaveDivider'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPos = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <Navbar activeSection={activeSection} />
      <Hero />
      <WaveDivider color="#ffffff" darkColor="#1e293b" />
      <About />
      <WaveDivider color="#f5f6fa" darkColor="#0f172a" flip />
      <Skills />
      <WaveDivider color="#ffffff" darkColor="#1e293b" />
      <Projects />
      <WaveDivider color="#f5f6fa" darkColor="#0f172a" />
      <Experience />
      <WaveDivider color="#ffffff" darkColor="#1e293b" />
      <Education />
      <WaveDivider color="#f5f6fa" darkColor="#0f172a" />
      <Contact />
      <WaveDivider color="#111827" darkColor="#0a0f1a" />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
