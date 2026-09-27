# Industrial Thermal Label & Barcode/QR Printing Desktop Suite

> **Mission-Critical Multi-Industry Industrial Desktop Suite for High-Speed Thermal Barcode & QR Label Printing**  
> *Engineered with Python 3, PyQt5, Ctypes (Win32 FFI & TSCLIB.dll), Linux CUPS Raw Spooling, Socket Networking (TSPL Port 9100), Vector/Raster Graphic Pipeline (Pillow, CairoSVG, Cairocffi), Google Apps Script & REST API Integrations, and Standalone PyInstaller Packaging.*

---

## 📌 Executive Summary

The **Industrial Thermal Label & Barcode/QR Printing Desktop Suite** is an enterprise-grade desktop hardware automation platform designed to bridge enterprise cloud ERPs, spreadsheets, and databases directly to industrial-grade thermal transfer label printers (specifically **TSC TE244**, **TSC TA210**, and TSPL-compatible hardware).

Industrial thermal printing demands micro-millimeter precision layout control, ultra-low latency, and reliable hardware integration. Conventional print drivers rasterize entire pages into bulky print-spool bitmaps, resulting in sluggish throughput, blurry micro-text, unreadable barcodes, and misaligned margins on tiny industrial labels (such as miniature 84×12 mm jewellery tags).

This suite solves these industrial challenges by communicating directly in **TSPL (TSC Printer Language)** via native dynamic link libraries (`TSCLIB.dll`), Linux CUPS raw queues (`lp -o raw`), and raw network TCP sockets. The platform delivers non-blocking data synchronization with diverse cloud backends (REST APIs and Google Apps Script), dynamic client-side filtering, automatic SVG/PNG vector rasterization into 1-bit PCX printer flash memory images, and sub-millimeter multi-track barcode/QR generation across multiple vertical sectors including **fine jewellery retail & manufacturing**, **automotive radiator production**, and **industrial battery warranty tracking**.

---

## 🚀 Key Highlights & Architectural Achievements

- **Low-Level Hardware Control & TSPL Direct Driver Engine**: Bypasses standard OS print dialogs and bloated GDI/raster subsystems. Communicates directly with thermal printheads at the hardware command level (TSPL/TSPL2) using `ctypes` Win32 FFI bindings (`TSCLIB.dll`), Linux CUPS raw pipelines (`lp -d <queue> -o raw`), and direct socket connections on raw jetdirect port `9100`.
- **On-the-Fly Vector/Raster Image Pipeline (Printer Flash PCX)**: Built an automated image pre-processing pipeline using **CairoSVG** and **Pillow** that ingests company logos (SVG/PNG), resizes them to exact dot dimensions (203 DPI / 8 dots per mm), boosts monochrome contrast, pads byte-alignment to 8-bit boundaries, converts them to 1-bit PCX, and uploads them directly into the printer's onboard flash NVRAM memory (`F:LABEL_LO.PCX`) using DOS 8.3 short paths (`GetShortPathNameW`) to eliminate repeated bandwidth transfer during bulk runs.
- **Cross-Platform Hardware Abstraction Layer**:
  - **Windows**: Direct kernel driver and DLL binding via `ctypes.windll.LoadLibrary("TSCLIB.dll")`.
  - **Linux / Ubuntu**: Raw stream spooling into CUPS printer queues using `subprocess` and `lp -o raw`, enabling deployment on Linux factory workstations and Raspberry Pi / embedded print servers.
  - **Network LAN**: Direct socket communication over TCP port `9100` for networked thermal label printers.
  - **Direct Serial Port Fallback**: Integration with `QSerialPort` for legacy RS-232 / USB-to-UART COM communication without third-party drivers.
- **Asynchronous, Non-Blocking UI Architecture**: Decoupled GUI event loops (`PyQt5`) from network I/O using custom `QThread` workers (`ApiWorker`). Network latency or intermittent connectivity never freezes the operator table or halts active label feeding.
- **Smart Debounced Filtering & Pagination**: Engineered dual search architectures tailored to data volumes:
  - **Server-Side Debouncing**: 400ms single-shot `QTimer` debouncing for infinite-scroll paginated enterprise catalogues (30 items/page) with duplicate-request protection (`pages_loaded` tracking).
  - **Client-Side In-Memory Search**: Sub-millisecond instant search across multi-field caches for complete dataset downloads (e.g. radiator inventory and battery serial registries).
