import { useState, useMemo } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import projects from '../data/projects'
import ProjectModal from './ProjectModal'

const categories = [
  'All',
  'Featured',
  'Enterprise & ERP',
  'IoT & Systems',
  'Logistics & SaaS',
  'Automation & Desktop',
  'Messaging & AI',
  'Hospitality & Retail'
]

export default function Projects() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.05 })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      let matchesCategory = true
      if (selectedCategory === 'Featured') {
        matchesCategory = Boolean(project.featured)
      } else if (selectedCategory !== 'All') {
        matchesCategory = project.category === selectedCategory
      }

      // Search match
      let matchesSearch = true
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const matchTitle = project.title.toLowerCase().includes(query)
        const matchSub = project.subtitle?.toLowerCase().includes(query)
        const matchDesc = project.description.toLowerCase().includes(query)
        const matchTech = project.tech.some((t) => t.toLowerCase().includes(query))
        const matchCategory = project.category.toLowerCase().includes(query)
        matchesSearch = matchTitle || matchSub || matchDesc || matchTech || matchCategory
      }

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300 section-glow">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className={`text-center mb-12 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">Production Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured Engineering Work</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            Scalable backend architectures, mission-critical IoT telemetry, systems automation, and enterprise platforms engineered in Python and Rust.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className={`mb-10 space-y-4 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          {/* Search Input */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by technology (e.g. Rust, FastAPI, Celery, IoT, Stripe)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full text-sm bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all shadow-inner"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs bg-gray-200 dark:bg-gray-700 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id || index} 
              className={`bg-white dark:bg-slate-800/90 rounded-2xl overflow-hidden card-hover border border-gray-100 dark:border-gray-700/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${isRevealed ? 'reveal revealed' : 'reveal'}`}
              style={{ transitionDelay: `${(index % 4) * 80}ms` }}
            >
              {/* Card Banner */}
              <div className={`h-44 ${project.gradient} flex items-center justify-center relative overflow-hidden flex-shrink-0`}>
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-4 right-4 w-32 h-32 border border-white/40 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 border border-white/40 rounded-full"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-semibold text-white tracking-wider uppercase mb-2">
                    {project.category}
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white drop-shadow-sm line-clamp-1">{project.title}</h4>
                </div>

                {project.featured && (
                  <div className="absolute top-3 right-3 bg-yellow-400/90 text-slate-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Featured
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">{project.title}</h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">{project.subtitle}</p>
                  <p className="text-gray-500 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.features && (
                    <div className="mb-4">
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 2).map((feat, i) => (
                          <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-md text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-md text-[11px] font-medium">
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors cursor-pointer group"
                  >
                    Architecture & Deep Dive
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    title="View Details"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-base">No projects matched your search criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
              className="mt-3 text-sm text-indigo-600 dark:text-indigo-400 underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* GitHub link */}
        <div className={`text-center mt-14 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <a 
            href="https://github.com/BoradDenish" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Explore Repositories on GitHub
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
