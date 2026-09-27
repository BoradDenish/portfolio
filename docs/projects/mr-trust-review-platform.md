# Mr. Trust (Mister Trust) — Multi-Tenant Customer Review & Reputation Platform

> **Bilingual (DE/EN) Verified Customer Review Platform, Business Reputation Management & Moderation Engine**  
> *Engineered with Python (Django 4.2), Django REST Framework, Celery, Redis, MySQL, Tailwind CSS, and DataTables.*

---

## 📌 Executive Summary

**Mr. Trust (Mister Trust)** is a full-stack, multi-tenant customer review and reputation management platform built for the European market (German and English). Designed to combat fake reviews and restore consumer confidence, the platform enforces **photo-proof verification** for customer reviews, provides business owners with real-time reputation analytics and verifiable trust assets, and equips administrators with comprehensive moderation workflows.

The system features three distinct user portals:
1. **Super Admin Dashboard**: Enterprise moderation hub for verifying businesses, auditing reviews, managing role-based access control (RBAC), and monitoring platform analytics.
2. **Business Client Portal**: Self-service management suite for business owners to configure public profile pages, track customer feedback, manage media galleries, and access verified trust download badges.
3. **Public Consumer Portal**: Responsive, bilingual customer-facing portal to search verified local businesses, read authentic photo-backed feedback, and submit reviews.

---

## 🚀 Key Highlights & Architectural Achievements

- **Multi-Tenant Tri-Role Architecture**: Complete separation of concerns across Super Admin (`role_id=1`), Business Clients (`role_id=2`), and Customers (`role_id=3`), each backed by tailored authentication flows, authorization decorators, and custom session isolation.
- **Photo-Proof Review Verification Pipeline**: Unlike conventional text-only review platforms, Mr. Trust requires authentic photo evidence (`r_photo`) for reviews, which pass through an administrative verification queue before being published to public business profiles.
- **Trust Milestone & Asset Gating**: Built-in reputation threshold logic requiring businesses to maintain a minimum of 3 verified photo reviews before unlocking downloadable trust certificates and promotional review assets.
- **Asynchronous Processing with Celery & Redis**: Offloaded non-blocking transactional tasks—such as automated account activation tokens, password recovery emails with time-bound expiration, and administrative notifications—to **Celery** distributed workers backed by **Redis**.
- **Dynamic Internationalization (i18n)**: Fully bilingual architecture supporting German (`de`, default) and English (`en`) via custom Django `LanguageMiddleware`, locale catalogs (`.po` / `.mo`), and runtime template translation.
- **Query Optimization & Scalability**: Eliminated N+1 query bottlenecks across review lists and admin data tables by leveraging Django ORM `select_related`, `values_list`, and batch filtering (`__in` lookups), ensuring sub-second response times across large datasets.

---

## 🛠️ Technology Stack & Libraries

### 1. Core Backend & Web Framework
| Technology / Library | Version | Role & Purpose |
|---|---|---|
| **Python** | `3.10+` | Primary programming language powering backend logic, ORM interactions, and asynchronous task execution. |
| **Django** | `4.2.2` | High-level web framework providing MVC structure, ORM, URL routing, template engine, and security middleware. |
| **Django REST Framework (DRF)** | `3.14.0` | Powers RESTful endpoints, JSON responses for AJAX datatables, infinite scroll, and client-side integrations. |
| **django-environ** | `0.10.0` | Twelve-Factor configuration management separating database credentials, secrets, and environment settings. |
| **django-cors-headers** | `4.3.1` | Configures Cross-Origin Resource Sharing (CORS) rules for secure cross-domain client integrations. |

---

### 2. Database & Data Modeling
| Technology / Library | Version | Purpose |
|---|---|---|
| **MySQL** | `8.0+` | Primary relational database storing users, business profiles, reviews, RBAC permissions, and session tokens. |
| **mysqlclient** | `2.1.1` | High-performance C-based Python connector interface for MySQL. |
| **Pillow (PIL)** | `^10.0` | Server-side image validation, dimension formatting, and media processing for user avatars, business logos, and review photos. |
| **sqlparse** | `0.4.4` | Non-validating SQL parser used for query inspection and database migration execution. |

---

