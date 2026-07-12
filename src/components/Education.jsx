import useScrollReveal from '../hooks/useScrollReveal'
import education from '../data/education'
import certifications from '../data/certifications'

export default function Education() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300 section-glow">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">My Background</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Education & Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className={`${isRevealed ? 'reveal-left revealed' : 'reveal-left'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              </span>
              Education
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-300 dark:from-indigo-500/40 to-purple-300 dark:to-purple-500/40"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 mb-6 last:mb-0">
                  <div className="absolute left-2.5 w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full border-2 border-white dark:border-slate-900 shadow"></div>
                  <div className="bg-gradient-to-br from-gray-50/80 dark:from-slate-800 to-white dark:to-slate-900 rounded-2xl p-6 card-hover border border-gray-100/80 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          edu.grade === 'Result Awaited' 
                            ? 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400' 
                            : 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                        }`}>
                          {edu.grade}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-300">{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span key={i} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-md text-xs font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isRevealed ? 'reveal-right revealed' : 'reveal-right'}`}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              </span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-[#f5f6fa] dark:bg-slate-800 rounded-xl p-4 card-hover border border-gray-100/80 dark:border-gray-700/50 flex items-center justify-between hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-500/30 transition-colors">
                      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">{cert.year}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 rounded-2xl text-white shadow-xl">
              <h4 className="font-bold mb-2">Core Competencies</h4>
              <p className="text-sm opacity-90 mb-4">Technologies I work with professionally</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'Django', 'DRF', 'TCP/IP', 'Socket.IO', 'PostgreSQL', 'Ubuntu', 'Git Version', 'MySQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-lg text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors cursor-default">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-500/10 dark:to-indigo-500/5 rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-indigo-100/70 dark:border-indigo-500/10">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">2.8+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/60 dark:from-emerald-500/10 dark:to-emerald-500/5 rounded-xl p-4 text-center hover:shadow-md transition-shadow border border-emerald-100/70 dark:border-emerald-500/10">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">APIs Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
