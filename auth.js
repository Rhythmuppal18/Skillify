// User authentication & background particle animation

document.addEventListener('DOMContentLoaded', () => {
  setupParticleCanvas();
  setupCardTilt();
  setupRegisterForm();
  setupLoginForm();
});

function setupParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 120 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.radius = Math.random() * 2.2 + 1.2;
      this.vy = -(Math.random() * 0.8 + 0.4);
      this.vx = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
    }

    update() {
      this.y += this.vy;
      this.x += this.vx;
      this.opacity += Math.sin(Date.now() * this.pulseSpeed) * 0.005;

      if (this.y < -10) {
        this.reset(false);
      }

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      if (document.body.classList.contains('fx-off')) return;
      const isDark = document.documentElement.classList.contains('dark-theme');
      const isQuizActive = document.body.classList.contains('quiz-active-mode');

      const alphaMult = isQuizActive ? 0.35 : 1.0;
      const particleColor = isDark
        ? `rgba(16, 185, 129, ${this.opacity * alphaMult})`
        : `rgba(5, 150, 105, ${this.opacity * 0.85 * alphaMult})`;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = particleColor;
      ctx.shadowBlur = isQuizActive ? 0 : (isDark ? 8 : 5);
      ctx.shadowColor = isDark ? 'rgba(16, 185, 129, 0.6)' : 'rgba(5, 150, 105, 0.35)';
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((width * height) / 16000);
    for (let i = 0; i < Math.min(count, 70); i++) {
      particles.push(new Particle());
    }
  }

  function connectDots() {
    if (document.body.classList.contains('fx-off')) return;
    const isDark = document.documentElement.classList.contains('dark-theme');
    const isQuizActive = document.body.classList.contains('quiz-active-mode');
    const lineBaseColor = isDark ? '16, 185, 129' : '5, 150, 105';

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          const alphaMult = isQuizActive ? 0.25 : 1.0;
          const alpha = (1 - dist / 115) * 0.32 * alphaMult;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${lineBaseColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    if (!document.body.classList.contains('fx-off')) {
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectDots();
    }
    requestAnimationFrame(render);
  }

  resize();
  render();
}

function setupCardTilt() {
  const card = document.getElementById('authCard');
  const wrapper = document.getElementById('authCardWrapper');
  if (!card || !wrapper) return;

  wrapper.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

    const glow = card.querySelector('.card-glow');
    if (glow) {
      glow.style.background = `radial-gradient(400px circle at ${x}px ${y}px, rgba(16, 185, 129, 0.22), transparent 70%)`;
      glow.style.opacity = '1';
    }
  });

  wrapper.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    const glow = card.querySelector('.card-glow');
    if (glow) glow.style.opacity = '0';
  });
}

function setupRegisterForm() {
  const form = document.getElementById('registerForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('regName');
    const emailInput = document.getElementById('regEmail');
    const passInput = document.getElementById('regPassword');
    const confirmInput = document.getElementById('regConfirm');
    const msgBox = document.getElementById('formMsg');
    const submitBtn = form.querySelector('button[type="submit"]');

    let valid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Full name is required');
      valid = false;
    } else {
      clearError(nameInput);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Enter a valid email address');
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (passInput.value.length < 6) {
      showError(passInput, 'Password must be at least 6 characters');
      valid = false;
    } else {
      clearError(passInput);
    }

    if (passInput.value !== confirmInput.value) {
      showError(confirmInput, 'Passwords do not match');
      valid = false;
    } else {
      clearError(confirmInput);
    }

    if (!valid) return;

    submitBtn.classList.add('loading');
    submitBtn.innerHTML = `<span>Registering Account...</span>`;

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('skillify_users') || localStorage.getItem('quizze_users') || '[]');
      const existing = users.find(u => u.email.toLowerCase() === emailInput.value.trim().toLowerCase());

      if (existing) {
        showMessage(msgBox, 'An account with this email already exists.', 'error');
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = `<span>Create Account &rarr;</span>`;
        return;
      }

      const newUser = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim().toLowerCase(),
        password: passInput.value
      };

      users.push(newUser);
      localStorage.setItem('skillify_users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(newUser));

      showMessage(msgBox, 'Account created! Redirecting to Quiz Arena...', 'success');
      setTimeout(() => {
        window.location.href = 'quiz.html';
      }, 1000);
    }, 600);
  });
}

function setupLoginForm() {
  const form = document.getElementById('loginForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    const rememberMe = document.getElementById('rememberMe');
    const msgBox = document.getElementById('formMsg');
    const submitBtn = form.querySelector('button[type="submit"]');

    let valid = true;

    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email is required');
      valid = false;
    } else {
      clearError(emailInput);
    }

    if (!passInput.value) {
      showError(passInput, 'Password is required');
      valid = false;
    } else {
      clearError(passInput);
    }

    if (!valid) return;

    submitBtn.classList.add('loading');
    submitBtn.innerHTML = `<span>Authenticating...</span>`;

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('skillify_users') || localStorage.getItem('quizze_users') || '[]');
      const user = users.find(
        u => u.email.toLowerCase() === emailInput.value.trim().toLowerCase() && u.password === passInput.value
      );

      if (!user) {
        showMessage(msgBox, 'Invalid email or password.', 'error');
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = `<span>Sign In &rarr;</span>`;
        return;
      }

      if (rememberMe && rememberMe.checked) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
      }

      showMessage(msgBox, 'Welcome back! Redirecting to Quiz Arena...', 'success');
      setTimeout(() => {
        window.location.href = 'quiz.html';
      }, 900);
    }, 600);
  });
}

function showError(inputEl, message) {
  const parent = inputEl.closest('.field');
  if (!parent) return;
  parent.classList.add('invalid');
  const errorEl = parent.querySelector('.field-error');
  if (errorEl) errorEl.textContent = message;
}

function clearError(inputEl) {
  const parent = inputEl.closest('.field');
  if (!parent) return;
  parent.classList.remove('invalid');
}

function showMessage(msgBox, text, type) {
  if (!msgBox) return;
  msgBox.textContent = text;
  msgBox.className = `form-msg show ${type}`;
}
