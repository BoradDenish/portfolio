# Society Mitr (सोसायटी मित्र) — High-Performance Housing Society ERP & AI Vehicle Gatekeeping Platform

> **Portfolio Project Showcase & Technical Deep Dive**  
> **Role:** Lead Backend & Systems Engineer  
> **Stack:** Rust (Axum, Tokio, SQLx), PostgreSQL, Python (FastAPI, ONNX Runtime, YOLOv8), Razorpay, Docker, Linux Systemd, GitHub Actions CI/CD

---

## 1. Executive Summary & Portfolio Overview

**Society Mitr** (सोसायटी मित्र) is an enterprise-grade, multi-tenant residential society and gated community Enterprise Resource Planning (ERP) platform. It addresses the end-to-end operational, security, and administrative challenges faced by residential complexes, housing societies, high-rise apartment towers, and gated communities.

Unlike conventional society management tools built solely on high-level interpreted scripting languages, Society Mitr's core backend is engineered from the ground up in **Rust**. This architectural decision delivers sub-millisecond API latencies, zero-cost memory safety, deterministic concurrency, and minimal server resource footprints.

The platform integrates a dedicated **Python AI/Computer Vision microservice** for real-time Automated Number Plate Recognition (ANPR) and vehicle classification, a **hierarchical Role-Based Access Control (RBAC) engine** with dynamic per-user permission overrides, native **PostgreSQL quota triggers**, a full-lifecycle **complaint ticketing system**, a **digital notice board**, and **cryptographically verified Razorpay subscription billing**.

### Portfolio Elevator Pitch
> *"Architected and developed Society Mitr, a high-throughput, multi-tenant housing society management ERP powered by Rust (Axum/Tokio/SQLx) and PostgreSQL. Built an intelligent real-time AI vehicle verification pipeline combining YOLOv9/ONNX license plate OCR and YOLOv8 vehicle classification with custom Indian RTO grammar validation. Engineered a 5-tier hierarchical RBAC engine with dynamic per-user overrides, automated parking quota triggers, and secure Razorpay subscription billing with HMAC-SHA256 cryptographic verification."*

---

## 2. Core Functional Highlights

### 🏢 Multi-Tenant Colony & Wing Management
* **Hierarchical Topology:** Societies ("Colonies") and Wings ("Buildings") are modeled hierarchically. A master society can encompass multiple individual high-rise towers or wings linked via `parent_id`.
* **Wing-Level Data Isolation:** Wing-specific supervisors (`COLONY_SUB_ADMIN`) are strictly scoped to manage only residents, parking allocations, complaints, and notices belonging to their assigned wing, while society executives maintain colony-wide visibility.

### 👥 Resident & Staff Directory with Multi-Phone Support
* **Multiple Phone Numbers per Identity:** Real-world apartments house multiple family members. Residents can link multiple numbers with custom tags (`PRIMARY`, `WHATSAPP`, `EMERGENCY`, `ALTERNATE`), with database-level triggers mirroring the primary contact for backwards compatibility and instant search indexing.
* **Flexible Resident Categorization:** Distinguishes owner-residents, tenants, committee members, and security personnel, supporting proof-of-identity metadata verification.

### 🚗 AI-Powered Vehicle Gatekeeping & ANPR
* **Automated License Plate Recognition (ALPR/ANPR):** Residents upload vehicle registration photos directly via mobile or web. An asynchronous vision pipeline detects, crops, and OCRs Indian number plates using lightweight ONNX models.
* **Dual-Model Cross Validation:** Concurrently detects vehicle type (`CAR`, `BIKE`, `SCOOTER`, `OTHER`) using YOLOv8, alerting society administrators if an uploaded photo of a two-wheeler is submitted with a car registration number.
* **Administrative Approval Workflow:** Every new vehicle registration or update is automatically quarantined in a `PENDING` state and requires manual verification and sign-off (`PATCH /approval`) by an authorized society admin before gate clearance is activated.

