// TARDIS shared UI behaviour
(() => {
  // Reveal-on-scroll for elements with .reveal
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }

  // Year stamp
  const y = document.querySelectorAll('[data-year]');
  if (y.length) y.forEach((el) => el.textContent = new Date().getFullYear());
})();
