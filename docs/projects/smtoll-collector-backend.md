# SM Toll Collector — Multi-Plaza Transit Fare & POS Management System

> **Multi-Tenant Toll Plaza Operations, High-Throughput Transit Fare Collection & Auditing Engine**  
> *Engineered with Python (Django 4.2), Django REST Framework (DRF), MySQL, Custom Bearer Session Architecture, and Automated Seed Pipelines.*

---

## 📌 Executive Summary

**SM Toll Collector** is a mission-critical toll plaza operations and transit revenue collection platform designed for highway toll authorities, infrastructure concessionaires, and toll plaza operators. The system streamlines booth lane operations, operator shift handovers, automated vehicle classification, fare calculation, overweight vehicle surcharge detection, and end-of-day financial reconciliation across distributed highway networks.

The platform addresses core challenges in transit tolling: preventing lane congestion through high-speed operator POS ticketing, mitigating cash leakage and reconciliation discrepancies through non-destructive audit logging, and enforcing strict data governance through multi-tiered Role-Based Access Control (RBAC) that isolates plaza data across administrative managers and booth personnel.

---

## 🚀 Key Highlights & Architectural Achievements

- **Decoupled Dual-Portal Architecture**: Segmented administrative governance (`/admin/`) from high-cadence booth operator transit workflows (`/app/`), optimizing payload sizes and endpoint throughput for ruggedized toll-booth terminals.
- **Hierarchical RBAC & Spatial/Temporal Data Scoping**:
  - **Admin (`role_id: 1`)**: Global administrative oversight, module permission controls, and complete configuration management.
  - **Booth Operator (`role_id: 2`)**: Dedicated booth POS interface bound strictly to assigned plaza, lane, and active shift with 6-digit numeric identification.
  - **Manager (`role_id: 3`)**: Scoped strictly to specific assigned plazas (`user_assigned_toll`) with an enforced 48-hour rolling audit window to safeguard historical reporting data.
- **High-Cadence Ticketing & Overload Detection**: Implements atomic sequential ticket counter calculation (`ticket_number`) alongside weight-based overload verification (`r_is_ourload`, `r_std_weight`), ensuring compliance with axle load regulations and dynamic surcharge calculation.
- **Non-Destructive Financial Auditing (Soft Deletes)**: All core business entities—toll plazas, lanes, shifts, vehicle classifications, user credentials, and transactional receipts—implement persistent soft-deletion (`is_deleted = 1`), preserving a non-repudiable audit trail for financial regulators.
- **Custom High-Entropy Session Bearer Engine**: Designed a secure session management layer utilizing cryptographically strong tokens (`secrets.token_hex`), database-backed expiry validation, multi-session invalidation, and granular role enforcement decorators.
- **Query Performance & ORM Optimization**: Leveraged Django ORM's `select_related` on foreign key relations (`r_vehical_type`, `r_user_job`, `r_shift_select`, `r_toll_plaza`, `r_lane_select`) and database-level aggregations (`Sum`, `Count`, `Max`), eliminating N+1 query bottlenecks across high-volume reporting sweeps.

---

## 🛠️ Technology Stack & Libraries

### 1. Core Languages & Runtimes
| Technology | Version / Spec | Role & Purpose |
|---|---|---|
| **Python** | `3.10+` | Primary programming language powering business logic, REST APIs, ORM queries, and test suites. |
| **SQL (MySQL Dialect)** | `8.0+` | Relational database schema, relational constraints, foreign keys, and transaction integrity. |
| **Bash / Shell** | Standard Linux | Environment configuration, database migration commands, and automated data seeding pipelines. |

---

### 2. Databases & Persistence
| Technology | Package / Library | Description & Role |
|---|---|---|
| **MySQL Database** | `mysqlclient==2.2.0` | Production relational database engine configured with `STRICT_TRANS_TABLES` for strict data validation and zero implicit type truncation. |
| **Django ORM** | Built-in | Object-Relational Mapping layer handling schema migrations, complex joins, aggregate reporting, and model lifecycles. |
| **Media Storage** | Local / Network FS (`Pillow==10.1.0`) | Image processing and dynamic asset handling for operator profile pictures and vehicle class iconography. |

---

### 3. Backend Framework & Web APIs
| Library / Package | Version | Description & Role |
|---|---|---|
| **Django** | `4.2.7` (LTS) | Enterprise web framework providing routing, ORM, security middleware, and database management. |
| **Django REST Framework (DRF)** | `3.14.0` | Serialization framework powering JSON request parsing, ModelSerializers, and standardized API decorators (`@api_view`). |
| **django-cors-headers** | `4.3.0` | Cross-Origin Resource Sharing middleware enabling secure cross-domain requests from web, mobile, and POS frontends. |
| **django-environ** | `0.11.2` | Twelve-Factor App environment variable orchestration from `.env` files (`BASE_URL`, database credentials, debug flags). |

