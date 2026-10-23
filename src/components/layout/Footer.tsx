import React from 'react';
import { Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#060a10] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Role */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-500 font-mono">
                {personalInfo.role} • {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="Email Denish Borad"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Python Backend &amp; Systems Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
