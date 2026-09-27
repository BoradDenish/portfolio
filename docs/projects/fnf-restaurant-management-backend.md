# F&F (Food & Fork) — Intelligent Restaurant Reservation & Operations Backend

> **Enterprise Multi-Tenant Hospitality Operations Platform, Real-Time Table Reservation Engine & Recipe Costing Matrix**  
> *Engineered with Python (Django & Django REST Framework), MySQL, Redis, Celery, Socket.IO, and Omnichannel Telephony Integrations (WhatsApp & Twilio).*

---

## 📌 Executive Summary

**F&F (Food & Fork) New API** is a high-performance, enterprise-grade hospitality backend platform architected to streamline restaurant table reservations, live floor management, dynamic timeslot booking, omnichannel guest engagement, and back-of-house culinary cost engineering. 

The platform bridges front-of-house guest interactions (web/mobile booking portals, automated WhatsApp confirmations, interactive booking adjustments, instant SMS OTPs) with back-of-house operational control (floor map layouts, table grouping, host reservation assignment, and multi-tier RBAC). Furthermore, it equips restaurant operators with a comprehensive **Culinary Costing & Recipe Engineering Engine** that calculates real-time ingredient costs, VAT-adjusted profit margins, allergen tracking, and calorie computations.

Equipped with distributed task scheduling via **Celery & Redis**, bi-directional real-time communication via **Socket.IO & Node.js**, and an asynchronous **FastAPI Event Bridge**, the system ensures reliable real-time updates and millisecond-level reservation synchronization without double bookings or race conditions.

---

## 🚀 Key Highlights & Architectural Achievements

- **Zero-Conflict Table & Timeslot Reservation Engine**: Engineered a granular slot-based booking matrix (discrete timeslot intervals) coupled with automated hold locks. Prevents race conditions and double-booking by temporarily holding seats and auto-releasing unconfirmed slots after a configurable hold duration.
- **Omnichannel Automated Guest Communication**: Integrated direct, two-way automated WhatsApp communication (via Liliya API and Meta Cloud API) alongside Twilio SMS OTP authentication. Guests receive instant booking confirmations, 1-hour automated reminders, and interactive cancellation/rescheduling links directly via WhatsApp.
- **N+1 Query Elimination & Performance Optimization**: Re-architected critical menu item and category retrieval endpoints by replacing iterative queries inside serializers with in-memory pre-fetched batch-loading context maps. Slashed database round-trips from over 4,000 queries to fewer than 5 queries per batch call, preventing MySQL CPU exhaustion during traffic surges.
- **Microservices Event Bridge & Live Socket.IO Broadcast**: Decoupled long-running communications and cross-service profile updates through an asynchronous HTTPX-powered FastAPI Event Bridge and a persistent Node.js Socket.IO client, broadcasting live floor state, cart activity, and reservation statuses to host dashboards in real time.
- **End-to-End Culinary Recipe & Costing Engine**: Built a full inventory calculation pipeline mapping raw ingredients, unit conversions (metric/imperial), supplier contracts, and recipe allocations to compute true food costs, profit margin ratios, and nutritional metadata for every menu item.
- **Stress-Tested with Locust**: Conducted intensive concurrency and load-testing suites simulating thousands of concurrent diners and hosts to guarantee resilience, low p95 response latencies, and stable connection pooling.

---

## 🛠️ Technology Stack & Libraries

### 1. Core Languages & Frameworks
| Technology | Version / Specification | Role & Purpose |
|---|---|---|
| **Python** | `3.10+ / 3.11` | Primary programming language powering the application, business logic, asynchronous task dispatching, and calculations. |
| **Django** | `5.0.3` | High-level web framework providing robust ORM, security middleware, database migrations, and administrative capabilities. |
| **Django REST Framework (DRF)** | `3.14.0` | Comprehensive API toolkit powering serialization, input validation, status responses, and RESTful routing. |
| **Node.js (External Gateway)** | `LTS / ES6+` | Real-time WebSocket server handling multi-client event broadcasting and live floor updates. |
| **FastAPI Bridge** | Microservice | Asynchronous event relay handling cross-platform data synchronization and push notification routing. |

---

