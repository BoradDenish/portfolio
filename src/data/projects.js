const projects = [
  {
    id: 'society-mitr',
    title: 'Society Mitr (सोसायटी मित्र)',
    subtitle: 'High-Performance Housing Society ERP & AI Vehicle Gatekeeping Platform',
    category: 'Enterprise & ERP',
    role: 'Lead Backend & Systems Engineer',
    gradient: 'project-gradient-1',
    featured: true,
    stars: 5,
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
    docSlug: 'society-mitr.md',
    github: '#',
    live: '#'
  },
  {
    id: 'thinkx-panic-alarm',
    title: 'ThinkX Panic Alarm System',
    subtitle: 'Real-Time IoT Emergency Alert Platform & Edge Gateway',
    category: 'IoT & Systems',
    role: 'IoT Cloud & Backend Engineer',
    gradient: 'project-gradient-3',
    featured: true,
    stars: 5,
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
    docSlug: 'thinkx-panic-alarm-backend.md',
    github: '#',
    live: '#'
  },
  {
    id: 'openup-portal',
    title: 'OpenUp Portal',
    subtitle: 'On-Demand Emergency Roadside Assistance & Lockout Dispatch Platform',
    category: 'Logistics & SaaS',
    role: 'Backend & API Engineer',
    gradient: 'project-gradient-2',
    featured: true,
    stars: 5,
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
    docSlug: 'openup-portal.md',
    github: '#',
    live: '#'
  },
  {
    id: 'industrial-label-printer',
    title: 'Industrial Thermal Label & Barcode Suite',
    subtitle: 'Micro-Precision Hardware Desktop Automation Suite for TSPL Thermal Printers',
    category: 'Automation & Desktop',
    role: 'Systems & Desktop Automation Engineer',
    gradient: 'project-gradient-4',
    featured: true,
    stars: 5,
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
    docSlug: 'industrial-label-printer-suite.md',
    github: '#',
    live: '#'
  },
  {
    id: 'liliya-whatsapp-crm',
    title: 'Liliya API — WhatsApp Marketing CRM',
    subtitle: 'Enterprise WhatsApp Marketing Engine, Visual Chatbot Builder & Live Inbox',
    category: 'Messaging & AI',
    role: 'Lead Backend Engineer',
    gradient: 'project-gradient-5',
    featured: true,
    stars: 5,
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
    docSlug: 'liliya_whatsapp_crm_api.md',
    github: '#',
    live: '#'
  },
  {
    id: 'tequila-restaurant',
    title: "Tequila's Mexican Restaurant Platform",
    subtitle: 'Multi-Location Dining Loyalty, Rewards Ledger & Operations Suite',
    category: 'Hospitality & Retail',
    role: 'Backend Architect',
    gradient: 'project-gradient-1',
    featured: false,
    stars: 4,
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
    docSlug: 'tequila-restaurant-rewards-backend.md',
    github: '#',
    live: '#'
  },
  {
    id: 'sonic-jewellers',
    title: 'Sonic Jewellers',
    subtitle: 'Enterprise B2B/B2C Jewellery E-Commerce & Custom Manufacturing Backend',
    category: 'Hospitality & Retail',
    role: 'Backend Developer',
    gradient: 'project-gradient-2',
    featured: false,
    stars: 4,
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
    docSlug: 'sonic-jewellers-backend.md',
    github: '#',
    live: '#'
  },
  {
    id: 'smtoll-collector',
    title: 'SM Toll Collector',
    subtitle: 'Multi-Plaza Transit Fare & POS Management System',
    category: 'Enterprise & ERP',
    role: 'Backend API Engineer',
    gradient: 'project-gradient-3',
    featured: false,
    stars: 4,
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
    docSlug: 'smtoll-collector-backend.md',
    github: '#',
    live: '#'
  },
  {
    id: 'fnf-restaurant',
    title: 'F&F (Food & Fork) Restaurant Backend',
    subtitle: 'Hospitality Management Platform & Culinary Cost Engineering Engine',
    category: 'Hospitality & Retail',
    role: 'Backend Developer',
    gradient: 'project-gradient-4',
    featured: false,
    stars: 4,
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
    docSlug: 'fnf-restaurant-management-backend.md',
    github: '#',
    live: '#'
  },
  {
    id: 'mr-trust',
    title: 'Mr. Trust (Mister Trust)',
    subtitle: 'Bilingual (DE/EN) Photo-Verified Customer Review & Reputation Platform',
    category: 'Logistics & SaaS',
    role: 'Full-Stack Backend Engineer',
    gradient: 'project-gradient-5',
    featured: false,
    stars: 4,
    description: 'Multi-tenant customer review and reputation management platform built for the European market (German and English). Combats fake reviews via mandatory photo-proof verification and provides verified trust badges.',
    tech: ['Django 4.2', 'Django REST Framework', 'Celery', 'Redis', 'MySQL', 'Tailwind CSS', 'DataTables'],
    metrics: [
      { label: 'Verification', value: 'Photo-Proof Validation' },
      { label: 'Portals', value: 'Triple-Role Multi-Tenant' },
      { label: 'Localization', value: 'Full DE / EN Bilingual' }
    ],
    features: [
      'Photo-Proof Verification Engine: Enforces image submission (bills, visit receipts) with moderation queues to eliminate fraudulent reviews',
      'Triple-Portal Multi-Tenant Architecture: Super Admin moderation dashboard, Business Client self-service suite, and Public Consumer portal',
      'Reputation Analytics: Real-time visual sentiment metrics, customer ratings trends, and response management',
      'Embeddable Trust Badges: Dynamic SVG trust widgets and verified certificate seals for client websites',
      'Bilingual Support: Full internationalization supporting German and English locales across all user endpoints'
    ],
    architecture: 'Django 4.2 application with Celery background image optimization, RESTful API endpoints for external widgets, and strict multi-tier permissions.',
    docSlug: 'mr-trust-review-platform.md',
    github: '#',
    live: '#'
  },
  {
    id: 'sagar-aqua',
    title: 'Sagar Aqua (Aquaculture IoT)',
    subtitle: 'Industrial IoT Water Quality Monitoring & Automated Aerator Motor Control',
    category: 'IoT & Systems',
    role: 'Backend & IoT Engineer',
    gradient: 'project-gradient-3',
    featured: false,
    stars: 4,
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
    docSlug: null,
    github: '#',
    live: '#'
  }
]

export default projects