### 🅿️ Automated Parking Management & Quota Enforcement
* **Slot Allocation & Tracking:** Complete catalog of all numbered parking spots across society basements and open grounds, distinguishing allocated slots from open visitor parking.
* **Database-Enforced Quotas:** Stored PostgreSQL triggers strictly enforce per-house parking quotas, preventing accidental double-allocations or administrative over-allocation at the database level.

### 📢 Digital Notice Board & Broadcast Engine
* **Targeted Announcements:** Notices can be published society-wide or scoped strictly to specific wings, featuring priority urgency flags (`is_urgent`) and auto-expiration timestamps.
* **Role-Gated Publishing:** Ensures only authorized society officials can author society notices while residents retain immediate real-time read access.

### 🛠️ Helpdesk & Complaint Resolution Ticketing
* **Categorized Issue Tracking:** Tickets classified by domain (`Water`, `Electricity`, `Parking`, `Security`, `Lift`, `Cleaning`, `Other`).
* **Staff Assignment & Workflow:** Admins can assign specific tickets to on-duty maintenance staff (`PATCH /assign`) and transition statuses (`PENDING` $\rightarrow$ `IN_PROGRESS` $\rightarrow$ `RESOLVED` / `REJECTED`).
* **Trigger-Based Resolution Auditing:** PostgreSQL triggers automatically calculate and record the exact `resolved_at` timestamp the instant a ticket status transitions to `RESOLVED`.

### 📊 Real-Time Analytics & Operations Dashboard
* **Dynamic Society Health Metrics:** Aggregated single-query read models providing key performance indicators: occupancy rate %, vehicle compliance %, and open complaint resolution velocity.
* **Trend Analysis:** Calculates historical trend deltas across customizable time windows (`7d`, `30d`, `90d`, `1y`) with automated positive/negative trajectory indicators.
* **Building Health Grading:** Evaluates and rates each wing (`EXCELLENT`, `GOOD`, `ATTENTION`) based on open maintenance backlogs and occupancy density.

### 💳 SaaS Subscription Billing & Razorpay Integration
* **Dynamic Tiered Packages:** Societies subscribe to scalable monthly or annual operational tiers (`packages`) featuring granular feature allowances and pricing.
* **Tamper-Proof Server-Side Pricing:** The client only submits a `package_id`; the API queries the price directly from the database and converts it to paise server-side, preventing client-side parameter manipulation.
* **Cryptographic Signature Verification:** Webhook and payment callbacks are authenticated using HMAC-SHA256 over `order_id|payment_id` before updating society validity dates.

---

## 3. Technology Stack & Libraries Used

