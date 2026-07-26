import { Routes, Route, useLocation } from 'react-router-dom'
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
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'

function ScrollToTopOnRoute() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTopOnRoute />
      <Routes>
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/skills" element={<Layout><Skills /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/experience" element={<Layout><Experience /></Layout>} />
        <Route path="/education" element={<Layout><Education /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </ThemeProvider>
  )
}