---

### 4. Security, Authentication & Data Validation
| Library / Package | Role & Implementation Details |
|---|---|
| **Django Cryptographic Hashers** | Salted PBKDF2 password hashing (`make_password`, `check_password`) for operator and administrative credentials. |
| **Python `secrets` Module** | Cryptographically secure pseudo-random number generator producing high-entropy session tokens (`secrets.token_hex`). |
| **Regex & Pattern Validation** | Strict RFC-compliant email matching, 6-digit numeric booth ID enforcement, and sanitization against injection vectors. |
| **Standardized Response Envelope** | Unified response format across all endpoints: `{"success": 0|1|2, "message": "...", "data": {...}}` facilitating clear client-side state handling. |

---

### 5. Testing, Seeding & Development Tooling
| Tool / Library | Version | Role & Description |
|---|---|---|
| **Django Test Framework** | Built-in (`TestCase`) | Comprehensive test suite (>1,400 lines of test code) verifying authentication flows, role access boundaries, CRUD endpoints, and report computations. |
| **django-seed & Faker** | `0.3.1` / `20.0.3` | Synthetic dataset generation for high-volume load simulations across shifts, lanes, plazas, and transaction receipts. |
| **Custom Seed Scripts** | Python Shell Scripts | Structured database population scripts (`seed_tollplaza.py`, `seed_lane.py`, `seed_shift.py`, `seed_vehicaltype.py`, `seed_user.py`, `seed_receipt.py`). |

---

## 🏛️ System Architecture & Data Flow

```
+─────────────────────────────────────────────────────────────────────────────────────────+
|                                    CLIENT PLATFORMS                                     |
|     [Operator POS / Touch Terminals]       [Plaza Manager Tablets]       [Admin Portal]  |
+─────────────────────────────────────────────────────────────────────────────────────────+
                            │                                         │
       Bearer Token Auth    │                                         │ Bearer Token Auth
       Operator PIN Login   │                                         │ Email + Password Login
                            ▼                                         ▼
+─────────────────────────────────────────+   +───────────────────────────────────────────+
|      USER (OPERATOR) APIS (/app/)       |   |       ADMINISTRATIVE APIS (/admin/)       |
|  - Operator Login & Auto-Session Kill   |   |  - Plaza, Lane, Shift, Vehicle CRUD       |
|  - Active Lane/Shift Roster Fetch       |   |  - Role & Permission Management           |
|  - Rapid Ticket Issuance & Counter      |   |  - Daily, Shift, Lane & Full Reports      |
|  - Overload Weight Verification         |   |  - Real-Time Revenue Aggregation Dashboard|
+─────────────────────────────────────────+   +───────────────────────────────────────────+
                            │                                         │
                            └────────────────────┬────────────────────┘
                                                 │
                                                 ▼
+─────────────────────────────────────────────────────────────────────────────────────────+
|                                 CORE BACKEND SERVICES                                   |
|  - Session Token Validator & TTL Sweeper (token_verification)                            |
|  - Multi-Tenant Manager Scope Filter (user_assigned_toll & 48h temporal window)          |
|  - Sequential Ticket Number Generator (Max aggregate)                                   |
|  - Dynamic Pricing & Vehicle Classification Engine                                      |
+─────────────────────────────────────────────────────────────────────────────────────────+
                                                 │
                                                 │ Django ORM (select_related, aggregations)
                                                 ▼
+─────────────────────────────────────────────────────────────────────────────────────────+
|                               MYSQL RELATIONAL DATABASE                                 |
|  [toll_plaza]     - Plaza metadata, section, active status                              |
|  [lane]           - Lane identifiers, plaza foreign keys                                |
|  [shift]          - Work windows (from_time, to_time)                                   |
|  [vehical_types]  - Vehicle classifications, tariff rates, category image               |
|  [user]           - Administrative & booth operator credentials, assigned tolls         |
|  [user_sessions]  - Active Bearer tokens, IP/session bindings, TTL expiry timestamps    |
|  [receipt]        - Immutable transit ledger, vehicle #, tariffs, weights, audit flags  |
+─────────────────────────────────────────────────────────────────────────────────────────+
```

---

## 💡 Core Modules & Functional Capabilities

