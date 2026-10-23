import { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'master-global-tech',
    title: 'Backend Developer',
    company: 'Master Global Tech',
    location: 'Rajkot, Gujarat, India',
    period: 'Jul 2026 — Present',
    type: 'Full-time',
    description: 'Backend developer architecting high-performance RESTful APIs, distributed microservices, and asynchronous background pipelines across enterprise web and cloud platforms.',
    highlights: [
      'Architecting and delivering production-ready backend services and REST APIs with Python (FastAPI, Django).',
      'Implementing scalable asynchronous job queues and caching layers with Celery and Redis to handle peak system workloads.',
      'Designing robust PostgreSQL & MySQL relational database schemas, query optimizations, and index tuning.',
      'Containerizing microservices using Docker and orchestrating automated deployment pipelines with CI/CD.'
    ],
    skills: [
      'Python',
      'FastAPI',
      'Django',
      'PostgreSQL',
      'MySQL',
      'Redis',
      'Celery',
      'Docker',
      'REST APIs',
      'CI/CD'
    ]
  },
  {
    id: 'inlancer-fulltime',
    title: 'Backend & Systems Engineer',
    company: 'Inlancer Technologies Pvt Ltd',
    location: 'Rajkot, Gujarat, India',
    period: 'Aug 2022 — Jun 2026',
    type: 'Full-time',
    description: 'Lead backend and systems engineer architecting high-throughput distributed services, real-time IoT hardware telemetry pipelines, and cloud deployments across enterprise logistics, housing ERPs, dining platforms, and aquaculture.',
    highlights: [
      'Architected and deployed 15+ production-grade REST APIs and microservices using FastAPI, Django REST Framework, and Rust.',
      'Engineered low-latency raw TCP/IP, WebSockets, and Socket.IO telemetry pipelines for hardware devices, edge gateways, and IoT panels.',
      'Integrated Celery & Redis distributed task queues, reducing peak endpoint response times by 40%+ through non-blocking asynchronous processing.',
      'Built multi-provider tokenized payment vaulting and billing integrations (Stripe, PayPal Vault, Razorpay) with HMAC-SHA256 signature verification.',
      'Designed and tuned normalized relational schemas in PostgreSQL and MySQL, eliminating N+1 query bottlenecks and implementing engine-level triggers.',
      'Managed production cloud infrastructure on Ubuntu AWS EC2 with Nginx reverse proxy, Gunicorn/Uvicorn, systemd daemons, and GitHub Actions CI/CD.'
    ],
    skills: [
      'Python',
      'FastAPI',
      'Django',
      'Rust',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Raw TCP Sockets',
      'WebSockets',
      'AWS EC2',
      'Ubuntu Linux',
      'Docker'
    ]
  },
  {
    id: 'inlancer-intern',
    title: 'Backend Developer Intern',
    company: 'Inlancer Technologies Pvt Ltd',
    location: 'Rajkot, Gujarat, India',
    period: 'Jan 2022 — Jul 2022',
    type: 'Internship',
    description: 'Developed core RESTful endpoints, database models, and authentication services adhering to clean architecture patterns, relational schemas, and comprehensive unit testing.',
    highlights: [
      'Engineered 8+ scalable backend modules and RESTful endpoints using Django and FastAPI.',
      'Modeled normalized relational databases with PostgreSQL and MySQL, enforcing referential integrity and foreign keys.',
      'Implemented secure JWT authentication and role-based access control (RBAC) across multi-user portals.',
      'Collaborated closely with frontend developers and product managers using Git version control and Agile sprint methodologies.'
    ],
    skills: [
      'Python',
      'Django',
      'FastAPI',
      'PostgreSQL',
      'MySQL',
      'JWT Auth',
      'Git',
      'REST APIs'
    ]
  }
];
