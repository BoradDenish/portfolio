import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavLinkItem {
  label: string;
  href: string; // e.g. '#about' or '/#about'
  sectionId: string;
}

const navLinks: NavLinkItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Track scroll position to update header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const item of [...navLinks].reverse()) {
        const el = document.getElementById(item.sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);

    if (isHomePage) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    } else {
      // Navigate to home then scroll
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            onClick={() => {
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Denish Borad Home"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 flex items-center justify-center transition-colors">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                Denish Borad
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-0.5">
                backend.engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = isHomePage && activeSection === item.sectionId;
              return (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/Denish_Borad_CV.pdf"
              download="Denish_Borad_CV.pdf"
              variant="outline"
              size="sm"
              icon={<FileDown className="w-4 h-4" />}
            >
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[61px] z-50 bg-[#080c14]/95 backdrop-blur-xl md:hidden border-t border-slate-800 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <nav className="flex flex-col gap-2 pt-2" aria-label="Mobile Navigation">
            {navLinks.map((item) => {
              const isActive = isHomePage && activeSection === item.sectionId;
              return (
                <button
                  key={item.sectionId}
                  onClick={() => handleNavClick(item.sectionId)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-800/80 space-y-3">
            <Button
              href="/Denish_Borad_CV.pdf"
              download="Denish_Borad_CV.pdf"
              variant="primary"
              size="md"
              className="w-full"
              icon={<FileDown className="w-4 h-4" />}
            >
              Download Resume (PDF)
            </Button>
            <p className="text-center text-xs text-slate-500 font-mono">
              danishpatel5106@gmail.com
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
