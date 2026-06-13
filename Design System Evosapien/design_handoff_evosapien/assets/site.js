// evosmove — shared site behaviors + premium motion system

(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile drawer ---------- */
  const drawer = document.querySelector('[data-drawer]');
  const openBtn = document.querySelector('[data-drawer-open]');
  const closeBtn = document.querySelector('[data-drawer-close]');
  if (drawer && openBtn && closeBtn) {
    openBtn.addEventListener('click', () => {
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    const close = () => {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    };
    closeBtn.addEventListener('click', close);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  }

  /* ---------- Headline line-mask reveal ---------- */
  // Split big display headlines into per-line masks that power up on reveal.
  if (!prefersReduced) {
    const heads = document.querySelectorAll('.display-hero, .display-h1, .display-h2');
    heads.forEach(h => {
      if (h.hasAttribute('data-no-split') || h.classList.contains('split')) return;
      const lines = h.innerHTML.split(/<br\b[^>]*>/i);
      h.innerHTML = lines
        .map((ln, i) => `<span class="ln"><span class="ln-i" style="--i:${i}">${ln.trim()}</span></span>`)
        .join('');
      h.classList.add('split');
      // ensure the headline is observed even if it wasn't a .reveal originally
      if (!h.classList.contains('reveal')) h.classList.add('reveal');
    });
  }

  /* ---------- Scroll reveal (with stagger) ---------- */
  const reveals = document.querySelectorAll('.reveal');
  const revealAll = () => reveals.forEach(el => el.classList.add('is-visible'));
  if ('IntersectionObserver' in window && reveals.length) {
    let fired = false;
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter(e => e.isIntersecting);
      if (vis.length) fired = true;
      // cascade items that enter together, top to bottom
      vis.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      vis.forEach((e, idx) => {
        const el = e.target;
        if (!prefersReduced && !el.classList.contains('split')) {
          el.style.transitionDelay = Math.min(idx, 6) * 80 + 'ms';
        }
        el.classList.add('is-visible');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => io.observe(el));
    // Safety net: if IO never fires (some embedded/preview contexts where the
    // animation timeline is frozen), reveal everything instantly with no transition
    // so content can never get stuck mid-fade.
    setTimeout(() => {
      if (fired) return;
      const fb = document.createElement('style');
      fb.textContent = '.reveal{opacity:1!important;transform:none!important;transition:none!important}.split .ln-i{transform:none!important;transition:none!important}';
      document.head.appendChild(fb);
      revealAll();
    }, 1400);
  } else {
    revealAll();
  }

  /* ---------- Stat count-up ---------- */
  function countUp(el) {
    const raw = el.textContent.trim();
    const m = raw.match(/^(\d+)(.*)$/);
    if (!m) return;
    const target = parseInt(m[1], 10);
    const pad = m[1].length;          // preserve "04" / "10"
    const suffix = m[2] || '';        // "k", "%", ""
    if (prefersReduced || target === 0) { el.textContent = raw; return; }
    el.classList.add('is-counting');
    const dur = 1500;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3);
    function tick(now) {
      const t = Math.min(1, (now - start) / dur);
      const val = Math.round(ease(t) * target);
      el.textContent = String(val).padStart(pad, '0') + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const stats = document.querySelectorAll('.stat-value');
  if (stats.length && 'IntersectionObserver' in window) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { countUp(e.target); sio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    stats.forEach(s => sio.observe(s));
  }

  /* ---------- Scroll progress hairline ---------- */
  if (!prefersReduced) {
    const prog = document.createElement('div');
    prog.id = 'evo-progress';
    document.body.appendChild(prog);
    let ticking = false;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Form handler — Web3Forms submission ----------
     Get your free access key at https://web3forms.com
     Enter your email → copy the key → paste into each form's hidden access_key field
  ---------------------------------------------------------------- */
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const confirmEl = form.querySelector('[data-confirm]');
      const fieldsEl  = form.querySelector('[data-fields]');
      const btn       = form.querySelector('[type="submit"]');
      if (!confirmEl || !fieldsEl) return;

      /* Validate file size if present */
      const fileInput = form.querySelector('input[type="file"]');
      if (fileInput && fileInput.files[0] && fileInput.files[0].size > 5 * 1024 * 1024) {
        alert('ID proof file is too large. Please upload a file under 5 MB.');
        return;
      }

      /* Loading state */
      const origLabel = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled    = true;

      try {
        /* Use FormData to support file uploads */
        const formData = new FormData(form);

        const res  = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body:   formData
        });
        const data = await res.json();

        if (data.success) {
          fieldsEl.style.display  = 'none';
          confirmEl.style.display = 'block';
        } else {
          btn.textContent = origLabel;
          btn.disabled    = false;
          alert('Something went wrong — please email us directly at evosapienmovement@gmail.com');
        }
      } catch (err) {
        btn.textContent = origLabel;
        btn.disabled    = false;
        alert('Network error. Please call us on +91 92540 12000 or email evosapienmovement@gmail.com');
      }
    });
  });
})();