| Layer / Category | Technology / Library | Version | Purpose in Project |
| :--- | :--- | :--- | :--- |
| **Backend Language** | **Rust** | 2021 Edition (1.80+) | Primary backend language ensuring zero-cost abstractions, deterministic memory safety without GC pauses, and extreme multi-core parallelism. |
| **Web Framework** | **Axum** | 0.7.x | High-performance, ergonomic async web application framework built on top of Tokio, Tower, and Hyper. |
| **Async Runtime** | **Tokio** | 1.x (Full) | Non-blocking, multi-threaded event-driven async runtime powering task execution and network I/O. |
| **Database Driver & ORM**| **SQLx** | 0.8.x | Pure asynchronous PostgreSQL driver with compile-time verified SQL queries and native migration runner. |
| **Database Engine** | **PostgreSQL** | 14+ / 16 | Relational database handling complex relational schemas, foreign keys, partial indexes, and stored triggers. |
| **Middleware & Routing** | **Tower / Tower-HTTP**| 0.5 / 0.6 | Composable middleware stack handling CORS policies, request tracing, payload streaming, and timeout management. |
| **Authentication & Auth** | **jsonwebtoken** | 9.x | Stateless JWT minting, validation, and claim decoding with role, colony, and wing scope attributes. |
| **Password Hashing** | **Argon2id** | 0.5.x | State-of-the-art memory-hard password hashing algorithm safeguarding resident and administrator credentials. |
| **AI Vision Sidecar** | **Python** / **FastAPI** | 3.10+ / 0.115 | Asynchronous REST microservice serving license plate localization, OCR, and vehicle classification. |
| **Inference Engine** | **ONNX Runtime** | Latest | Hardware-accelerated neural network inference executing the `yolo-v9-t` license plate detector and `cct-xs-v2` OCR model. |
| **Object Detection** | **Ultralytics (YOLOv8)** | 8.3.x | Deep convolutional network predicting vehicle categories (`car`, `motorcycle`, `bus`, `truck`) from raw images. |
| **Image Processing** | **image-rs** | 0.25.x | Rust-native image decoding, format validation (JPEG, PNG, WebP), and byte-stream inspection. |
| **Payment Gateway** | **Razorpay REST API** | v1 | Orders API, payment tokenization, and recurring society subscription management. |
| **Cryptographic Security**| **hmac**, **sha2**, **hex** | 0.12 / 0.10 / 0.4 | Constant-time HMAC-SHA256 signature verification for Razorpay payment receipts and webhooks. |
| **API Documentation** | **utoipa & Swagger UI** | 5.5 / 8.0 | Compile-time OpenAPI 3.0 specification generator and interactive `/docs` Swagger explorer. |
| **Structured Logging** | **tracing & subscriber**| 0.1 / 0.3 | High-throughput structured diagnostic logging with rolling file appenders and multi-filter log levels. |
| **Process Management** | **libc (Linux prctl)** | 0.2.x | Supervises child AI sidecar processes using `PR_SET_PDEATHSIG` to guarantee zero zombie processes on crash. |
| **Configuration** | **dotenvy** | 0.15.x | Twelve-factor configuration loading and strict type-safe environment variable parsing. |
| **Serialization** | **serde / serde_json** | 1.0.x | Ultra-fast compile-time JSON deserialization, serialization, and schema validation. |
| **Validation** | **validator** | 0.18.x | Declarative data transfer object (DTO) validation for emails, phone numbers, and string bounds. |
| **CI/CD & DevOps** | **GitHub Actions** | Ubuntu 24.04 | Automated remote deployment pipeline over SSH, server-side incremental compiling, and service reload. |
| **Service Supervisor** | **Linux Systemd** | Native | Production daemon management, auto-restart policies, environment sandboxing, and resource limits. |

---

## 4. Deep-Dive Architecture & Engineering Highlights

```
                           +-----------------------------+
                           |  Client Web / Mobile Apps   |
                           +--------------+--------------+
                                          |
                                          | HTTPS / Bearer JWT
                                          v
+----------------------------------------------------------------------------------------+
|                                SOCIETY MITR CORE (RUST)                                |
|                                                                                        |
|  +---------------------+   +-----------------------+   +----------------------------+  |
|  |   Axum Web Router   |-->|   Auth & Extraction   |-->|      RBAC & Scope          |  |
|  | (14 Resource Groups)|   | (Argon2 / Claims JWT) |   |  (Ladder & Matrix Engine)  |  |
|  +---------------------+   +-----------------------+   +----------------------------+  |
|                                                                       |                |
|                                                                       v                |
|  +---------------------+   +-----------------------+   +----------------------------+  |
|  |  Razorpay Checkout  |   | Vehicle Image Manager |   |   Business Services Layer  |  |
|  |   (HMAC-SHA256)     |   |   (Validation & Disk) |   |  (Colony, Users, Parking)  |  |
|  +---------------------+   +-----------------------+   +----------------------------+  |
|                                        |                             |                 |
+----------------------------------------|-----------------------------|-----------------+
                                         |                             |
                   Subprocess / HTTP POST|                             | SQLx Async Pool
                                         v                             v
                   +-----------------------------+   +-----------------------------------+
                   |    AI/ML VISION SIDECAR     |   |        POSTGRESQL DATABASE        |
                   |      (Python / FastAPI)     |   |  - 22 Versioned Migrations        |
                   | - fast-alpr (YOLOv9-t ONNX) |   |  - Parking Quota Triggers         |
                   | - CCT-XS Plate OCR Model    |   |  - Auto-Resolution Timestamping   |
                   | - YOLOv8s COCO Classifier   |   |  - Composite Unique Constraints   |
                   | - Indian RTO Grammar Parser |   |  - Permissions Read-Model Matrix  |
                   +-----------------------------+   +-----------------------------------+
```