### 2. Databases, Caching & Message Brokers
| Technology | Library / Connector | Purpose |
|---|---|---|
| **MySQL** | `8.0+` / `mysqlclient 2.2.4` | Primary relational database storing user profiles, reservation history, table topologies, menus, and recipe calculations. Configured with strict transactional guarantees (`STRICT_TRANS_TABLES`). |
| **PostgreSQL (Compatible)** | `psycopg2-binary 2.9.9` | Enterprise secondary SQL driver ensuring cross-database portability and hybrid deployment readiness. |
| **Redis** | `7.x` / `redis 5.0.4` | High-throughput in-memory data store functioning as the primary message broker and result backend for Celery distributed queues. |
| **Django Celery Beat DB** | `django-celery-beat 2.7.0` | Database-backed periodic task scheduler managing dynamic recurring background intervals. |

---

### 3. Distributed Background Processing & Real-Time Engines
| Library / Package | Version | Description & Role |
|---|---|---|
| **Celery** | `5.4.0` | Distributed asynchronous task queue managing OTP deliveries, WhatsApp notifications, and automated timeout sweeps. |
| **Kombu & Billiard** | `5.3.7`, `4.2.0` | Low-level message passing and multi-process concurrency workers underlying Celery. |
| **python-socketio** | `5.11.4` | Real-time Socket.IO client maintaining persistent duplex connectivity to the Node.js broadcast hub. |
| **python-engineio** | `4.10.1` | Underlying transport engine powering WebSocket handshakes and long-polling fallbacks. |
| **Gevent / Greenlet** | `24.2.1`, `3.0.3` | Coroutine-based concurrency enabling non-blocking network I/O for high-volume socket routines. |

---

### 4. Telephony, Third-Party APIs & Networking
| Library / Service | Version | Role & Description |
|---|---|---|
| **Twilio Python SDK** | `9.1.1` | Enterprise SMS gateway handling customer registration, phone verification, and mobile OTP delivery. |
| **WhatsApp Business / Liliya API** | Custom REST Integration | Automated transactional WhatsApp notifications, templated booking alerts, interactive confirmations, and guest reminders. |
| **HTTPX** | `0.28.1` | Next-generation asynchronous HTTP client used for non-blocking communication with the FastAPI microservices bridge. |
| **Requests & Aiohttp** | `2.31.0`, `3.9.5` | Synchronous and asynchronous HTTP utilities for external webhooks and third-party API consumers. |
| **Firebase Cloud Messaging (FCM)** | REST Payload via Bridge | Real-time push notifications alerting hosts and staff to incoming reservations and status changes. |

---

### 5. Security, Utilities & Image Processing
| Library / Package | Version | Description & Role |
|---|---|---|
| **PyJWT** | `2.8.0` | Stateless cryptographic JSON Web Token verification for secure authentication of customer and admin sessions. |
| **django-cors-headers** | `4.3.1` | Cross-Origin Resource Sharing middleware enabling secure cross-domain requests from web portals and admin dashboards. |
| **django-environ** | `0.11.2` | Twelve-Factor App configuration parser extracting secrets and database credentials from environment files. |
| **Pillow** | `10.2.0` | High-performance image processing library handling menu item photography, floor diagrams, and avatar uploads. |
| **Phonenumbers** | `8.13.48` | Google's libphonenumber port for rigorous E.164 international phone number validation and carrier parsing. |
| **Pytz & tzdata** | `2024.1` | Robust timezone translation handling localized bookings across regional dining hours (e.g., Asia/Riyadh, UTC). |

---

### 6. Testing, Load Simulation & Seeding
| Tool / Library | Role & Purpose |
|---|---|
| **Locust** (`2.27.0`) | User-driven load simulation tool benchmarking API concurrency, throughput, and latency under peak dining rush loads. |
| **Faker & django-seed** (`24.11.0`, `0.3.1`) | Synthetic data generation populating realistic testing environments with thousands of menus, customers, and timeslots. |
| **Django Test Suite** | Automated unit and integration testing validating authentication middleware, serializers, and booking transactions. |

---

## 🏛️ System Architecture & Data Flow

