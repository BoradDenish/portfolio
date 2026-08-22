import { useState, useEffect, useCallback } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

const NAVBAR_OFFSET = 80

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `-${NAVBAR_OFFSET + 10}px 0px -60% 0px`, threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
    setMobileMenuOpen(false)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-smooth py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">DB</a>

        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeId === link.id
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 nav-link'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-[#eef0f6] dark:hover:bg-gray-800'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#eef0f6] dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 top-0 left-0 right-0 z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-custom" onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold gradient-text">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-[#eef0f6] dark:hover:bg-gray-800">
                <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.id} style={{ animationDelay: `${i * 50}ms` }} className={`${mobileMenuOpen ? 'fade-in-up' : ''}`}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      activeId === link.id
                        ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-[#eef0f6] dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
