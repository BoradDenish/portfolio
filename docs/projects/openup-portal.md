# OpenUp Portal — Project Description & Portfolio Showcase

> **On-Demand Emergency Roadside Assistance & Automated Lockout Dispatch Platform**  
> **Backend Stack:** Python (Django, Django REST Framework) | MySQL | Celery & Redis | Firebase Cloud Messaging (FCM v1) | Google Distance Matrix API | Stripe, PayPal Vault, Venmo & Apple Pay

---

## 1. Executive Summary

**OpenUp Portal** is an on-demand roadside assistance and emergency vehicle lockout dispatch platform (often described as an *"Uber for automotive lockout and emergency roadside services"*). The platform connects stranded motorists facing emergency vehicle lockouts with vetted, nearby mobile locksmiths and service technicians in real time.

Engineered as a distributed, event-driven backend using **Python and Django REST Framework (DRF)**, the system manages the complete lifecycle of emergency requests: dynamic proximity matching using the **Google Distance Matrix API**, background asynchronous workers via **Celery & Redis**, real-time dispatch alerts using **Firebase Cloud Messaging (FCM HTTP v1)**, vehicle inspection photo pipelines, and an automated multi-gateway payment vaulting infrastructure (**Stripe, PayPal Vault, Venmo, Apple Pay**) for zero-touch checkout upon service completion.

---

## 2. Key Architecture & System Design

The platform employs an asynchronous, event-driven REST architecture designed for mission-critical dispatch with minimal latency:

- **API & Business Logic (Django & Django REST Framework):** Exposes 30+ secured REST endpoints handling user authentication, role-based workflows (Client vs. Field Technician), vehicle profiles, session management, and CMS policies.
- **Dynamic Geofence & Dispatch Engine:** Computes driving durations and real-time traffic ETAs between active technicians and the customer's coordinates using the Google Distance Matrix API, enforcing an optimal dispatch radius (e.g., $\le$ 21 minutes drive time).
- **Asynchronous Task Fleet (Celery + Redis):** Offloads long-running and network-bound operations — such as cascading notification blasts, ETA calculations, background re-alerts, and push notifications — preventing HTTP request timeouts.
- **Omni-Channel Payment Tokenization Engine:** Vaults customer cards, PayPal accounts, and Venmo authorization tokens before service begins, executing automatic post-service payment capture.
- **Photo Evidence & Inspection Layer:** Dynamic multi-image upload pipeline powered by Pillow (PIL) for pre-unlock and post-unlock vehicle damage verification.

```
                              +---------------------------------------+
                              |      Mobile Applications (iOS / Android)     |
                              |      Clients (Drivers) & Technicians        |
                              +-------------------+-------------------+
                                                  |
                                                  | HTTPS / REST + JSON
                                                  v
+---------------------------------------------------------------------------------------------------+
|                                     OPENUP BACKEND REST API                                       |
|                               (Django 4.1 / Django REST Framework)                                |
|                                                                                                   |
|  +-----------------------+  +-----------------------+  +-------------------+  +----------------+  |
|  | Authentication & Auth |  | Automated Dispatch &  |  | Multi-Gateway     |  | Vehicle &      |  |
|  | (Custom Token Sessions|  | Job State Machine     |  | FinTech Vault     |  | Photo Evidence |  |
|  |  & Dual-Role Engine)  |  | (Active/Accept/Done)  |  | (Stripe/PayPal/Ven)|  | (Pillow/Files) |  |
|  +-----------------------+  +-----------------------+  +-------------------+  +----------------+  |
|                                                                                                   |
|            | ORM Queries                                        | Async Task Queue                |
+------------|----------------------------------------------------|---------------------------------+
             |                                                    |
             v                                                    v
+-----------------------------+                     +-------------------------------+
|      MYSQL DATABASE         |                     |      REDIS MESSAGE BROKER     |
| - Users & Shift Status      |                     +---------------+---------------+
| - Jobs & Geolocation Logs   |                                     |
| - Alerts & Audit History    |                                     v
| - Payment Vaults & Failures |                     +-------------------------------+
+-----------------------------+                     |      CELERY WORKER FLEET      |
                                                    | - Google Distance Matrix ETA  |
                                                    | - Cascade Re-Alerts & Retry   |
                                                    | - FCM HTTP v1 Push Workers    |
                                                    | - Auto-Charge Vaulted Payments|
                                                    +---------------+---------------+
                                                                    |
                       +--------------------------------------------+-----------------------------+
                       | Outbound API Calls                         | Outbound API Calls          |
                       v                                            v                             v
+-------------------------------+      +-------------------------------+      +-------------------------------+
|  GOOGLE DISTANCE MATRIX API   |      |  FIREBASE CLOUD MESSAGING     |      |  PAYMENT GATEWAYS & VAULTS    |
| - Live traffic duration       |      |  (OAuth2 / HTTP v1)           |      | - Stripe PaymentIntents       |
| - Dynamic proximity filtering |      | - High-priority dispatch push |      | - PayPal Orders v2 & Vault    |
| - Radius-based availability   |      | - Screen-transition payloads  |      | - Venmo 2-step setup & capture|
+-------------------------------+      +-------------------------------+      +-------------------------------+
```

