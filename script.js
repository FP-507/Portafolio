// Portfolio — Theme, i18n, animations, interactivity
(function () {
  const root = document.documentElement;
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggle');
  const langBtn = document.getElementById('langToggle');
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTop');
  const THEME_KEY = 'pref-theme';
  const LANG_KEY = 'pref-lang';

  // Elements needed early (before applyLanguage)
  const heroRoleEl = document.querySelector('.hero-role');
  let typeTimer = null;

  function typeHeroRole(text) {
    if (!heroRoleEl) return;
    clearTimeout(typeTimer);
    heroRoleEl.textContent = '';
    heroRoleEl.classList.add('typing-cursor');
    let i = 0;
    function tick() {
      if (i <= text.length) {
        heroRoleEl.textContent = text.slice(0, i);
        i++;
        typeTimer = setTimeout(tick, 60);
      } else {
        setTimeout(() => heroRoleEl.classList.remove('typing-cursor'), 2000);
      }
    }
    tick();
  }

  // =========================================
  // THEME
  // =========================================
  function applyTheme(theme) {
    const light = theme === 'light';
    root.classList.toggle('theme-light', light);
    body.classList.toggle('theme-light', light);
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', light ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    }
  }

  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme) {
    applyTheme(storedTheme);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggleBtn && toggleBtn.addEventListener('click', () => {
    const isLight = root.classList.contains('theme-light');
    const newTheme = isLight ? 'dark' : 'light';
    body.classList.add('theme-transition');
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
    setTimeout(() => body.classList.remove('theme-transition'), 700);
  });

  // =========================================
  // INTERNACIONALIZACIÓN
  // =========================================
  const translations = {
    es: {
      hero_available: 'Disponible para proyectos',
      hero_name: 'Fidel Pizart',
      hero_role: 'Desarrollador Python',
      hero_desc: 'Construyo herramientas, automatizo procesos y aprendo en cada línea de código.',
      hero_cta_projects: 'Ver Proyectos',
      hero_cta_contact: 'Contactar',
      nav_about: 'Sobre mí',
      nav_skills: 'Habilidades',
      nav_projects: 'Proyectos',
      nav_roadmap: 'Ruta',
      nav_timeline: 'Historial',
      nav_contact: 'Contacto',
      about_heading: 'Sobre mí',
      about_profile_title: 'Quién soy',
      about_profile_body: 'Desarrollador junior con base en Python desde 2024. Aprendo construyendo: automatizo tareas, experimento con APIs e integro IAs en proyectos reales.',
      about_progress_title: 'En construcción',
      about_progress_body: 'Profundizando en estructuras de datos, pruebas automatizadas, buenas prácticas y arquitectura de proyectos.',
      about_motivation_title: 'Lo que Me Motiva',
      about_motivation_item1: 'Aprender algo nuevo cada semana',
      about_motivation_item2: 'Escribir código claro',
      about_motivation_item3: 'Automatizar lo repetitivo',
      skills_heading: 'Habilidades',
      projects_heading: 'Proyectos',
      filter_all: 'Todos',
      filter_ai: 'AI',
      filter_learning: 'Learning',
      filter_game: 'Game',
      filter_bot: 'Bot',
      filter_automation: 'Excel/VBA',
      proj1_desc: 'Entrena tu inglés hablando: una IA escucha tu voz, responde en tiempo real y registra tu progreso sesión a sesión.',
      proj2_desc: 'Ajedrez contra una IA que analiza tus partidas y adapta su estilo de juego para mantenerte en el límite.',
      proj3_desc: 'Plantilla lista para usar: estructura modular, comandos básicos y todo lo necesario para construir tu bot encima.',
      proj4_desc: 'Macros y VBA que generan inventarios completos automáticamente — lo que tardaba horas, en segundos.',
      repo_label: 'Repositorio →',
      roadmap_heading: 'Ruta de Aprendizaje',
      roadmap_data_cyber: 'Fundamentos de ciberseguridad',
      timeline_heading: 'Línea de Tiempo',
      timeline_2026: '2026 · Desarrollo y lanzamiento de grandes proyectos',
      timeline_2025: '2025 · Practicando y construyendo',
      timeline_2024: '2024 · Inicio en Python',
      contact_heading: 'Hablemos',
      contact_body: 'Si tienes un proyecto, una idea o simplemente quieres conectar — escríbeme. Siempre abierto a colaborar.',
      cta_linkedin: 'Conectar en LinkedIn',
      cta_email: 'Enviar Email',
      cta_github: 'Ver GitHub',
      lang_button: 'ES / EN'
    },
    en: {
      hero_available: 'Available for projects',
      hero_name: 'Fidel Pizart',
      hero_role: 'Python Developer',
      hero_desc: 'I build tools, automate processes and learn with every line of code.',
      hero_cta_projects: 'View Projects',
      hero_cta_contact: 'Contact',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_roadmap: 'Roadmap',
      nav_timeline: 'Timeline',
      nav_contact: 'Contact',
      about_heading: 'About Me',
      about_profile_title: 'Who I am',
      about_profile_body: 'Junior developer building with Python since 2024. I learn by doing — automating tasks, experimenting with APIs and integrating AI into real projects.',
      about_progress_title: 'Under construction',
      about_progress_body: 'Diving deeper into data structures, automated tests, best practices and project architecture.',
      about_motivation_title: 'What Motivates Me',
      about_motivation_item1: 'Learn something new weekly',
      about_motivation_item2: 'Write clear code',
      about_motivation_item3: 'Automate the repetitive',
      skills_heading: 'Skills',
      projects_heading: 'Projects',
      filter_all: 'All',
      filter_ai: 'AI',
      filter_learning: 'Learning',
      filter_game: 'Game',
      filter_bot: 'Bot',
      filter_automation: 'Excel/VBA',
      proj1_desc: 'Practice English by talking: an AI listens to your voice, replies in real time and tracks your progress session by session.',
      proj2_desc: 'Chess against an AI that analyzes your games and adapts its play style to keep you on the edge.',
      proj3_desc: 'Ready-to-use template: modular structure, basic commands and everything you need to build your bot on top.',
      proj4_desc: 'Macros and VBA that generate complete inventories automatically — what used to take hours, done in seconds.',
      repo_label: 'Repo →',
      roadmap_heading: 'Learning Roadmap',
      roadmap_data_cyber: 'Cybersecurity fundamentals',
      timeline_heading: 'Timeline',
      timeline_2026: '2026 · Development and launch of major projects',
      timeline_2025: '2025 · Practicing and Building',
      timeline_2024: '2024 · Getting Started with Python',
      contact_heading: "Let's Talk",
      contact_body: 'Have a project, an idea or just want to connect — reach out. Always open to collaborating.',
      cta_linkedin: 'Connect on LinkedIn',
      cta_email: 'Send Email',
      cta_github: 'View GitHub',
      lang_button: 'EN / ES'
    }
  };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', dict[key]);
        } else {
          el.textContent = dict[key];
        }
      }
    });
    root.setAttribute('lang', lang === 'en' ? 'en' : 'es');
    if (langBtn) {
      langBtn.setAttribute('data-lang', lang);
      const label = langBtn.querySelector('.lang-label');
      if (label) label.textContent = dict.lang_button;
    }
    // Re-trigger typing effect
    typeHeroRole(dict.hero_role);
  }

  const storedLang = localStorage.getItem(LANG_KEY) || 'es';
  applyLanguage(storedLang);

  langBtn && langBtn.addEventListener('click', () => {
    const current = langBtn.getAttribute('data-lang') || 'es';
    const next = current === 'es' ? 'en' : 'es';
    localStorage.setItem(LANG_KEY, next);
    applyLanguage(next);
  });

  // =========================================
  // MOBILE MENU
  // =========================================
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuBtn.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // Close menu on link click
    nav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // =========================================
  // HEADER SCROLL EFFECT
  // =========================================
  function updateHeader() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // =========================================
  // SCROLL TO TOP
  // =========================================
  function updateScrollTop() {
    if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  }
  window.addEventListener('scroll', updateScrollTop, { passive: true });
  updateScrollTop();

  scrollTopBtn && scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =========================================
  // INTERSECTION OBSERVER — SCROLL ANIMATIONS
  // =========================================
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    const animated = document.querySelectorAll('[data-animate]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = e.target.getAttribute('data-delay') || 0;
          e.target.style.transitionDelay = delay + 'ms';
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    animated.forEach(el => obs.observe(el));
  } else {
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('in'));
  }

  // =========================================
  // ACTIVE NAV HIGHLIGHT
  // =========================================
  const sectionIds = ['about', 'skills', 'projects', 'roadmap', 'timeline', 'contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  function setActive(id) {
    navLinks.forEach(a => {
      const match = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', match);
      if (match) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  const obsNav = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) setActive(e.target.id);
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 });
  sections.forEach(sec => obsNav.observe(sec));

  // =========================================
  // PROJECT FILTERS
  // =========================================
  const filterBar = document.querySelector('.project-filters');
  const filterButtons = filterBar ? Array.from(filterBar.querySelectorAll('.filter-btn')) : [];
  const projectCards = Array.from(document.querySelectorAll('.project-card.project'));

  function applyFilter(tag) {
    projectCards.forEach(card => {
      const tags = (card.getAttribute('data-tags') || '').split(/\s+/);
      const show = tag === 'all' || tags.includes(tag);
      if (show) {
        card.style.display = '';
        // Double rAF to ensure display change takes effect before removing class
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.classList.remove('hidden-filter');
          });
        });
      } else {
        card.classList.add('hidden-filter');
        const onEnd = () => {
          card.style.display = 'none';
          card.removeEventListener('transitionend', onEnd);
        };
        card.addEventListener('transitionend', onEnd, { once: true });
        // Fallback in case transitionend doesn't fire
        setTimeout(() => { if (card.classList.contains('hidden-filter')) card.style.display = 'none'; }, 400);
      }
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-filter');
      filterButtons.forEach(b => {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      applyFilter(tag);
    });
  });
  applyFilter('all');

  // =========================================
  // 3D CARD TILT ON MOUSEMOVE
  // =========================================
  if (!prefersReduced) {
    const tiltTargets = document.querySelectorAll('.glass-card, .project-card, .tl-card');
    tiltTargets.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -6;
        const rotateY = ((x - cx) / cx) * 6;
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // =========================================
  // NEURAL NETWORK BACKGROUND
  // =========================================
  if (!prefersReduced) {
    const nc = document.getElementById('neuralCanvas');
    if (nc) {
      const ctx = nc.getContext('2d');
      let W, H;

      function ncResize() {
        W = nc.width = window.innerWidth;
        H = nc.height = window.innerHeight;
      }
      ncResize();
      window.addEventListener('resize', ncResize, { passive: true });

      const N = 75;
      const MAX_D = 170;
      const CYAN = [0, 212, 255];
      const PURP = [168, 85, 247];

      const nodes = Array.from({ length: N }, () => {
        const t = Math.random();
        const c = t < 0.65 ? CYAN : PURP;
        return {
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.8 + 0.6,
          c,
          phase: Math.random() * Math.PI * 2
        };
      });

      function ncDraw() {
        ctx.clearRect(0, 0, W, H);

        // Connections
        for (let i = 0; i < N; i++) {
          for (let j = i + 1; j < N; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < MAX_D) {
              const a = (1 - d / MAX_D) * 0.18;
              const ci = nodes[i].c, cj = nodes[j].c;
              const r = (ci[0] + cj[0]) >> 1;
              const g = (ci[1] + cj[1]) >> 1;
              const b = (ci[2] + cj[2]) >> 1;
              ctx.beginPath();
              ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
              ctx.lineWidth = 0.7;
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }

        // Nodes
        nodes.forEach(n => {
          n.phase += 0.018;
          const pr = n.r * (1 + Math.sin(n.phase) * 0.35);

          // Outer glow
          const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pr * 5);
          grad.addColorStop(0, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0.12)`);
          grad.addColorStop(1, `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, pr * 5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // Core
          ctx.beginPath();
          ctx.arc(n.x, n.y, pr, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${n.c[0]},${n.c[1]},${n.c[2]},0.85)`;
          ctx.fill();

          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > W) n.vx *= -1;
          if (n.y < 0 || n.y > H) n.vy *= -1;
        });

        requestAnimationFrame(ncDraw);
      }
      ncDraw();
    }
  }

  // =========================================
  // TERMINAL BOOT SEQUENCE
  // =========================================
  (function () {
    const boot = document.getElementById('terminalBoot');
    const linesEl = document.getElementById('terminalLines');
    if (!boot || !linesEl) return;

    // Skip terminal if reduced motion
    if (prefersReduced) {
      boot.classList.add('gone');
      document.querySelectorAll('.hero [data-animate]').forEach(el => el.classList.add('in'));
      return;
    }

    const LINES = [
      { prompt: '> ', text: 'Initializing portfolio...',           speed: 14, pause: 80  },
      { prompt: '> ', text: 'Loading: Python · Flet · AI/LLMs',   speed: 11, pause: 80  },
      { prompt: '> ', text: 'Connecting to neural network...',     speed: 14, pause: 220 },
      { prompt: '',   text: '',                                                pause: 60  },
      { prompt: '',   text: 'FIDEL PIZART',   cls: 't-name',       speed: 65, pause: 520 },
      { prompt: '> ', text: 'Ready.',         cls: 't-ready',      speed: 55, pause: 400 },
    ];

    function typeText(el, text, speed, cb) {
      let i = 0;
      (function tick() {
        if (i < text.length) {
          el.insertAdjacentText('beforeend', text[i++]);
          setTimeout(tick, speed + (Math.random() - 0.3) * speed * 0.6);
        } else { cb && cb(); }
      })();
    }

    function addCursor(parent) {
      const c = document.createElement('span');
      c.className = 't-cursor';
      parent.appendChild(c);
      return c;
    }

    function revealPage() {
      boot.classList.add('gone');
      const heroEls = document.querySelectorAll('.hero [data-animate]');
      heroEls.forEach(el => {
        const d = parseInt(el.getAttribute('data-delay') || 0);
        setTimeout(() => el.classList.add('in'), 280 + d * 1.3);
      });
    }

    function exitTerminal() {
      boot.classList.add('flicker');
      // Use timeout as reliable exit — animationend can be unreliable
      setTimeout(revealPage, 420);
    }

    function runLine(i) {
      if (i >= LINES.length) { exitTerminal(); return; }
      const def = LINES[i];
      const el = document.createElement('div');
      el.className = 't-line' + (def.cls ? ' ' + def.cls : '');

      if (!def.text) {
        el.innerHTML = '&nbsp;';
        linesEl.appendChild(el);
        setTimeout(() => runLine(i + 1), def.pause || 80);
        return;
      }

      if (def.prompt) {
        const p = document.createElement('span');
        p.className = 't-prompt';
        p.textContent = def.prompt;
        el.appendChild(p);
      }

      linesEl.appendChild(el);
      const cur = addCursor(el);
      typeText(el, def.text, def.speed || 14, () => {
        cur.remove();
        setTimeout(() => runLine(i + 1), def.pause || 100);
      });
    }

    window.addEventListener('load', () => runLine(0));
  })();
})();
