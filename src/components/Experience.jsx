import useScrollReveal from '../hooks/useScrollReveal'
import experience from '../data/experience'

export default function Experience() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="experience" className="py-24 bg-[#f5f6fa] dark:bg-slate-950 relative transition-colors duration-300 section-glow overflow-x-hidden">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 dark:from-indigo-500/40 to-purple-300 dark:to-purple-500/40 transform md:-translate-x-1/2"></div>

          {experience.map((exp, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={index} className={`relative pl-10 mb-10 md:mb-12 md:pl-0 md:flex md:items-start last:mb-0 ${isRevealed ? 'reveal revealed' : 'reveal'}`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className="absolute left-2.5 md:left-1/2 top-6 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-slate-950 shadow z-10 transform md:-translate-x-1/2"></div>

                {isEven ? (
                  <>
                    <div className="md:w-1/2 md:pr-12">
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
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="md:w-1/2 md:pl-12">
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
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