---

## 3. Technology Stack & Libraries

### 1. Core Frameworks & Runtime
| Category | Technology | Version | Purpose & Technical Value |
| :--- | :--- | :--- | :--- |
| **Language** | **Python** | 3.10+ | High readability, robust async and numerical libraries, extensive API SDK ecosystem. |
| **Web Framework** | **Django** | 4.1.7 | High-level MVC architecture, built-in ORM, secure session and password management. |
| **API Engine** | **Django REST Framework (DRF)** | 3.14.0 | Serializers, API views, status code management, token authentication, and JSON responses. |
| **Primary Database** | **MySQL** | 8.0+ | Acid-compliant relational persistence, foreign key cascading, indexed geo-lookups. |
| **Database Connector** | **mysqlclient** | 2.1.1 / 2.2.4 | High-performance C-based MySQL Python driver. |
| **Asynchronous Engine**| **Celery** | 5.4.0 | Distributed task scheduling, background job alerts, cascade dispatch, and automated charging. |
| **Message Broker** | **Redis** (`redis-py`) | 4.5.1 | Low-latency in-memory cache and message broker between Django and Celery. |
| **Task Persistence** | **django-celery-results** | 2.5.0 | Persists Celery background task statuses, errors, and task IDs into MySQL tables. |
| **WSGI Server** | **Gunicorn** | 20.1.0 | Production-grade WSGI HTTP container. |

---

### 2. Specialized Libraries & Cloud Integrations

| Library / SDK | Version | Implementation Details |
| :--- | :--- | :--- |
| **Firebase Cloud Messaging** (`google-auth`) | 2.56.2 | Implements the **FCM HTTP v1 API** authenticated via Google Service Account OAuth2 credentials for instant, high-priority notifications. |
| **Google Distance Matrix API** | v2 | Evaluates real-time traffic distances between clients and active technicians to guarantee rapid response times. |
| **Geopy & Geographiclib** | 2.3.0 / 2.0 | Spatial coordinate calculations, distance validations, and geographic utilities. |
| **Stripe SDK** | 5.3.0 | Payment method attachment, Stripe Customer IDs, PaymentIntents, and zero-interaction capture. |
| **PayPal REST SDK & Orders v2**| 1.13.1 / v2 | Customer vaulting for credit cards, payment tokens, and recurring capture. |
| **Venmo Integration Engine** | Custom | Two-stage setup flow: deep-linking to native Venmo app for buyer consent + vaulting into PayPal vault. |
| **Pillow (PIL)** | 10.2.0 | Image resizing, validation, metadata extraction, and storage for vehicle lock inspection photos. |
| **django-environ** | 0.10.0 | Environment-driven configuration management following 12-Factor App methodology. |
| **Cryptography & Passlib** | 50.0.0 / 1.7.4 | Cryptographic hashing, token signature validation, and secure credential handling. |

---

