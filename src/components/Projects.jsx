import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import projects from '../data/projects'

export default function Projects() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.05 })
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300 section-glow">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">My Work</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <p className="text-gray-400 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Backend systems with IoT integration, real-time communication, and server deployment</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden card-hover border border-gray-100/80 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-300 ${isRevealed ? 'reveal revealed' : 'reveal'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-44 ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 border border-white/30 rounded-full"></div>
                </div>
                <svg className="w-14 h-14 text-white/80 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
                {project.stars > 0 && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-300 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="text-white text-sm font-medium">{project.stars}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {project.features && (
                  <div className="mb-4">
                    <button 
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                    >
                      Key Features
                      <svg className={`w-4 h-4 transition-transform duration-200 ${expandedIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <ul className={`space-y-1 overflow-hidden transition-all duration-300 ${expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs text-gray-400 dark:text-gray-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-default">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-700/50">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium text-sm hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Source Code
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-medium text-sm hover:gap-3 transition-all">
                      Live Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <a href="https://github.com/BoradDenish" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-medium hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors">
            View All Projects on GitHub
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