- **Multi-Vertical Domain Implementations**:
  1. **Fine Jewellery Barcoding (`jkjewel_api_set.py`)**: 84×12 mm micro-tags encoding gold/silver purity, gross weight, net/less weight, retail pricing, Code128 barcodes, and mandatory **HUID (Hallmark Unique Identification)** compliance.
  2. **Custom Manufacturing Work-Order Tags (`order_app.py`)**: 84×12 mm order tags rendering client metadata, order IDs, weight tolerances, 90° rotated melting/fineness indicators, and Code128 job-tracking barcodes.
  3. **Automotive Radiator Inventory (`transfins.py`)**: 75×50 mm high-durability warehouse labels encoding product IDs, brand typography, and dynamic QR codes linking directly to mobile warehouse stock-adjustment workflows.
  4. **Dual-Track Battery Warranty (`battery_app.py` & `battery_ubuntu.py`)**: Synchronized twin-label layout printing two complete 50×25 mm labels side-by-side on a continuous 100×25 mm dual-track web, featuring Code128 serial numbers, model names, warranty duration, and customer warranty registration QR codes synced to Google Apps Script backends.
  5. **Offline Office Label Utility (`ofc_label.py`)**: Zero-cloud, standalone tool for quick ad-hoc asset barcode labeling with automatic hardware port detection.
- **Zero-Dependency Portable Binary Distribution**: Packaged via **PyInstaller** into standalone single-file executables (`--onefile`, `--noconsole`). Engineered runtime asset extraction (`sys._MEIPASS`) and dynamically injected `certifi` CA certificate bundles to overcome Windows frozen `.exe` SSL handshake failures.

---

## 🛠️ Technology Stack & Libraries Breakdown

### 1. Core Languages, Runtimes & FFI
| Technology | Version / Spec | Role & Purpose |
|---|---|---|
| **Python** | `3.10+` | Core programming language powering UI logic, data structures, and hardware communication. |
| **Ctypes (Win32 FFI)** | Built-in | Foreign function interface loading and invoking unmanaged C functions inside `TSCLIB.dll` (`openportW`, `sendcommandW`, `downloadpcx`, `closeport`). |
| **Win32 API (`ctypes.windll.kernel32`)**| Native Win32 | Invokes `GetShortPathNameW` to generate DOS 8.3 compliant paths required by the thermal printer's flash download routines. |
| **CFFI / PyCParser** | `1.17.1`, `2.22` | Low-level C foreign function interface supporting Cairo and graphics rasterization bindings. |

---

### 2. Desktop GUI Framework & Concurrency
| Technology / Module | Version | Role & Purpose |
|---|---|---|
| **PyQt5** | `5.15+` | Enterprise cross-platform desktop UI framework. |
| **QtWidgets** | `PyQt5.QtWidgets` | `QMainWindow`, `QTableWidget`, `QPushButton`, `QLineEdit`, `QCheckBox`, `QMessageBox`, and flexible nested layout managers (`QVBoxLayout`, `QHBoxLayout`). |
| **QtCore (`QThread`, `pyqtSignal`)** | `PyQt5.QtCore` | Asynchronous worker threads executing network fetches in the background and emitting thread-safe data payloads to the main thread. |
| **QtCore (`QTimer`)** | `PyQt5.QtCore` | Single-shot timer (400ms) implementing UI input debouncing to prevent server request flooding during live typing. |
| **QtGui** | `PyQt5.QtGui` | Pixmap handling, window icons, table cell formatting, and custom responsive UI styling (QSS). |
| **QtSerialPort (`QSerialPort`)** | `PyQt5.QtSerialPort` | Native asynchronous serial port interface used for direct RS-232 / UART thermal printer fallback. |

---

### 3. Printing Hardware Protocols & Low-Level Interfaces
| Driver / Protocol | Implementation | Role & Purpose |
|---|---|---|
| **TSPL / TSPL2** | Native ASCII Hardware Commands | TSC Printer Language commands (`SIZE`, `GAP`, `DENSITY`, `DIRECTION`, `CLS`, `TEXT`, `BARCODE`, `QRCODE`, `PUTPCX`, `PRINT`). |
| **TSCLIB.dll** | Dynamic Link Library | Vendor C library providing low-level USB/Parallel printer communication on Windows. |
| **CUPS (`lp -o raw`)** | Subprocess Pipe | Linux Common UNIX Printing System spooler interface sending raw TSPL byte streams directly to thermal printers without rasterization. |
| **Raw TCP Socket** | Python `socket` (Port 9100) | Network raw print protocol for Ethernet/Wi-Fi connected industrial label printers. |

