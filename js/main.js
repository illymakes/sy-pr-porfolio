/* ========================================
   SHANNON YARDLEY PORTFOLIO — main.js
   ======================================== */

/* --- Navbar scroll effect --- */
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* --- Mobile nav toggle --- */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();


/* --- Set active nav link --- */
(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    // Exact match, or path starts with href (for portfolio sub-pages)
    const isActive =
      path.endsWith(href) ||
      (href !== 'index.html' && path.includes(href.replace('.html', '')));
    a.classList.toggle('active', isActive);
  });
})();


/* --- Hero subtle parallax + loaded class --- */
(function () {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Trigger the subtle zoom-out animation
  requestAnimationFrame(() => hero.classList.add('loaded'));

  // Parallax on scroll
  const bg = hero.querySelector('.hero-bg');
  if (!bg) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) return;
    bg.style.transform = `scale(1) translateY(${window.scrollY * 0.3}px)`;
  }, { passive: true });
})();


/* --- Contact form (no back-end; shows success message) --- */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');

    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate async (replace with Formspree / EmailJS call if desired)
    setTimeout(() => {
      form.reset();
      btn.textContent = 'Send Message';
      btn.disabled = false;
      if (success) success.classList.add('show');
    }, 1200);
  });
})();


/* --- Fade-in on scroll (IntersectionObserver) --- */
(function () {
  const els = document.querySelectorAll(
    '.skill-card, .portfolio-card, .project-item, .about-photo-wrap'
  );

  if (!els.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
})();
