
/*
  Helena Portfolio Analytics
  1) Create a GA4 property + web stream.
  2) Replace G-XXXXXXXXXX below with your Measurement ID.
  3) Use the SAME Measurement ID in Payhip if you want portfolio + checkout activity
     in one GA4 data stream. Configure cross-domain measurement in GA4.
*/
const HELENA_GA4_ID = 'G-XXXXXXXXXX';

(function () {
  if (!HELENA_GA4_ID || HELENA_GA4_ID === 'G-XXXXXXXXXX') return;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${HELENA_GA4_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', HELENA_GA4_ID);

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    const label = (link.textContent || '').trim().slice(0, 100);

    if (href.includes('payhip.com')) {
      gtag('event', 'payhip_click', {
        link_url: link.href,
        link_text: label,
        page_path: location.pathname
      });
    } else if (href.startsWith('mailto:')) {
      gtag('event', 'contact_click', {
        method: 'email',
        link_text: label,
        page_path: location.pathname
      });
    } else if (href.endsWith('.html') && ![
      'index.html','work.html','ai-systems.html','case-studies.html','about.html','shop.html'
    ].some(x => href.endsWith(x))) {
      gtag('event', 'demo_open', {
        demo_url: href,
        link_text: label,
        page_path: location.pathname
      });
    }
  });
})();
