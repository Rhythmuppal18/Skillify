// Contact form handler

document.addEventListener('DOMContentLoaded', () => {
  setupContactForm();
});

function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const subjectInput = document.getElementById('contactSubject');
    const msgInput = document.getElementById('contactMessage');
    const formMsg = document.getElementById('formMsg');
    const submitBtn = form.querySelector('button[type="submit"]');

    let valid = true;

    if (!nameInput.value.trim()) {
      showError(nameInput, 'Name is required');
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

    if (!subjectInput.value.trim()) {
      showError(subjectInput, 'Subject is required');
      valid = false;
    } else {
      clearError(subjectInput);
    }

    if (!msgInput.value.trim()) {
      showError(msgInput, 'Message cannot be empty');
      valid = false;
    } else {
      clearError(msgInput);
    }

    if (!valid) return;

    submitBtn.classList.add('loading');
    submitBtn.innerHTML = `<span>Sending Message...</span>`;

    setTimeout(() => {
      showMessage(formMsg, 'Thank you! Your message has been sent.', 'success');
      form.reset();
      submitBtn.classList.remove('loading');
      submitBtn.innerHTML = `<span>Send Message &rarr;</span>`;

      setTimeout(() => {
        formMsg.classList.remove('show');
      }, 4500);
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

function showMessage(msgEl, text, type) {
  if (!msgEl) return;
  msgEl.textContent = text;
  msgEl.className = `form-msg show ${type}`;
}
