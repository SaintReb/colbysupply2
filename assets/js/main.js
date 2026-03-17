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

  function getFocusableElements(container){
    if(!container) return [];
    return Array.from(container.querySelectorAll(
      'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
    )).filter((el) => !el.hasAttribute('hidden') && el.offsetParent !== null);
  }

  function initMenu(){
    const btn = document.querySelector('[data-menu-button]');
    const panel = document.querySelector('[data-mobile-panel]');
    if(!btn || !panel) return;

    let lastMenuTrigger = null;

    function openMenu(trigger){
      lastMenuTrigger = trigger || document.activeElement || btn;
      btn.setAttribute('aria-expanded', 'true');
      panel.removeAttribute('hidden');
      const first = getFocusableElements(panel)[0];
      if(first) first.focus();
    }

    function closeMenu(restoreFocus = true){
      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('hidden', '');
      if(restoreFocus && lastMenuTrigger && typeof lastMenuTrigger.focus === 'function'){
        lastMenuTrigger.focus();
      }
    }

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if(expanded){
        closeMenu();
      }else{
        openMenu(btn);
      }
    });

    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMenu(false));
    });

    document.addEventListener('keydown', (event) => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if(!expanded) return;

      if(event.key === 'Escape'){
        event.preventDefault();
        closeMenu();
        return;
      }

      if(event.key === 'Tab'){
        const focusable = getFocusableElements(panel);
        if(!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if(event.shiftKey && active === first){
          event.preventDefault();
          last.focus();
        }else if(!event.shiftKey && active === last){
          event.preventDefault();
          first.focus();
        }
      }
    });
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
    const inquiryType = drawer.querySelector('[data-inquiry-type]');
    const quoteField = drawer.querySelector('[data-inquiry-field="quote"]');
    const vendorField = drawer.querySelector('[data-inquiry-field="vendor"]');
    const productInterest = drawer.querySelector('#contact-interest');
    const vendorBrand = drawer.querySelector('#contact-vendor-brand');
    const vendorWebsite = drawer.querySelector('#contact-vendor-website');
    let lastTrigger = null;

    function openDrawer(trigger){
      lastTrigger = trigger || document.activeElement;
      drawer.hidden = false;
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('contact-open');
      syncInquiryFields();
      const focusTarget = drawer.querySelector('#contact-inquiry-type') || drawer.querySelector('#contact-name') || panel;
      window.setTimeout(() => focusTarget && focusTarget.focus(), 30);
    }

    function closeDrawer(){
      drawer.hidden = true;
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('contact-open');
      if(status && !status.classList.contains('is-success')) status.textContent = '';
      if(lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    }

    function syncInquiryFields(){
      if(!inquiryType) return;
      const value = inquiryType.value;
      const isQuote = value === 'Request a Quote';
      const isVendor = value === 'Vendor Request';

      if(quoteField){
        quoteField.hidden = !isQuote;
      }
      if(vendorField){
        vendorField.hidden = !isVendor;
      }
      if(productInterest){
        productInterest.required = isQuote;
        if(!isQuote) productInterest.value = '';
      }
      if(vendorBrand){
        vendorBrand.required = isVendor;
        if(!isVendor) vendorBrand.value = '';
      }
      if(vendorWebsite && !isVendor){
        vendorWebsite.value = '';
      }
    }

    document.querySelectorAll('[data-contact-open]').forEach(el => {
      el.addEventListener('click', () => openDrawer(el));
    });

    drawer.querySelectorAll('[data-contact-close]').forEach(el => {
      el.addEventListener('click', closeDrawer);
    });

    document.addEventListener('keydown', (event) => {
      if(drawer.hidden) return;

      if(event.key === 'Escape'){
        event.preventDefault();
        closeDrawer();
        return;
      }

      if(event.key === 'Tab'){
        const focusable = getFocusableElements(panel);
        if(!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement;

        if(event.shiftKey && active === first){
          event.preventDefault();
          last.focus();
        }else if(!event.shiftKey && active === last){
          event.preventDefault();
          first.focus();
        }
      }
    });

    if(inquiryType){
      inquiryType.addEventListener('change', syncInquiryFields);
      syncInquiryFields();
    }

    if(form){
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        syncInquiryFields();
        if(status){
          status.textContent = 'Sending your message…';
          status.className = 'contact-drawer__status';
        }

        const companyField = drawer.querySelector('#contact-company');
        const inquiryValue = inquiryType && inquiryType.value ? inquiryType.value.trim() : 'General Inquiry';
        const companyValue = companyField && companyField.value ? companyField.value.trim() : 'No Company Listed';
        const subjectField = form.querySelector('input[name="_subject"]');
        if(subjectField){
          subjectField.value = `${inquiryValue} - ${companyValue} - ColbySupply.com`;
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
          syncInquiryFields();
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
