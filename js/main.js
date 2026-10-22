/**
 * Denish Borad Portfolio - Main JavaScript
 * High-performance, zero-dependency vanilla JS for interactions, filters, modals, and themes.
 */

// --- Project Data Repository (for interactive architecture deep-dive modal) ---
const projectsData = {
  'society-mitr': {
    id: 'society-mitr',
    title: 'Society Mitr (सोसायटी मित्र)',
    subtitle: 'High-Performance Housing Society ERP & AI Vehicle Gatekeeping Platform',
    category: 'Enterprise & ERP',
    role: 'Lead Backend & Systems Engineer',
    gradient: 'project-gradient-1',
    featured: true,
    description: 'Enterprise-grade multi-tenant residential society and gated community ERP platform. Core backend engineered from scratch in Rust for deterministic sub-millisecond latencies, coupled with a Python AI computer vision microservice for automated vehicle plate recognition and barrier gate automation.',
    tech: ['Rust (Axum)', 'Tokio', 'SQLx', 'PostgreSQL', 'Python (FastAPI)', 'YOLOv8', 'ONNX Runtime', 'Razorpay', 'Docker', 'Linux Systemd'],
    metrics: [
      { label: 'Latency', value: '< 1ms API Response' },
      { label: 'Throughput', value: '10k+ Concurrent Conns' },
      { label: 'AI Engine', value: 'Real-time YOLOv8 ANPR' }
    ],
    features: [
      'Core Rust Backend: Axum, Tokio, and SQLx delivering sub-millisecond API latencies and zero-cost memory safety',
      'AI Gatekeeping Microservice: Dedicated Python/FastAPI microservice running YOLOv8 & FastALPR for instant license plate recognition and boom barrier triggers',
      'Hierarchical Multi-Tenant RBAC: Role-based permissions with dynamic per-user overrides across societies, towers, and units',
      'Native PostgreSQL Quota Triggers: Automated database triggers enforcing tenant storage and document limits at the database engine level',
      'Automated Invoicing & Razorpay Billing: Automated monthly maintenance billing with cryptographically verified Razorpay webhooks',
      'Digital Notice Board & Helpdesk: Full lifecycle complaint ticketing system with image attachments and audit history'
    ],
    architecture: 'High-concurrency distributed architecture separating high-speed transactional CRUD operations in Rust from CPU-bound computer vision inference in Python. Inter-service communication via internal low-latency REST calls with connection pooling and async event loops.',
    docSlug: 'docs/projects/society-mitr.md'
  },
  'thinkx-panic-alarm': {
    id: 'thinkx-panic-alarm',
    title: 'ThinkX Panic Alarm System',
    subtitle: 'Real-Time IoT Emergency Alert Platform & Edge Gateway',
    category: 'IoT & Systems',
    role: 'IoT Cloud & Backend Engineer',
    gradient: 'project-gradient-3',
    featured: true,
    description: 'Mission-critical IoT cloud backend and edge gateway coordinating physical panic alarm hardware panels, wireless RF repeaters, and edge sensors across educational campuses and commercial facilities with sub-second alert dispatch.',
    tech: ['FastAPI', 'Rust (Tokio/Axum)', 'PostgreSQL', 'Redis', 'Celery', 'WebSockets', 'Raw TCP Sockets'],
    metrics: [
      { label: 'Dispatch Speed', value: '< 500ms Escalation' },
      { label: 'Networking', value: 'Raw TCP / WebSockets' },
      { label: 'Reliability', value: 'Fail-Safe NAT Traversal' }
    ],
    features: [
      'Low-Latency Edge Gateway: Overcomes restrictive consumer firewalls/NATs using continuous bidirectional raw TCP and WebSocket streams',
      'Instant Emergency Escalation: Sub-second multi-channel alert dispatching to campus security, SMS broadcasts, and sirens',
      'Spatial Floor Map Tracking: Real-time visual panel telemetry and zone localization on digital facility maps',
      'Decoupled Task Workers: Celery & Redis task queues handle heavy non-blocking notification audits and hardware log persistence',
      'Multi-Campus Partitioning: Tenant data isolation allowing multiple organizations to share edge infrastructure securely'
    ],
    architecture: 'Hybrid edge-cloud topology utilizing Rust for raw TCP socket termination and telemetry frame decoding, feeding into FastAPI ASGI applications and WebSocket broadcasting layers.',
    docSlug: 'docs/projects/thinkx-panic-alarm-backend.md'
  },
  'openup-portal': {
    id: 'openup-portal',
    title: 'OpenUp Portal',
    subtitle: 'On-Demand Emergency Roadside Assistance & Lockout Dispatch Platform',
    category: 'Logistics & SaaS',
    role: 'Backend & API Engineer',
    gradient: 'project-gradient-2',
    featured: true,
    description: 'On-demand emergency roadside assistance and automotive lockout dispatch ecosystem (Uber for roadside locksmiths). Connects stranded motorists with vetted nearby mobile technicians in real time using distance-matrix proximity matching and automated payment vaulting.',
    tech: ['Django REST Framework', 'Python', 'MySQL', 'Celery', 'Redis', 'Firebase Cloud Messaging (FCM v1)', 'Google Distance Matrix API', 'Stripe', 'PayPal Vault', 'Apple Pay'],
    metrics: [
      { label: 'Proximity Engine', value: 'Google Distance Matrix' },
      { label: 'Payment Vaulting', value: 'Stripe & PayPal Tokens' },
      { label: 'Push Pipeline', value: 'FCM v1 HTTP' }
    ],
    features: [
      'Dynamic Proximity Matching: Automated dispatching calculating real-time driving ETAs via Google Distance Matrix API',
      'Multi-Gateway Payment Vaulting: Tokenized vaulting (Stripe, PayPal Vault, Venmo, Apple Pay) for pre-authorization and zero-touch capture',
      'Asynchronous Event Pipelines: Background Celery workers broadcasting FCM v1 push notifications to nearby available service vans',
      'Two-Phase Inspection Audits: Pre-service and post-service damage photo uploads with geostamped evidence for liability protection',
      'Real-Time Job Lifecycle: End-to-end status tracking from dispatch, arrival, lockout bypass, to automatic invoice dispatch'
    ],
    architecture: 'Event-driven Django REST Framework backend with Celery/Redis for non-blocking asynchronous task execution and payment webhook idempotency.',
    docSlug: 'docs/projects/openup-portal.md'
  },
  'industrial-label-printer': {
    id: 'industrial-label-printer',
    title: 'Industrial Thermal Label & Barcode Suite',
    subtitle: 'Micro-Precision Hardware Desktop Automation Suite for TSPL Thermal Printers',
    category: 'Automation & Desktop',
    role: 'Systems & Desktop Automation Engineer',
    gradient: 'project-gradient-4',
    featured: true,
    description: 'Enterprise-grade desktop hardware automation platform bridging cloud ERPs, spreadsheets, and databases directly to TSC industrial-grade thermal transfer printers (TE244, TA210) for high-speed barcode, QR, and jewellery tag printing.',
    tech: ['Python 3', 'PyQt5', 'Ctypes (Win32 FFI & TSCLIB.dll)', 'Linux CUPS Raw', 'TSPL Sockets (Port 9100)', 'CairoSVG', 'Pillow', 'PyInstaller'],
    metrics: [
      { label: 'Alignment Precision', value: 'Sub-Millimeter 84A-12mm' },
      { label: 'Spooling Speed', value: 'Zero Driver Lag' },
      { label: 'Graphics Pipeline', value: '1-Bit PCX Flash Memory' }
    ],
    features: [
      'Direct TSPL Command Generation: Bypasses slow OS print drivers by communicating directly in TSC Printer Language via native Win32 FFI and raw TCP socket Port 9100',
      'Micro-Millimeter Precision: Custom coordinate layout engine engineered for tiny 84A-12mm jewellery tags and automotive warranty labels',
      'Vector-to-1-Bit PCX Pipeline: Automated vector rasterization using CairoSVG and Pillow to flash 1-bit PCX bitmaps straight to printer RAM',
      'Cross-Platform Hardware Abstraction: Supports Windows TSCLIB.dll alongside Linux CUPS raw queues (lp -o raw)',
      'Standalone Executable: Fully packaged offline installer built via PyInstaller with dynamic data filtering and offline cache'
    ],
    architecture: 'High-speed desktop hardware automation suite built in Python and PyQt5 with low-level Ctypes dynamic library binding and raw TCP network socket communication.',
    docSlug: 'docs/projects/industrial-label-printer-suite.md'
  },
  'liliya-whatsapp-crm': {
    id: 'liliya-whatsapp-crm',
    title: 'Liliya API — WhatsApp Marketing CRM',
    subtitle: 'Enterprise WhatsApp Marketing Engine, Visual Chatbot Builder & Live Inbox',
    category: 'Messaging & AI',
    role: 'Lead Backend Engineer',
    gradient: 'project-gradient-5',
    featured: true,
    description: 'Production-grade multi-tenant conversational marketing engine, visual flow chatbot builder, and multi-agent customer communication platform powered by FastAPI, Celery, Redis, and Meta WhatsApp Cloud API.',
    tech: ['FastAPI (ASGI)', 'Celery', 'Redis', 'Socket.IO', 'MySQL', 'Meta WhatsApp Cloud API', 'OpenAI ChatGPT API', 'Google Gemini API'],
    metrics: [
      { label: 'Throughput', value: '1000s Msgs/Minute' },
      { label: 'Agent Inbox', value: 'Live Socket.IO Sync' },
      { label: 'AI Fallback', value: 'ChatGPT & Gemini' }
    ],
    features: [
      'High-Throughput ASGI Backend: FastAPI and Celery/Redis architecture handling bulk marketing campaigns and scheduled broadcasts',
      'Real-Time Team Inbox: WebSocket and Socket.IO collaboration suite enabling multiple support agents to manage simultaneous customer chats',
      'Visual Chatbot Engine: Dynamic state-machine workflow executor guiding users through interactive product discovery and support trees',
      'Meta Webhook Ingestion: Idempotent processing of delivery receipts, read ticks, media payloads, and quick-reply interactions',
      'AI Assistant Integrations: Automated customer support responses powered by OpenAI ChatGPT and Google Gemini API connectors'
    ],
    architecture: 'Asynchronous event-driven architecture using FastAPI ASGI workers, distributed Celery task queues for burst message dispatching, and Socket.IO for multi-agent desktop synchronization.',
    docSlug: 'docs/projects/liliya_whatsapp_crm_api.md'
  },
  'tequila-restaurant': {
    id: 'tequila-restaurant',
    title: "Tequila's Mexican Restaurant Platform",
    subtitle: 'Multi-Location Dining Loyalty, Rewards Ledger & Operations Suite',
    category: 'Hospitality & Retail',
    role: 'Backend Architect',
    gradient: 'project-gradient-1',
    featured: false,
    description: 'Enterprise customer dining loyalty rewards ledger, dual-mode fraud-resistant visit claim verification (GPS check-ins & receipt photo validation), and geo-targeted push notification suite for a multi-branch restaurant chain.',
    tech: ['Django & DRF', 'Python', 'MySQL', 'Redis', 'Celery', 'Firebase Cloud Messaging (FCM v1)', 'Pillow', 'Custom Dynamic RBAC'],
    metrics: [
      { label: 'Points Ledger', value: 'Double-Entry Accounting' },
      { label: 'Anti-Fraud', value: 'GPS & Receipt Validation' },
      { label: 'Targeting', value: 'Geo-Targeted FCM v1' }
    ],
    features: [
      'Double-Entry Rewards Ledger: Auditable ledger regulating points redemption in strict 100-point blocks against verified balances',
      'Anti-Fraud Verification: Dual-mode validation combining real-time GPS coordinate geofencing with bill receipt photo moderation',
      'Daily Rate Limiting: Branch-specific daily claim frequency limits preventing duplicate point accumulation exploits',
      'Geo-Targeted Push Broadcasts: Asynchronous Celery workers broadcasting rich FCM push notifications exclusively to diners who favorited designated branches',
      'Multi-Branch Role Management: Granular RBAC isolating corporate administrators from individual branch managers'
    ],
    architecture: 'Robust Django REST Framework architecture with Celery workers for geo-fenced push broadcasts and atomic database transactions for ledger consistency.',
    docSlug: 'docs/projects/tequila-restaurant-rewards-backend.md'
  },
  'sonic-jewellers': {
    id: 'sonic-jewellers',
    title: 'Sonic Jewellers',
    subtitle: 'Enterprise B2B/B2C Jewellery E-Commerce & Custom Manufacturing Backend',
    category: 'Hospitality & Retail',
    role: 'Backend Developer',
    gradient: 'project-gradient-2',
    featured: false,
    description: 'Scalable e-commerce and bespoke order management backend accommodating intricate domain constraints (fluctuating purities, custom alloys, and factory job cards) alongside retail catalogue sales.',
    tech: ['Django & DRF', 'Python', 'MySQL', 'Redis', 'Celery', 'Dockerized imgproxy', 'WeasyPrint', 'openpyxl', 'FCM'],
    metrics: [
      { label: 'Form Engine', value: 'Dynamic Metadata Driven' },
      { label: 'Manufacturing', value: 'Multi-Angle CAD & Voice' },
      { label: 'Work Orders', value: 'Automated WeasyPrint PDF' }
    ],
    features: [
      'Dynamic Form Metadata Engine: Renders product customization schemas accommodating variable gold purities (91.6 KDM, 75.0 18K) and weights',
      'Bespoke Order Pipeline: Supports customer design uploads with multi-angle photos and spoken audio voice memo instructions',
      'Automated Factory Documents: Background Celery workers generate production-floor PDF work-orders via WeasyPrint and Excel batch manifests',
      'High-Speed Media Processing: Integrated Dockerized imgproxy for on-the-fly thumbnail generation and watermark protection',
      'Push & Email Alerts: Asynchronous customer notifications at each manufacturing milestone (wax modeling, casting, hallmarking)'
    ],
    architecture: 'Modular Django REST Framework application integrated with Redis caching, Celery document generation workers, and an image processing microservice.',
    docSlug: 'docs/projects/sonic-jewellers-backend.md'
  },
  'smtoll-collector': {
    id: 'smtoll-collector',
    title: 'SM Toll Collector',
    subtitle: 'Multi-Plaza Transit Fare & POS Management System',
    category: 'Enterprise & ERP',
    role: 'Backend API Engineer',
    gradient: 'project-gradient-3',
    featured: false,
    description: 'Mission-critical toll plaza operations and transit revenue collection platform automating lane operations, shift handovers, vehicle classification, fare calculation, and non-destructive audit logging.',
    tech: ['Django 4.2', 'Django REST Framework', 'MySQL', 'Custom Bearer Session Auth', 'Vue.js'],
    metrics: [
      { label: 'Ticketing Speed', value: 'Sub-Second Lane POS' },
      { label: 'Data Integrity', value: 'Tamper-Resistant Auditing' },
      { label: 'Governance', value: 'Multi-Plaza RBAC Isolation' }
    ],
    features: [
      'High-Speed Booth POS: Scalable REST endpoints allowing lane booth operators to process vehicle fares without lane queuing delays',
      'Automated Vehicle Classification: Dynamically computes tolls based on axle count, weight thresholds, and concessionaire rules',
      'Tamper-Resistant Audit Trail: Non-destructive financial logging preventing cash leakage and shift reconciliation discrepancies',
      'Operator Shift Handover: Automated end-of-shift reconciliation balancing physical cash drawer amounts with electronic records',
      'Plaza-Level Isolation: Role-Based Access Control enforcing strict separation between plaza managers, supervisors, and booth operators'
    ],
    architecture: 'Django 4.2 REST API with custom session management and optimized database transactions designed for high-concurrency hardware ticketing lanes.',
    docSlug: 'docs/projects/smtoll-collector-backend.md'
  },
  'fnf-restaurant': {
    id: 'fnf-restaurant',
    title: 'F&F (Food & Fork) Restaurant Backend',
    subtitle: 'Hospitality Management Platform & Culinary Cost Engineering Engine',
    category: 'Hospitality & Retail',
    role: 'Backend Developer',
    gradient: 'project-gradient-4',
    featured: false,
    description: 'Hospitality backend platform streaming real-time table reservations, interactive floor map layouts, dynamic timeslot bookings, and back-of-house recipe cost engineering.',
    tech: ['Django REST Framework', 'Python', 'Celery', 'Redis', 'Socket.IO', 'Node.js', 'MySQL', 'FastAPI Event Bridge'],
    metrics: [
      { label: 'Table Booking', value: 'Zero Race Conditions' },
      { label: 'Cost Engine', value: 'Real-Time VAT & Margins' },
      { label: 'Messaging', value: 'WhatsApp Booking Alerts' }
    ],
    features: [
      'Real-Time Floor Map Sync: Bidirectional Socket.IO updates ensuring table availability is synchronized across host stands with zero double bookings',
      'Culinary Cost Engineering: Back-of-house recipe calculator determining real-time ingredient costs, VAT margins, and allergen flags',
      'Dynamic Timeslot Management: Time and day-specific menu availability and shift seating configurations',
      'WhatsApp Automation: Celery workers sending automated reservation confirmations, modifications, and cancellation alerts via WhatsApp',
      'Supplier & Inventory Control: Raw ingredient intake tracking and supplier procurement management'
    ],
    architecture: 'Dual-service architecture leveraging Django REST Framework for core business logic and a lightweight Node.js/Socket.IO microservice for real-time table state broadcasting.',
    docSlug: 'docs/projects/fnf-restaurant-management-backend.md'
  },
  'sagar-aqua': {
    id: 'sagar-aqua',
    title: 'Sagar Aqua (Aquaculture IoT)',
    subtitle: 'Industrial IoT Water Quality Monitoring & Automated Aerator Motor Control',
    category: 'IoT & Systems',
    role: 'Backend & IoT Engineer',
    gradient: 'project-gradient-3',
    featured: false,
    description: 'Industrial IoT aquaculture platform tailored for modern fishery and prawn pond management. Aggregates real-time ecological telemetry (dissolved oxygen, temperature) and triggers automated motor interventions.',
    tech: ['FastAPI', 'Python-Socket.IO', 'Raw TCP/IP', 'MySQL', 'SQLAlchemy', 'ReactJS'],
    metrics: [
      { label: 'Connectivity', value: 'Continuous Raw TCP' },
      { label: 'Motor Automation', value: 'Threshold Aerator Relays' },
      { label: 'Live Telemetry', value: 'Socket.IO Dashboards' }
    ],
    features: [
      'Raw TCP Socket Listener: Continuous low-latency telemetry listener gathering dissolved oxygen, salinity, and temperature metrics from pond-side sensors',
      'Automated Motor Relays: Triggers starter and soft-starter aerator motor cycles explicitly derived from real-time oxygen thresholds',
      'Fail-Safe Hardware Logic: Automatic emergency alerts and motor shutdown protection against electrical surges and phase loss',
      'Live Sensor Dashboard: Real-time telemetry streaming via Socket.IO giving farm operators instantaneous visibility over all active ponds',
      'Historical Analytics: Trend analytics and pond cycle logs optimizing feed schedules and ecological stability'
    ],
    architecture: 'High-speed asynchronous Python backend with raw TCP socket daemon for hardware communication, SQLAlchemy ORM for telemetry logging, and Socket.IO for client dashboard synchronization.',
    docSlug: null
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Theme Toggle System ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');

  function updateThemeUI(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      if (sunIcon && moonIcon) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
      }
    } else {
      document.documentElement.classList.remove('dark');
      if (sunIcon && moonIcon) {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      }
      if (themeToggleBtn) {
        themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      }
    }
  }

  // Initial check
  const isDarkInitial = document.documentElement.classList.contains('dark');
  updateThemeUI(isDarkInitial);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      const nextTheme = isCurrentlyDark ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      updateThemeUI(!isCurrentlyDark);
    });
  }

  // Respond to OS preference change if user hasn't explicitly set preference
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      updateThemeUI(e.matches);
    }
  });

  // --- 2. Navbar Scroll Glass State ---
  const navbar = document.getElementById('navbar');
  const handleScrollNavbar = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('glass', 'shadow-smooth', 'py-3');
      navbar.classList.remove('bg-transparent', 'py-5');
    } else {
      navbar.classList.remove('glass', 'shadow-smooth', 'py-3');
      navbar.classList.add('bg-transparent', 'py-5');
    }
  };
  window.addEventListener('scroll', handleScrollNavbar, { passive: true });
  handleScrollNavbar();

  // --- 3. Mobile Navigation Drawer ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');
  const mobileMenuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileMenuDrawer.classList.remove('opacity-0', 'pointer-events-none');
    mobileMenuDrawer.classList.add('opacity-100', 'pointer-events-auto');
    mobileMenuPanel.classList.remove('translate-x-full');
    mobileMenuPanel.classList.add('translate-x-0');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenuDrawer.classList.remove('opacity-100', 'pointer-events-auto');
    mobileMenuDrawer.classList.add('opacity-0', 'pointer-events-none');
    mobileMenuPanel.classList.remove('translate-x-0');
    mobileMenuPanel.classList.add('translate-x-full');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuCloseBtn) mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);
  if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- 4. Smooth Anchor Scrolling & Active Nav Highlighting ---
  const NAVBAR_OFFSET = 80;
  const navLinks = document.querySelectorAll('.desktop-nav-link, .mobile-nav-link');
  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function setActiveNavLink(currentId) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-50', 'dark:bg-indigo-500/10');
        link.classList.remove('text-gray-500', 'dark:text-gray-400');
      } else {
        link.classList.remove('text-indigo-600', 'dark:text-indigo-400', 'bg-indigo-50', 'dark:bg-indigo-500/10');
        link.classList.add('text-gray-500', 'dark:text-gray-400');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNavLink(entry.target.id);
        }
      });
    }, {
      rootMargin: `-${NAVBAR_OFFSET + 10}px 0px -55% 0px`,
      threshold: 0
    });

    sections.forEach(s => navObserver.observe(s));
  }

  // Smooth scroll click handler
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const top = targetEl.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- 5. Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --- 6. About Stats Counter Animation ---
  const aboutSection = document.getElementById('about');
  const statYears = document.getElementById('stat-years');
  const statYearsHero = document.getElementById('stat-years-hero');
  const statApis = document.getElementById('stat-apis');
  const statCgpa = document.getElementById('stat-cgpa');
  let countersAnimated = false;

  function runCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    const duration = 1800;
    const startTime = performance.now();

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out

      const yearsVal = (Math.floor(eased * 30) / 10).toFixed(0);
      const apisVal = Math.floor(eased * 15);
      const cgpaVal = (eased * 8.71).toFixed(2);

      if (statYears) statYears.textContent = `${yearsVal}+`;
      if (statYearsHero) statYearsHero.textContent = `${yearsVal}+`;
      if (statApis) statApis.textContent = `${apisVal}+`;
      if (statCgpa) statCgpa.textContent = cgpaVal;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        if (statYears) statYears.textContent = '3+';
        if (statYearsHero) statYearsHero.textContent = '3+';
        if (statApis) statApis.textContent = '15+';
        if (statCgpa) statCgpa.textContent = '8.71';
      }
    }

    requestAnimationFrame(update);
  }

  if (aboutSection && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounters();
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.2 });
    counterObserver.observe(aboutSection);
  } else {
    runCounters();
  }

  // --- 7. Project Category & Search Filtering ---
  const categoryTabs = document.querySelectorAll('.category-tab');
  const projectCards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('project-search');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const noProjectsMsg = document.getElementById('no-projects-message');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  let currentCategory = 'All';
  let currentSearch = '';

  function filterProjects() {
    let matchCount = 0;
    const query = currentSearch.trim().toLowerCase();

    projectCards.forEach((card) => {
      const category = card.getAttribute('data-category');
      const isFeatured = card.getAttribute('data-featured') === 'true';
      const title = card.getAttribute('data-title')?.toLowerCase() || '';
      const subtitle = card.getAttribute('data-subtitle')?.toLowerCase() || '';
      const tech = card.getAttribute('data-tech')?.toLowerCase() || '';
      const desc = card.getAttribute('data-description')?.toLowerCase() || '';

      // Check category match
      let categoryMatch = false;
      if (currentCategory === 'All') {
        categoryMatch = true;
      } else if (currentCategory === 'Featured') {
        categoryMatch = isFeatured;
      } else {
        categoryMatch = category === currentCategory;
      }

      // Check search match
      let searchMatch = true;
      if (query) {
        searchMatch = title.includes(query) ||
                      subtitle.includes(query) ||
                      tech.includes(query) ||
                      desc.includes(query) ||
                      category.toLowerCase().includes(query);
      }

      if (categoryMatch && searchMatch) {
        card.style.display = '';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (noProjectsMsg) {
      if (matchCount === 0) {
        noProjectsMsg.classList.remove('hidden');
      } else {
        noProjectsMsg.classList.add('hidden');
      }
    }
  }

  categoryTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => {
        t.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/25', 'scale-105');
        t.classList.add('bg-gray-100', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-gray-400');
      });
      tab.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/25', 'scale-105');
      tab.classList.remove('bg-gray-100', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-gray-400');

      currentCategory = tab.getAttribute('data-category');
      filterProjects();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      if (searchClearBtn) {
        if (currentSearch.length > 0) {
          searchClearBtn.classList.remove('hidden');
        } else {
          searchClearBtn.classList.add('hidden');
        }
      }
      filterProjects();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearch = '';
      searchClearBtn.classList.add('hidden');
      filterProjects();
      if (searchInput) searchInput.focus();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      currentCategory = 'All';
      currentSearch = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.classList.add('hidden');

      categoryTabs.forEach((t) => {
        if (t.getAttribute('data-category') === 'All') {
          t.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/25', 'scale-105');
          t.classList.remove('bg-gray-100', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-gray-400');
        } else {
          t.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-500/25', 'scale-105');
          t.classList.add('bg-gray-100', 'dark:bg-slate-800', 'text-gray-600', 'dark:text-gray-400');
        }
      });

      filterProjects();
    });
  }

  // --- 8. Project Architecture & Deep Dive Modal ---
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalFooterCloseBtn = document.getElementById('modal-footer-close-btn');
  const modalBanner = document.getElementById('modal-banner');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalRole = document.getElementById('modal-role');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalOverview = document.getElementById('modal-overview');
  const modalArchitecture = document.getElementById('modal-architecture');
  const modalArchitectureWrapper = document.getElementById('modal-architecture-wrapper');
  const modalFeatures = document.getElementById('modal-features');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const modalDocNote = document.getElementById('modal-doc-note');

  let lastActiveElement = null;

  function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project || !modal) return;

    lastActiveElement = document.activeElement;

    // Reset gradient classes on banner
    modalBanner.className = `p-6 sm:p-8 ${project.gradient} text-white relative flex-shrink-0`;
    modalCategory.textContent = project.category;
    modalTitle.textContent = project.title;
    modalSubtitle.textContent = project.subtitle;
    modalRole.textContent = project.role;
    modalOverview.textContent = project.description;

    // Render Metrics
    if (modalMetrics) {
      if (project.metrics && project.metrics.length > 0) {
        modalMetrics.innerHTML = project.metrics.map(m => `
          <div class="bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-gray-800 rounded-xl p-3.5 text-center">
            <div class="text-xs text-gray-500 dark:text-gray-400 font-medium">${m.label}</div>
            <div class="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-0.5">${m.value}</div>
          </div>
        `).join('');
        modalMetrics.parentElement.classList.remove('hidden');
      } else {
        modalMetrics.parentElement.classList.add('hidden');
      }
    }

    // Render Architecture
    if (modalArchitectureWrapper && modalArchitecture) {
      if (project.architecture) {
        modalArchitecture.textContent = project.architecture;
        modalArchitectureWrapper.classList.remove('hidden');
      } else {
        modalArchitectureWrapper.classList.add('hidden');
      }
    }

    // Render Key Features
    if (modalFeatures) {
      if (project.features && project.features.length > 0) {
        modalFeatures.innerHTML = project.features.map(f => `
          <li class="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2.5">
            <span class="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5 flex-shrink-0"></span>
            <span>${f}</span>
          </li>
        `).join('');
        modalFeatures.parentElement.classList.remove('hidden');
      } else {
        modalFeatures.parentElement.classList.add('hidden');
      }
    }

    // Render Tech Badges
    if (modalTechStack) {
      modalTechStack.innerHTML = project.tech.map(t => `
        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium border border-gray-200/50 dark:border-gray-700/50">
          ${t}
        </span>
      `).join('');
    }

    // Doc note
    if (modalDocNote) {
      modalDocNote.textContent = project.docSlug
        ? `Detailed architecture documented in ${project.docSlug}`
        : 'Enterprise Production System';
    }

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalCloseBtn?.focus();
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  // Bind project cards
  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-open-modal');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalFooterCloseBtn) modalFooterCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal && modal.classList.contains('active')) {
        closeProjectModal();
      }
      if (mobileMenuDrawer && mobileMenuDrawer.classList.contains('opacity-100')) {
        closeMobileMenu();
      }
    }
  });

  // --- 9. Contact Form & EmailJS Integration ---
  const contactForm = document.getElementById('contact-form');
  const formSubmitBtn = document.getElementById('contact-submit-btn');
  const formBtnText = document.getElementById('contact-btn-text');
  const formBtnSpinner = document.getElementById('contact-btn-spinner');
  const formStatusSuccess = document.getElementById('contact-status-success');
  const formStatusError = document.getElementById('contact-status-error');

  const EMAILJS_SERVICE_ID = 'service_8i4tb8o';
  const EMAILJS_TEMPLATE_ID = 'template_yegui8u';
  const EMAILJS_PUBLIC_KEY = 'g4L8bzz1WTAvJsczM';

  // Initialize EmailJS if library loaded
  if (window.emailjs && EMAILJS_PUBLIC_KEY) {
    try {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    } catch (err) {
      console.warn('EmailJS initialization note:', err);
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput?.value.trim();
      const email = emailInput?.value.trim();
      const message = messageInput?.value.trim();

      if (!name || !email || !message) return;

      // Loading UI
      formSubmitBtn.disabled = true;
      if (formBtnText) formBtnText.textContent = 'Sending...';
      if (formBtnSpinner) formBtnSpinner.classList.remove('hidden');
      if (formStatusSuccess) formStatusSuccess.classList.add('hidden');
      if (formStatusError) formStatusError.classList.add('hidden');

      let sent = false;

      if (window.emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
        try {
          await window.emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              from_name: name,
              from_email: email,
              message: message,
              reply_to: email
            },
            EMAILJS_PUBLIC_KEY
          );
          sent = true;
        } catch (err) {
          console.error('EmailJS send error:', err);
          sent = false;
        }
      }

      formSubmitBtn.disabled = false;
      if (formBtnText) formBtnText.textContent = 'Send Message';
      if (formBtnSpinner) formBtnSpinner.classList.add('hidden');

      if (sent) {
        if (formStatusSuccess) formStatusSuccess.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => {
          if (formStatusSuccess) formStatusSuccess.classList.add('hidden');
        }, 6000);
      } else {
        // Fallback: If EmailJS encounters an error or network drop, provide mailto link fallback
        if (formStatusError) formStatusError.classList.remove('hidden');
        setTimeout(() => {
          if (formStatusError) formStatusError.classList.add('hidden');
        }, 8000);
      }
    });
  }

  // --- 10. Scroll To Top Button ---
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const handleScrollTopBtn = () => {
    if (window.scrollY > 350) {
      scrollToTopBtn?.classList.add('visible');
    } else {
      scrollToTopBtn?.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', handleScrollTopBtn, { passive: true });
  handleScrollTopBtn();

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
