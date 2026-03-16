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
    const key = path.includes('products-services') ? 'products' : (path.includes('locations') ? 'locations' : 'index');
    document.querySelectorAll('a[data-nav]').forEach(a => {
      if(a.getAttribute('data-nav') === key){
        a.setAttribute('aria-current', 'page');
      }else{
        a.removeAttribute('aria-current');
      }
    });
  }

  function initContactDrawer(){
    const drawer = document.querySelector('[data-contact-drawer]');
    if(!drawer) return;

    const panel = drawer.querySelector('.contact-drawer__panel');
    const status = drawer.querySelector('[data-contact-status]');
    const form = drawer.querySelector('[data-contact-form]');
    let lastTrigger = null;

    function openDrawer(trigger){
      lastTrigger = trigger || document.activeElement;
      drawer.hidden = false;
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('contact-open');
      const focusTarget = drawer.querySelector('#contact-name') || panel;
      window.setTimeout(() => focusTarget && focusTarget.focus(), 30);
    }

    function closeDrawer(){
      drawer.hidden = true;
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('contact-open');
      if(status && !status.classList.contains('is-success')) status.textContent = '';
      if(lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    }

    document.querySelectorAll('[data-contact-open]').forEach(el => {
      el.addEventListener('click', () => openDrawer(el));
    });

    drawer.querySelectorAll('[data-contact-close]').forEach(el => {
      el.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (event) => {
      if(event.key === 'Escape' && !drawer.hidden) closeDrawer();
    });

    if(form){
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        if(status){
          status.textContent = 'Sending your message…';
          status.className = 'contact-drawer__status';
        }

        const formData = new FormData(form);
        try{
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });

          if(!response.ok) throw new Error('Form submission failed');

          form.reset();
          if(status){
            status.textContent = 'Thanks — your message has been sent. Colby Supply will follow up soon.';
            status.className = 'contact-drawer__status is-success';
          }
        }catch(error){
          if(status){
            status.textContent = 'Sorry, there was a problem sending your message. Please email sales@colbysupply.com or call (504) 731-0331.';
            status.className = 'contact-drawer__status is-error';
          }
        }
      });
    }
  }

  (async function boot(){
    await injectIncludes();
    initMenu();
    setYear();
    setActiveNav();
    initContactDrawer();
  })();
})();
