(function(){
  async function injectIncludes(){
    const targets = document.querySelectorAll('[data-include]');
    if(!targets.length) return;

    const jobs = Array.from(targets).map(async (el) => {
      const name = el.getAttribute('data-include');
      if(!name) return;
      try{
        const res = await fetch(`includes/${name}.html`, { cache: 'no-cache' });
        if(!res.ok) throw new Error(String(res.status));
        el.outerHTML = await res.text();
      }catch(e){
        // Fallback: if include fails, leave a minimal placeholder so the page remains usable.
        el.outerHTML = '';
      }
    });

    await Promise.all(jobs);
  }

  function initMenu(){
    const btn = document.querySelector('[data-menu-button]');
    const panel = document.querySelector('[data-mobile-panel]');
    if(btn && panel){
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        if(expanded){
          panel.setAttribute('hidden', '');
        }else{
          panel.removeAttribute('hidden');
          // Focus first link for keyboard users
          const first = panel.querySelector('a, button');
          if(first) first.focus();
        }
      });
    }
  }

  function setYear(){
    const y = document.querySelector('[data-year]');
    if(y) y.textContent = String(new Date().getFullYear());
  }

  function setActiveNav(){
    const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const key = path.includes('locations') ? 'locations' : 'index';
    document.querySelectorAll('a[data-nav]').forEach(a => {
      if(a.getAttribute('data-nav') === key){
        a.setAttribute('aria-current', 'page');
      }else{
        a.removeAttribute('aria-current');
      }
    });
  }

  (async function boot(){
    await injectIncludes();
    initMenu();
    setYear();
    setActiveNav();
  })();
})();