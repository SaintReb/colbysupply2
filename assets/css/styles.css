:root{
  --bg: #ffffff;
  --surface: #f6f7f8;
  --text: #111315;
  --muted: #5a636b;
  --border: #d8dde3;
  --brand: #c8102e; /* Colby red (adjust if needed) */
  --brand-ink: #ffffff;
  --focus: #1a73e8;
  --radius: 16px;
  --shadow: 0 10px 28px rgba(0,0,0,.08);
  --max: 1120px;
  --font: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
}

*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:var(--font);
  color:var(--text);
  background:var(--bg);
  line-height:1.5;
}

img{max-width:100%; height:auto; display:block}
a{color:inherit}
a:focus, button:focus, input:focus, textarea:focus, select:focus{
  outline: 3px solid var(--focus);
  outline-offset: 2px;
}

.skip-link{
  position:absolute;
  left:-9999px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
}
.skip-link:focus{
  left:16px;
  top:16px;
  width:auto;
  height:auto;
  padding:10px 12px;
  background:var(--bg);
  border:1px solid var(--border);
  border-radius:10px;
  box-shadow: var(--shadow);
  z-index:1000;
}

header{
  position:sticky;
  top:0;
  z-index:999;
  background:rgba(255,255,255,.92);
  backdrop-filter:saturate(180%) blur(10px);
  border-bottom:1px solid var(--border);
}
.container{max-width:var(--max); margin:0 auto; padding:0 18px}
.topbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:14px;
  padding:12px 0;
}
.brand{
  display:flex;
  align-items:center;
  gap:12px;
  text-decoration:none;
  min-width: 160px;
}
.brand img{
  width: 160px;
  height:auto;
}
.brand .tag{
  font-size:.9rem;
  color:var(--muted);
  display:none;
}

nav{
  display:flex;
  align-items:center;
  gap:10px;
}
.nav-links{
  display:flex;
  align-items:center;
  gap:6px;
}
.nav-links a{
  text-decoration:none;
  padding:10px 10px;
  border-radius:10px;
  color:var(--text);
}
.nav-links a:hover{
  background:var(--surface);
}
.nav-links a[aria-current="page"]{
  background: rgba(200,16,46,.10);
  color: var(--text);
  font-weight: 650;
}
.cta{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  padding:10px 14px;
  border-radius:999px;
  border:1px solid transparent;
  background:var(--brand);
  color:var(--brand-ink);
  text-decoration:none;
  font-weight:650;
  white-space:nowrap;
}
.cta:hover{filter:brightness(.95)}
.cta.secondary{
  background:transparent;
  border-color: var(--border);
  color: var(--text);
}
.menu-btn{
  display:none;
  border:1px solid var(--border);
  background: var(--bg);
  border-radius: 12px;
  padding:10px 12px;
}

.hero{
  padding:46px 0 26px;
}
.hero-grid{
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap:22px;
  align-items:stretch;
}
.kicker{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:6px 10px;
  background: var(--surface);
  border:1px solid var(--border);
  border-radius:999px;
  color: var(--muted);
  font-size:.92rem;
}
h1{
  margin:14px 0 10px;
  font-size: clamp(2rem, 3.1vw, 3rem);
  letter-spacing: -0.02em;
}
.lede{
  color: var(--muted);
  font-size: 1.05rem;
  max-width: 62ch;
}
.hero-actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:16px;
}
.card{
  background: var(--bg);
  border:1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.hero-card{
  padding:18px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  gap:14px;
}
.hero-card h2{
  margin:0 0 6px;
  font-size:1.1rem;
}
.hero-card p{margin:0; color:var(--muted)}
.pills{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}
.pill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 10px;
  border-radius: 999px;
  background: var(--surface);
  border:1px solid var(--border);
  font-size:.95rem;
}
.pill strong{font-weight:700}

section{padding:34px 0}
.section-title{
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
  gap:18px;
  margin-bottom:14px;
}
.section-title h2{
  margin:0;
  font-size: clamp(1.35rem, 2vw, 1.75rem);
}
.section-title p{
  margin:0;
  color:var(--muted);
  max-width: 70ch;
}

