import useScrollReveal from '../hooks/useScrollReveal'
import experience from '../data/experience'

export default function Experience() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="experience" className="py-24 bg-[#f5f6fa] dark:bg-slate-950 relative transition-colors duration-300 section-glow">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">My Journey</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line transform md:-translate-x-px"></div>
          
          {experience.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${isRevealed ? 'reveal revealed' : 'reveal'}`} style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="flex-1 md:text-right">
                {index % 2 === 0 ? (
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm card-hover text-left border border-gray-100/80 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-500/20 transition-all">
                    <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-medium mb-3">{exp.period}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className="hidden md:block"></div>
                )}
              </div>
              
              <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-indigo-600 dark:bg-indigo-400 rounded-full transform -translate-x-1/2 mt-8 border-4 border-white dark:border-slate-950 shadow-lg z-10 hover:scale-125 transition-transform"></div>
              
              <div className="flex-1">
                {index % 2 !== 0 ? (
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm card-hover text-left border border-gray-100/80 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-500/20 transition-all">
                    <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-medium mb-3">{exp.period}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className="md:hidden bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm card-hover text-left border border-gray-100/80 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-500/20 transition-all">
                    <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-medium mb-3">{exp.period}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-400 dark:text-gray-400 text-sm mb-3">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