## 4. Core Features & Business Capabilities

### 1. Dual-Role Identity & Shift Lifecycle Management
- **Role Separation (`client` vs `employee`):** Dedicated workflows, permission checks, and data models for vehicle owners versus service technicians.
- **Technician Shift Control (`employee_status`):** Technicians toggle active/inactive availability; only online personnel with active status receive automated job alerts.
- **Tokenized Sessions:** Mobile session tracking (`user_sessions`) ensuring persistent login across app restarts and automatic recovery via the `active-job` endpoint.

### 2. Intelligent Proximity Dispatch Engine
- **Travel-Time Based Filtering:** Instead of naive Euclidean straight-line distance, queries the **Google Distance Matrix API** to compute driving time considering live traffic.
- **Optimal Time Gate:** Technicians qualify only if their driving time is within **21 minutes (1260 seconds)** of the incident site.
- **Cascade Re-Alerting on Cancellation:** If an accepted technician cancels, the system automatically resets the job state, updates the exclusion blacklist (`job_attempted_by`), and dispatches push alerts to next eligible nearby technicians.
- **Graceful Unavailability Fallback:** Synchronously detects when zero technicians qualify and informs the client immediately (`notificationScreenType: "no_availability"`), preventing stranded drivers from waiting indefinitely.

### 3. Frictionless FinTech Vaulting Pipeline
- **Card Vaulting (Stripe & PayPal):** Vaults cards on file so clients are never prompted for payment credentials in stressful roadside lockout situations.
- **Venmo In-App Vaulting:** Engineered a custom 2-step setup workflow:
  1. `POST /api/venmo-setup`: Generates PayPal Setup Token and returns universal approval deep-link to launch the Venmo app.
  2. `POST /api/venmo-confirm`: Validates buyer consent and converts the token into a persistent PayPal Vault ID.
- **Apple Pay Support:** Seamless in-app checkout integration for iOS users.
- **Failed Payment Auditing (`PaymentFailedInfo`):** Captures raw gateway failure codes, card decline reasons, and error payloads for debugging and recovery.

### 4. Photo Documentation & Liability Protection
- **Pre-Service & Post-Service Proof:** Technicians capture vehicle condition photos before touching the lock and after unlocking.
- **License & Identity Verification:** Secure document upload pipeline for technician vetting and driver verification.
- **Dynamic File Ingestion:** Custom filename sanitization, timestamped file paths, and metadata tracking in the `Images` and `File` relational tables.

---

## 5. Database Schema & Data Models

The MySQL schema is normalized into specialized domain tables:

| Table Name | Model Class | Purpose |
| :--- | :--- | :--- |
| `users` | `Registration` | User credentials, roles, live GPS coordinates, device type (iOS/Android), FCM push token, and default payment IDs. |
| `userrole` | `UserRole` | Role definitions (`client`, `employee`) and system-level permissions. |
| `user_sessions` | `Session` | Auth tokens, expiration timestamps, and device push references. |
| `userjob` | `Jobs` | Core job record: location coordinates, service type (`service`, `emergency`), status (1: Active, 2: Accepted, 3: Completed, 4: Canceled, 5: Unavailable), assigned technician, and payment status. |
| `vehicle_model` | `VehicleDetails` | Customer vehicle profile: make, model, year, color, window tint, modifications, and uploaded vehicle registration. |
| `paypal_cust_info` | `PaypalInfo` | PayPal and Venmo vaulted payment sources, customer IDs, and funding tokens. |
| `payment` | `Payment` | Tokenized card records, Stripe customer references, card type, and expiry. |
| `alerts` | `Alerts` | Real-time dispatch log recording which technicians were notified, alert titles, and push payloads. |
| `job_log` | `JobLogs` | Comprehensive audit trail of cancellations, reassignment history, and status change reasons. |
| `images` & `file` | `Images`, `File` | Before/after inspection photos tied to jobs, along with file metadata and system paths. |
| `feedback` | `Feedback` | Post-job ratings (1-5 stars) and client reviews. |
| `paymentfailedinfo` | `PaymentFailedInfo` | Error logs, decline codes, and raw JSON gateway responses for failed transactions. |

