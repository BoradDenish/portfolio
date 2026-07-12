import { useState, useEffect, useRef } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

export default function About() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.15 })
  const [yearsCount, setYearsCount] = useState(0)
  const [apisCount, setApisCount] = useState(0)
  const [cgpaCount, setCgpaCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!isRevealed || startedRef.current) return
    startedRef.current = true
    const duration = 2000
    const startTime = Date.now()
    let frameId
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setYearsCount(Math.floor(eased * 2.8 * 10) / 10)
      setApisCount(Math.floor(eased * 15))
      setCgpaCount(Math.floor(eased * 7.9 * 10) / 10)
      if (progress < 1) frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [isRevealed])

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300 section-glow">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isRevealed ? 'reveal-left revealed' : 'reveal-left'}`}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 dark:from-indigo-600/30 dark:via-purple-600/30 dark:to-pink-600/30 rounded-3xl mx-auto pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/95 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold gradient-text mb-2">{yearsCount}+</div>
                  <div className="text-gray-500 dark:text-gray-400 font-medium">Years Experience</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-3 flex items-center gap-2 hover:scale-105 transition-transform border border-gray-100 dark:border-gray-700">
                <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Open to Work</span>
              </div>
            </div>
          </div>
          
          <div className={`${isRevealed ? 'reveal-right revealed' : 'reveal-right'}`}>
            <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">Get to know me</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a <span className="font-semibold text-gray-800 dark:text-gray-200">Python Backend Developer</span> with <span className="font-semibold text-gray-800 dark:text-gray-200">2.8+ years</span> of experience in building scalable backend systems. Currently working at <span className="font-semibold text-gray-800 dark:text-gray-200">Inlancer Technologies Pvt Ltd</span>.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
              I specialize in <span className="font-semibold text-gray-700 dark:text-gray-300">Django</span> and <span className="font-semibold text-gray-700 dark:text-gray-300">FastAPI</span> for building robust REST APIs, with hands-on experience in <span className="font-semibold text-gray-700 dark:text-gray-300">IoT integration</span> using TCP/IP protocol and <span className="font-semibold text-gray-700 dark:text-gray-300">Socket.IO</span> for real-time communication.
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              My expertise includes <span className="font-semibold text-gray-700 dark:text-gray-300">server administration</span> on both Ubuntu and Windows servers, handling pull, build, and deployment operations. I've worked extensively with IoT devices for aqua culture management systems.
            </p>
            
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/60 dark:from-indigo-500/10 dark:to-indigo-500/5 rounded-2xl p-4 text-center hover:shadow-md transition-shadow border border-indigo-100/70 dark:border-indigo-500/10">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{yearsCount}+</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">Years Exp.</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/60 dark:from-purple-500/10 dark:to-purple-500/5 rounded-2xl p-4 text-center hover:shadow-md transition-shadow border border-purple-100/70 dark:border-purple-500/10">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{apisCount}+</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">APIs Built</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100/60 dark:from-pink-500/10 dark:to-pink-500/5 rounded-2xl p-4 text-center hover:shadow-md transition-shadow border border-pink-100/70 dark:border-pink-500/10">
                <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">{cgpaCount}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm">CGPA</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/Denish borad.pdf" target="_blank" className="group inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25">
                <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                Download Resume
              </a>
              <a href="https://linkedin.com/in/denish-borad-5249b1250" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