### 4.1 Sub-Process Supervision of AI Microservice
To keep operations unified, the Rust server can directly spawn and supervise the Python AI sidecar as a child process when `PLATE_OCR_SPAWN=1`:
* **Linux `PR_SET_PDEATHSIG` Safety:** Rust configures `libc::prctl(PR_SET_PDEATHSIG, libc::SIGTERM)` on the spawned child process. If the primary Rust API terminates unexpectedly (SIGKILL or crash), the Linux kernel immediately terminates the Python AI process, guaranteeing zero orphaned or zombie processes.
* **Unified Diagnostics Pipeline:** The child process's stdout and stderr are continuously piped through Rust's asynchronous Tokio readers and ingested into the core `tracing` subscriber, centralizing all AI inference logs into standard API log files.

### 4.2 Intelligent Indian License Plate Grammar Engine
Indian license plates follow diverse, complex layouts, including single-line passenger vehicle plates, two-line commercial or two-wheeler plates, and the recent Bharat Series (`BH`). The Python vision service implements custom heuristics:
* **Two-Line Plate Splitting:** Two-wheelers frequently stack RTO codes over numbers (e.g., `GJ 03 L` over `J 2915`). The engine inspects bounding box aspect ratios; if square-proportioned ($\text{width} / \text{height} \le 2.6$), it executes OCR on both the whole crop and vertically split halves, scoring both against formal Indian registration grammar.
* **OCR Character Disambiguation:** Applies contextual domain correction for typical character confusions: converting numerical `0` to alphabetical `O` in RTO state prefixes (e.g., `MH`, `DL`, `GJ`) and alphabetical `I` to `1` in numeric suffixes.
* **Dual-Model Cross Validation:** Ensures the detected vehicle type matches the registration claim (e.g., preventing a two-wheeler registration from being approved if the photo depicts a passenger car).

### 4.3 Hierarchical Role-Based Access Control (RBAC) & Dynamic User Overrides
The security architecture enforces a strict role assignment ladder and multi-tier permission matrix:
* **The Ladder Principle:** No user may assign, alter, or delete a role equal to or higher than their own (`GLOBAL_ADMIN` $\rightarrow$ `GLOBAL_SUB_ADMIN` $\rightarrow$ `COLONY_ADMIN` $\rightarrow$ `COLONY_SUB_ADMIN` $\rightarrow$ `USER`).
* **Database-Backed Permission Matrix:** Each role has defined permissions (`can_add`, `can_edit`, `can_delete`, `can_list`, `can_approve`) and scope (`ALL`, `SCOPED`, `OWN`, `NONE`) across 9 modules.
* **Per-User Overrides (`user_permission_overrides`):** Platform or society admins can dynamically grant or restrict capabilities for a specific resident (e.g., revoking vehicle creation or delegating complaint resolution) without modifying the base role definition.
* **Immediate Token Retirement:** Modifying permissions increments `permissions_updated_at`. The authentication middleware compares the token's issued-at timestamp against this value, instantly rejecting stale credentials without waiting for natural token expiration.

### 4.4 Tamper-Proof Payment Architecture
* **Strict Server-Side Derivation:** Clients cannot submit an arbitrary price payload during checkout. The API retrieves the current price from the `packages` table, converts it to Indian Paise, and creates the order via the Razorpay Orders API.
* **Cryptographic HMAC-SHA256 Verification:** When payment completion callbacks arrive, the server computes an HMAC-SHA256 hash of `order_id + "|" + payment_id` using the server's secret key and executes a constant-time comparison against `razorpay_signature` before provisioning the subscription.

---

## 5. Database Architecture & Schema Highlights

