import { useState, useEffect } from 'react'

const skills = {
  backend: ['Python', 'FastAPI', 'Django', 'Django REST Framework', 'REST APIs', 'GraphQL', 'WebSockets', 'Socket.IO', 'NodeJS', 'ReactJS', 'PyQt'],
  database: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB', 'Redis'],
  iot: ['TCP/IP Protocol', 'Socket.IO', 'Real-time Data', 'Device Communication'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman', 'Nginx', 'Gunicorn'],
  server: ['Ubuntu Server', 'Apache', 'Nginx'],
  concepts: ['Authentication & Authorization', 'Payment Integration', 'Real-time Communication', 'Microservices', 'API Design', "Meta Api's Integration"]
}

const projects = [
  {
    title: 'Mr. Trust - Review Management System',
    description: 'Multi-panel review management platform for businesses. Three user roles: Admin (analytics dashboard, verify/unverify reviews with photos, manage users), Business Client (hotels, cafes, restaurants), and Customers (login, submit reviews with photos, like reviews).',
    tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'jQuery', 'JWT'],
    github: '#',
    live: '#',
    stars: 0,
    features: [
      'Three-panel system: Admin, Client, Customer',
      'Admin Dashboard with review analytics',
      'Review verification system with photo approval',
      'Like functionality for reviews',
      'Business Client management (CRUD)',
      'Customer management (CRUD)',
      'Business profiles: Hotels, Cafes, Restaurants',
      'Review with photo upload support'
    ]
  },
  {
    title: 'Aqua Culture Management System',
    description: 'Comprehensive IoT-based aquaculture management platform for fish/prawn farming. Features real-time monitoring of pond parameters, automated motor control via IoT devices, and TCP-based communication between sensors and server.',
    tech: ['FastAPI', 'Python-Socket.IO', 'TCP/IP', 'MySQL', 'ReactJS'],
    github: '#',
    live: '#',
    stars: 0,
    features: [
      'Real-time IoT data via TCP connection',
      'Pond & Project Management',
      'Automated Motor Control (Starter/Soft Starter)',
      'Master data for Fish/Prawn types',
      'Live dashboard with Socket.IO',
      'Historical data & Analytics',
      'Alert & Notification System'
    ]
  },
  {
    title: 'WhatsApp CRM',
    description: 'Comprehensive WhatsApp CRM platform with Meta API integration, contact management, real-time messaging via Socket.IO, campaign broadcasting, workflow automation, chatbot builder, and chat assignment. Features customer onboarding, contact import/export, and WhatsApp template management.',
    tech: ['FastAPI', 'Node.js', 'Next.js', 'Socket.IO', 'Redis', 'Celery', 'MySQL', 'Meta API'],
    github: '#',
    live: '#',
    features: [
      'WhatsApp Meta API Integration',
      'Contact Import/Export',
      'Customer Onboarding',
      'Real-time Messaging with Socket.IO',
      'WhatsApp Templates Management',
      'Campaign/Broadcast Messaging',
      'Workflow Automation & Chatbot',
      'Chat Assignment System'
    ]
  },
  {
    title: 'FandF Restaurant',
    description: 'Restaurant management system with user panel for time/day-wise menus and admin panel for customer, ingredient, and supplier management. Features time-slot based reservations with WhatsApp CRM integration for confirmation and cancellation notifications.',
    tech: ['Vue.js', 'Django REST Framework', 'MySQL', 'Celery', 'WhatsApp CRM', 'Third-party APIs'],
    github: '#',
    live: '#',
    features: [
      'User Panel: Time-wise & Day-wise Menu',
      'Admin Panel: Customer Management',
      'Ingredient & Food Details Management',
      'Supplier Management',
      'Time-slot Based Reservations',
      'WhatsApp CRM Integration for Notifications',
      'Reservation Confirmation/Cancellation via WhatsApp'
    ]
  },
  {
    title: 'SM Toll Technology',
    description: 'High-traffic Toll Plaza Management system to automate lane operations and toll collection. Developed scalable backend APIs using Django REST Framework to handle real-time transaction processing and logging. Collaborated on the integration of a Vue.js frontend to provide a responsive interface for plaza operators.',
    tech: ['Django', 'Django REST Framework', 'MySQL', 'Vue.js'],
    github: '#',
    live: '#',
    features: [
      'Automated Lane Operations',
      'Real-time Transaction Processing',
      'Toll Collection Management',
      'Backend APIs for High Traffic',
      'Transaction Logging System',
      'Vue.js Responsive Operator Interface',
      'Lane Status Monitoring',
      'Revenue Analytics Dashboard'
    ]
  }
]

