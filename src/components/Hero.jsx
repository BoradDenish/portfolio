import useScrollReveal from '../hooks/useScrollReveal'

export default function Hero() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#f5f6fa] via-white to-indigo-50/60 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30 grid-pattern section-glow">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/30 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/20 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div ref={ref} className={`relative z-10 text-center px-6 ${isRevealed ? 'fade-in-up' : 'opacity-0'}`}>
        <div className="mb-8 inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-5 py-2.5 rounded-full text-sm font-medium border border-emerald-200/60 dark:border-emerald-500/20 shadow-sm">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Open to Work | Python Backend Developer
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gray-900 dark:text-white">Hi, I'm </span>
          <span className="gradient-text">Denish Borad</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Python Backend Developer</span> specializing in Django, FastAPI & IoT Integration
        </p>
        <p className="text-lg text-gray-400 dark:text-gray-500 mb-10 max-w-xl mx-auto">
          2.8+ Years Exp | IoT (TCP/Socket.IO) | Server Admin (Ubuntu/Windows) | Inlancer Technologies
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <a href="#projects" className="group px-8 py-3.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2">
            View Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="#contact" className="px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:shadow-md">
            Get In Touch
          </a>
          <a href="https://github.com/BoradDenish" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-gray-900 dark:bg-gray-800 text-white rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 hover:shadow-lg">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <a href="https://linkedin.com/in/denish-borad-5249b1250" target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 flex items-center gap-2 hover:scale-105">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:danishpatel5106@gmail.com" className="text-gray-400 dark:text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-300 flex items-center gap-2 hover:scale-105">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            danishpatel5106@gmail.com
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    </section>
  )
}
