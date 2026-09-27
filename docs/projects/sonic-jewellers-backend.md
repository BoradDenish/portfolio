# Sonic Jewellers — Enterprise B2B/B2C Jewellery E-Commerce & Custom Manufacturing Backend

> **Scalable E-Commerce, Dynamic Product Configuration & Bespoke Manufacturing Management API**  
> *Engineered with Python (Django & Django REST Framework), MySQL, Redis, Celery, Dockerized imgproxy, WeasyPrint, openpyxl, and Firebase Cloud Messaging (FCM).*

---

## 📌 Executive Summary

**Sonic Jewellers** is an enterprise-grade e-commerce and bespoke order management backend platform engineered for high-value jewellery manufacturing, wholesale distribution, and retail commerce. The system bridges the gap between digital ordering and artisanal manufacturing floor workflows by accommodating intricate, multi-parameter jewellery customizations alongside conventional catalogue sales.

Traditional e-commerce platforms struggle with jewellery domain constraints—such as fluctuating gold purities (e.g., 91.6 KDM, 75.0 18K), precise alloy ingredient ratios (Gold, Silver, Copper percentages), variable weights, finger/bangle size ranges, and customer-provided design sketches or spoken instructions. 

This platform solves these domain complexities through a **metadata-driven dynamic form engine**, an end-to-end **custom order pipeline supporting multi-angle image uploads and audio voice memos**, **automated industrial document generation (PDF work-orders and Excel reports)**, and **real-time cloud notifications (FCM & SMTP)** powered by an asynchronous background task queue.

---

## 🚀 Key Highlights & Architectural Achievements

- **Metadata-Driven Dynamic Form Engine**: Designed an EAV-free (Entity-Attribute-Value) schema-driven architecture storing dynamic product attributes (weights, purity dropdowns, alloy percentages, size ranges) as structured JSON. Frontend applications render dynamic form fields directly from this schema, validating customer specifications without requiring relational database migrations for new product lines.
- **Bespoke Multimedia Custom Order Pipeline**: Engineered a dedicated workflow for bespoke jewellery manufacturing, enabling clients to submit custom designs with multi-file high-resolution reference imagery, text specifications, and voice/audio recordings explaining craftsmanship requirements.
- **Automated Work-Order & Export Suite**:
  - **Dynamic PDF Work-Orders**: Integrated **WeasyPrint** and custom Django HTML templates to generate print-ready, pixel-perfect technical job cards and invoices displaying customer specifications, dynamic QA attributes, and visual product mockups.
  - **Batch Asset Packaging (ZIP)**: Automated backend bundling of high-resolution design renders and voice memos into structured `.zip` archives for production teams.
  - **Financial & Operations Reports (Excel)**: Built automated data export pipelines using **openpyxl** to compile tabular order sheets containing customer details, line items, alloy breakdowns, and payment statuses.
- **On-the-Fly Responsive Media Optimization**: Integrated a containerized **imgproxy** service (`darthsim/imgproxy` via `drf-imgproxy`) to dynamically crop, resize, and compress high-resolution jewellery photographs on demand, dramatically cutting client bandwidth and load times.
- **Dual-Tier Authentication & RBAC**: Segmented authorization architecture separating back-office administration from B2B wholesale clients, featuring custom token-based session tracking (`user_sessions`), device tracking, and admin approval workflows for client registrations (`is_auto_approved` toggle).
- **Asynchronous Processing & Push Notifications**: Offloaded resource-intensive operations (order confirmation emails, verification links, bulk alerts) to **Celery** workers backed by **Redis**, coupled with direct **Firebase Cloud Messaging (FCM)** integration delivering custom payloads for iOS (APNs sound/priority), Android, and Web clients.

---

## 🛠️ Technology Stack & Libraries

### 1. Core Languages & Frameworks
| Technology | Version / Spec | Role & Purpose |
|---|---|---|
| **Python** | `3.10+` | Primary programming language powering business logic, ORM interactions, and data pipelines. |
| **Django** | `4.2.3` | Robust web application framework providing the ORM, migration system, template engine, and security middleware. |
| **Django REST Framework (DRF)**| `3.14.0` | Serialization, API views, request parsing (JSON & MultiPart), and HTTP response standardization. |
| **SQL (MySQL Dialect)** | `8.0+` | Relational schema definitions, constraints, relational mappings, and indexed data retrieval. |

---

### 2. Databases, Caching & Message Brokers
| Technology | Package / Library | Role & Purpose |
|---|---|---|
| **MySQL** | `mysqlclient 2.2.7` | Primary ACID-compliant relational database storing users, sessions, products, dynamic forms, orders, and audit history. |
| **Redis** | `redis 5.0.0` | In-memory key-value data store functioning as the message broker for Celery task queues. |
| **Django ORM** | Built-in | Object-Relational Mapping providing clean query abstraction, soft-delete mechanisms, and relationship integrity. |

---

