// Main navigation, theme management, and auth status

document.addEventListener('DOMContentLoaded', () => {
  setupTheme();
  setupFxToggle();
  setupHeaderScroll();
  setupMobileNav();
  syncAuthState();
  setupLogout();
  setupPreview();
});

function setupTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('skillify_theme') || localStorage.getItem('quizze_theme') || 'dark';
  applyTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('skillify_theme', newTheme);
  });
}

function applyTheme(theme) {
  const toggleBtn = document.getElementById('themeToggleBtn');
  if (theme === 'dark') {
    document.documentElement.classList.add('dark-theme');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('dark-theme');
    if (toggleBtn) toggleBtn.textContent = '🌙';
  }
}

function setupFxToggle() {
  const fxBtn = document.getElementById('fxToggleBtn');
  const savedFx = localStorage.getItem('skillify_fx') || localStorage.getItem('quizze_fx') || 'on';
  
  if (savedFx === 'off') {
    document.body.classList.add('fx-off');
    if (fxBtn) fxBtn.style.opacity = '0.4';
  }

  if (!fxBtn) return;

  fxBtn.addEventListener('click', () => {
    const isOff = document.body.classList.toggle('fx-off');
    const status = isOff ? 'off' : 'on';
    localStorage.setItem('skillify_fx', status);
    fxBtn.style.opacity = isOff ? '0.4' : '1.0';
  });
}

function setupHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  });
}

function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function syncAuthState() {
  const user = JSON.parse(sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser') || 'null');
  const outLinks = document.querySelectorAll('.hide-auth, .auth-only-out');
  const inLinks = document.querySelectorAll('.show-auth, .auth-only-in');
  const greeting = document.getElementById('userGreeting');

  if (user) {
    outLinks.forEach(el => {
      el.hidden = true;
      el.style.display = 'none';
    });
    inLinks.forEach(el => {
      el.hidden = false;
      el.style.display = 'inline-flex';
    });
    if (greeting) {
      const displayName = user.name || user.email;
      greeting.innerHTML = `👤 <strong style="color:var(--accent);">${escapeHtml(displayName)}</strong>`;
    }
  } else {
    outLinks.forEach(el => {
      el.hidden = false;
      el.style.display = 'inline-flex';
    });
    inLinks.forEach(el => {
      el.hidden = true;
      el.style.display = 'none';
    });
  }
}

function setupLogout() {
  const logoutLink = document.getElementById('logoutLink');
  if (!logoutLink) return;

  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
  });
}

function setupPreview() {
  const options = document.querySelectorAll('#mcqOptions button');
  const hint = document.getElementById('mcqHint');
  if (!options.length) return;

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      const isCorrect = opt.dataset.correct === 'true';
      options.forEach(o => {
        o.disabled = true;
        o.classList.remove('selected');
      });

      opt.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (!isCorrect) {
        const match = [...options].find(o => o.dataset.correct === 'true');
        if (match) match.classList.add('correct');
      }

      if (hint) {
        hint.textContent = isCorrect
          ? 'Correct! That is how each question is graded in the Quiz Arena.'
          : 'Not quite! The correct answer is highlighted above.';
      }
    });
  });
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