.grid-3{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:14px;
}
.grid-2{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:14px;
}
.tile{
  padding:18px;
}
.tile h3{margin:0 0 8px}
.tile p{margin:0 0 12px; color:var(--muted)}
.tile a{
  color: var(--brand);
  font-weight: 650;
  text-decoration: none;
}
.tile a:hover{text-decoration: underline}

.band{
  background: var(--surface);
  border-top:1px solid var(--border);
  border-bottom:1px solid var(--border);
}

.feature-list{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:12px;
  margin-top: 12px;
}
.feature{
  padding:14px;
  background: var(--bg);
  border:1px solid var(--border);
  border-radius: var(--radius);
}
.feature h3{margin:0 0 6px; font-size:1.05rem}
.feature p{margin:0; color:var(--muted)}

.breadcrumb{
  padding:18px 0 0;
  color: var(--muted);
  font-size: .95rem;
}
.breadcrumb a{color: var(--muted); text-decoration:none}
.breadcrumb a:hover{text-decoration:underline}

.content{
  padding: 18px;
}
.content h2{margin-top: 0}
.content p, .content li{color: var(--muted)}

.form{
  display:grid;
  gap:12px;
}
.field{
  display:grid;
  gap:6px;
}
label{font-weight:650}
input, textarea, select{
  border:1px solid var(--border);
  border-radius: 12px;
  padding: 11px 12px;
  font: inherit;
}
textarea{min-height: 120px; resize: vertical}
.help{color: var(--muted); font-size: .92rem}

footer{
  border-top:1px solid var(--border);
  padding:26px 0;
  color: var(--muted);
}
.footer-grid{
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap:16px;
}
.footer-grid a{color: var(--muted); text-decoration:none}
.footer-grid a:hover{text-decoration:underline}
.small{font-size:.92rem}

hr.sep{
  border:0;
  border-top:1px solid var(--border);
  margin: 18px 0;
}

@media (max-width: 920px){
  .hero-grid{grid-template-columns: 1fr}
  .grid-3{grid-template-columns: 1fr}
  .grid-2{grid-template-columns: 1fr}
  .feature-list{grid-template-columns: 1fr}
  .brand img{width: 150px}
  .nav-links{display:none}
  .menu-btn{display:inline-flex}
  nav{gap:8px}
  .brand .tag{display:none}
  .mobile-panel{
    padding: 10px 0 16px;
  }
  .mobile-panel[hidden]{display:none}
  .mobile-panel a{
    display:block;
    padding:12px 10px;
    border-radius: 12px;
    text-decoration:none;
  }
  .mobile-panel a:hover{background: var(--surface)}
}

@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto}
  *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important;}
}


/* Footer polish update */
.site-footer{
  border-top:1px solid #e5e7eb;
  margin-top:60px;
  padding-top:30px;
  color:#4b5563;
}


/* Contact modal */
.contact-trigger{
  cursor:pointer;
}

.contact-modal{
  position:fixed;
  inset:0;
  z-index:1200;
}
.contact-modal[hidden]{display:none}
.contact-modal__backdrop{
  position:absolute;
  inset:0;
  background:rgba(17,19,21,.55);
}
.contact-modal__dialog{
  position:relative;
  width:min(720px, calc(100% - 28px));
  max-height:calc(100vh - 32px);
  overflow:auto;
  margin:16px auto;
  padding:22px;
  background:var(--bg);
  border-radius:20px;
  box-shadow:0 24px 60px rgba(0,0,0,.2);
}
.contact-modal__header h2{
  margin:4px 0 8px;
  font-size:clamp(1.6rem, 2.5vw, 2rem);
}
.contact-modal__header p{
  margin:0;
  color:var(--muted);
}
.contact-modal__eyebrow{
  margin:0;
  color:var(--brand);
  font-size:.88rem;
  font-weight:700;
  letter-spacing:.04em;
  text-transform:uppercase;
}
.contact-modal__close{
  position:absolute;
  top:12px;
  right:12px;
  width:40px;
  height:40px;
  border:1px solid var(--border);
  border-radius:999px;
  background:var(--bg);
  font-size:1.5rem;
  line-height:1;
  cursor:pointer;
}
.contact-modal__form{
  margin-top:18px;
}
.contact-modal__grid{
  gap:12px;
}
.contact-modal__actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-top:4px;
}
.contact-modal__help{
  margin:4px 0 0;
}
.contact-modal__status{
  margin:0;
  min-height:1.2em;
  color:var(--muted);
  font-size:.94rem;
}
.contact-modal__status.is-success{
  color:#0f766e;
}
.contact-modal__status.is-error{
  color:#b42318;
}
.contact-honeypot{
  position:absolute;
  left:-9999px;
}
body.modal-open{
  overflow:hidden;
}