```
+─────────────────────────────────────────────────────────────────────────────+
|                                CLIENT SURFACES                              |
|   [Customer Mobile App]     [Front Web Booking]     [Host / Admin Portal]   |
+─────────────────────────────────────────────────────────────────────────────+
                 │                            │                         │
                 │ HTTPS (REST API)           │ HTTPS (REST API)        │ WebSockets / REST
                 ▼                            ▼                         ▼
+─────────────────────────────────────────────────────────────────────────────+
|                            DJANGO REST BACKEND (FNF)                        |
|                                                                             |
|  [Security & Token Auth]  ──►  [Business Services]  ──►  [DRF Serializers]  |
|  - TokenVerification           - Reservation Engine      - Batch Loaded Maps|
|  - Role Permissions            - Table & Area Matcher    - Optimized Output |
|  - CORS & Error Handlers       - Recipe & Cost Matrix    - Dynamic Validation|
+──────────────────────────┬─────────────────────────────────┬────────────────+
                           │                                 │
         Asynchronous Task │                                 │ Persistent Connection
         Delegation        ▼                                 ▼
+─────────────────────────────────────────+     +─────────────────────────────+
|        CELERY DISTRIBUTED WORKERS       |     |  NODE.JS SOCKET.IO HUB      |
|  - On-Hold Reservation Auto-Release     |     |  - Live Floor Updates       |
|  - 1-Hour WhatsApp Reservation Reminder |◄───►|  - Real-time Cart Selection |
|  - Twilio SMS OTP Dispatcher            |     |  - Instant Seat Changes     |
|  - Liliya WhatsApp Template Sender      |     +─────────────────────────────+
+────────────────────┬────────────────────+                    │
                     │                                         │
        Task Queues  ▼                                         │ Event Relaying
+─────────────────────────────────────────+                    ▼
|          REDIS MESSAGE BROKER           |     +─────────────────────────────+
|  - Celery Queue Storage                 |     |     FASTAPI EVENT BRIDGE    |
|  - Celery Beat Cron Schedule            |◄───►|  - Cross-Service Auth Sync  |
|  - Fast Key-Value Caching               |     |  - Customer Status Mirroring|
+─────────────────────────────────────────+     |  - FCM Push Dispatcher      |
                     │                          +─────────────────────────────+
                     ▼                                         │
+─────────────────────────────────────────+                    │
|          MYSQL RELATIONAL DATABASE      |                    ▼
|  - Strict Foreign Keys & Transactions   |     +─────────────────────────────+
|  - Tables, Areas, Timeslots, Bookings   |     |    THIRD-PARTY PLATFORMS    |
|  - Menus, Ingredients & Costing Model   |     |  - WhatsApp (Liliya API)    |
|  - Users, Roles, Modules & Customer Tier|     |  - Twilio (SMS & OTP)       |
+─────────────────────────────────────────+     |  - SMTP Transactional Mail  |
                                                +─────────────────────────────+
```

---

## ⚙️ Core Functional Modules & Domain Capabilities

### 1. Advanced Table Reservation & Timeslot Engine
- **Timeslot Scheduling Grid**: Dynamically divides operating hours into discrete slot intervals (e.g., 15-minute intervals), cross-referencing service availability (Lunch, Dinner, Midday) with working hours.
- **Seat Allocation & Area Mapping**: Automatically filters available tables by floor area (Indoor, Outdoor, VIP, Terrace) and matching seat counts while respecting outdoor preference flags and baby chair requirements.
- **Temporary Hold Locks**: Automatically flags reservations in a `Hold` state with an expiry timer (e.g., 1-2 minutes). If the customer does not complete confirmation within the window, Celery background tasks auto-cancel the slot, ensuring tables are instantly returned to the public pool without manual host intervention.
- **Comprehensive Lifecycle States**: Manages end-to-end status transitions:
  `Hold` ➔ `Booked` ➔ `Confirmed` ➔ `Seated` ➔ `Completed` / `Cancelled` / `No-Show` / `Auto-Cancelled`.

### 2. Back-of-House Recipe Engineering & Cost Calculation Matrix
- **Raw Ingredient & Supplier Management**: Tracks ingredients by purchasing supplier, packaging quantities, and granular measurement units (grams, milliliters, kilograms, liters).
- **Automated Cost Calculation**: Computes aggregate raw ingredient costs per menu dish, dynamically calculating the **Margin Ratio** against the menu selling price (inclusive of VAT).
- **Allergen & Calorie Tracking**: Automatically propagates allergen warnings (gluten, dairy, nuts) and caloric values to customer-facing menus when recipe calculations are finalized.

