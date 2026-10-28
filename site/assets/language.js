(() => {
  const language = document.documentElement.lang === 'en' ? 'en' : 'zh';
  const toggle = document.querySelector('[data-language]');
  if (!toggle) return;
  const requested = new URLSearchParams(location.search).get('lang');
  try {
    const saved = localStorage.getItem('kane-language');
    if (requested === 'zh' || requested === 'en') {
      localStorage.setItem('kane-language', requested);
      if (requested !== language) location.replace(toggle.href + location.hash);
    } else if (language === 'en') {
      localStorage.setItem('kane-language', 'en');
    } else if (saved === 'en') {
      location.replace(toggle.href + location.hash);
    }
  } catch (_) {
    // Language links remain usable when browser storage is unavailable.
  }
  toggle.addEventListener('click', () => {
    try { localStorage.setItem('kane-language', toggle.dataset.language); } catch (_) {}
    if (location.hash) toggle.hash = location.hash;
  });
})();