### 3. Background Processing & Asynchronous Tasks
| Library / Package | Version | Description & Role |
|---|---|---|
| **Celery** | `5.3.1` | Distributed asynchronous task queue for non-blocking email dispatch, notification delivery, and heavy exports. |
| **django-celery-results** | `2.5.1` | Celery result backend integration tracking task execution status and history inside the database. |
| **Kombu & Billiard** | `5.3.1`, `4.1.0` | Messaging library and multiprocessing pool management backing Celery execution workers. |

---

### 4. Document Generation, Reports & File Management
| Library / Package | Version | Description & Role |
|---|---|---|
| **WeasyPrint** | `60.1` | Headless visual rendering engine translating HTML5/CSS3 templates into production-quality PDF work orders. |
| **ReportLab** | `4.0.4` | Complementary low-level PDF document and vector layout generation engine. |
| **openpyxl** | `3.1.2` | Advanced spreadsheet library used to generate formatted `.xlsx` order summaries and operational audit reports. |
| **Pillow (PIL)** | `10.0.0` | Python Imaging Library handling server-side image verification, format conversion, and metadata inspection. |
| **Python zipfile** | Built-in | Automated compression utility generating unified ZIP archives containing order-specific images and voice instructions. |

---

### 5. Media Processing & Optimization
| Tool / Library | Role & Description |
|---|---|
| **imgproxy (Docker)** | Standalone, high-speed image processing server running via Docker (`darthsim/imgproxy`) for on-the-fly resizing and format conversion. |
| **drf-imgproxy** (`1.1.0`) | Django REST Framework integration generating signed, secure imgproxy URLs for responsive client display. |

---

### 6. Cloud Services, Notifications & Communications
| Service / Library | Role & Description |
|---|---|
| **Firebase Cloud Messaging (FCM)** | Cross-platform push notifications delivering real-time order status updates and broadcast announcements across iOS (APNs), Android, and Web. |
| **Django Mail & SMTP** | Transactional email delivery engine rendering dynamic HTML templates for user account verification, password resets, and order receipts. |

---

### 7. Security, Tooling & Documentation
| Tool / Library | Version | Purpose |
|---|---|---|
| **drf-yasg** | `1.21.7` | Automated OpenAPI / Swagger 2.0 and ReDoc interactive API documentation generator. |
| **django-cors-headers** | `4.2.0` | Cross-Origin Resource Sharing middleware facilitating secure communication with separate web and mobile frontends. |
| **django-environ** | `0.10.0` | Twelve-factor compliant environment variable configuration management. |

---

## 🏛️ System Architecture & Data Flow

```
                      +───────────────────────────────────────────+
                      |         CLIENTS & FRONTEND APPS           |
                      |   [B2B Mobile App]   [Admin Web Portal]   |
                      +─────────────────────┬─────────────────────+
                                            │ HTTP / JSON / Multipart
                                            ▼
                      +───────────────────────────────────────────+
                      |               NGINX REVERSE PROXY         |
                      |   - SSL / TLS Termination   - Static Serving |
                      +─────────────────────┬─────────────────────+
                                            │ WSGI / Proxy Pass
                                            ▼
+────────────────────────────────────────────────────────────────────────────────────────+
|                            DJANGO REST FRAMEWORK BACKEND                               |
|                                                                                        |
|  [Authentication & RBAC]         [Dynamic Form Engine]        [Product & Hierarchy API]|
|  - Custom Token Sessions         - JSON Schema Validation     - Parent-Child Variations|
|  - Admin Approval Workflow       - Jewellery Parameter Engine - Dynamic Sorting Order  |
|                                                                                        |
|  [Order & Customization Engine]  [Cart & Checkout]            [Export & Reporting]     |
|  - Bespoke Voice/Image Notes     - Multi-Item Carts           - WeasyPrint (PDF Cards) |
|  - Status Transition Lifecycle   - Reorder Mechanisms         - openpyxl (Excel Sheet) |
|                                                               - zipfile (Asset Archive)|
+──────────────────────┬──────────────────────────────────────────┬──────────────────────+
                       │                                          │
        Database Reads │ & Writes                  Async Tasks    │ (Redis Queue)
                       ▼                                          ▼
+──────────────────────────────+               +─────────────────────────────────────────+
|        MYSQL DATABASE        |               |       CELERY WORKERS + REDIS BROKER     |
| - Users, Roles & Sessions    |               | - Async Transactional Email (SMTP)      |
| - Products, Images & Banners |               | - Firebase Cloud Messaging (FCM APNs/And|
| - Orders & Custom Requests   |               | - Heavy PDF/Excel Rendering Dispatch    |
| - Notifications & CMS Pages  |               +─────────────────────────────────────────+
+──────────────────────────────+
                       ▲
                       │ Image Transformation Requests
+──────────────────────┴─────────────────────────────────────────────────────────────────+
|                             DOCKERIZED IMGPROXY SERVICE                                |
|  - Secure, signed image URLs   - Fast C-based image resizing   - High-density thumbnails|
+────────────────────────────────────────────────────────────────────────────────────────+
```

---

## 💡 Core Modules & Functional Capabilities

