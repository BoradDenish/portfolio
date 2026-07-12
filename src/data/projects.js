const projects = [
  {
    title: 'Mr. Trust - Review Management System',
    description: 'Multi-panel review management platform for businesses. Three user roles: Admin (analytics dashboard, verify/unverify reviews with photos, manage users), Business Client (hotels, cafes, restaurants), and Customers (login, submit reviews with photos, like reviews).',
    tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'Bootstrap', 'JavaScript', 'jQuery', 'JWT'],
    github: '#',
    live: '#',
    stars: 0,
    gradient: 'project-gradient-1',
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
    gradient: 'project-gradient-3',
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
    description: 'Comprehensive WhatsApp CRM platform with Meta API integration, contact management, real-time messaging via Socket.IO, campaign broadcasting, workflow automation, chatbot builder, and chat assignment.',
    tech: ['FastAPI', 'Node.js', 'Next.js', 'Socket.IO', 'Redis', 'Celery', 'MySQL', 'Meta API'],
    github: '#',
    live: '#',
    gradient: 'project-gradient-2',
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
    description: 'Restaurant management system with user panel for time/day-wise menus and admin panel for customer, ingredient, and supplier management. Features time-slot based reservations with WhatsApp CRM integration.',
    tech: ['Vue.js', 'Django REST Framework', 'MySQL', 'Celery', 'WhatsApp CRM', 'Third-party APIs'],
    github: '#',
    live: '#',
    gradient: 'project-gradient-4',
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
    description: 'High-traffic Toll Plaza Management system to automate lane operations and toll collection. Developed scalable backend APIs using Django REST Framework to handle real-time transaction processing and logging.',
    tech: ['Django', 'Django REST Framework', 'MySQL', 'Vue.js'],
    github: '#',
    live: '#',
    gradient: 'project-gradient-5',
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

export default projects
