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


/* --- Contact form — Formspree AJAX submission --- */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // ⚠️  Replace with your Formspree form ID after signing up at formspree.io
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdawzben';

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const btn     = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');
    const error   = document.getElementById('formError');

    btn.textContent = 'Sending…';
    btn.disabled = true;
    if (error) error.classList.remove('show');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (res.ok) {
        form.reset();
        if (success) success.classList.add('show');
      } else {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Form error:', err);
      if (error) error.classList.add('show');
    } finally {
      btn.innerHTML = 'Send Message <span class="arrow">→</span>';
      btn.disabled = false;
    }
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
