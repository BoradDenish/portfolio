export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/25 opacity-100 translate-y-0"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    </button>
  )
}
