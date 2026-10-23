import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Frameworks & Languages',
    description: 'High-performance web backends, asynchronous runtimes, and concurrent service architectures.',
    iconName: 'Server',
    skills: [
      { name: 'Python 3', highlight: true },
      { name: 'FastAPI (ASGI)', highlight: true },
      { name: 'Django & DRF', highlight: true },
      { name: 'Rust (Axum & Tokio)', highlight: true },
      { name: 'Celery Distributed Queues', highlight: true },
      { name: 'Node.js', highlight: false },
      { name: 'AsyncIO & Concurrency', highlight: true },
      { name: 'RESTful API Architecture', highlight: true }
    ]
  },
  {
    title: 'IoT Telemetry & Protocols',
    description: 'Hardware communication pipelines, socket listeners, and edge-to-cloud integrations.',
    iconName: 'Cpu',
    skills: [
      { name: 'Raw TCP/IP Sockets', highlight: true },
      { name: 'WebSockets', highlight: true },
      { name: 'Python-Socket.IO', highlight: true },
      { name: 'TSPL Printer Protocol', highlight: true },
      { name: 'Port 9100 Raw Spooling', highlight: true },
      { name: 'Edge NAT Traversal', highlight: true },
      { name: 'Relay & Motor Control', highlight: false },
      { name: 'Hardware Telemetry Parsing', highlight: true }
    ]
  },
  {
    title: 'Databases & In-Memory Stores',
    description: 'Relational schema design, query optimization, indexing, and distributed caching.',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', highlight: true },
      { name: 'MySQL', highlight: true },
      { name: 'Redis (Broker & Cache)', highlight: true },
      { name: 'SQLAlchemy ORM', highlight: true },
      { name: 'Django ORM', highlight: true },
      { name: 'SQLx (Rust)', highlight: true },
      { name: 'Database Triggers & Quotas', highlight: true },
      { name: 'Query Optimization & Indexing', highlight: true }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Production server provisioning, reverse proxies, and continuous integration.',
    iconName: 'Cloud',
    skills: [
      { name: 'Ubuntu Linux Administration', highlight: true },
      { name: 'AWS (EC2)', highlight: true },
      { name: 'Nginx Reverse Proxy', highlight: true },
      { name: 'Gunicorn & Uvicorn', highlight: true },
      { name: 'Docker & Microservices', highlight: true },
      { name: 'Linux Systemd Daemons', highlight: true },
      { name: 'GitHub Actions CI/CD', highlight: true },
      { name: 'SSL / Certbot', highlight: false }
    ]
  },
  {
    title: 'Desktop Automation & Systems Tooling',
    description: 'Native desktop applications, hardware libraries, and low-level system bindings.',
    iconName: 'Terminal',
    skills: [
      { name: 'PyQt5 Desktop UI', highlight: true },
      { name: 'Ctypes (Win32 FFI & DLLs)', highlight: true },
      { name: 'Linux CUPS Raw Printing', highlight: true },
      { name: 'PyInstaller Packaging', highlight: true },
      { name: 'CairoSVG & Pillow Image Pipeline', highlight: false },
      { name: 'WeasyPrint PDF Engine', highlight: false },
      { name: 'Git & Version Control', highlight: true },
      { name: 'Postman & Insomnia', highlight: false }
    ]
  },
  {
    title: 'Fintech, Messaging & AI Integrations',
    description: 'Enterprise third-party APIs, webhooks, payment vaulting, and AI models.',
    iconName: 'Layers',
    skills: [
      { name: 'Meta WhatsApp Cloud API', highlight: true },
      { name: 'Razorpay Payment Gateway & Webhooks', highlight: true },
      { name: 'Stripe & PayPal Tokenized Vaulting', highlight: true },
      { name: 'Firebase Cloud Messaging (FCM v1)', highlight: true },
      { name: 'Google Distance Matrix API', highlight: false },
      { name: 'YOLOv8 & Computer Vision (ONNX)', highlight: true },
      { name: 'OpenAI & Google Gemini APIs', highlight: false },
      { name: 'Multi-Tenant Hierarchical RBAC', highlight: true }
    ]
  }
];
