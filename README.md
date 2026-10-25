# ⚡ Skillify — Computer Science Academic Evaluation Arena

<p align="center">
  <img src="https://img.shields.io/badge/Skillify-Phase%202%20Complete-4ADE80?style=for-the-badge&logo=codeforces&logoColor=black" alt="Phase 2 Badge">
  <img src="https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-38BDF8?style=for-the-badge&logo=javascript&logoColor=black" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Theme-Dark%20Forest%20Green-22C55E?style=for-the-badge&logo=treehouse&logoColor=white" alt="Dark Forest Theme">
  <img src="https://img.shields.io/badge/Team-PID--6%20%28FEE--II%29-F59E0B?style=for-the-badge" alt="Team PID-6">
</p>

<p align="center">
  <strong>An interactive, high-performance web platform for testing core Computer Science fundamentals across 7 distinct challenge modes, dynamic question randomization, 3D medal podium leaderboards, and instant academic evaluation.</strong>
</p>

---

## 📌 Table of Contents
- [✨ What's New in Phase 2](#-whats-new-in-phase-2)
- [🎮 7 Interactive Game Modes](#-7-interactive-game-modes)
- [📚 Core Subject Modules](#-core-subject-modules)
- [🎲 Fisher-Yates Shuffling Engine](#-fisher-yates-shuffling-engine)
- [🏆 Hall of Fame Leaderboard & 3D Medals](#-hall-of-fame-leaderboard--3d-medals)
- [🌲 Design System & Dark Forest Green Theme](#-design-system--dark-forest-green-theme)
- [📂 Project Directory Structure](#-project-directory-structure)
- [👥 Project Team (PID-6)](#-project-team-pid-6)
- [🚀 Quick Start & How to Run](#-quick-start--how-to-run)
- [📜 Certificate of Mastery Engine](#-certificate-of-mastery-engine)

---

## ✨ What's New in Phase 2

| Feature Category | Phase 1 (Baseline) | Phase 2 (Current Release) |
| :--- | :--- | :--- |
| **Question Sequencing** | Static, predictable order | **Fisher-Yates Randomization Engine** (Fresh order every attempt) |
| **Practice Flow** | Manual restart required | **Dedicated "Retake with Shuffled Questions"** button |
| **Academic Leaderboard** | Local modal summary | **Standalone `leaderboard.html`** with 3D Podium Medals & Avatars |
| **Default Theme** | Defaulted to light mode | **Dark Forest Green (`#0B120E`) permanently set as default** |
| **Background Dynamics** | Basic particle canvas | **Persistent 60fps Constellation Canvas** across all pages |
| **Responsive Media** | Desktop-focused layout | **Grid Breakpoints** for Desktop, Tablet (2-col), & Mobile (1-col) |
| **Architecture** | Basic frontend scripts | **Clean, modular, zero-dependency client architecture** |

---

## 🎮 7 Interactive Game Modes

Skillify goes beyond standard multiple-choice quizzes with 7 distinct pedagogical game modes:

1. 🎯 **Standard Quiz Arena:** Timed evaluations with instant rationales and progress tracking.
2. ⚔️ **1v1 CyberBot AI Duel:** Play live against an adaptive simulated AI opponent with split-screen HUD progress meters.
3. 🔗 **1v1 Challenge Link & QR Ghost Battle:** Generates a Base64-encoded URL and vector SVG QR code so friends can challenge the exact same question seed.
4. ⚡ **True / False Speed Round:** Rapid-fire 5-second per question countdown with SVG circular ring animation and keyboard hotkeys (`T`/`F` or `←`/`→`).
5. 🐛 **"Find the Bug" Line-Click Debugger:** Interactive code blocks where students click the exact line containing memory leaks or logic bugs.
6. 🧩 **Interactive Drag & Drop:** Re-order execution sequences (e.g. SQL query clause hierarchy, thread lifecycles).
7. ⌨️ **Syntax Completion Fill-in:** Inline code blanks testing keyword recall (`malloc`, `PRIMARY KEY`, `super()`).

---

## 📚 Core Subject Modules

Skillify tests across 5 computer science pillars with curated academic questions:

* **🌐 Frontend Engineering:** HTML5 semantics, CSS Grid/Flexbox, ES6+ asynchronous JavaScript, and DOM APIs.
* **🗄️ Database Management (DBMS):** Relational schema design, 3NF normalization, ACID transactions, and SQL Join operations.
* **☕ Java & OOP Architecture:** Polymorphism, inheritance hierarchies, JVM memory management, and multithreading.
* **💻 Core C Programming:** Pointer arithmetic, dynamic memory allocation (`malloc`/`free`), and compiler pipelines.
* **⚙️ Operating Systems:** CPU scheduling (Round Robin, SJF), process lifecycles, virtual memory, and deadlock prevention.

---

## 🎲 Fisher-Yates Shuffling Engine

To prevent pattern memorization and test true conceptual mastery, Skillify implements a native **Fisher-Yates (Knuth) Shuffle Algorithm** inside `quiz.js`:

```javascript
/* Fisher-Yates Randomization Engine */
function shuffleArray(array) {
  if (!Array.isArray(array)) return [];
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```

* Questions are shuffled dynamically upon selecting any subject.
* Clicking **"🔄 Retake with Shuffled Questions"** immediately re-runs the shuffle for instant re-assessment.

---

## 🏆 Hall of Fame Leaderboard & 3D Medals

The **`leaderboard.html`** page provides a structured evaluation ranking showcase:

* **🥇 1st Place (Gold Podium):** Metallic gold gradient chip with ambient golden glow.
* **🥈 2nd Place (Silver Podium):** Polished platinum-chrome finish.
* **🥉 3rd Place (Bronze Podium):** Warm burnished copper-bronze gradient.
* **#4 & #5 Places:** Minimalist dark glassmorphic framed numeral chips.
* **Monogram Avatars:** Candidate initials (`AR`, `PS`, `DC`, etc.) with gold/silver/bronze borders.
* **Responsive Media Layout:** 4-card metric overview (*Benchmark Top, Cohort Avg, Ranked Candidates, Distinction Rate*) scaling automatically across mobile, tablet, and desktop viewports.

---

## 🌲 Design System & Dark Forest Green Theme

Skillify features a bespoke dark design system crafted for long coding sessions and high visual contrast:

```css
:root {
  --bg-color: #0B120E;                   /* Signature Dark Forest Canvas */
  --surface: rgba(18, 30, 23, 0.85);     /* Translucent Glass Card */
  --surface-alt: rgba(14, 23, 18, 0.95); /* Deep Input Background */
  --accent: #4ADE80;                      /* Radiant Emerald Green */
  --accent-glow: rgba(74, 222, 128, 0.35);
  --rule: rgba(74, 222, 128, 0.2);       /* Subtle Container Border */
  --ink: #F1F5F9;                         /* High-Contrast Foreground */
  --ink-muted: #94A3B8;                   /* Subtitle Neutral */
  --font-mono: 'JetBrains Mono', monospace;
  --font-body: 'Work Sans', sans-serif;
}
```

### Key UI Features:
* **Interactive Particle Constellation Canvas:** 60fps HTML5 canvas rendering connecting nodes based on proximity.
* **✨ FX Toggle:** Users can pause background animations with a single click in the header.
* **🌙 / ☀️ Theme Switcher:** Instant toggle between Dark Forest Green and Ambient Light themes.

---

## 📂 Project Directory Structure

```text
Skillify/
├── index.html          # Landing portal: Hero, stats, live interactive preview widget, & FAQ
├── quiz.html           # Quiz Arena: Subject selection, game mode switch, & quiz runner
├── quiz.js             # Core Engine: Fisher-Yates shuffling, 7 game modes, AI bot timer
├── api.js              # Frontend API Client: REST endpoints, JWT auth session, & database sync
├── leaderboard.html    # Academic Hall of Fame with 3D podium medals & responsive media cards
├── about.html          # Team credentials, project architecture narrative, & methodology
├── contact.html        # Interactive inquiry form with real-time field validation
├── contact.js          # Client-side feedback form validation
├── login.html          # Candidate Sign In interface
├── register.html       # Candidate Registration interface
├── auth.js             # Session management & user greeting persistence
├── main.js             # Global theme engine (dark default), particle canvas, & mobile menu
├── style.css           # Complete modular design system stylesheet (2,600+ lines)
└── README.md           # Master documentation
```

---

## 👥 Project Team (PID-6)

Developed as a flagship **Front-End Engineering (FEE-II)** course project:

| Member | Role | Key Contributions |
| :--- | :--- | :--- |
| **Rhythm Uppal** *(Team Lead)* | Frontend Architecture & Logic Lead | Core Quiz Engine, Fisher-Yates Shuffling, Retake Engine |
| **Pehoo Angrish** | UI/UX & Interactive Design Lead | Academic Leaderboard (`leaderboard.html`), 3D Medal Podium Layout |
| **Heemanshu Singh** | Systems Integration & Theme Lead | Default Dark Forest Green Engine, Shared Header & Spacing |

---

## 🚀 Quick Start & How to Run

Skillify is 100% pure client-side code and requires **zero build steps, zero compilers, and zero external packages**.

### Option 1: Direct File Launch
Double-click **`index.html`** in your file manager to open directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: Local HTTP Server
```bash
# Using Python
python -m http.server 3000

# Using Node.js
npx serve .
```
Navigate to `http://localhost:3000` in your browser.

---

## 📜 Certificate of Mastery Engine

Candidates who demonstrate academic excellence by achieving **$\ge 80\%$ accuracy** unlock the official **Skillify Certificate of Mastery**:
* Dynamically embeds candidate name, subject title, achieved score percentage, verification ID, and date stamp.
* One-click print / save to PDF via native browser print styling.

---

<p align="center">
  <strong>© 2026 Skillify · Team PID-6 · Front-End Engineering II Project</strong><br>
  <em>Engineered for computer science excellence.</em>
</p>
