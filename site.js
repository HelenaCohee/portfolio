
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 8));
  if (menu && links) menu.addEventListener('click', () => links.classList.toggle('open'));

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.project-card').forEach(card => {
        const cats = (card.dataset.category || '').split(' ');
        card.classList.toggle('hidden', filter !== 'all' && !cats.includes(filter));
      });
      if (window.gtag) gtag('event', 'portfolio_filter', { filter_name: filter });
    });
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(tab);
      if (panel) panel.classList.add('active');
      if (window.gtag) gtag('event', 'ai_system_tab', { tab_name: tab });
    });
  });

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
