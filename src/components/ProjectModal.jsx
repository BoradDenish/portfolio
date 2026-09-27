import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-10 my-8 transition-all max-h-[90vh] flex flex-col">
        {/* Header Banner */}
        <div className={`p-6 sm:p-8 ${project.gradient} text-white relative flex-shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            {project.category}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold pr-8">{project.title}</h3>
          <p className="text-white/90 text-sm sm:text-base mt-1 font-medium">{project.subtitle}</p>
          
          <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-white/80">
            <span className="font-semibold text-white">Role:</span> {project.role}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
          {/* Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-gray-800 rounded-xl p-3.5 text-center">
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">{metric.label}</div>
                    <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
              Project Overview
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture */}
          {project.architecture && (
            <div className="bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-1 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                System Architecture
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                Key Features & Engineering Highlights
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium border border-gray-200/50 dark:border-gray-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-gray-50 dark:bg-slate-800/80 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center flex-shrink-0">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {project.docSlug ? 'Detailed documentation in docs/projects/' : 'Production System'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
