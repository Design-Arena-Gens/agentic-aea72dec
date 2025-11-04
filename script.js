const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const targetId = anchor.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const targetEl = document.querySelector(targetId);
    if (!targetEl) return;

    event.preventDefault();
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('is-hidden');
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.section, .card, .grid__item').forEach(el => {
    el.classList.add('is-hidden');
    observer.observe(el);
  });
}