const experience = [
  {
    role: 'Python Backend Developer',
    company: 'Inlancer Technologies Pvt Ltd',
    period: 'Aug 2022 - Present',
    description: 'Developing robust backend systems using Python frameworks (Django, FastAPI). Building IoT-integrated applications, managing server infrastructure, and handling real-time data communication.',
    highlights: [
      '2.8+ years of professional experience',
      'IoT Integration with TCP/IP & Socket.IO',
      'Built 15+ production APIs',
      'Server deployment on Ubuntu & Windows',
      'Real-time data processing from IoT devices',
      'Reduced API response time by 40%'
    ]
  },
  {
    role: 'Python Developer Intern',
    company: 'Inlancer Technologies Pvt Ltd',
    period: 'Jan 2022 - Jul 2022',
    description: 'Contributed to backend development using Django and FastAPI. Learned industry best practices, API design patterns, and participated in full development lifecycle.',
    highlights: [
      'Completed 8+ backend modules',
      'REST API design & implementation',
      'Database management with PostgreSQL',
      'Version control with Git'
    ]
  }
]

const education = [
  {
    degree: 'Master of Science in Information Technology (M.Sc. IT)',
    institution: 'Saurashtra University',
    period: '2024 - 2026',
    grade: 'Result Awaited',
    highlights: ['Final Semester Exam Completed']
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Saurashtra University',
    period: '2019 - 2022',
    grade: '7.9 CGPA',
    highlights: ['Specialized in Backend Development', 'Database Management Systems', 'Programming in Python']
  }
]

const certifications = [
  { name: 'Python', issuer: 'Inlancer Technologies LLP', year: '2022' },
  { name: 'Django/DRF', issuer: 'Inlancer Technologies LLP', year: '2022' },
  { name: 'FastAPI - Modern Python Web Framework', issuer: 'Inlancer Technologies LLP', year: '2022' },
]