### 3. Background Tasks & Distributed Queues
| Technology / Library | Version | Role & Description |
|---|---|---|
| **Celery** | `5.3.0` | Distributed asynchronous task queue handling email dispatches, token expirations, and background calculations. |
| **Redis** | `4.5.5` | In-memory key-value data store acting as the message broker (`CELERY_BROKER_URL`) and caching layer. |
| **django-celery-results** | `2.5.1` | Celery task result backend storing execution states and histories inside the Django database. |
| **kombu / billiard / amqp** | `5.3.0 / 4.1.0 / 5.1.1` | Core messaging libraries underpinning Celery task messaging and process pooling. |

---

### 4. Frontend & User Interface
| Technology / Library | Version / Source | Description & Role |
|---|---|---|
| **Tailwind CSS** | `3.5.0` (`django-tailwind`) | Modern utility-first CSS framework delivering responsive, clean interfaces for all portals. |
| **jQuery** | `3.6.0 / 3.7.0` | Client-side DOM manipulation, AJAX request handling, dynamic form submissions, and modal controls. |
| **DataTables.js** | `1.13.4` (Responsive 2.4.1) | Dynamic data tables with server-side and client-side pagination, search filtering, and sorting for admin views. |
| **Lightbox2** | `2.11.4` | Image viewer overlay for high-resolution review photo inspection and proof verification. |
| **Waypoints & Infinite Scroll** | `min.js` | Smooth, paginated infinite scrolling for business review image galleries (15 images per page). |

---

### 5. Email & Notification Services
| Service / Library | Role & Description |
|---|---|
| **SMTP (GoDaddy SecureServer / Mailtrap)** | Secure SSL/TLS (`port 465`) transactional email transport for user registration, token verification, and password resets. |
| **Token-Based Activation** | Cryptographic token generator with expiration enforcement (`AccountVerification`, `Forgot_pass`, `Send_access_link`). |

---

## 🏛️ System Architecture & Workflow

```
+─────────────────────────────────────────────────────────────────────────────+
|                                USER INTERFACES                              |
|   [Super Admin Portal]       [Business Client Dashboard]     [Public Consumers] |
|   (/admin/*)                 (/client/*)                     (/*)               |
+──────────────────────────────────────┬──────────────────────────────────────+
                                       │ HTTP / HTTPS (Tailwind CSS + DataTables)
                                       ▼
+─────────────────────────────────────────────────────────────────────────────+
|                         DJANGO WEB APPLICATION ENGINE                       |
|  - Custom LanguageMiddleware (German / English i18n)                        |
|  - Session & Role-Based Access Control (@login_required Decorators)         |
|  - App Modules: mr_trust_app (Admin), mr_trust_client, mr_trust_customer   |
+──────────────────────────┬───────────────────────────────────┬──────────────+
                           │                                   │
       Synchronous ORM     │                                   │ Dispatch Tasks
       Read/Write Queries  │                                   │ (Broker)
                           ▼                                   ▼
+──────────────────────────────────────+   +──────────────────────────────────+
|           MYSQL DATABASE             |   |        REDIS MESSAGE BROKER      |
|  - User & Role-Based RBAC            |   +──────────────────┬───────────────+
|  - Client_Management (Businesses)    |                      │
|  - Reviews (Photo Proof & Ratings)   |                      ▼
|  - Custom Sessions & Audit Tokens    |   +──────────────────────────────────+
+──────────────────────────────────────+   |      CELERY BACKGROUND WORKER    |
                                           |  - Activation Token Mailers      |
                                           |  - Password Reset Email Queue    |
                                           |  - Async Image Post-Processing   |
                                           +──────────────────┬───────────────+
                                                              │
                                                              ▼
                                                   [SMTP Email Dispatcher]
```

---

## 💡 Core Modules & Functional Capabilities

### 1. Super Admin Management (`mr_trust_app`)
- **Executive KPI Dashboard**: Real-time metric cards showing total businesses, active clients, consumer count, total reviews, and verified review ratio with quick-audit tables.
- **Client & Business Management**: Complete CRUD over business profiles with verification toggles (`client_status`), auto-slug generation, soft-deletion safeguards, and direct credential management.
- **Review Moderation Queue**: Dedicated approval pipeline where administrators review uploaded customer receipt/service photos, verify authenticity (`r_verified=1`), or reject fraudulent submissions.
- **Role-Based Access Control (RBAC)**: Fine-grained permissions matrix (`Module`, `Permission`, `UserRole`) supporting Read, Write, Create, and Delete privilege tiers.

