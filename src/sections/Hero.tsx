import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDown, FileDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/ui/SocialIcons';
import { personalInfo } from '../data/personal';
import { Button } from '../components/ui/Button';
import { TerminalSnippet } from '../components/ui/TerminalSnippet';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:py-32 scroll-mt-24 overflow-hidden"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Role & Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-cyan-400 font-medium">Denish Borad</span>
              <span className="text-slate-600">•</span>
              <span>Python Backend Developer</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Building Reliable Backend Systems{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                with Python.
              </span>
            </h1>

            {/* Supporting Intro Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalInfo.shortBio}
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={handleScrollToProjects}
                icon={<ArrowDown className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                View Production Projects
              </Button>

              <Button
                href={personalInfo.resumeUrl}
                download="Denish_Borad_CV.pdf"
                variant="secondary"
                size="lg"
                icon={<FileDown className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links & Restrained Technology Indicator */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  Connect:
                </span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="GitHub Profile (Denish Borad)"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="LinkedIn Profile (Denish Borad)"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="Email Denish Borad"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Restrained Stack Indicator */}
              <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <span className="text-slate-500">Core:</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">FastAPI</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">Django</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">PostgreSQL</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">Redis</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">Celery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Supporting Terminal Visual Component */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={shouldReduceMotion ? undefined : { duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Subtle backplate glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-2xl blur-xl opacity-40"></div>
              <TerminalSnippet />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