---

### 4. Vector Graphics & Image Rasterization
| Library | Version | Role & Purpose |
|---|---|---|
| **Pillow (PIL)** | `11.2.1` | Converts JPEG, PNG, and SVG graphics into 1-bit monochrome images, resizes to dot coordinates, applies threshold contrast, and formats to PCX. |
| **CairoSVG** | `2.8.2` | Vector rendering engine converting client SVG logos into lossless PNG buffers for monochrome thermal rasterization. |
| **cairocffi** | `1.7.1` | CFFI-based Python binding to the native Cairo vector graphics library. |
| **tinycss2 / cssselect2** | `1.4.0`, `0.8.0` | CSS parsing engines powering CairoSVG styling rules. |
| **qrcode** | `7.4+` | Generates QR code matrix arrays for custom vector embedding. |

---

### 5. Networking, APIs & Security
| Library / Service | Version / Endpoint | Role & Purpose |
|---|---|---|
| **urllib.request / requests** | `2.32.4` | Performs authenticated HTTP/HTTPS GET requests to fetch ERP inventory and batch records. |
| **certifi** | `2025.6.15` | Mozilla's CA bundle; custom HTTPS opener injected to guarantee SSL validation inside frozen standalone `.exe` binaries. |
| **Google Apps Script** | Cloud Executable URL | Serves as the cloud API backend for live spreadsheet database queries (Gliston Battery app). |
| **Client REST APIs** | HTTPS JSON Endpoints | Custom e-commerce and ERP backends (JK Jewel, Sonic Jewellers, Transfins Radiators). |

---

### 6. Packaging, Tooling & Diagnostic Utilities
| Tool | Purpose |
|---|---|
| **PyInstaller (`6.14.1`)** | Packages Python applications into self-contained, single-file Windows `.exe` binaries with embedded DLLs and runtime assets. |
| **zadig.exe** | USB driver configuration utility bundled to switch thermal printer USB endpoints between WinUSB, libusb, and vendor print drivers. |
| **Logging Subsystem** | Thread-safe dual logging emitting diagnostic traces simultaneously to `app.log` and `sys.stdout`. |

---

## 🏛️ System Architecture & Data Flow

```
                      +──────────────────────────────────────────────────────────+
                      |                 ENTERPRISE DATA SOURCES                  |
                      |  [JK Jewel ERP API]   [Sonic Jewellers Orders API]       |
                      |  [Transfins API]      [Google Sheets / Apps Script]      |
                      +─────────────────────────────┬────────────────────────────+
                                                    │ HTTPS / JSON (Bearer Token)
                                                    ▼
+────────────────────────────────────────────────────────────────────────────────────────────────+
|                                    PYQT5 DESKTOP APPLICATION                                   |
|                                                                                                |
|  [Operator UI (QMainWindow)]            [ApiWorker (QThread)]          [Image Pipeline Engine] |
|  - Token & Printer Configuration       - Non-blocking HTTP Requests   - Vector SVG → PNG      |
|  - 400ms Debounced Search Bar          - Certifi SSL Verification     - Contrast Enhancement  |
|  - Responsive QTableWidget             - Auto-detected JSON Parser    - 1-Bit Dithered PCX    |
|  - Tristate Select-All Checkboxes      - Error Handling Signals       - DOS 8.3 Short Path Res|
|  - Per-Row & Bulk Quantity Selector                                                            |
+─────────────────────────────────────────────┬──────────────────────────────────────────────────+
                                              │ Formatted TSPL Command Stream
                                              ▼
+────────────────────────────────────────────────────────────────────────────────────────────────+
|                               HARDWARE ABSTRACTION & SPOOLING LAYER                            |
|                                                                                                |
|       [Windows Win32 FFI]              [Linux CUPS Raw Queue]             [LAN Direct Socket]  |
|   ctypes.windll.TSCLIB.dll               lp -d <queue> -o raw                socket.connect()   |
|   openportW() / sendcommandW()           Raw Byte Spool via stdin             TCP Port 9100     |
+─────────────────────────────────────────────┬──────────────────────────────────────────────────+
                                              │ Direct TSPL Byte Stream
                                              ▼
                      +──────────────────────────────────────────────────────────+
                      |             TSC THERMAL LABEL PRINTER HARDWARE           |
                      |                 (TSC TE244 / TA210 / DA210)              |
                      |  - 203 DPI Thermal Transfer / Direct Thermal Printhead   |
                      |  - Onboard Flash NVRAM Graphic Storage (F:LABEL_LO.PCX)  |
                      |  - Hardware Barcode Engine (Code128, QR Code, Micro-QR)  |
                      +──────────────────────────────────────────────────────────+
```

