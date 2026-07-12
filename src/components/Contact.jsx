import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const contactMethods = [
  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'indigo', label: 'Email', value: 'danishpatel5106@gmail.com', href: 'mailto:danishpatel5106@gmail.com', type: 'link' },
  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', color: 'emerald', label: 'Phone', value: '+91 97247 43506', href: 'tel:+919724743506', type: 'link' },
  { icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', color: 'blue', label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com/in/denish-borad-5249b1250', type: 'link' },
  { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', color: 'violet', label: 'Location', value: 'Gujarat, India', href: null, type: 'static' },
]

const colorClasses = {
  indigo: 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400',
  emerald: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  blue: 'bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
  violet: 'bg-violet-100 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400',
}

export default function Contact() {
  const [ref, isRevealed] = useScrollReveal({ threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    
    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setIsLoading(false)
      return
    }
    
    try {
      await window.emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        },
        publicKey
      )
      
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#f5f6fa] dark:bg-slate-950 relative transition-colors duration-300 section-glow">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 ${isRevealed ? '' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isRevealed ? 'reveal revealed' : 'reveal'}`}>
          <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Let&apos;s Work Together</h2>
          <p className="text-gray-400 dark:text-gray-400 mt-4 max-w-2xl mx-auto">I&apos;m currently open to new opportunities in Python Backend Development and IoT Integration. Let&apos;s connect!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className={`${isRevealed ? 'reveal-left revealed' : 'reveal-left'}`}>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick ways to reach me</h3>
            
            <div className="space-y-4">
              {contactMethods.map((method, i) => {
                const Wrapper = method.type === 'link' ? 'a' : 'div'
                const wrapperProps = method.href ? { href: method.href, target: method.type === 'link' && method.label === 'LinkedIn' ? '_blank' : undefined, rel: method.type === 'link' && method.label === 'LinkedIn' ? 'noopener noreferrer' : undefined } : {}
                return (
                  <Wrapper key={i} {...wrapperProps} className={`flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl hover:bg-[#f5f6fa] dark:hover:bg-slate-800 transition-all duration-300 border border-gray-100/80 dark:border-gray-800 hover:shadow-sm group ${method.type === 'link' ? 'cursor-pointer' : ''}`}>
                    <div className={`w-12 h-12 ${colorClasses[method.color]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <svg className="w-6 h-6" fill={method.label === 'LinkedIn' ? 'currentColor' : 'none'} stroke={method.label !== 'LinkedIn' ? 'currentColor' : 'none'} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={method.icon}/></svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{method.label}</div>
                      <div className="font-medium text-gray-800 dark:text-gray-200 text-sm md:text-base truncate">{method.value}</div>
                    </div>
                  </Wrapper>
                )
              })}
            </div>
          </div>

          <div className={`${isRevealed ? 'reveal-right revealed' : 'reveal-right'}`}>
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-gray-100/80 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="floating-label">
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-[#f5f6fa] dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder=" "
                  />
                  <label>Your Name</label>
                </div>
                <div className="floating-label">
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-[#f5f6fa] dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder=" "
                  />
                  <label>Email Address</label>
                </div>
                <div className="floating-label">
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none bg-[#f5f6fa] dark:bg-slate-800 focus:bg-white dark:focus:bg-slate-700 text-gray-900 dark:text-white"
                    placeholder=" "
                  ></textarea>
                  <label>Your Message</label>
                </div>
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  {isLoading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                      Send Message
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl text-center border border-emerald-200 dark:border-emerald-500/20 fade-in-up">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 rounded-xl text-center border border-red-200 dark:border-red-500/20 fade-in-up">
                    Failed to send message. Please try again or email directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