Managed via **22 sequential SQLx migrations**, the PostgreSQL schema is engineered for strict relational integrity:

1. **`admin_user` / `colony_users`**: Two separate identity tables segregating global SaaS platform administrators from colony-specific staff and residents.
2. **`colonies`**: Hierarchical entity modeling both master societies and individual wings/towers using self-referential `parent_id` foreign keys.
3. **`user_phones`**: Normalized phone directory supporting multiple numbers per user with unique labels (`PRIMARY`, `WHATSAPP`, `EMERGENCY`) and trigger-based primary sync.
4. **`vehicles` & `vehicle_images`**: Vehicle registry storing plate numbers, vehicle types (`CAR`, `BIKE`, etc.), approval states (`PENDING`, `APPROVED`, `REJECTED`), and linked image metadata with OCR confidence scores.
5. **`parkings`**: Slot management tracking allocated vs. open slots, assigned residents, and automated quota validations.
6. **`notices`**: Society and wing broadcast messages with urgency flags and expiration timestamps.
7. **`complaints`**: Maintenance ticketing tracking categories, assignees, resolution status, and trigger-generated `resolved_at` timestamps.
8. **`roles` / `role_permissions` / `user_permission_overrides`**: Dynamic runtime RBAC matrix storing CRUD capabilities and scope boundaries per role and per user.
9. **`packages` & `payments`**: SaaS tier catalog and Razorpay payment audit logs (`order_id`, `payment_id`, `signature`, `amount`, `status`).

---

## 6. DevOps, Automated CI/CD & Deployment

The deployment pipeline is built for zero-downtime releases and rapid rollbacks on Ubuntu Linux:

```
[Git Push to 'main'] 
        │
        ▼
[GitHub Actions Runner (.github/workflows/deploy.yml)]
        │
        ├── 1. Validates SSH Deploy Key (Ensures trailing newline & permissions)
        ├── 2. Scans Host Keys & Establishes Secure SSH Tunnel
        └── 3. Invokes Remote Build Script (/usr/local/bin/socmitra-build-deploy.sh)
                    │
                    ▼
[Production Server (Ubuntu 24.04 LTS)]
        │
        ├── 1. Git pull latest commits into /opt/socmitra-src
        ├── 2. Incremental compilation via 'cargo build --release' under 'nice -n 19'
        ├── 3. Atomic Binary Swap: Moves compiled binary to /opt/society-mitr-api/bin/
        ├── 4. Executes 'sqlx migrate run' for pending database updates
        ├── 5. Restarts Systemd Service: 'systemctl restart socmitra-api.service'
        └── 6. Health Check: Pings /api/colonies; triggers automatic rollback on failure
```

---

## 7. Portfolio Highlights & Resume Ready Bullet Points

* **Engineered Ultra-Low-Latency Rust Backend:** Built an enterprise-grade multi-tenant housing society ERP in Rust using Axum, Tokio, and SQLx, achieving sub-millisecond API response times and eliminating garbage collection overhead.
* **Developed Real-Time AI Computer Vision Pipeline:** Architected an Automated Number Plate Recognition (ANPR) and vehicle classification microservice using FastAPI, ONNX Runtime (fast-alpr), and YOLOv8, incorporating custom Indian RTO grammar and two-line plate parsing.
* **Designed Multi-Tier Hierarchical RBAC:** Implemented a comprehensive 5-tier role ladder with wing-level multi-tenancy, dynamic module-level permission matrices, and instant token invalidation upon privilege modification.
* **Built Secure Fintech & Billing Pipeline:** Integrated Razorpay subscription billing featuring dynamic server-derived pricing and HMAC-SHA256 cryptographic signature validation.
* **Optimized Database Layer with Stored Triggers:** Engineered 22+ PostgreSQL migrations with compile-time verified SQLx queries and custom database triggers for parking quota enforcement and automated complaint timestamping.
* **Automated Production DevOps & CI/CD:** Configured automated GitHub Actions deployment pipelines for remote server-side release builds, atomic binary swaps, Linux systemd process supervision, and automated rollback health checks.