### 1. Toll Booth POS Engine (`smtoll_collect_user`)
- **Rapid Booth Operator Login**: Authenticates operators via 6-digit numeric IDs, invalidating any previous concurrent sessions to prevent duplicate booth check-ins.
- **Context-Aware Dashboard**: Automatically populates the operator's active shift time window, assigned lane, plaza section, and the approved vehicle tariff matrix.
- **Instantaneous Ticket Generation (`/app/data-save`)**:
  - Calculates the next sequential ticket ID using atomic database aggregation.
  - Verifies vehicle class pricing and records vehicle registration plate numbers.
  - Validates axle load limits; triggers mandatory overload weight capture (`r_std_weight` vs `r_vehical_weight`) when `r_is_ourload` is asserted.

### 2. Plaza Governance & Infrastructure Management (`smtoll_collect_admin`)
- **Toll Plaza & Lane Topography**: Full lifecycle management of highway plazas and constituent lanes with one-click status activation and soft-deletion.
- **Dynamic Vehicle Tariff Classification**: Configurable pricing schedules per vehicle category (e.g., Two-Wheeler, LMV, Heavy Construction Machinery, Multi-Axle Trucks) with image assets for POS visual recognition.
- **Shift Rostering**: Configurable shift timing windows ensuring continuous 24/7 booth operation handovers.

### 3. Multi-Dimensional Reporting & Financial Auditing
- **Real-Time Revenue Dashboard**: Aggregates today's transaction volume and gross tariff collections grouped by vehicle type in real time.
- **Daily Reconciliation Report**: Computes net revenue by tracking gross sales against canceled receipts and manual override tickets.
- **Shift & Lane Audit Reports**: Granular breakdowns isolating ticket counts and revenue by individual shift windows and lane numbers.
- **Multi-Parameter Full Audit Ledger**: Advanced multi-criteria search and filter engine supporting sorting, pagination, date ranges, toll plaza IDs, shift IDs, operator IDs, and vehicle categories.

### 4. Enterprise Security & Custom Session Subsystem
- **Stateless Bearer Token Architecture**: Issues randomized 256-bit hexadecimal tokens stored with UTC expiration timestamps.
- **Manager Data Isolation**: Enforces query filters ensuring plaza managers can only audit plazas listed in their comma-delimited `user_assigned_toll` profile and limits temporal visibility to a strict 48-hour trailing window.

---

## 💼 Portfolio & Resume Ready Descriptions

### 🎯 Short Summary (For Resume / LinkedIn Project Section)
> **SM Toll Collector — Toll Plaza Operations & POS Transit Backend**  
> *Stack: Python, Django 4.2, Django REST Framework (DRF), MySQL, REST APIs, Pytest/TestCase*  
> - Engineered an enterprise transit fare collection backend managing toll plazas, multi-lane booths, vehicle tariff classifications, and operator shifts.  
> - Designed a dual-portal REST architecture separating high-speed booth operator POS workflows from centralized administrative auditing and reporting.  
> - Implemented a custom high-entropy Bearer session token management engine with automated session invalidation and granular RBAC (Admin, Scoped Manager, Booth Operator).  
> - Formulated financial reporting pipelines with real-time aggregations (Daily, Shift, Lane, and Multi-parameter Full Reports) using Django ORM query optimization (`select_related`, DB-level aggregations).  
> - Enforced strict data governance using database-backed soft-deletion across all transactional records to guarantee non-repudiation and audit compliance.

---

### 🎙️ Technical Interview Talking Points (STAR Method)

- **Situation**: Highway toll collection requires sub-second ticketing turnaround at booth lanes to prevent traffic congestion, while requiring rigorous audit controls to prevent financial discrepancies and unauthorized access across distributed toll plazas.
- **Task**: Develop a scalable, auditable backend API supporting fast booth-operator POS ticketing, automated shift/lane handovers, strict data isolation for regional plaza managers, and comprehensive revenue reconciliation reports.
- **Action**:
  - Engineered the backend using **Django 4.2** and **DRF**, architecting a dual-portal system separating lightweight operator ticketing (`/app/`) from administrative management (`/admin/`).
  - Implemented a custom database-backed Bearer session authentication mechanism using Python's `secrets` library, eliminating session hijacking and terminating previous sessions upon operator re-login.
  - Enforced hierarchical data isolation where regional managers are dynamically scoped to assigned plaza IDs with an enforced 48-hour rolling audit window to safeguard historical financial records.
  - Optimized database query performance using `select_related` across high-volume receipt queries, reducing query count from $O(N)$ to $O(1)$ and accelerating report generation.
  - Authored a comprehensive 1,400+ line test suite (`TestCase`) verifying all business invariants, permission boundaries, and ticket calculations.
- **Result**: Delivered a reliable, production-ready toll plaza management system capable of handling rapid lane check-ins, zero data loss via strict soft-deletes, and seamless end-of-shift financial auditing.
