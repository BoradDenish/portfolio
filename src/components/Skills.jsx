import useScrollReveal from '../hooks/useScrollReveal'
import skills from '../data/skills'

const skillCategories = [
  { key: 'backend', title: 'Backend Development', color: 'indigo', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { key: 'iot', title: 'IoT Integration', color: 'emerald', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { key: 'database', title: 'Database', color: 'blue', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
  { key: 'server', title: 'Server Administration', color: 'amber', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
  { key: 'tools', title: 'Tools', color: 'violet', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { key: 'concepts', title: 'Core Concepts', color: 'cyan', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
]

const colorMap = {
  indigo: { bg: 'bg-indigo-100 dark:bg-indigo-500/20', text: 'text-indigo-600 dark:text-indigo-400', badge: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300' },
  emerald: { bg: 'bg-emerald-100 dark:bg-emerald-500/20', text: 'text-emerald-600 dark:text-emerald-400', badge: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300' },
  blue: { bg: 'bg-blue-100 dark:bg-blue-500/20', text: 'text-blue-600 dark:text-blue-400', badge: 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300' },
  amber: { bg: 'bg-amber-100 dark:bg-amber-500/20', text: 'text-amber-600 dark:text-amber-400', badge: 'bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300' },
  violet: { bg: 'bg-violet-100 dark:bg-violet-500/20', text: 'text-violet-600 dark:text-violet-400', badge: 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300' },
  cyan: { bg: 'bg-cyan-100 dark:bg-cyan-500/20', text: 'text-cyan-600 dark:text-cyan-400', badge: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300' },
}

export default function Skills() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="skills" className="py-24 bg-[#f5f6fa] dark:bg-slate-950 relative transition-colors duration-300 section-glow">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">What I know</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div 
              key={cat.key} 
              className={`bg-white dark:bg-slate-900 rounded-2xl p-6 card-hover shadow-sm border border-gray-100/80 dark:border-gray-800 transition-all duration-300 ${isRevealed ? 'reveal revealed' : 'reveal'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-14 h-14 ${colorMap[cat.color].bg} rounded-xl flex items-center justify-center mb-4`}>
                <svg className={`w-7 h-7 ${colorMap[cat.color].text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon}/></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => (
                  <span key={skill} className={`px-3 py-1 ${colorMap[cat.color].badge} rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default`}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center hover:scale-110 transition-transform">
              <div className="text-3xl font-bold">2.8+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center hover:scale-110 transition-transform">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Production APIs</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center hover:scale-110 transition-transform">
              <div className="text-3xl font-bold">IoT</div>
              <div className="text-sm opacity-80">TCP & Socket.IO</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center hover:scale-110 transition-transform">
              <div className="text-3xl font-bold">Ubuntu</div>
              <div className="text-sm opacity-80">Windows Server</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