### 2. Business Client Portal (`mr_trust_client`)
- **Reputation Command Center**: Business profile control panel displaying total review counts, verified rating metrics, and public profile preview links (`/business-info/<slug>`).
- **Media & Photo Stream**: Paginated infinite-scroll gallery displaying customer-submitted photos (15 items per page) with lazy loading.
- **Trust Asset Download Engine**: Gated asset download feature allowing businesses to download certified review packages only once they meet the 3-verified-review threshold.
- **Self-Service Profile Customization**: Profile management for business addresses, contact numbers, websites, company bios, and brand logos.

### 3. Customer & Public Experience (`mr_trust_customer`)
- **Discovery & Search Directory**: City- and keyword-indexed business directory with instant search (`client_business_name__icontains`) and pagination.
- **Company Detail & Showcase**: Dedicated business landing pages showing verified company information, operating location, average rating, and photo review stream.
- **Interactive Review Submission**: Customer review flow enabling users to assign star ratings (1-5), write detailed feedback, and upload photographic proof of purchase/service.
- **Full Lightbox Inspection**: Full-screen image preview allowing prospective buyers to inspect customer photos before making purchasing decisions.

---

## 🗄️ Database Schema & Key Data Entities

| Model Name | Table Name | Purpose & Key Fields |
|---|---|---|
| `User` | `user` | Core user identity: `user_email`, `user_password`, `user_role` (FK to `UserRole`), `user_status`, `user_is_delete`. |
| `UserRole` | `role` | RBAC role definitions (Super Admin, Client/Business Owner, Customer/Reviewer). |
| `Client_Management` | `client_management` | Business profile: `client_business_name`, `client_business_url` (slug), `client_logo`, `client_city`, `client_status`. |
| `Review` | `reviews` | Customer reviews: `r_customer` (FK to `User`), `r_business` (FK to `Client_Management`), `r_photo`, `r_rating`, `r_verified`. |
| `Session` | `session` | Custom DB-backed session tracking: `session_token`, `session_expire`, `session_status`, `session_is_delete`. |
| `AccountVerification` | `accountverification` | Secure tokenized email verification pipeline for user activation. |
| `Forgot_pass` | `forgot_password` | Time-expiring password reset tokens (15-minute validity window). |
| `CityList` | `citylist` | German municipal lookup index for business location filtering. |

---

## 💼 Portfolio & Resume Ready Descriptions

### 🎯 Short Summary (For Resume / LinkedIn Project Section)
> **Mr. Trust — Multi-Tenant Customer Review & Reputation Platform**  
> *Stack: Python, Django, Django REST Framework, Celery, Redis, MySQL, Tailwind CSS, DataTables, jQuery*  
> - Engineered a full-stack, bilingual (German/English) review verification platform connecting businesses with consumers, featuring photo-proof review validation.  
> - Designed a tri-tier multi-tenant architecture with isolated portals for Super Admins, Business Clients, and Consumers, backed by custom RBAC and session security.  
> - Integrated Celery and Redis to handle asynchronous email verification workflows and background task management.  
> - Implemented interactive UI components using Tailwind CSS, responsive DataTables, Lightbox2, and infinite-scroll image galleries.  
> - Optimized database queries using Django ORM `select_related` and batch `__in` lookups, resolving critical N+1 query bottlenecks across high-volume review endpoints.

---

### 🎙️ Technical Interview Talking Points (STAR Method)

- **Situation**: Fake online reviews undermine consumer trust and unfairly damage legitimate local businesses. Most review platforms lack proof verification, and business owners have little control over verifying customer authenticity.
- **Task**: Architect and build a secure, bilingual, multi-tenant review platform that enforces photographic proof of purchase/service, provides moderation controls for administrators, and gives verified businesses reputation widgets and marketing assets.
- **Action**:
  - Developed the system in **Django 4.2** with three segregated modules (`mr_trust_app`, `mr_trust_client`, `mr_trust_customer`) and role-based access decorators (`@login_required`).
  - Built an asynchronous email and token dispatch system using **Celery** with **Redis** as the message broker, ensuring user registration and password resets never block HTTP threads.
  - Implemented an administrative moderation workflow with **Pillow** image validation and **Lightbox2** modal inspection, gating marketing asset downloads until businesses achieve 3+ verified reviews.
  - Refactored legacy query patterns across admin and client dashboards, replacing sequential per-client review queries with single `select_related` and batch `__in` queries to eliminate N+1 bottlenecks.
  - Structured multi-language support (German primary, English secondary) via custom middleware and Django i18n translation catalogs.
- **Result**: Delivered a scalable, production-ready SaaS platform capable of handling thousands of photo reviews, maintaining sub-second dashboard rendering, and providing an auditable trust verification pipeline for European businesses.