---

## 6. Complex Engineering Challenges & Solutions

### ⚡ 1. Eliminating Race Conditions in Mobile Dispatches
* **Challenge:** Multiple technicians could attempt to accept the same high-demand emergency job simultaneously, leading to double-assignments or broken state transitions.
* **Solution:** Implemented atomic verification in `job_views.accept_job()`:
  - Validates that `job_status == 1` (Active) and `job_accepted_by is None` before writing changes.
  - Updates the job status to `2` (Accepted) and binds the technician ID in a single atomic transaction.
  - Subsequent concurrent requests from other technicians fail gracefully with an informative message (`"Job already accepted by another technician"`).

### 🔄 2. Two-Step Venmo Vaulting Architecture
* **Challenge:** Traditional credit cards can be vaulted headlessly with tokenized card details. Venmo requires interactive buyer authorization within the Venmo mobile app, meaning payment methods cannot be saved in a single synchronous API call.
* **Solution:** Designed an asynchronous authorization handshake:
  - Backend creates a setup token via PayPal Orders v2 API with customer deep-link URLs.
  - Customer completes approval in the native Venmo app and returns via deep-link to the mobile app.
  - The mobile app triggers the confirmation endpoint to exchange the temporary approval into a permanent `PayPalInfo(paypal_source_type='venmo')` vault record, allowing subsequent jobs to be charged headlessly.

### 🚀 3. Resilient Push Notification Delivery with FCM HTTP v1
* **Challenge:** Legacy FCM server keys lacked fine-grained scoping and were scheduled for global deprecation by Google. Furthermore, notifications needed to drive specific client screen behaviors (e.g., auto-opening the review modal upon job completion).
* **Solution:** Migrated the notification subsystem to **FCM HTTP v1** using Google Service Account OAuth2 credentials (`google-auth`). Designed custom JSON data payloads with `notificationScreenType` tags (`"addjob"`, `"review"`, `"no_availability"`), allowing mobile clients to reactively change view controllers without requiring user interaction.

---

## 7. Portfolio & Resume Ready Bullet Points

Use these high-impact, metrics-driven bullet points for your resume or LinkedIn:

- **Backend / Python API Engineer:**
  - *Architected and deployed a high-availability on-demand roadside assistance REST API using Django REST Framework, MySQL, Celery, and Redis, supporting dual-role dispatch between motorists and field technicians.*
  - *Engineered an automated geolocation dispatch engine utilizing Google Distance Matrix API, dynamically matching emergency lockout requests to technicians within a 21-minute drive-time radius.*
  - *Built an asynchronous event-driven task pipeline with Celery and Redis to handle cascade re-alerting, technician exclusion tracking, and real-time push notifications via Firebase Cloud Messaging (FCM HTTP v1).*
  - *Integrated a multi-provider payment vaulting ecosystem across Stripe, PayPal Vault, Venmo, and Apple Pay, facilitating seamless zero-touch server-side payment capture upon service completion.*
  - *Developed a vehicle inspection photo audit pipeline using Pillow and Django FileField, enabling mandatory pre-service and post-service photo verification for damage liability control.*
  - *Constructed an automated cancellation and reassignment state machine, eliminating job abandonment by instantly cascading declined requests to the next nearest technician.*

---

## 8. Summary Checklist for Portfolio Reviewers

| Area | Implementation Details | Status |
| :--- | :--- | :---: |
| **API Architecture** | RESTful endpoints with DRF, modular viewsets, error handling, session tokens | ✅ Production-Grade |
| **Asynchronous Engine** | Celery tasks for notifications, alerts, and payment execution | ✅ Scalable |
| **Database** | Normalized MySQL schema with audit logs and foreign key cascading | ✅ Optimized |
| **Third-Party APIs** | Google Distance Matrix, FCM v1, Stripe, PayPal Orders v2, Venmo | ✅ Fully Integrated |
| **Documentation** | Complete API documentation, issue audit trails, and architecture diagrams | ✅ Complete |