---

## 💡 Industrial Solutions & Vertical Implementations

### 1. Fine Jewellery RFID/Barcode Tagging (`jkjewel_api_set.py`)
- **Label Dimensions**: 84×12 mm micro dumbbell tag @ 203 DPI.
- **Industry Context**: Jewellery labels have strictly confined printable areas. Barcodes must scan reliably through display glass and velvet display trays.
- **Engineered Layout**:
  - **Left Section**: 1-bit high-contrast company logo rendered from onboard NVRAM (`PUTPCX 20,10,"F:LABEL_LO.PCX"`).
  - **Center Block**: Multi-line micro typography rendering item name, gold purity (e.g. `22K916`), gross weight, and net deduction weight.
  - **Right Section**: High-density Code128 barcode alongside unique government **HUID (Hallmark Unique ID)** and retail valuation.
- **Workflow**: 3-level hierarchical drill-down (`Category` → `Product` → `Item`) with infinite scrolling (30 records/fetch) and debounced real-time query searching.

```
+───────────────────────────────────────────────────────────────────────────+
| [ LOGO ]  916 Gents Ring             Rs. 54,200                           |
| [  PCX ]  Purity: 22K (91.6)         |||||||||||||||||||||||||||||||||||| |
| [ 1-BIT]  Gross: 12.450g Less: 0.120g  BARCODE (Code128) - HUID: AB1234   |
+───────────────────────────────────────────────────────────────────────────+
```

---

### 2. Bespoke Jewellery Work-Order Tracking (`order_app.py`)
- **Label Dimensions**: 84×12 mm manufacturing tracking tag.
- **Industry Context**: Workshop job cards move between goldsmiths, polishers, and gemstone setters. Tags require robust tracking numbers and alloy melting percentages.
- **Engineered Layout**:
  - Automatically truncates item descriptions to 14 characters to prevent coordinate collisions.
  - Uses 90° rotated micro typography (`TEXT 250,30,"0",90,8,5,"{melting}"`) to fit alloy fineness along the vertical tag boundary.
  - Generates Code128 barcodes from dynamic QR order strings for dual scanning compatibility.

---

### 3. Industrial Automotive Heat Exchanger Tagging (`transfins.py`)
- **Label Dimensions**: 75×50 mm high-durability thermal transfer label.
- **Industry Context**: Heavy radiator components require readable inventory tags that can withstand grease, heat, and warehouse handling.
- **Engineered Layout**:
  - Large-format typography displaying brand name and product serial identifiers.
  - High Error Correction Level (ECC Level L, Multiplier 5) QR codes encoding dynamic mobile URLs (`stock-adjust/{item_id}`) allowing warehouse operators to scan tags using hand terminals to perform instant inventory stock adjustments.
- **Optimization**: Loads the entire product catalogue into memory once, enabling instantaneous client-side searching across product names, brands, and IDs with zero network lag. Supports bulk printing with arbitrary copy counters.

---

### 4. Dual-Track Synchronized Battery Warranty Printing (`battery_app.py` & `battery_ubuntu.py`)
- **Label Dimensions**: 100×25 mm continuous dual-track web (twin 50×25 mm labels printed simultaneously side-by-side).
- **Industry Context**: Lead-acid and lithium battery packaging requires one label on the battery casing and an identical duplicate on the packaging box or warranty card.
- **Engineered Layout**:
  - Dynamically computes coordinate offsets: Left label at $X_0 = 0$, Right label at $X_1 = 400$ dots.
  - Emits synchronized TSPL command pairs in a single printhead pass:
    - **Left**: Model Name, Code128 Serial, Human-readable text, Warranty QR (`register-batter?sr=...`).
    - **Right**: Identical twin layout shifted by 400 dots.
