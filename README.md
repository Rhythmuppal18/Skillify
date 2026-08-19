# 🧠 Skillify — Next-Gen Computer Science Quiz Arena & Interactive Learning Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Platform: Web](https://img.shields.io/badge/Platform-HTML5%20%7C%20CSS3%20%7C%20ES6%2B-blue.svg)]()
[![Theme: Light%20%26%20Dark](https://img.shields.io/badge/Theme-Light%20%2F%20Dark%20Forest-success.svg)]()

**Skillify** is a feature-rich, high-performance, single-page-styled web application built to master core Computer Science concepts through interactive, multi-modal quiz challenges. Designed with modern web aesthetics, glassmorphism, responsive grid layouts, and zero heavy external framework dependencies, Skillify delivers a seamless and engaging experience for students, developers, and educators.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features & Game Modes](#-key-features--game-modes)
  - [1. Standard Quiz Arena](#1--standard-quiz-arena)
  - [2. 1v1 vs AI Bot (CyberBot)](#2--1v1-vs-ai-bot-cyberbot)
  - [3. True / False Speed Challenge](#3--true--false-speed-challenge)
  - [4. Find the Bug Code Line Picker](#4--find-the-bug-code-line-picker)
  - [5. Enhanced Drag & Drop Sequencing Engine](#5--enhanced-drag--drop-sequencing-engine)
  - [6. Syntax Fill-in Challenge](#6--syntax-fill-in-challenge)
- [Subject Modules](#-subject-modules)
- [Application Architecture & State Management](#-application-architecture--state-management)
- [Design System & Theme Engine](#-design-system--theme-engine)
- [Project File Map](#-project-file-map)
- [Authentication & Data Persistence](#-authentication--data-persistence)
- [Keyboard Controls & Shortcuts](#-keyboard-controls--shortcuts)
- [Installation & Local Setup](#-installation--local-setup)
- [Certification Engine](#-certification-engine)
- [Viva & Technical Examination Guide](#-viva--technical-examination-guide)
- [License & Acknowledgments](#-license--acknowledgments)

---

## 🌟 Overview

Skillify transforms traditional technical quizzes into an active learning experience. Rather than relying solely on static multiple-choice questions, Skillify introduces dynamic interactive challenge modes — such as interactive code-line debugging, multi-input drag-and-drop sequence ordering, rapid-fire speed rounds, and simulated real-time 1v1 duels against an AI bot.

### Core Objectives:
- **Conceptual Mastery**: Reinforce fundamental Computer Science theory across Java, Web Dev, C, DBMS, and OS.
- **Multimodal Evaluation**: Test knowledge through recall, syntax completion, code debugging, and algorithmic sequence placement.
- **Instant Detailed Review**: Provide complete explanation breakdowns, side-by-side sequence comparisons, and score diagnostics after every session.
- **High Visual Standards**: Deliver top-tier visual aesthetics with curated color schemes, dark mode support, fluid micro-animations, and clean typography.

---

## 🎮 Key Features & Game Modes

Skillify supports **6 specialized game modes**, selectable at any time from the top navigation chips in the Quiz Arena:

```
+-----------------------------------------------------------------------------------+
| GAME MODES: 🎯 Standard | ⚔️ 1v1 AI Bot | ⚡ Speed T/F | 🐛 Find Bug | 🧩 Drag & Drop | ⌨️ Fill-in |
+-----------------------------------------------------------------------------------+
```

---

### 1. 🎯 Standard Quiz Arena
- **Description**: The classic timed evaluation mode.
- **Timer**: 20 seconds per question.
- **Features**:
  - Clear option cards labeled A, B, C, D.
  - Interactive selection with immediate visual highlight.
  - Progress tracking bar showing current question and overall completion.
  - Certificate eligibility upon scoring 80% or higher.

---

### 2. ⚔️ 1v1 vs AI Bot (CyberBot)
- **Description**: A competitive 1-on-1 battle mode against an automated simulated opponent (**CyberBot AI**).
- **Features**:
  - Live split HUD showing your real-time score vs. CyberBot's progress.
  - Simulated AI response timers that mimic human decision speed and accuracy per question.
  - End-of-quiz Victory/Defeat/Draw reveal banner with performance comparison statistics.

---

### 3. ⚡ True / False Speed Challenge
- **Description**: High-intensity, rapid-fire evaluation testing split-second recall.
- **Timer**: 5 seconds per question.
- **Features**:
  - **Animated SVG Speed Ring**: Circular SVG timer with stroke-dashoffset animation that smoothly depletes as time ticks down.
  - Color state changes (Green -> Orange Warning -> Red Danger).
  - Keyboard control binding (`T` / `F` or `Left Arrow` / `Right Arrow`) for lightning-fast answers.

---

### 4. 🐛 Find the Bug Code Line Picker
- **Description**: Code debugging challenge where candidates analyze raw code blocks to spot logical or syntax flaws.
- **Features**:
  - Code snippets displayed in monospace font (`JetBrains Mono`) with line numbers.
  - Click directly on any line of code to select it as the bug location.
  - Visual error line highlighting and toast notifications.
  - Explanatory breakdown in the review screen detailing why the selected line contains a bug.

---

### 5. 🧩 Enhanced Drag & Drop Sequencing Engine
- **Description**: An advanced array reordering interface designed to test execution flow, lifecycle states, compilation pipelines, and SQL syntax order.
- **Multi-Input Controls**:
  - 🖱️ **Mouse Drag & Drop**: Native HTML5 drag-and-drop with top/bottom drop-line target indicators (`.drag-over-above`, `.drag-over-below`).
  - 📱 **Touch Drag Support**: Custom `touchstart`, `touchmove`, `touchend` event handlers for smooth mobile and tablet touchscreen reordering.
  - 🔼🔽 **Array Up/Down Buttons**: Integrated `▲ Move Up` and `▼ Move Down` action buttons on every card for effortless 1-click shifting. Boundary buttons are automatically disabled at index `0` and index `N-1`.
  - ⌨️ **Keyboard Navigation**: Press `ArrowUp` / `ArrowDown` or `Alt + ArrowUp/Down` to shift focused array elements.
- **UI Elements**:
  - **Consecutive Step Badges**: Pill badges (`01`, `02`, `03`...) showing real-time array order.
  - **Reset Toolbar**: Header box with item count indicator and a **`🔄 Reset Order`** button to revert to default order.
  - **Scrollable Sequence Container**: Ensures long sequences remain easily accessible without locking page scrolling.
  - **Side-by-Side Review Breakdown**: Results screen presents a detailed comparison of your submitted array sequence vs. the target correct order.

---

### 6. ⌨️ Syntax Fill-in Challenge
- **Description**: Code completion test for syntax keywords and reserved functions.
- **Features**:
  - Code snippet with missing blank fields (`________`).
  - Embedded text input field with auto-focus and key input event listening.
  - Case-insensitive string evaluation during scoring.

---

## 📚 Subject Modules

Skillify comes pre-loaded with curated question banks across 5 core Computer Science domains:

| Subject Module | Topics Covered | Interactive Challenges |
| :--- | :--- | :--- |
| **🌐 HTML5 & Web Dev** | DOM manipulation, semantic structure, CSS box model, event loop | Drag layout tags, spot missing closing tags, syntax blanks |
| **☕ Java Programming** | OOPs, Inheritance, Multithreading, Garbage Collection, Exception handling | Order try-catch-finally blocks, identify thread starvation bugs |
| **🗄️ DBMS & SQL** | Relational model, ACID properties, Indexing, Joins, ANSI SQL clauses | Sequence SELECT-FROM-WHERE-GROUP BY-HAVING clauses |
| **💻 C Programming** | Pointers, Dynamic Memory (malloc/free), Arrays, Compilation pipeline | Order Preprocessor -> Compiler -> Assembler -> Linker stages |
| **⚙️ Operating Systems** | Process states, Deadlocks, CPU Scheduling (FCFS, SJF, Round Robin), Virtual Memory | Arrange Process Lifecycle (New -> Ready -> Running -> Blocked -> Terminated) |

---

## 🏗️ Application Architecture & State Management

Skillify runs as a lightweight, single-page application (SPA) driven by a central `state` object inside `quiz.js`:

```javascript
const state = {
  gameMode: 'standard',       // 'standard', 'ai_duel', 'speed_tf', 'find_bug', 'drag_drop', 'code_blank'
  currentCategoryKey: null,   // Selected subject key (e.g., 'frontend', 'dbms')
  questions: [],              // Active array of question objects
  currentIndex: 0,            // Pointer to active question
  userAnswers: [],            // Array storing candidate responses
  timerSeconds: 20,           // Timer countdown state
  timerInterval: null,        // Active interval handler
  userStartTime: 0,           // Timestamp for total duration calculation
  aiScore: 0,                 // AI Bot score tracking
  aiAnsweredMap: {},          // Tracked AI question responses
  isFinished: false           // Quiz completion boolean flag
};
```

### Execution Flow:

```
[Subject Selection / Mode Switch] ──> [loadQuestion(index)] ──> [Render Interactive UI]
                                                                        │
[Submit Quiz / Finish] <── [Count Correct & Generate Review] <── [User Input / Timer]
```

---

## 🎨 Design System & Theme Engine

Skillify utilizes a CSS Custom Properties (Variables) architecture in [`style.css`](file:///c:/Users/ASUS/OneDrive/Desktop/prop-2/style.css), facilitating dark mode switching and custom theme overrides:

```css
:root {
  --paper: #F1F5F9;
  --panel: #FFFFFF;
  --ink: #0F172A;
  --ink-soft: #475569;
  --rule: #CBD5E1;
  --accent: #059669;
  --accent-soft: #D1FAE5;
  --bad: #DC2626;
  --bad-soft: #FEE2E2;
  --font-mono: 'JetBrains Mono', monospace;
  --font-body: 'Work Sans', sans-serif;
}

/* Dark Forest Theme Override */
html.dark-theme {
  --paper: #121A15;
  --panel: #1A2620;
  --ink: #E8EFE9;
  --ink-soft: #9DB0A1;
  --rule: #2C3E33;
  --accent: #43A047;
  --accent-soft: #1E3827;
}
```

### Visual Enhancements:
- **Glassmorphism Panels**: Translucent container borders, subtle shadows, and elevated card structures.
- **FX Animation Toggle**: Users can toggle body animation effects via `body.fx-off`.
- **Responsive Layout**: Designed to adapt across viewport widths from mobile (320px) to ultra-wide displays (1400px+).

---

## 📂 Project File Map

```
prop-2/
├── index.html                  # Landing page with hero, stats, live preview widget, & FAQ
├── quiz.html                   # Arena view: subject grid, guidelines modal, question view, & results
├── quiz.js                     # Core application engine, question bank, reordering logic, & timers
├── about.html                  # Platform mission, features overview, & team credentials
├── contact.html                # Interactive contact form & feedback modal
├── contact.js                  # Form validation & interactive feedback handlers
├── login.html                  # User login interface
├── register.html               # User registration interface
├── auth.js                     # Authentication engine & local/session storage user management
├── loading.html                # Standalone pure CSS animated page transition screen
├── main.js                     # Global handlers: theme switcher, header scroll, & mobile menu
├── style.css                   # Complete design system stylesheet (2600+ lines of custom CSS)
├── README.md                   # Complete project documentation & guide
└── VIVA_GUIDE.md               # Oral examination & technical interview preparation guide
```

---

## 🔐 Authentication & Data Persistence

Skillify operates without requiring an external database server. Data persistence is handled via standard browser web storage APIs:

1. **User Accounts & Authentication (`auth.js`)**:
   - Stores registered user credentials in `localStorage` under `skillify_users`.
   - Active user sessions persist in `sessionStorage` or `localStorage` (`currentUser`).
   - Navbar dynamically reflects login state (shows user greeting `👤 Candidate Name` or `Login` link).

2. **Score History (`quiz.js`)**:
   - Quiz attempts, dates, percentages, and subject scores are appended to `skillify_score_history`.
   - Used for historical review and tracking candidate progress across multiple attempts.

3. **Theme & Preference Persistence (`main.js`)**:
   - User theme (`light` vs `dark`) and animation preferences (`skillify_fx`) persist across sessions.

---

## ⌨️ Keyboard Controls & Shortcuts

For fast power-user navigation, Skillify includes built-in keyboard shortcuts:

| Context | Key Combination | Action |
| :--- | :--- | :--- |
| **Speed T/F Mode** | `T` or `Left Arrow (←)` | Select **TRUE** |
| **Speed T/F Mode** | `F` or `Right Arrow (→)` | Select **FALSE** |
| **Drag & Drop Mode** | `Focus Item + ArrowUp (↑)` | Move active item **UP** in sequence array |
| **Drag & Drop Mode** | `Focus Item + ArrowDown (↓)` | Move active item **DOWN** in sequence array |
| **Quiz Controls** | `Enter` | Submit current question / advance |

---

## 💻 Installation & Local Setup

Since Skillify is built with standard native web technologies, no build tools, Node.js packages, or compilers are required.

### Steps to Run Locally:

1. **Clone or Download the Repository**:
   ```bash
   git clone https://github.com/your-username/skillify.git
   cd prop-2
   ```

2. **Launch in Browser**:
   - Double click `index.html` or `quiz.html` to open directly in Chrome, Firefox, Edge, Safari, or Brave.
   - Alternatively, serve using a lightweight local web server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Or using Live Server extension in VS Code
     ```

3. **Open Browser**:
   Navigate to `http://localhost:8000` or the file URI path.

---

## 📜 Certification Engine

Skillify features an automated certificate generator:
- **Eligibility Threshold**: Candidate must score **80% or higher** in any evaluation.
- **Features**:
  - Generates a formal **Certificate of Mastery** in a printable modal frame.
  - Dynamically embeds candidate name, subject title, score percentage, date of achievement, and unique verification ID.
  - Integrated `🖨️ Print / Save PDF` trigger.

---

## 🎓 Viva & Technical Examination Guide

For academic evaluations, lab tests, and viva presentations, refer to the included [`VIVA_GUIDE.md`](file:///c:/Users/ASUS/OneDrive/Desktop/prop-2/VIVA_GUIDE.md). It provides:
- Detailed explanations of CS concepts covered in each module.
- Technical Q&A on DOM manipulation, event delegation, layout algorithms, and browser storage.
- Architecture rationale for choosing vanilla ES6 JavaScript over external frameworks.

---

## 📄 License & Acknowledgments

- **License**: Released under the [MIT License](LICENSE).
- **Fonts**: Powered by Google Fonts ([Work Sans](https://fonts.google.com/specimen/Work+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)).
- **Icons & Emoji**: Standard UNICODE emoji glyphs for cross-platform compatibility.

---

<p align="center">
  <strong>Skillify</strong> — Crafted for computer science mastery.
</p>