@media (max-width: 920px){
  .contact-modal__dialog{
    width:min(100% - 20px, 720px);
    margin:10px auto;
    padding:18px;
    max-height:calc(100vh - 20px);
  }
}


.tile-link-button{
  background:none;
  border:0;
  padding:0;
  color:var(--brand);
  font:inherit;
  font-weight:650;
  cursor:pointer;
}
.tile-link-button:hover{text-decoration:underline}
.footer-grid{
  grid-template-columns: 1.05fr .8fr .95fr;
}
.footer-brand h3,
.footer-links h4,
.footer-contact h4{
  margin:0 0 8px;
  color:var(--text);
}
.footer-links ul{
  list-style:none;
  padding:0;
  margin:0;
  display:grid;
  gap:8px;
}
.footer-contact-btn{
  margin-top:14px;
}
.footer-bottom{
  border-top:1px solid var(--border);
  margin-top:24px;
  padding-top:18px;
}
.contact-drawer{
  position:fixed;
  inset:0;
  z-index:1300;
}
.contact-drawer[hidden]{display:none}
.contact-drawer__backdrop{
  position:absolute;
  inset:0;
  background:rgba(15,23,42,.48);
  backdrop-filter:blur(3px);
}
.contact-drawer__panel{
  position:absolute;
  top:0;
  right:0;
  width:min(560px, 100%);
  height:100%;
  overflow:auto;
  background:linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  box-shadow:-20px 0 60px rgba(15,23,42,.22);
  padding:28px 24px 28px;
  border-left:1px solid rgba(216,221,227,.9);
}
.contact-drawer__close{
  position:absolute;
  top:16px;
  right:16px;
  width:42px;
  height:42px;
  border-radius:999px;
  border:1px solid var(--border);
  background:#fff;
  color:var(--text);
  font-size:1.6rem;
  line-height:1;
  cursor:pointer;
}
.contact-drawer__hero{
  padding:8px 44px 20px 0;
  border-bottom:1px solid var(--border);
}
.contact-drawer__eyebrow{
  margin:0 0 8px;
  color:var(--brand);
  font-weight:700;
  text-transform:uppercase;
  letter-spacing:.05em;
  font-size:.84rem;
}
.contact-drawer__hero h2{
  margin:0 0 10px;
  font-size:clamp(1.7rem, 3vw, 2.2rem);
  line-height:1.1;
}
.contact-drawer__hero p{
  margin:0;
  color:var(--muted);
}
.contact-drawer__details{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  gap:12px;
  padding:18px 0;
}
.contact-drawer__details div{
  padding:14px;
  border:1px solid var(--border);
  border-radius:16px;
  background:#fff;
}
.contact-drawer__details strong{
  display:block;
  margin-bottom:6px;
}
.contact-drawer__details a{
  text-decoration:none;
  color:var(--text);
}
.contact-drawer__form{
  margin-top:6px;
}
.contact-drawer__grid{
  margin-bottom:12px;
}
.contact-drawer__check{
  display:flex;
  align-items:flex-start;
  gap:10px;
  margin:4px 0 18px;
  font-weight:500;
  color:var(--text);
}
.contact-drawer__check input{
  margin-top:2px;
}
.contact-drawer__actions{
  display:flex;
  gap:10px;
  flex-wrap:wrap;
}
.contact-drawer__help,
.contact-drawer__status{
  margin:12px 0 0;
}
.contact-drawer__status.is-success{color:#0f766e}
.contact-drawer__status.is-error{color:#b42318}
body.contact-open{
  overflow:hidden;
}
@media (max-width: 920px){
  .footer-grid{grid-template-columns:1fr}
  .contact-drawer__panel{
    width:100%;
    padding:22px 18px 24px;
  }
  .contact-drawer__details{
    grid-template-columns:1fr;
  }
}

.contact-drawer__vendor-grid{
  margin-bottom:12px;
}
.contact-drawer__form [hidden]{
  display:none !important;
}
