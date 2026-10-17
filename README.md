# 🧠 Skillify — Next-Gen Computer Science Quiz Arena & Interactive Learning Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![Platform: Web](https://img.shields.io/badge/Platform-HTML5%20%7C%20CSS3%20%7C%20ES6%2B-blue.svg)]()
[![Theme: Light / Dark](https://img.shields.io/badge/Theme-Light%20%2F%20Dark%20Forest-success.svg)]()

**Skillify** is a browser-based quiz platform for Computer Science. It goes beyond static multiple-choice questions with six interactive game modes, including code-line debugging, drag-and-drop sequencing, rapid-fire speed rounds, and a 1v1 duel against an AI bot. It is built with plain HTML, CSS, and JavaScript, so there is nothing to install.

* [🐛 Report a Bug](https://github.com/Rhythmuppal18/Skillify/issues)**

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features & Game Modes](#-key-features--game-modes)
  - [1. Standard Quiz Arena](#1--standard-quiz-arena)
  - [2. 1v1 vs AI Bot (CyberBot)](#2--1v1-vs-ai-bot-cyberbot)
  - [3. True / False Speed Challenge](#3--true--false-speed-challenge)
  - [4. Find the Bug Code Line Picker](#4--find-the-bug-code-line-picker)
  - [5. Drag & Drop Sequencing Engine](#5--drag--drop-sequencing-engine)
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

Skillify turns traditional technical quizzes into an active learning experience. Instead of relying only on recall questions, it offers interactive modes that test whether you can debug code, order steps correctly, answer under time pressure, and compete against a simulated opponent.

### Core Objectives
- **Conceptual Mastery**: Reinforce core Computer Science theory across Java, Web Development, C, DBMS, and Operating Systems.
- **Multimodal Evaluation**: Test knowledge through recall, syntax completion, code debugging, and sequence placement.
- **Detailed Review**: Show explanations, side-by-side sequence comparisons, and score breakdowns after each session.
- **Clean Visual Design**: Light and dark themes, smooth animations (can be turned off), and readable typography.

---

## 🎮 Key Features & Game Modes

Skillify offers **6 game modes**, selectable at any time from the navigation chips in the Quiz Arena:

```
GAME MODES:  🎯 Standard | ⚔️ 1v1 AI Bot | ⚡ Speed T/F | 🐛 Find Bug | 🧩 Drag & Drop | ⌨️ Fill-in
```

---

### 1. 🎯 Standard Quiz Arena
- **Description**: The classic timed evaluation mode.
- **Timer**: 20 seconds per question.
- **Features**:
  - Option cards labeled A, B, C, D with immediate visual highlight on selection.
  - Progress bar showing current question and overall completion.
  - Certificate eligibility at a score of 80% or higher.

---

### 2. ⚔️ 1v1 vs AI Bot (CyberBot)
- **Description**: A head-to-head mode against a simulated opponent, **CyberBot**.
- **Features**:
  - Live split scoreboard comparing your score with CyberBot's.
  - Simulated response times for each question.
  - Victory, Defeat, or Draw banner with a performance comparison at the end.

---

### 3. ⚡ True / False Speed Challenge
- **Description**: Rapid-fire statements that test quick recall.
- **Timer**: 5 seconds per question.
- **Features**:
  - Animated circular SVG timer that empties as time runs down.
  - Color changes from green to orange (warning) to red (danger).
  - Keyboard shortcuts (`T` / `F` or `←` / `→`) for fast answers.

---

### 4. 🐛 Find the Bug Code Line Picker
- **Description**: Code snippets with a logical or syntax error. Candidates identify the faulty line.
- **Features**:
  - Code shown in monospace font (`JetBrains Mono`) with line numbers.
  - Click any line to mark it as the bug.
  - Highlighted error line and toast notifications.
  - Review screen explains why the selected line is wrong.

---

### 5. 🧩 Drag & Drop Sequencing Engine
- **Description**: Put steps in the correct order, such as execution flow, process lifecycle, compilation stages, or SQL clause order.
- **Input methods**:
  - 🖱️ **Mouse**: Drag items with drop-line indicators showing where they will land.
  - 📱 **Touch**: Drag on phones and tablets.
  - 🔼🔽 **Buttons**: ▲ Move Up and ▼ Move Down on every card. Buttons are disabled at the first and last positions.
  - ⌨️ **Keyboard**: `↑` / `↓` on a focused item.
- **UI elements**:
  - Step badges (`01`, `02`, `03`...) showing the current order.
  - A **🔄 Reset Order** button to restore the default order.
  - A scrollable sequence container for long lists.
  - A review screen comparing your order with the correct order.

---

### 6. ⌨️ Syntax Fill-in Challenge
- **Description**: Complete missing keywords or function names in code snippets.
- **Features**:
  - Code snippets with blanks (`________`).
  - Text input that is focused automatically.
  - Case-insensitive answer checking.

---

## 📚 Subject Modules

Skillify includes question banks across 5 core Computer Science subjects:

| Subject Module | Topics Covered | Interactive Challenges |
| :--- | :--- | :--- |
| **🌐 HTML5 & Web Dev** | DOM manipulation, semantic HTML, CSS box model, event loop | Order layout tags, spot missing closing tags, fill in syntax |
| **☕ Java Programming** | OOP, inheritance, multithreading, garbage collection, exception handling | Order try-catch-finally blocks, find thread-related bugs |
| **🗄️ DBMS & SQL** | Relational model, ACID properties, indexing, joins, SQL clauses | Order SELECT, FROM, WHERE, GROUP BY, HAVING |
| **💻 C Programming** | Pointers, dynamic memory (`malloc` / `free`), arrays, compilation pipeline | Order preprocessor → compiler → assembler → linker |
| **⚙️ Operating Systems** | Process states, deadlocks, CPU scheduling (FCFS, SJF, Round Robin), virtual memory | Order process lifecycle (New → Ready → Running → Blocked → Terminated) |

---

## 🏗️ Application Architecture & State Management

Skillify is a single-page-style application driven by a central `state` object in `quiz.js`:

```javascript
const state = {
  gameMode: 'standard',       // 'standard', 'ai_duel', 'speed_tf', 'find_bug', 'drag_drop', 'code_blank'
  currentCategoryKey: null,   // Selected subject key (e.g., 'frontend', 'dbms')
  questions: [],              // Active array of question objects
  currentIndex: 0,            // Index of the current question
  userAnswers: [],            // The candidate's answers
  timerSeconds: 20,           // Countdown value
  timerInterval: null,        // Active timer handle
  userStartTime: 0,           // Start timestamp for duration calculation
  aiScore: 0,                 // CyberBot score
  aiAnsweredMap: {},          // CyberBot answers per question
  isFinished: false           // Quiz completion flag
};
```

### Execution Flow

```
[Subject Selection / Mode Switch] ──> [loadQuestion(index)] ──> [Render Interactive UI]
                                                                        │
[Submit / Finish] <── [Count Correct & Build Review] <── [User Input / Timer]
```

---

## 🎨 Design System & Theme Engine

Colors and fonts are defined as CSS custom properties in `style.css`. The dark theme overrides the same variables, so every component updates when the theme changes.

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

/* Dark Forest Theme */
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

### Visual Details
- **Translucent panels** with subtle borders and shadows.
- **Animation toggle**: users can turn off animations via the `body.fx-off` class.
- **Responsive layout**: works from small phones (320px) to large desktop screens.

---

## 📂 Project File Map

```
Skillify/
├── index.html          # Landing page: hero, stats, live preview, FAQ
├── quiz.html           # Quiz arena: subject grid, guidelines, questions, results
├── quiz.js             # Quiz engine: question banks, game modes, timers, scoring
├── about.html          # Mission, features, and team
├── contact.html        # Contact form and feedback modal
├── contact.js          # Form validation and feedback handlers
├── login.html          # Login page
├── register.html       # Registration page
├── auth.js             # Accounts and session handling (browser storage)
├── leaderboard.html    # Leaderboard page
├── loading.html        # CSS-only page transition screen
├── main.js             # Theme switcher, header scroll, mobile menu
├── style.css           # Design system and theme variables
├── VIVA_GUIDE.md       # Q&A for viva and technical interview preparation
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

---

## 🔐 Authentication & Data Persistence

Skillify has no backend server. Data is stored in the browser:

1. **Accounts & Login (`auth.js`)**
   - Registered users are saved in `localStorage` under `skillify_users`.
   - The logged-in user is kept in `sessionStorage` or `localStorage` (`currentUser`).
   - The navbar shows the user's name or a Login link.

2. **Score History (`quiz.js`)**
   - Attempts, dates, percentages, and subject scores are saved under `skillify_score_history`.
   - Used to review past results and track progress.

3. **Preferences (`main.js`)**
   - Theme (light or dark) and animation settings (`skillify_fx`) are saved between visits.

> **Security note:** Passwords are stored in the browser for this demo. This is not secure. Do not use real credentials, and do not treat this as a production authentication system.

---

## ⌨️ Keyboard Controls & Shortcuts

| Context | Key | Action |
| :--- | :--- | :--- |
| **Speed T/F** | `T` or `←` | Select TRUE |
| **Speed T/F** | `F` or `→` | Select FALSE |
| **Drag & Drop** | `↑` (item focused) | Move item up |
| **Drag & Drop** | `↓` (item focused) | Move item down |
| **Quiz** | `Enter` | Submit answer / next question |

---

## 💻 Installation & Local Setup

No build tools, packages, or compilers are needed.

```bash
# 1. Clone the repository
git clone https://github.com/Rhythmuppal18/Skillify.git
cd Skillify

# 2a. Open directly
#     Double-click index.html (or quiz.html) in Chrome, Firefox, Edge, Safari, or Brave

# 2b. Or run a local server
python -m http.server 8000
# Then open http://localhost:8000
```

---

## 📜 Certification Engine

- **Eligibility**: Score **80% or higher** on a quiz.
- **Certificate of Mastery**: A printable certificate showing the candidate's name, subject, score, date, and a verification ID.
- **Print / Save PDF**: Use the built-in button to print or save the certificate.

---

## 🎓 Viva & Technical Examination Guide

For lab tests, viva, and interview preparation, see [`VIVA_GUIDE.md`](VIVA_GUIDE.md). It covers:
- Explanations of the CS concepts in each module.
- Q&A on DOM manipulation, event delegation, layout algorithms, and browser storage.
- Why the project uses vanilla ES6 JavaScript instead of a framework.

---

## 📄 License & Acknowledgments

- **License**: [MIT License](LICENSE)
- **Fonts**: [Work Sans](https://fonts.google.com/specimen/Work+Sans) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.
- **Icons**: Standard Unicode emoji.

---

<p align="center">
  <strong>Skillify</strong> — Crafted for Computer Science mastery.
</p>