- **Backend & OS Portability**: Connected to a **Google Apps Script** spreadsheet backend. Implemented with dual OS print dispatchers (native `TSCLIB.dll` on Windows; raw CUPS queue pipe `lp -o raw` on Ubuntu Linux).

```
|<----------------------------- 100 mm (800 dots) ----------------------------->|
+───────────────────────────────────────┬───────────────────────────────────────+
| LEFT LABEL (X0 = 0)                   | RIGHT LABEL (X1 = 400 dots)           |
| GLISTON POWER 150AH                   | GLISTON POWER 150AH                   |
| ||||||||||||||||||||||||| [ QR CODE ] | ||||||||||||||||||||||||| [ QR CODE ] |
| SN: GL-2026-98124         (Warranty)  | SN: GL-2026-98124         (Warranty)  |
+───────────────────────────────────────┴───────────────────────────────────────+
```

---

## 💼 Portfolio & Resume Ready Descriptions

### 🎯 Short Summary (For Resume / LinkedIn Project Section)
> **Industrial Thermal Label & Barcode/QR Printing Desktop Suite**  
> *Stack: Python, PyQt5, Ctypes (Win32 FFI & TSCLIB.dll), Linux CUPS, Socket (TSPL Port 9100), Pillow, CairoSVG, PyInstaller, REST APIs, Google Apps Script*  
> - Developed a mission-critical industrial desktop printing suite automating barcode, QR, and graphic label generation on TSC thermal transfer printers for jewellery, automotive, and battery manufacturers.  
> - Bypassed standard OS printer drivers to write direct TSPL hardware routines via Win32 Ctypes (`TSCLIB.dll`), Linux CUPS raw queues (`lp -o raw`), and raw TCP sockets (port 9100), achieving sub-millimeter label precision and near-zero print latency.  
> - Engineered an automated vector-to-monochrome graphics engine (CairoSVG, Pillow) converting corporate logos into 1-bit PCX images uploaded directly into printer flash NVRAM (`PUTPCX`) using DOS 8.3 short paths.  
> - Designed non-blocking multithreaded desktop UIs using PyQt5 and `QThread` workers with 400ms debounced searching, infinite scrolling, tristate bulk row selections, and custom quantity counters.  
> - Packaged applications into zero-dependency standalone Windows executables using PyInstaller, resolving complex runtime asset extraction and frozen-binary SSL certificate (`certifi`) handshakes.

---

### 🎙️ Technical Interview Talking Points (STAR Method)

- **Situation**: Industrial clients in jewellery manufacturing, automotive components, and battery distribution were facing severe operational bottlenecks. Standard Windows print spoolers caused misaligned micro-labels (84×12 mm), blurred 1D/2D barcodes, and introduced UI freezing when pulling live catalogue data from cloud ERPs and spreadsheets.
- **Task**: Engineer a high-reliability, cross-platform desktop automation suite capable of directly driving TSC thermal printers at the hardware command level, rendering pixel-perfect micro-labels, supporting vector-to-monochrome image conversion, and communicating asynchronously with diverse cloud backends.
- **Action**:
  - Implemented low-level **TSPL (TSC Printer Language)** command generation, controlling printheads directly via unmanaged C library calls (`TSCLIB.dll` via `ctypes`) on Windows, raw spool pipelines (`lp -o raw`) on Linux CUPS, and raw network sockets on port `9100`.
  - Built an image pre-processing pipeline using **CairoSVG** and **Pillow** that converted arbitrary client logos into 1-bit PCX files padded to 8-bit boundaries and uploaded them into the printer's onboard flash memory via Win32 DOS 8.3 short paths (`GetShortPathNameW`), eliminating bandwidth overhead on recurring print runs.
  - Architected a non-blocking **PyQt5** interface using `QThread` workers for network fetches, paired with single-shot 400ms `QTimer` debouncing for server queries and instant in-memory filtering for local catalogues.
  - Designed a synchronized dual-track label layout for battery warranties, calculating dot offsets ($X_0=0$, $X_1=400$) to print identical twin labels side-by-side in a single hardware cycle.
  - Packaged the applications with **PyInstaller** into single-file portable `.exe` binaries with custom SSL context initialization using `certifi.where()` to guarantee secure HTTPS connections in frozen runtime environments.
- **Result**: Completely eliminated print margin misalignment, boosted label throughput to sub-second speeds, reduced client labeling labor by over 70%, and successfully deployed portable, zero-dependency desktop applications across multiple enterprise facilities.
