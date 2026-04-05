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
      hero_desc: 'Creando, aprendiendo y automatizando — un proyecto a la vez.',
      hero_cta_projects: 'Ver Proyectos',
      hero_cta_contact: 'Contactar',
      nav_about: 'Sobre mí',
      nav_skills: 'Habilidades',
      nav_projects: 'Proyectos',
      nav_roadmap: 'Ruta',
      nav_timeline: 'Historial',
      nav_contact: 'Contacto',
      about_heading: 'Sobre mí',
      about_profile_title: 'Perfil',
      about_profile_body: 'Soy un desarrollador junior que comenzó con Python en 2024. Me enfoco en aprender creando: pequeños proyectos, experimentos con APIs y scripts que automatizan tareas.',
      about_progress_title: 'En Proceso',
      about_progress_body: 'Fortaleciendo bases: estructuras de datos, buenas prácticas, lectura de documentación, pruebas y organización del código.',
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
      proj1_desc: 'App para aprender inglés: práctica de conversación con una IA que responde a tu voz y registra tu progreso.',
      proj2_desc: 'Juego de ajedrez donde una IA simple aprende patrones de tus partidas para ajustar su estilo.',
      proj3_desc: 'Plantilla para bots de Discord: comandos básicos, estructura modular y punto de partida para extender.',
      proj4_desc: 'Creación de inventarios automatizados mediante macros y VBA en Excel.',
      repo_label: 'Repositorio →',
      roadmap_heading: 'Ruta de Aprendizaje',
      roadmap_data_cyber: 'Fundamentos de ciberseguridad',
      timeline_heading: 'Línea de Tiempo',
      timeline_2026: '2026 · Desarrollo y lanzamiento de grandes proyectos',
      timeline_2025: '2025 · Practicando y construyendo',
      timeline_2024: '2024 · Inicio en Python',
      contact_heading: 'Contacto',
      contact_body: 'Si deseas ponerte en contacto, escríbeme por LinkedIn o GitHub. Abierto a colaborar y a retos interesantes.',
      cta_linkedin: 'Conectar en LinkedIn',
      cta_email: 'Enviar Email',
      cta_github: 'Ver GitHub',
      lang_button: 'ES / EN'
    },
    en: {
      hero_available: 'Available for projects',
      hero_name: 'Fidel Pizart',
      hero_role: 'Python Developer',
      hero_desc: 'Creating, learning and automating — one project at a time.',
      hero_cta_projects: 'View Projects',
      hero_cta_contact: 'Contact',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_roadmap: 'Roadmap',
      nav_timeline: 'Timeline',
      nav_contact: 'Contact',
      about_heading: 'About Me',
      about_profile_title: 'Profile',
      about_profile_body: 'I am a junior developer who started with Python in 2024. I learn by building small projects, API experiments and automation scripts.',
      about_progress_title: 'In Progress',
      about_progress_body: 'Strengthening foundations: data structures, good practices, reading docs, tests and code organization.',
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
      proj1_desc: 'English learning app: conversational practice with an AI that reacts to your voice and tracks progress.',
      proj2_desc: 'Chess game where a simple AI learns patterns from your games to adjust its style.',
      proj3_desc: 'Discord bot template: basic commands, modular structure and a starting point to extend.',
      proj4_desc: 'Automated inventory creation using macros and VBA in Excel.',
      repo_label: 'Repo →',
      roadmap_heading: 'Learning Roadmap',
      roadmap_data_cyber: 'Cybersecurity fundamentals',
      timeline_heading: 'Timeline',
      timeline_2026: '2026 · Development and launch of major projects',
      timeline_2025: '2025 · Practicing and Building',
      timeline_2024: '2024 · Getting Started with Python',
      contact_heading: 'Contact',
      contact_body: 'If you want to reach out, contact me on LinkedIn or GitHub. Open to collaboration and interesting challenges.',
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
  // BACKGROUND PARALLAX
  // =========================================
  if (!prefersReduced) {
    const orbs = document.querySelectorAll('.bg-orb');
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          orbs.forEach((orb, i) => {
            const speed = i === 0 ? 0.03 : 0.02;
            orb.style.translate = `0px ${scrollY * speed}px`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
})();