### 1. Dynamic Jewellery Form & Specification Engine
- **JSON-Driven Form Definitions**: Products can specify arbitrary dynamic inputs (such as gold purity `91.6 KDM`, ingredient percentages `Gold: 75%, Silver: 15%, Copper: 10%`, gram weights, and dimension ranges) in an extensible JSON structure.
- **Dynamic Response Capture**: Order line items store the customer's completed configuration alongside the product reference, preserving the exact quotation specifications regardless of future catalogue price or schema updates.

### 2. Bespoke Jewellery Customization Pipeline
- **Multimedia Requirements Submission**: Enables clients to commission unique pieces by providing textual notes, CAD/photo references, and recorded audio notes directly through the mobile application.
- **Two-Way Status Workflow**: Integrated status tracking (`Pending`, `In-Production`, `Completed`, `Rejected`, `Delivered`) with direct admin feedback loops.

### 3. Automated Document Generation & Industrial Exports
- **WeasyPrint Work-Orders**: Transforms structured order contexts into styled PDF manufacturing sheets with embedded high-resolution graphics, customer details, and dynamic attribute tables.
- **openpyxl Operational Spreadsheets**: Exports multi-column Excel workbooks summarizing batch order metrics, material breakdown requirements, and order chronologies.
- **Bulk Media ZIP Archiver**: Automates on-demand compilation of all high-resolution design images and audio memos for an order into a single downloadable ZIP file for manufacturing artisans.

### 4. High-Performance Image Pipeline with imgproxy
- **Containerized Processing**: Leverages Docker-based `imgproxy` for real-time resizing and responsive thumbnail delivery without loading Python/Django memory buffers.
- **Storage Management**: Automated file naming sanitization and directory partitioning for product images, user avatars, and custom order attachments.

### 5. Multi-Device Push Notifications & Asynchronous Alerts
- **FCM Multi-Platform Support**: Sends customized notification bodies with distinct payload configurations for iOS (APNs sound/priority), Android, and Web push subscribers.
- **Broadcast Announcements**: Admin-initiated push notification broadcasts dispatched concurrently to all active platform users.
- **Transactional Email Suite**: Asynchronous HTML-rendered emails for account activations, password recovery tokens, and order placement acknowledgments.

### 6. User Verification & RBAC Administration
- **Flexible Onboarding Policy**: System toggle (`is_auto_approved`) allowing administrators to require manual KYC/business verification of wholesale jewellers before granting catalogue access.
- **Session-Level Security**: Custom persistent token tracking with client device metadata, expiration management, and remote logout capabilities.

---

## 💼 Portfolio & Resume Ready Descriptions

### 🎯 Short Summary (For Resume / LinkedIn Project Section)
> **Sonic Jewellers — Enterprise Jewellery E-Commerce & Custom Manufacturing Backend**  
> *Stack: Python (Django & Django REST Framework), MySQL, Redis, Celery, Docker (imgproxy), WeasyPrint, openpyxl, Firebase (FCM)*  
> - Engineered an enterprise B2B/B2C jewellery e-commerce backend supporting complex bespoke orders, parent-child product variations, and dynamic product specifications.  
> - Designed a metadata-driven dynamic form schema engine storing multi-attribute jewellery specifications (gold purity, alloy ratios, weights) without relational schema migrations.  
> - Developed an automated document generation engine utilizing WeasyPrint for pixel-perfect PDF manufacturing work-orders, openpyxl for Excel reporting, and ZIP asset bundling.  
> - Built an asynchronous processing pipeline with Celery and Redis for transactional emails and multi-platform Firebase Cloud Messaging (FCM) push notifications.  
> - Containerized imgproxy via Docker to deliver on-the-fly responsive image resizing and compression for high-resolution catalogue items.

---

### 🎙️ Technical Interview Talking Points (STAR Method)

- **Situation**: A luxury jewellery manufacturer required a scalable digital ordering and catalogue backend capable of handling both off-the-shelf items and highly customized jewellery pieces with precise physical specifications (alloy composition, gold purity, weights, audio/photo notes) while automating work-order generation for the workshop floor.
- **Task**: Design and implement a robust REST API backend with a dynamic specification engine, multimedia custom order management, automated industrial document exports (PDF/Excel/ZIP), and responsive media delivery.
- **Action**:
  - Implemented **Django REST Framework** with **MySQL**, designing a JSON-driven form metadata schema that eliminated the need for fragile EAV anti-patterns or constant schema alterations when adding new jewellery categories.
  - Architected a bespoke order pipeline capturing multi-image references and audio voice memos, coupled with **WeasyPrint** for HTML-to-PDF work-order generation and **openpyxl** for automated batch spreadsheet reporting.
  - Integrated **Dockerized imgproxy** with DRF to offload image resizing and compression to an ultra-fast C-based service, protecting application servers from memory bloat.
  - Deployed **Celery** workers backed by **Redis** to asynchronously dispatch order emails and trigger multi-platform **Firebase Cloud Messaging (FCM)** push notifications with APNs-specific payloads.
- **Result**: Successfully delivered a unified, high-reliability platform that reduced custom order turnaround time, streamlined manufacturing workshop handoffs through automated PDF/ZIP generation, and provided real-time order tracking to wholesale clients.