### 3. Omnichannel Guest Communication & Automation
- **Automated WhatsApp Booking Workflows**:
  - Sends immediate branded booking confirmation messages with guest name, date, time, and party size upon reservation creation.
  - Automated 1-hour pre-dining reminder messages containing interactive cancellation/confirmation options.
  - Interactive WhatsApp status updates feeding directly back into the reservation database.
- **Twilio SMS OTP Authentication**: Passwordless mobile phone login and account verification using secure one-time PIN codes.
- **Transactional HTML Email Notifications**: Generates styled HTML transactional receipts and password recovery emails via Django's SMTP backend.

### 4. Real-Time Bidirectional Event Streaming (Socket.IO & FastAPI Bridge)
- **Host Dashboard Synchronization**: Emits live WebSocket events to the Node.js server upon any reservation status change or table assignment, updating the host floor screen instantaneously without page refreshes.
- **FastAPI Event Bridge**: Inter-service event dispatcher running over HTTPX that keeps customer profile changes, authentication sessions, and Firebase Cloud Messaging (FCM) tokens synchronized between microservices.

### 5. Multi-Tier RBAC & Customer Segmentation
- **Role-Based Access Control**: Granular module permissions (`Read`, `Write`, `Create`, `Remove`) governing administrative actions for hosts, managers, and system administrators.
- **Customer Loyalty Segmentation**: Tiers customers into `Normal`, `Family`, and `Premium` brackets, tracking historical visit statistics, total seated counts, and cancellations to tailor VIP hospitality experiences.

---

## ⚡ Real-World Engineering & Performance Optimization

### 1. Eliminating the N+1 Query Explosion in Serializers
- **The Problem**: In initial iterations, endpoints such as `menu_item_list` and `menu_list` triggered secondary queries inside serializer loops to resolve category names, menu groupings, and image URLs. Under an inventory of 1,000 items, a single HTTP request spawned **4,000+ separate MySQL queries**, exhausting the database connection pool and pushing CPU utilization to 100%.
- **The Solution**: Implemented a **Batch-Loaded Context Pattern**. The view layer executes bulk relational queries upfront, constructs in-memory hash mappings (`categories_map`, `files_map`, `menus_map`), and injects them into the DRF serializer context. Serializers resolve related data via $O(1)$ dictionary lookups with **zero additional database queries**.

### 2. High-Concurrency Stress Testing via Locust
- Engineered realistic load-testing suites (`locustfile.py`) simulating concurrent diner actions:
  - High-frequency menu browsing and category filtering.
  - Rapid timeslot availability polling.
  - Concurrent table reservations.
- Validated system stability under burst traffic, confirming sub-100ms response times for cached menu lookups and clean isolation of database transactions during peak table booking periods.

### 3. Atomic Cancellation & Database Consistency
- Leveraged Django's `transaction.atomic()` context manager inside Celery background tasks (`hold_reservation_cancel`) to guarantee that the cancellation of reservations and the unlinking of reserved slots execute as a single atomic unit, eliminating orphaned slot locks.

---

## 📊 Portfolio Summary & Technical Highlights

| Criterion | Specification |
|---|---|
| **Architecture Type** | Decoupled RESTful Backend + Real-Time WebSocket Gateway + Distributed Workers |
| **Primary Framework** | Python 3 / Django 5.0 / Django REST Framework 3.14 |
| **Database & Persistence** | MySQL 8.0 (ACID compliant) + Redis (In-Memory Broker) |
| **Asynchronous Engine** | Celery 5.4 + Celery Beat Scheduler |
| **Real-Time Duplex** | Socket.IO (`python-socketio`) + Node.js Event Hub |
| **Third-Party APIs** | Twilio SMS API, Liliya WhatsApp REST API, Meta Cloud API, FCM |
| **Performance Benchmark** | N+1 queries eliminated, sub-100ms API response under load |
| **Target Domain** | Enterprise Restaurant Management, Hospitality Booking & Culinary Costing |