function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">DB</a>
        
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase()}`} 
                className={`nav-link text-sm font-medium transition-colors ${activeSection === link.toLowerCase() ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase()}`} 
                  className="block text-gray-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mb-6 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Open to Work | Python Backend Developer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="gradient-text">Denish Borad</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto">
          <span className="font-semibold text-gray-800">Python Backend Developer</span> specializing in Django, FastAPI & IoT Integration
        </p>
        <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto">
          2.8+ Years Exp | IoT (TCP/Socket.IO) | Server Admin (Ubuntu/Windows) | Inlancer Technologies
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all hover:shadow-lg hover:shadow-indigo-200">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all">
            Get In Touch
          </a>
          <a href="https://github.com/BoradDenish" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <a href="https://linkedin.com/in/denish-borad-5249b1250" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:danishpatel5106@gmail.com" className="text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            danishpatel5106@gmail.com
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl mx-auto pulse-glow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-xl p-8 text-center">
                  <div className="text-5xl font-bold gradient-text mb-2">2.8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <span className="text-indigo-600 font-medium mb-2 block">Get to know me</span>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I'm a <span className="font-semibold text-gray-800">Python Backend Developer</span> with <span className="font-semibold text-gray-800">2.8+ years</span> of experience in building scalable backend systems. Currently working at <span className="font-semibold text-gray-800">Inlancer Technologies Pvt Ltd</span>.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I specialize in <span className="font-semibold">Django</span> and <span className="font-semibold">FastAPI</span> for building robust REST APIs, with hands-on experience in <span className="font-semibold">IoT integration</span> using TCP/IP protocol and <span className="font-semibold">Socket.IO</span> for real-time communication.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My expertise includes <span className="font-semibold">server administration</span> on both Ubuntu and Windows servers, handling pull, build, and deployment operations. I've worked extensively with IoT devices for aqua culture management systems.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">2.8+</div>
                <div className="text-gray-600 text-sm">Years Exp.</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-gray-600 text-sm">APIs Built</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gray-900">7.9</div>
                <div className="text-gray-600 text-sm">CGPA</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="/Denish borad.pdf" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                Download Resume
              </a>
              <a href="https://linkedin.com/in/denish-borad-5249b1250" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium mb-2 block">What I know</span>
          <h2 className="text-4xl font-bold">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 card-hover shadow-sm">
            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 card-hover shadow-sm">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">IoT Integration</h3>
            <div className="flex flex-wrap gap-2">
              {skills.iot.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 card-hover shadow-sm">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Database</h3>
            <div className="flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 card-hover shadow-sm">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Server Administration</h3>
            <div className="flex flex-wrap gap-2">
              {skills.server.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 card-hover shadow-sm">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 card-hover shadow-sm">
            <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Core Concepts</h3>
            <div className="flex flex-wrap gap-2">
              {skills.concepts.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold">2.8+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Production APIs</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">IoT</div>
              <div className="text-sm opacity-80">TCP & Socket.IO</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">Ubuntu</div>
              <div className="text-sm opacity-80">Windows Server</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium mb-2 block">My Work</span>
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Backend systems with IoT integration, real-time communication, and server deployment</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden card-hover border border-gray-100">
              <div className="h-40 bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center relative">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                </svg>
                {project.stars > 0 && (
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <span className="text-white text-sm font-medium">{project.stars}</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                {project.features && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-700 font-medium text-sm hover:text-indigo-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Source Code
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm hover:gap-3 transition-all">
                      Live Demo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="https://github.com/BoradDenish" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
            View All Projects on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium mb-2 block">My Journey</span>
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:-translate-x-px"></div>
          
          {experience.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 md:text-right">
                {index % 2 === 0 ? (
                  <div className="bg-white p-6 rounded-2xl shadow-sm card-hover text-left">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
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
              
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2 mt-8 border-4 border-white shadow"></div>
              
              <div className="flex-1">
                {index % 2 !== 0 ? (
                  <div className="bg-white p-6 rounded-2xl shadow-sm card-hover text-left">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <div className="md:hidden bg-white p-6 rounded-2xl shadow-sm card-hover text-left">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-3">{exp.period}</span>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-3">{exp.description}</p>
                    {exp.highlights && (
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></span>
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

function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium mb-2 block">My Background</span>
          <h2 className="text-4xl font-bold">Education & Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              </span>
              Education
            </h3>
            
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 mb-6 last:mb-0">
                  <div className="absolute left-2.5 w-3 h-3 bg-indigo-600 rounded-full border-2 border-white"></div>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 card-hover border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          edu.grade === 'Result Awaited' 
                            ? 'bg-amber-100 text-amber-700' 
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {edu.grade}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900">{edu.degree}</h4>
                        <p className="text-indigo-600 font-medium text-sm">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-gray-800">{edu.period}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              </span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 card-hover border border-gray-100 flex items-center justify-between hover:border-green-300 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">{cert.year}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 rounded-2xl text-white">
              <h4 className="font-bold mb-2">Core Competencies</h4>
              <p className="text-sm opacity-90 mb-4">Technologies I work with professionally</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'FastAPI', 'Django', 'DRF', 'TCP/IP', 'Socket.IO', 'PostgreSQL', 'Ubuntu', 'Git Version', 'MySQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/20 text-white rounded-lg text-sm font-medium backdrop-blur-sm">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600">2.8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">APIs Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
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
    } catch (error) {
      setStatus('error')
    } finally {
      setIsLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-medium mb-2 block">Get in Touch</span>
          <h2 className="text-4xl font-bold">Let's Work Together</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">I'm currently open to new opportunities in Python Backend Development and IoT Integration. Let's connect!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Quick ways to reach me</h3>
            
            <div className="space-y-4">
              <a href="mailto:danishpatel5106@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">danishpatel5106@gmail.com</div>
                </div>
              </a>
              
              <a href="tel:+919724743506" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">+91 97247 43506</div>
                </div>
              </a>
              
              <a href="https://linkedin.com/in/denish-borad-5249b1250" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-gray-50 transition-colors border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <div className="font-medium">Connect with me</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-medium">Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Hi Denish, I'd like to discuss a Python Backend opportunity..."
                />
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-all hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center">
                  Failed to send message. Please try again or email directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-2 gradient-text-footer">Denish Borad</div>
            <p className="text-gray-400">Python Backend Developer | FastApi | Django | DRF | Socket.io | Celery | RDBMS | NodeJS | ReactJS</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/BoradDenish" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/denish-borad-5249b1250" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="mailto:danishpatel5106@gmail.com" className="text-gray-400 hover:text-white transition-colors" title="Email">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Denish Borad.</p>
          <p className="mt-2">Open to Python Backend & Django, DRF & FastApi Developer | Rajkot, Gujarat, India</p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollPos = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </>
  )
}

export default App
