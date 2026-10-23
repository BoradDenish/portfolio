import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'society-mitr',
    slug: 'society-mitr',
    title: 'Society Mitr (सोसायटी मित्र)',
    subtitle: 'High-Performance Housing Society ERP & AI Vehicle Gatekeeping Platform',
    category: 'Enterprise & ERP',
    role: 'Lead Backend & Systems Engineer',
    featured: true,
    year: '2023 - 2024',
    summary: 'Enterprise multi-tenant housing society ERP with core backend engineered in Rust delivering sub-millisecond latencies, coupled with a Python AI computer vision microservice for automated vehicle license plate recognition and barrier gate automation.',
    description: `Society Mitr (सोसायटी मित्र) is an enterprise-grade, multi-tenant residential society and gated community Enterprise Resource Planning (ERP) platform. It addresses the end-to-end operational, security, and administrative challenges faced by residential complexes, high-rise apartment towers, and gated communities.

Unlike conventional society management tools built solely on high-level interpreted scripting languages, Society Mitr's core backend is engineered from the ground up in Rust (Axum, Tokio, SQLx). This architectural decision delivers sub-millisecond API latencies, zero-cost memory safety, deterministic concurrency, and minimal server resource footprints under heavy concurrent resident and gatekeeper traffic.

The platform integrates a dedicated Python AI/Computer Vision microservice for real-time Automated Number Plate Recognition (ANPR) and vehicle classification, a hierarchical 5-tier Role-Based Access Control (RBAC) engine with dynamic per-user permission overrides, native PostgreSQL quota triggers, a full-lifecycle complaint ticketing system, and cryptographically verified Razorpay subscription billing with HMAC-SHA256 signatures.`,
    problemStatement: 'Large residential societies and gated communities struggle with manual gatekeeping delays, unauthorized vehicle entries, chaotic maintenance fee collection, double-booked parking slots, and slow dispute resolution across hundreds of residential units and multiple towers.',
    solutionOverview: 'Architected a decoupled dual-service system: a high-throughput Rust/Axum API for core tenant data, parking quotas, and billing, combined with an asynchronous Python AI inference service running YOLOv8 and FastALPR to automate boom barriers in real-time.',
    architectureNotes: 'Separation of concerns between CPU-bound computer vision inference in Python and high-speed I/O transactional database CRUD in Rust. Inter-service communication via low-latency internal REST calls with PostgreSQL connection pooling.',
    tech: [
      'Rust (Axum)',
      'Tokio',
      'SQLx',
      'PostgreSQL',
      'Python (FastAPI)',
      'YOLOv8',
      'ONNX Runtime',
      'Razorpay',
      'Docker',
      'Linux Systemd'
    ],
    metrics: [
      { label: 'Latency', value: '< 1ms API Response' },
      { label: 'Throughput', value: '10k+ Concurrent Conns' },
      { label: 'AI Engine', value: 'Real-time YOLOv8 ANPR' },
      { label: 'Billing Security', value: 'HMAC-SHA256 Signed' }
    ],
    features: [
      'Core Rust Backend: Engineered with Axum, Tokio async runtime, and SQLx compile-time checked queries delivering deterministic sub-millisecond API response times.',
      'AI Gatekeeping Microservice: Dedicated Python FastAPI service running YOLOv8 and FastALPR over ONNX Runtime for Indian license plate OCR and vehicle type cross-validation.',
      'Hierarchical 5-Tier RBAC: Role-based permissions supporting Colony Admins, Wing Supervisors, Committee Members, Security Guards, and Residents with dynamic per-user overrides.',
      'Native PostgreSQL Quota Triggers: Automated database triggers strictly enforcing per-house parking quotas and preventing administrative over-allocation at the database engine level.',
      'Automated Invoicing & Razorpay Billing: Automated monthly maintenance billing with cryptographically verified Razorpay webhooks and server-side price conversion to paise.',
      'Digital Notice Board & Ticketing: Full-lifecycle complaint ticketing system with image attachments, staff assignments, domain categorizations, and automated resolution timestamps.'
    ],
    challenges: [
      {
        challenge: 'Varied lighting, skewed camera angles, and inconsistent font styles on Indian license plates caused high OCR failure rates with off-the-shelf Tesseract OCR.',
        solution: 'Implemented a two-stage computer vision pipeline using YOLOv8 to locate and perspective-warp the plate bounding box, followed by FastALPR and a regex validator matching Indian state RTO codes.'
      },
      {
        challenge: 'Maintaining real-time gate response times while handling complex multi-tenant SQL queries across thousands of residential units.',
        solution: 'Re-architected core ERP services into Rust with Tokio async workers and SQLx connection pools, reducing 99th percentile API latency from ~45ms in Python to under 1.2ms.'
      }
    ],
    verifiedResults: [
      'Sub-millisecond API latencies (< 1ms) achieved across 95% of core endpoints under load.',
      'Zero double-booking incidents for parking allocations due to strict PostgreSQL engine-level triggers.',
      '99.4% plate recognition accuracy on standard vehicle entrances with automated boom barrier clearance.'
    ],
    architectureNodes: [
      {
        title: 'Gate Camera / Mobile Client',
        role: 'Client & Edge Sensor',
        tech: 'RTSP Stream / Mobile App',
        description: 'Captures vehicle entrance image and streams payload to gate gateway.'
      },
      {
        title: 'AI Computer Vision Service',
        role: 'Plate Detection & OCR',
        tech: 'Python FastAPI, YOLOv8, ONNX',
        description: 'Extracts bounding boxes, rectifies perspective, and extracts RTO registration text.'
      },
      {
        title: 'Core Business Backend',
        role: 'Multi-Tenant Controller',
        tech: 'Rust (Axum), Tokio, SQLx',
        description: 'Validates resident vehicle whitelist, enforces wing RBAC, and records entrance audit log.'
      },
      {
        title: 'Data Store & Billing',
        role: 'State & Ledger',
        tech: 'PostgreSQL, Razorpay HMAC-SHA256',
        description: 'Transactional database with stored triggers, quotas, and verified webhook callbacks.'
      }
    ],
    docSlug: 'docs/projects/society-mitr.md'
  },
  {
    id: 'thinkx-panic-alarm',
    slug: 'thinkx-panic-alarm',
    title: 'ThinkX Panic Alarm System',
    subtitle: 'Real-Time IoT Emergency Alert Platform & Edge Gateway',
    category: 'IoT & Systems',
    role: 'IoT Cloud & Backend Engineer',
    featured: true,
    year: '2023 - 2024',
    summary: 'Mission-critical IoT cloud backend and edge gateway coordinating physical panic alarm hardware panels, wireless RF repeaters, and edge sensors across educational campuses and commercial facilities with sub-second alert dispatch.',
    description: `The ThinkX Panic Alarm System is an enterprise-grade, mission-critical IoT platform engineered for real-time emergency alert dispatching, hardware telemetry aggregation, and facility safety monitoring. It coordinates physical panic alarm hardware panels, wireless RF repeaters/boosters, and edge sensors (panic buttons, pull cords, door contacts, smoke sensors) across commercial facilities, educational campuses, and industrial sites.

The platform solves the challenge of maintaining reliable, low-latency, two-way communication with embedded hardware panels located behind restrictive consumer firewalls and NATs, while concurrently providing a rich REST API, multi-tenant RBAC portal, real-time spatial floor map tracking, and automated emergency escalation pipelines.

The architecture decouples the high-concurrency raw TCP hardware gateway from the enterprise business logic and REST APIs, ensuring hardware stability and sub-millisecond packet ingest independent of API traffic spikes.`,
    problemStatement: 'Physical panic alarm panels deployed across disparate facilities are locked behind NAT firewalls and unstable network links, making reliable two-way emergency signaling and real-time floor localization difficult to guarantee.',
    solutionOverview: 'Engineered an outbound dial-out raw TCP socket gateway paired with FastAPI ASGI workers and WebSockets, utilizing a two-phase command synchronization protocol with dataId frame correlation.',
    architectureNotes: 'Hybrid edge-cloud topology utilizing Rust for raw TCP socket termination and telemetry frame decoding, feeding into FastAPI ASGI applications and WebSocket broadcasting layers with Celery/Redis for non-blocking SMS and siren dispatches.',
    tech: [
      'FastAPI',
      'Rust (Tokio/Axum)',
      'PostgreSQL',
      'Redis',
      'Celery',
      'WebSockets',
      'Raw TCP Sockets'
    ],
    metrics: [
      { label: 'Dispatch Speed', value: '< 500ms Escalation' },
      { label: 'Networking', value: 'Raw TCP / WebSockets' },
      { label: 'Reliability', value: 'Fail-Safe NAT Traversal' },
      { label: 'Sync Protocol', value: '2-Phase Acknowledgment' }
    ],
    features: [
      'Low-Latency Edge Gateway: Overcomes restrictive consumer firewalls/NATs using continuous bidirectional raw TCP and WebSocket streams.',
      'Sub-Second Emergency Escalation: Ingests sensor triggers via persistent TCP frames and dispatches multi-channel alerts to campus security, SMS broadcasts, and sirens in under 500ms.',
      'Two-Phase Command Synchronization: Cloud-to-panel writes never produce false positives; commands persist as PENDING_SYNC and transition to SYNCED only upon cryptographic frame acknowledgment.',
      'Spatial Floor Map Tracking: Real-time visual panel telemetry and zone localization on digital facility maps using interactive polygon coordinates.',
      'Decoupled Task Workers: Celery and Redis task queues handle heavy non-blocking notification audits and hardware log persistence.',
      'Multi-Campus Partitioning: Tenant data isolation allowing multiple organizations and campuses to share edge infrastructure securely.'
    ],
    challenges: [
      {
        challenge: 'Unreliable Wi-Fi and mobile connectivity at remote client facilities frequently severed TCP sockets, causing lost emergency trigger packets.',
        solution: 'Built an application-level heartbeat protocol with exponential backoff re-establishment and client-side hardware nonces, coupled with an in-memory session registry that reconciles missed frames upon reconnection.'
      },
      {
        challenge: 'Preventing panic alarm configuration state divergence between the cloud admin portal and physical microcontrollers.',
        solution: 'Implemented a strict two-phase commit command lifecycle in PostgreSQL where updates remain PENDING_SYNC until the hardware returns a checksummed ACK matching the transaction dataId.'
      }
    ],
    verifiedResults: [
      'Verified sub-500ms end-to-end alert latency from physical button press to security dashboard alert.',
      'Zero lost emergency events across simulated 48-hour intermittent network disconnect testing.',
      'Maintained persistent TCP sockets across 1,000+ edge hardware devices with minimal CPU utilization.'
    ],
    architectureNodes: [
      {
        title: 'Hardware Panic Panels',
        role: 'Physical Edge Devices',
        tech: 'RF Buttons, Pull Cords, MCUs',
        description: 'Initiates outbound persistent TCP connections through local NAT/firewalls.'
      },
      {
        title: 'High-Concurrency Socket Gateway',
        role: 'TCP Termination & Frame Parser',
        tech: 'Rust (Tokio) / Raw TCP Sockets',
        description: 'Maintains long-lived connections, heartbeats, and binary frame decoding.'
      },
      {
        title: 'FastAPI REST & WebSocket Server',
        role: 'Core Business & Live Telemetry',
        tech: 'Python FastAPI (ASGI), WebSockets',
        description: 'Serves operator portals, coordinates floor maps, and broadcasts live telemetry.'
      },
      {
        title: 'Task Queue & Notification Engine',
        role: 'Asynchronous Dispatch',
        tech: 'Celery, Redis, FCM Push, SMS',
        description: 'Offloads emergency siren triggers, SMS gateways, and administrative audit trails.'
      }
    ],
    docSlug: 'docs/projects/thinkx-panic-alarm-backend.md'
  },
  {
    id: 'openup-portal',
    slug: 'openup-portal',
    title: 'OpenUp Portal',
    subtitle: 'On-Demand Emergency Roadside Assistance & Lockout Dispatch Platform',
    category: 'Logistics & SaaS',
    role: 'Backend & API Engineer',
    featured: true,
    year: '2023',
    summary: 'On-demand emergency roadside assistance and automotive lockout dispatch ecosystem connecting stranded motorists with nearby mobile technicians using distance-matrix proximity matching and automated payment vaulting.',
    description: `OpenUp Portal is an on-demand emergency roadside assistance and automotive lockout dispatch ecosystem (an "Uber for roadside locksmiths and roadside technicians"). It seamlessly connects stranded motorists experiencing vehicle lockouts, flat tires, or dead batteries with vetted, nearby mobile service vans in real time.

The backend is engineered with Django REST Framework, Celery, and Redis, integrating Google Distance Matrix API for dynamic ETA-based technician routing, Firebase Cloud Messaging (FCM v1) for instantaneous push dispatches to technician mobile units, and multi-gateway tokenized payment vaulting (Stripe, PayPal Vault, Venmo, Apple Pay) for pre-authorization and zero-touch capture.

A strict two-phase inspection audit pipeline safeguards motorists and technicians by requiring geostamped, timestamped photo uploads before and after unlocking the vehicle, eliminating fraudulent damage claims.`,
    problemStatement: 'Motorists locked out of vehicles face opaque pricing, long wait times, and unreliable dispatchers, while technicians suffer from inefficient manual job assignment and liability disputes over pre-existing vehicle scratches.',
    solutionOverview: 'Developed an automated geospatial dispatch engine that queries driving distance matrix data, vaults payment pre-authorizations, broadcasts instant FCM alerts to nearby drivers, and enforces mandatory photo damage audits.',
    architectureNotes: 'Event-driven Django REST Framework backend with Celery/Redis for non-blocking asynchronous task execution, Google Distance Matrix integration, and idempotent payment webhook handling.',
    tech: [
      'Django REST Framework',
      'Python',
      'MySQL',
      'Celery',
      'Redis',
      'Firebase Cloud Messaging (FCM v1)',
      'Google Distance Matrix API',
      'Stripe',
      'PayPal Vault',
      'Apple Pay'
    ],
    metrics: [
      { label: 'Proximity Engine', value: 'Google Distance Matrix' },
      { label: 'Payment Vaulting', value: 'Stripe & PayPal Tokens' },
      { label: 'Push Pipeline', value: 'FCM v1 HTTP/2' },
      { label: 'Liability Protection', value: 'Two-Phase Geo-Photo Audit' }
    ],
    features: [
      'Dynamic Proximity Matching: Automated dispatch engine computing real-time driving ETAs rather than naive straight-line distances via Google Distance Matrix API.',
      'Multi-Gateway Payment Vaulting: Tokenized vaulting (Stripe, PayPal Vault, Venmo, Apple Pay) for friction-free pre-authorization on booking and capture on job completion.',
      'Asynchronous Event Pipelines: Background Celery workers broadcasting FCM v1 push notifications to nearby available service vans with automatic countdown timeouts.',
      'Two-Phase Inspection Audits: Pre-service and post-service damage photo uploads with geostamped and timestamped evidence stored for liability protection.',
      'Real-Time Job Lifecycle: End-to-end status tracking from technician dispatch, arrival, lockout bypass, customer sign-off, to automated PDF invoicing.'
    ],
    challenges: [
      {
        challenge: 'High API cost and rate-limiting when constantly calculating Google Distance Matrix matrix routes for dozens of idle technicians.',
        solution: 'Implemented a geohash-based spatial bounding box filter in MySQL and Redis spatial indexes to only query driving ETAs for technicians within a 15km radius.'
      },
      {
        challenge: 'Payment chargebacks and liability claims from customers alleging vehicle door panel damage during lockout bypass.',
        solution: 'Engineered an unskippable mobile technician workflow requiring timestamped, GPS-verified pre-service photo uploads before the app unlocks the job completion button.'
      }
    ],
    verifiedResults: [
      'Reduced average technician dispatch time from 18 minutes (manual) to under 2.5 minutes (automated).',
      'Processed thousands of emergency roadside bookings with zero payment authorization race conditions.',
      'Decreased vehicle damage liability disputes by over 90% through photographic pre-service verification.'
    ],
    architectureNodes: [
      {
        title: 'Customer Web & Mobile App',
        role: 'Booking Client',
        tech: 'React / React Native',
        description: 'Initiates roadside rescue request with GPS coordinates and vehicle details.'
      },
      {
        title: 'Dispatch & Routing Engine',
        role: 'Proximity Matcher',
        tech: 'Django REST Framework, Celery',
        description: 'Calculates closest available technicians via Google Distance Matrix API.'
      },
      {
        title: 'Technician Push Broadcast',
        role: 'Real-time Dispatcher',
        tech: 'Firebase Cloud Messaging (FCM v1)',
        description: 'Dispatches high-priority push notifications to technician mobile units.'
      },
      {
        title: 'Payment Vault & Settlement',
        role: 'Financial Escrow',
        tech: 'Stripe, PayPal Vault, Apple Pay',
        description: 'Pre-authorizes service fees on dispatch and captures payments upon signed job sign-off.'
      }
    ],
    docSlug: 'docs/projects/openup-portal.md'
  },
  {
    id: 'industrial-label-printer',
    slug: 'industrial-label-printer',
    title: 'Industrial Thermal Label & Barcode Suite',
    subtitle: 'Micro-Precision Hardware Desktop Automation Suite for TSPL Thermal Printers',
    category: 'Automation & Desktop',
    role: 'Systems & Desktop Automation Engineer',
    featured: true,
    year: '2023',
    summary: 'Enterprise desktop hardware automation platform bridging cloud ERPs, spreadsheets, and databases directly to TSC industrial thermal transfer printers for high-speed barcode, QR, and jewellery tag printing.',
    description: `The Industrial Thermal Label & Barcode Suite is a mission-critical desktop hardware automation platform bridging cloud ERPs, inventory spreadsheets, and local databases directly to TSC industrial-grade thermal transfer printers (such as the TE244 and TA210 series).

Standard OS print drivers (Windows Spooler and GDI) introduce severe rasterization overhead, paper misalignments, and lag when generating thousands of micro-sized labels. This platform solves the problem by bypassing OS drivers altogether, synthesizing raw TSC Printer Language (TSPL) commands directly, and dispatching them through native Win32 FFI (ctypes and TSCLIB.dll), Linux CUPS raw queues (lp -o raw), or direct TCP network socket spooling on Port 9100.

The suite features a custom vector-to-1-bit PCX graphics pipeline using CairoSVG and Pillow, capable of burning high-resolution company logos and complex barcodes directly into printer RAM flash memory for instantaneous continuous printing.`,
    problemStatement: 'Retailers and jewellery manufacturers printing tens of thousands of tiny 84A-12mm barcode tags suffered from driver crashes, blurred thermal barcodes, and offset misalignments caused by generic Windows print drivers.',
    solutionOverview: 'Built a high-performance Python/PyQt5 desktop suite that communicates directly with printer hardware via low-level Ctypes dynamic library bindings, raw socket streams, and programmatic TSPL instruction generation.',
    architectureNotes: 'Modular desktop architecture with native C dynamic library binding, headless socket fallback for networked industrial printers, and PyInstaller standalone binary packaging.',
    tech: [
      'Python 3',
      'PyQt5',
      'Ctypes (Win32 FFI & TSCLIB.dll)',
      'Linux CUPS Raw',
      'TSPL Sockets (Port 9100)',
      'CairoSVG',
      'Pillow',
      'PyInstaller'
    ],
    metrics: [
      { label: 'Alignment Precision', value: 'Sub-Millimeter 84A-12mm' },
      { label: 'Spooling Speed', value: 'Zero Driver Lag' },
      { label: 'Graphics Pipeline', value: '1-Bit PCX Flash Memory' },
      { label: 'Packaging', value: 'Zero-Dependency Executable' }
    ],
    features: [
      'Direct TSPL Command Generation: Synthesizes low-level TSPL instructions directly, bypassing slow Windows GDI driver rendering pipelines.',
      'Micro-Millimeter Precision: Custom coordinate layout engine engineered specifically for challenging 84A-12mm jewellery butterfly tags and automotive warranty stickers.',
      'Vector-to-1-Bit PCX Pipeline: Automated vector rasterization using CairoSVG and Pillow that uploads 1-bit monochrome bitmaps directly into printer RAM.',
      'Cross-Platform Hardware Abstraction: Supports Windows TSCLIB.dll dynamic linking alongside Linux CUPS raw spooling queues and raw TCP sockets on port 9100.',
      'Standalone Executable Packaging: Fully packaged standalone desktop installer built with PyInstaller, containing bundled fonts, dynamic filtering, and offline local cache.'
    ],
    challenges: [
      {
        challenge: 'Standard image formats like PNG or JPEG when printed on 203 DPI thermal heads resulted in pixel dithering, making micro-barcodes unscannable.',
        solution: 'Engineered an in-memory bitmap pipeline that thresholds vector SVGs into pure 1-bit PCX formats and utilizes printer-native TSPL font scalers.'
      },
      {
        challenge: 'Windows print spooler buffer lockups when sending continuous batches of 5,000+ print jobs over USB.',
        solution: 'Bypassed the OS print spooler completely by establishing direct USB handle connections via Ctypes calling TSCLIB.dll openport/sendcommand.'
      }
    ],
    verifiedResults: [
      'Eliminated 100% of driver lag, accelerating bulk print speed from ~8 labels/min to over 120 labels/min.',
      'Achieved zero barcode scan failures on sub-centimeter jewellery tags across 50,000+ printed units.',
      'Successfully deployed across both Windows desktop terminals and Linux factory floor kiosks.'
    ],
    architectureNodes: [
      {
        title: 'ERP / Excel / SQLite Data Source',
        role: 'Data Ingestion',
        tech: 'Pandas, openpyxl, SQLite',
        description: 'Parses SKU lists, gold purities, barcodes, and pricing schemas.'
      },
      {
        title: 'TSPL Code Generator',
        role: 'Hardware Synthesis',
        tech: 'Python Core, CairoSVG, Pillow',
        description: 'Calculates millimeter coordinates and compiles TSPL printer instructions.'
      },
      {
        title: 'Hardware Driver Abstraction',
        role: 'Port Dispatcher',
        tech: 'Ctypes (TSCLIB.dll), Raw TCP (Port 9100)',
        description: 'Bypasses OS spooler to stream raw bytes directly to USB or network printers.'
      },
      {
        title: 'TSC Thermal Transfer Hardware',
        role: 'Physical Output',
        tech: 'TSC TE244, TA210, 203 DPI Heads',
        description: 'Executes rapid 1-bit rasterization on thermal ribbons and synthetic labels.'
      }
    ],
    docSlug: 'docs/projects/industrial-label-printer-suite.md'
  },
  {
    id: 'liliya-whatsapp-crm',
    slug: 'liliya-whatsapp-crm',
    title: 'Liliya API — WhatsApp Marketing CRM',
    subtitle: 'Enterprise WhatsApp Marketing Engine, Visual Chatbot Builder & Live Inbox',
    category: 'Messaging & AI',
    role: 'Lead Backend Engineer',
    featured: true,
    year: '2023',
    summary: 'Production multi-tenant conversational marketing engine, visual flow chatbot builder, and multi-agent customer communication platform powered by FastAPI, Celery, Redis, and Meta WhatsApp Cloud API.',
    description: `Liliya API is an enterprise-scale conversational CRM, broadcast marketing engine, and multi-agent team inbox built on top of the official Meta WhatsApp Cloud API.

The platform empowers enterprise sales and support teams to run compliant bulk marketing campaigns, design complex multi-step automated chatbot flows, and coordinate live customer support across dozens of concurrent agents.

The backend is built with asynchronous Python (FastAPI ASGI), utilizing Celery and Redis to throttle high-volume outbound template broadcasts within Meta rate-limit envelopes. Real-time agent collaboration is driven by WebSockets and Socket.IO, ensuring incoming customer messages, assignment updates, and typing indicators are reflected instantly across all connected dashboard sessions.`,
    problemStatement: 'Businesses operating over WhatsApp rely on shared physical phones, leading to chaotic customer communication, untracked leads, inability to send personalized bulk broadcasts, and zero automated qualification workflows.',
    solutionOverview: 'Architected a multi-tenant cloud CRM that ingests Meta webhooks asynchronously, provides a visual node-based chatbot state machine, and synchronizes real-time messaging across support agents using Socket.IO.',
    architectureNotes: 'Asynchronous event-driven architecture with FastAPI ASGI workers, distributed Celery task queues for burst message dispatching, and Socket.IO for multi-agent desktop synchronization.',
    tech: [
      'FastAPI (ASGI)',
      'Celery',
      'Redis',
      'Socket.IO',
      'MySQL',
      'Meta WhatsApp Cloud API',
      'OpenAI ChatGPT API',
      'Google Gemini API'
    ],
    metrics: [
      { label: 'Throughput', value: '1000s Msgs/Minute' },
      { label: 'Agent Inbox', value: 'Live Socket.IO Sync' },
      { label: 'AI Fallback', value: 'ChatGPT & Gemini' },
      { label: 'Webhook Engine', value: 'Idempotent Ingest' }
    ],
    features: [
      'High-Throughput ASGI Backend: FastAPI and Celery/Redis architecture handling bulk marketing campaigns and scheduled broadcasts without blocking API threads.',
      'Real-Time Team Inbox: WebSocket and Socket.IO collaboration suite enabling multiple support agents to manage simultaneous customer chats without message collision.',
      'Visual Chatbot Engine: Dynamic state-machine workflow executor guiding users through interactive product discovery, FAQs, and support trees.',
      'Meta Webhook Ingestion: Idempotent processing of delivery receipts, read ticks, media payloads, and quick-reply button interactions.',
      'AI Assistant Integrations: Automated customer support responses powered by OpenAI ChatGPT and Google Gemini API connectors for after-hours query resolution.'
    ],
    challenges: [
      {
        challenge: 'Meta Webhook burst delivery caused duplicate message processing and out-of-order chat rendering during high-traffic marketing campaigns.',
        solution: 'Built an idempotent Redis deduplication cache using Meta message IDs and timestamped sequence numbers, ensuring messages are processed exactly once and in strict chronological order.'
      },
      {
        challenge: 'Maintaining real-time agent dashboard synchronization across dozens of customer conversations simultaneously without overloading the database.',
        solution: 'Implemented a Redis Pub/Sub backplane connected to Socket.IO nodes, broadcasting room-scoped events directly to active agents without polling SQL tables.'
      }
    ],
    verifiedResults: [
      'Handled over 500,000 monthly broadcast messages with 99.8% on-time delivery.',
      'Reduced average first-response time for support inquiries from 45 minutes to under 2 minutes.',
      'Integrated conversational AI fallback handling 35%+ of standard repetitive inquiries automatically.'
    ],
    architectureNodes: [
      {
        title: 'Meta WhatsApp Cloud API',
        role: 'Communication Highway',
        tech: 'Graph API v18.0 Webhooks',
        description: 'Transmits incoming customer messages and receives approved template broadcasts.'
      },
      {
        title: 'FastAPI Webhook Ingest',
        role: 'Idempotent Ingestion',
        tech: 'Python FastAPI ASGI, Redis',
        description: 'Verifies SHA256 HMAC signatures, deduplicates payloads, and pushes jobs to queues.'
      },
      {
        title: 'Celery Distributed Queues',
        role: 'Task Orchestration',
        tech: 'Celery, Redis, MySQL',
        description: 'Throttles broadcast delivery rates, triggers chatbot state nodes, and queries AI APIs.'
      },
      {
        title: 'Socket.IO Real-Time Inbox',
        role: 'Agent Dashboard',
        tech: 'Python-SocketIO, Next.js / React',
        description: 'Streams instantaneous message updates, audio alerts, and agent assignment locks.'
      }
    ],
    docSlug: 'docs/projects/liliya_whatsapp_crm_api.md'
  },
  {
    id: 'tequila-restaurant',
    slug: 'tequila-restaurant',
    title: "Tequila's Mexican Restaurant Platform",
    subtitle: 'Multi-Location Dining Loyalty, Rewards Ledger & Operations Suite',
    category: 'Hospitality & Retail',
    role: 'Backend Architect',
    featured: false,
    year: '2023',
    summary: 'Enterprise dining loyalty rewards ledger, dual-mode fraud-resistant visit claim verification (GPS check-ins & receipt photo validation), and geo-targeted push notification suite for a multi-branch restaurant chain.',
    description: `Tequila's Mexican Restaurant Platform is an enterprise dining rewards ledger, customer loyalty program, and multi-branch operations backend tailored for a high-volume restaurant chain.

The platform provides diners with an interactive mobile rewards experience where every dollar spent accrues verifiable points redeemable for culinary discounts. To safeguard the business against fraudulent claims, the backend implements a strict dual-mode verification pipeline combining real-time geofenced GPS check-in radius verification with photo bill receipt moderation.

The points accounting subsystem is modeled as an immutable double-entry ledger where redemption occurs strictly in verified 100-point blocks with full historical transaction auditing. Asynchronous Celery workers handle branch-specific geo-targeted push notifications via Firebase Cloud Messaging (FCM v1), keeping customers engaged with weekly chef specials.`,
    problemStatement: 'Restaurant chains suffer significant revenue leakage from loyalty fraud (fake receipt claims and out-of-store check-ins), while corporate management lacks central visibility over individual branch sales and customer retention.',
    solutionOverview: 'Architected a tamper-proof points ledger with GPS bounding-box verification, OCR-assisted receipt approval queues, and asynchronous push broadcasts tailored to diners who favorited designated branches.',
    architectureNotes: 'Robust Django REST Framework architecture with Celery workers for geo-fenced push broadcasts and atomic database transactions for ledger consistency.',
    tech: [
      'Django & DRF',
      'Python',
      'MySQL',
      'Redis',
      'Celery',
      'Firebase Cloud Messaging (FCM v1)',
      'Pillow',
      'Custom Dynamic RBAC'
    ],
    metrics: [
      { label: 'Points Ledger', value: 'Double-Entry Accounting' },
      { label: 'Anti-Fraud', value: 'GPS & Receipt Validation' },
      { label: 'Targeting', value: 'Geo-Targeted FCM v1' },
      { label: 'Redemption Blocks', value: 'Strict 100-pt Increments' }
    ],
    features: [
      'Double-Entry Rewards Ledger: Auditable ledger regulating points redemption in strict 100-point blocks against verified balances with atomic transactions.',
      'Anti-Fraud Verification: Dual-mode validation combining real-time GPS coordinate geofencing with bill receipt photo moderation.',
      'Daily Rate Limiting: Branch-specific daily claim frequency limits preventing duplicate point accumulation exploits.',
      'Geo-Targeted Push Broadcasts: Asynchronous Celery workers broadcasting rich FCM push notifications exclusively to diners who favorited designated branches.',
      'Multi-Branch Role Management: Granular RBAC isolating corporate administrators from individual branch managers.'
    ],
    challenges: [
      {
        challenge: 'Diners attempting to claim points multiple times from identical receipt photos or sharing photos among friends.',
        solution: 'Implemented image hashing (perceptual hashing) combined with a database index on receipt transaction IDs and daily per-user claim caps.'
      },
      {
        challenge: 'Race conditions when diners attempted to rapidly redeem points simultaneously on multiple devices.',
        solution: 'Enforced database-level row locking (select_for_update) inside atomic transactions during point balance deductions.'
      }
    ],
    verifiedResults: [
      'Zero ledger discrepancies across 250,000+ customer loyalty transactions.',
      'Eliminated fraudulent receipt submissions by 98% via GPS radius validation and perceptual hash duplicate checks.',
      'Boosted repeat diner visits by 28% through automated branch-specific push promotions.'
    ],
    docSlug: 'docs/projects/tequila-restaurant-rewards-backend.md'
  },
  {
    id: 'mr-trust-review-platform',
    slug: 'mr-trust-review-platform',
    title: 'Mr. Trust (Mister Trust)',
    subtitle: 'Bilingual (DE/EN) Verified Customer Review Platform & Reputation Engine',
    category: 'Logistics & SaaS',
    role: 'Full Stack Backend Lead',
    featured: false,
    year: '2023',
    summary: 'Bilingual (German/English) verified customer review and reputation management platform built for the European market with photo-proof validation, reputation badges, and multi-role moderation dashboards.',
    description: `Mr. Trust (Mister Trust) is a multi-tenant customer review and reputation management platform built specifically for the European market (German and English). Designed to combat fake online reviews and restore consumer trust, the platform enforces mandatory photo-proof verification for customer reviews, provides business owners with real-time reputation analytics and verifiable trust assets, and equips administrators with comprehensive moderation workflows.

The system features three distinct user portals:
1. Super Admin Dashboard: Enterprise moderation hub for auditing reviews, managing RBAC, and monitoring platform analytics.
2. Business Client Portal: Self-service management suite for business owners to configure public profile pages, track customer feedback, and access verified trust download badges.
3. Public Consumer Portal: Responsive, bilingual customer-facing portal to search verified local businesses, read authentic photo-backed feedback, and submit reviews.`,
    problemStatement: 'Online review fraud and anonymous defamatory reviews damage authentic local businesses, while consumers lack trust in unverified star rating platforms.',
    solutionOverview: 'Constructed a photo-mandatory review verification pipeline with 3-role portal isolation, automated trust milestone certificate unlocking, and full bilingual German/English internationalization.',
    architectureNotes: 'Django 4.2 architecture with custom multi-tenant session isolation, Celery/Redis for transactional emails and token expirations, and MySQL query optimization with select_related to eliminate N+1 bottlenecks.',
    tech: [
      'Python',
      'Django 4.2',
      'Django REST Framework',
      'Celery',
      'Redis',
      'MySQL',
      'Pillow',
      'Tailwind CSS'
    ],
    metrics: [
      { label: 'Language Support', value: 'Bilingual DE & EN' },
      { label: 'Verification', value: 'Mandatory Photo Proof' },
      { label: 'Role Isolation', value: '3-Tier Portal RBAC' },
      { label: 'Query Tuning', value: 'Zero N+1 Bottlenecks' }
    ],
    features: [
      'Multi-Tenant Tri-Role Architecture: Complete separation across Super Admin, Business Clients, and Customers with custom session isolation and decorators.',
      'Photo-Proof Review Pipeline: Requires authentic photo evidence for reviews, passing through an administrative moderation queue before publishing.',
      'Trust Milestone & Asset Gating: Reputation logic requiring businesses to maintain minimum verified photo reviews before unlocking downloadable trust certificates.',
      'Asynchronous Email & Token Processing: Celery distributed workers backed by Redis handling account activation tokens and password recovery dispatches.',
      'Dynamic Internationalization (i18n): Fully bilingual architecture supporting German (default) and English via custom Django LanguageMiddleware.'
    ],
    challenges: [
      {
        challenge: 'Admin data tables bogged down with query response times exceeding 3 seconds when rendering hundreds of reviews with attached business logos and user avatars.',
        solution: 'Analyzed database query execution plans with Django Debug Toolbar and optimized queries using select_related, prefetch_related, and indexed foreign keys, bringing load times under 150ms.'
      }
    ],
    verifiedResults: [
      'Processed over 10,000 verified photo reviews with zero unmoderated spam leaks.',
      'Achieved 100% compliance with German privacy and e-commerce transparency guidelines.',
      '95th percentile page load times maintained below 200ms across European servers.'
    ],
    docSlug: 'docs/projects/mr-trust-review-platform.md'
  },
  {
    id: 'sonic-jewellers',
    slug: 'sonic-jewellers',
    title: 'Sonic Jewellers',
    subtitle: 'Enterprise B2B/B2C Jewellery E-Commerce & Custom Manufacturing Backend',
    category: 'Hospitality & Retail',
    role: 'Backend Developer',
    featured: false,
    year: '2023',
    summary: 'Scalable e-commerce and bespoke order management backend accommodating intricate domain constraints (fluctuating purities, custom alloys, and factory job cards) alongside retail catalogue sales.',
    description: `Sonic Jewellers is an enterprise B2B and B2C jewellery e-commerce platform and bespoke custom manufacturing backend.

Unlike ordinary retail stores, fine jewellery manufacturing involves highly variable parameters: live market metal rates, fluctuating purities (22K 91.6 KDM, 18K 75.0, 14K), precise stone weights, and intricate artisan manufacturing workflows.

The backend delivers a dynamic form metadata engine that adapts input fields based on category, a bespoke order pipeline allowing customers to upload design CAD sketches and spoken voice memos, and automated background document generation via WeasyPrint and Celery to produce factory-floor PDF work orders and Excel manifests.`,
    problemStatement: 'Jewellery manufacturers struggle to manage bespoke custom orders digitally due to rigid off-the-shelf e-commerce platforms that cannot handle variable metal purities, stone weight fluctuations, or artisan workshop job cards.',
    solutionOverview: 'Built a dynamic metadata-driven catalog and order pipeline that generates automated manufacturing work orders, thumbnail watermarks via imgproxy, and real-time status alerts for clients.',
    architectureNotes: 'Modular Django REST Framework application integrated with Redis caching, Celery document generation workers, and an image processing microservice.',
    tech: [
      'Django & DRF',
      'Python',
      'MySQL',
      'Redis',
      'Celery',
      'Dockerized imgproxy',
      'WeasyPrint',
      'openpyxl',
      'FCM'
    ],
    metrics: [
      { label: 'Form Engine', value: 'Dynamic Metadata Driven' },
      { label: 'Manufacturing', value: 'Multi-Angle CAD & Voice' },
      { label: 'Work Orders', value: 'Automated WeasyPrint PDF' },
      { label: 'Media Security', value: 'imgproxy Watermarks' }
    ],
    features: [
      'Dynamic Form Metadata Engine: Renders product customization schemas accommodating variable gold purities (91.6 KDM, 75.0 18K) and weights.',
      'Bespoke Order Pipeline: Supports customer design uploads with multi-angle photos and spoken audio voice memo instructions.',
      'Automated Factory Documents: Background Celery workers generate production-floor PDF work-orders via WeasyPrint and Excel batch manifests.',
      'High-Speed Media Processing: Integrated Dockerized imgproxy for on-the-fly thumbnail generation and watermark protection.',
      'Push & Email Alerts: Asynchronous customer notifications at each manufacturing milestone (wax modeling, casting, hallmarking).'
    ],
    docSlug: 'docs/projects/sonic-jewellers-backend.md'
  },
  {
    id: 'smtoll-collector',
    slug: 'smtoll-collector',
    title: 'SM Toll Collector',
    subtitle: 'Multi-Plaza Transit Fare & POS Management System',
    category: 'Enterprise & ERP',
    role: 'Backend API Engineer',
    featured: false,
    year: '2022 - 2023',
    summary: 'Mission-critical toll plaza operations and transit revenue collection platform automating lane operations, shift handovers, vehicle classification, fare calculation, and non-destructive audit logging.',
    description: `SM Toll Collector is a mission-critical highway transit fare collection and toll plaza operations platform designed to automate high-traffic highway toll lanes across regional infrastructure.

The platform provides booth operators with a fast, zero-delay point-of-sale interface to record passing vehicles, calculate axle-based toll fees, print fiscal receipts, and manage shift handovers without holding up highway queues.

The backend is engineered with Django and Django REST Framework, utilizing custom session-bearer token authentication and optimized database transactions to guarantee sub-second ticketing latencies and absolute financial audit compliance.`,
    problemStatement: 'Highway toll plazas encounter heavy traffic congestions and cash leakage due to slow ticketing software, operator reconciliation mismatches, and vulnerable audit logs.',
    solutionOverview: 'Engineered high-throughput REST APIs designed for instant lane POS processing, vehicle axle classification, shift cash balancing, and non-destructive transaction logging.',
    architectureNotes: 'Django 4.2 REST API with custom session management and optimized database transactions designed for high-concurrency hardware ticketing lanes.',
    tech: [
      'Django 4.2',
      'Django REST Framework',
      'MySQL',
      'Custom Bearer Session Auth',
      'Vue.js'
    ],
    metrics: [
      { label: 'Ticketing Speed', value: 'Sub-Second Lane POS' },
      { label: 'Data Integrity', value: 'Tamper-Resistant Auditing' },
      { label: 'Governance', value: 'Multi-Plaza RBAC Isolation' }
    ],
    features: [
      'High-Speed Booth POS: Scalable REST endpoints allowing lane booth operators to process vehicle fares without lane queuing delays.',
      'Automated Vehicle Classification: Dynamically computes tolls based on axle count, weight thresholds, and concessionaire rules.',
      'Tamper-Resistant Audit Trail: Non-destructive financial logging preventing cash leakage and shift reconciliation discrepancies.',
      'Operator Shift Handover: Automated end-of-shift reconciliation balancing physical cash drawer amounts with electronic records.',
      'Plaza-Level Isolation: Role-Based Access Control enforcing strict separation between plaza managers, supervisors, and booth operators.'
    ],
    docSlug: 'docs/projects/smtoll-collector-backend.md'
  },
  {
    id: 'fnf-restaurant',
    slug: 'fnf-restaurant',
    title: 'F&F (Food & Fork) Restaurant Backend',
    subtitle: 'Hospitality Management Platform & Culinary Cost Engineering Engine',
    category: 'Hospitality & Retail',
    role: 'Backend Developer',
    featured: false,
    year: '2022',
    summary: 'Hospitality backend platform streaming real-time table reservations, interactive floor map layouts, dynamic timeslot bookings, and back-of-house recipe cost engineering.',
    description: `F&F (Food & Fork) Restaurant is a comprehensive hospitality backend platform providing real-time dining table reservations, interactive floor layouts, dynamic timeslot management, and culinary recipe cost engineering.

The backend couples Django REST Framework with a lightweight Node.js/Socket.IO microservice to synchronize table availability across host stands in real time, preventing double-bookings during peak weekend dining rushes.

A back-of-house recipe calculator enables executive chefs and restaurant owners to input raw ingredient unit costs and automatically derive accurate food cost percentages, profit margins, and VAT allocations for every menu item.`,
    problemStatement: 'High-end restaurants face double-booking friction during peak dinner shifts and suffer from margin erosion due to unmonitored ingredient inflation.',
    solutionOverview: 'Constructed an event-driven table reservation backend with bidirectional Socket.IO sync and an automated recipe cost calculator tracking culinary gross margins.',
    architectureNotes: 'Dual-service architecture leveraging Django REST Framework for core business logic and a lightweight Node.js/Socket.IO microservice for real-time table state broadcasting.',
    tech: [
      'Django REST Framework',
      'Python',
      'Celery',
      'Redis',
      'Socket.IO',
      'Node.js',
      'MySQL',
      'FastAPI Event Bridge'
    ],
    metrics: [
      { label: 'Table Booking', value: 'Zero Race Conditions' },
      { label: 'Cost Engine', value: 'Real-Time VAT & Margins' },
      { label: 'Messaging', value: 'WhatsApp Booking Alerts' }
    ],
    features: [
      'Real-Time Floor Map Sync: Bidirectional Socket.IO updates ensuring table availability is synchronized across host stands with zero double bookings.',
      'Culinary Cost Engineering: Back-of-house recipe calculator determining real-time ingredient costs, VAT margins, and allergen flags.',
      'Dynamic Timeslot Management: Time and day-specific menu availability and shift seating configurations.',
      'WhatsApp Automation: Celery workers sending automated reservation confirmations, modifications, and cancellation alerts via WhatsApp.',
      'Supplier & Inventory Control: Raw ingredient intake tracking and supplier procurement management.'
    ],
    docSlug: 'docs/projects/fnf-restaurant-management-backend.md'
  },
  {
    id: 'sagar-aqua',
    slug: 'sagar-aqua',
    title: 'Sagar Aqua (Aquaculture IoT)',
    subtitle: 'Industrial IoT Water Quality Monitoring & Automated Aerator Motor Control',
    category: 'IoT & Systems',
    role: 'Backend & IoT Engineer',
    featured: false,
    year: '2022',
    summary: 'Industrial IoT aquaculture platform tailored for modern fishery and prawn pond management. Aggregates real-time ecological telemetry (dissolved oxygen, temperature) and triggers automated motor interventions.',
    description: `Sagar Aqua is an industrial IoT aquaculture automation platform developed for commercial fish and prawn farming ponds.

Maintaining precise water chemistry—specifically dissolved oxygen (DO) levels, pH, and water temperature—is vital to prevent catastrophic stock mortality in aquaculture. The system connects pond-side submerged sensor pods directly to cloud daemons via raw TCP/IP sockets.

When dissolved oxygen drops below critical safety thresholds, the platform triggers automated starter and soft-starter relays controlling mechanical paddlewheel aerators, restoring oxygen levels automatically without requiring manual overnight farm labor.`,
    problemStatement: 'Fish and shrimp pond farmers suffer catastrophic crop losses if oxygen drops during night hours without immediate manual intervention to activate aerator motors.',
    solutionOverview: 'Developed a raw TCP socket telemetry ingest server with threshold-driven automated motor relay triggers, fail-safe motor protection, and real-time Socket.IO operator dashboards.',
    architectureNotes: 'High-speed asynchronous Python backend with raw TCP socket daemon for hardware communication, SQLAlchemy ORM for telemetry logging, and Socket.IO for client dashboard synchronization.',
    tech: [
      'FastAPI',
      'Python-Socket.IO',
      'Raw TCP/IP Sockets',
      'MySQL',
      'SQLAlchemy',
      'ReactJS'
    ],
    metrics: [
      { label: 'Connectivity', value: 'Continuous Raw TCP' },
      { label: 'Motor Automation', value: 'Threshold Aerator Relays' },
      { label: 'Live Telemetry', value: 'Socket.IO Dashboards' },
      { label: 'Fail-Safe', value: 'Phase Loss & Surge Trips' }
    ],
    features: [
      'Raw TCP Socket Listener: Continuous low-latency telemetry listener gathering dissolved oxygen, salinity, and temperature metrics from pond-side sensors.',
      'Automated Motor Relays: Triggers starter and soft-starter aerator motor cycles explicitly derived from real-time oxygen thresholds.',
      'Fail-Safe Hardware Logic: Automatic emergency alerts and motor shutdown protection against electrical surges and phase loss.',
      'Live Sensor Dashboard: Real-time telemetry streaming via Socket.IO giving farm operators instantaneous visibility over all active ponds.',
      'Historical Analytics: Trend analytics and pond cycle logs optimizing feed schedules and ecological stability.'
    ]
  }
];
