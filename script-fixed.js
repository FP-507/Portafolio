// Theme · Language · Animations · Filters · Scroll-to-top · Mobile menu
(function () {
  'use strict';

  var body = document.body;
  var toggleBtn = document.getElementById('themeToggle');
  var langBtn = document.getElementById('langToggle');
  var header = document.getElementById('header');
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  var THEME_KEY = 'pref-theme';
  var LANG_KEY = 'pref-lang';
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Theme (dark-first: default=dark, .theme-light=light) ───────────────────
  function applyTheme(theme) {
    var light = theme === 'light';
    document.documentElement.classList.toggle('theme-light', light);
    body.classList.toggle('theme-light', light);
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', light ? 'true' : 'false');
      toggleBtn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    }
  }

  var storedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(storedTheme || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));

  toggleBtn && toggleBtn.addEventListener('click', function () {
    var isLight = body.classList.contains('theme-light');
    var next = isLight ? 'dark' : 'light';
    body.classList.add('theme-transition');
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
    setTimeout(function () { body.classList.remove('theme-transition'); }, 700);
  });

  // ── Translations ───────────────────────────────────────────────────────────
  var translations = {
    es: {
      hero_name: 'Fidel Pizart',
      hero_role: 'Desarrollador Python',
      hero_available: 'Disponible para proyectos',
      hero_desc: 'Creando, aprendiendo y automatizando \u2014 un proyecto a la vez.',
      hero_cta_projects: 'Ver Proyectos',
      hero_cta_contact: 'Contactar',
      nav_about: 'Sobre m\u00ed',
      nav_skills: 'Habilidades',
      nav_projects: 'Proyectos',
      nav_roadmap: 'Ruta',
      nav_timeline: 'Historial',
      nav_contact: 'Contacto',
      about_heading: 'Sobre m\u00ed',
      about_profile_title: 'Perfil',
      about_profile_body: 'Soy un desarrollador junior que comenz\u00f3 con Python en 2024. Me enfoco en aprender creando: peque\u00f1os proyectos, experimentos con APIs y scripts que automatizan tareas.',
      about_progress_title: 'En Proceso',
      about_progress_body: 'Fortaleciendo bases: estructuras de datos, buenas pr\u00e1cticas, lectura de documentaci\u00f3n, pruebas y organizaci\u00f3n del c\u00f3digo.',
      about_motivation_title: 'Lo que Me Motiva',
      about_motivation_item1: 'Aprender algo nuevo cada semana',
      about_motivation_item2: 'Escribir c\u00f3digo claro',
      about_motivation_item3: 'Automatizar lo repetitivo',
      roadmap_data_cyber: 'Fundamentos de ciberseguridad',
      skills_heading: 'Habilidades',
      projects_heading: 'Proyectos',
      filter_all: 'Todos',
      filter_ai: 'AI',
      filter_learning: 'Learning',
      filter_game: 'Game',
      filter_bot: 'Bot',
      filter_automation: 'Excel/VBA',
      proj1_desc: 'App para aprender ingl\u00e9s: pr\u00e1ctica de conversaci\u00f3n con una IA que responde a tu voz y registra tu progreso.',
      proj2_desc: 'Juego de ajedrez donde una IA simple aprende patrones de tus partidas para ajustar su estilo.',
      proj3_desc: 'Plantilla para bots de Discord: comandos b\u00e1sicos, estructura modular y punto de partida para extender.',
      proj4_desc: 'Creaci\u00f3n de inventarios automatizados mediante macros y VBA en Excel.',
      repo_label: 'Repositorio \u2192',
      roadmap_heading: 'Ruta de Aprendizaje',
      timeline_heading: 'L\u00ednea de Tiempo',
      timeline_2026: '2026 \u00b7 Desarrollo y lanzamiento de grandes proyectos',
      timeline_2025: '2025 \u00b7 Practicando y construyendo',
      timeline_2024: '2024 \u00b7 Inicio en Python',
      contact_heading: 'Contacto',
      contact_body: 'Si deseas ponerte en contacto, escr\u00edbeme por LinkedIn o GitHub. Abierto a colaborar y a retos interesantes.',
      cta_linkedin: 'Conectar en LinkedIn',
      cta_email: 'Enviar Email',
      cta_github: 'Ver GitHub',
      lang_button: 'ES / EN'
    },
    en: {
      hero_name: 'Fidel Pizart',
      hero_role: 'Python Developer',
      hero_available: 'Available for projects',
      hero_desc: 'Building, learning and automating \u2014 one project at a time.',
      hero_cta_projects: 'View Projects',
      hero_cta_contact: 'Contact Me',
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
      roadmap_data_cyber: 'Cybersecurity fundamentals',
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
      repo_label: 'Repo \u2192',
      roadmap_heading: 'Learning Roadmap',
      timeline_heading: 'Timeline',
      timeline_2026: '2026 \u00b7 Development and launch of major projects',
      timeline_2025: '2025 \u00b7 Practicing and Building',
      timeline_2024: '2024 \u00b7 Getting Started with Python',
      contact_heading: 'Contact',
      contact_body: 'If you want to reach out, contact me on LinkedIn or GitHub. Open to collaboration and interesting challenges.',
      cta_linkedin: 'Connect on LinkedIn',
      cta_email: 'Send Email',
      cta_github: 'View GitHub',
      lang_button: 'EN / ES'
    }
  };

  // ── Typing effect ──────────────────────────────────────────────────────────
  var typingTimer = null;
  function typeText(el, text, speed) {
    speed = speed || 55;
    if (prefersReduced) { el.textContent = text; return; }
    clearTimeout(typingTimer);
    el.textContent = '';
    el.classList.add('typing-cursor');
    var i = 0;
    function tick() {
      if (i < text.length) {
        el.textContent += text[i++];
        typingTimer = setTimeout(tick, speed + Math.random() * 28);
      } else {
        setTimeout(function () { el.classList.remove('typing-cursor'); }, 900);
      }
    }
    setTimeout(tick, 250);
  }

  // ── Language ───────────────────────────────────────────────────────────────
  function applyLanguage(lang, animate) {
    var dict = translations[lang] || translations.es;
    var titleEl = document.querySelector('.hero-role');
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      if (el === titleEl && animate) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.setAttribute('placeholder', dict[key]);
      } else {
        el.textContent = dict[key];
      }
    });
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
    if (langBtn) {
      langBtn.setAttribute('data-lang', lang);
      langBtn.querySelector('.lang-label').textContent = dict.lang_button;
    }
    if (titleEl && animate) typeText(titleEl, dict.hero_role);
  }

  var storedLang = localStorage.getItem(LANG_KEY) || 'es';
  applyLanguage(storedLang, true);

  langBtn && langBtn.addEventListener('click', function () {
    var current = langBtn.getAttribute('data-lang') || 'es';
    var next = current === 'es' ? 'en' : 'es';
    localStorage.setItem(LANG_KEY, next);
    applyLanguage(next, true);
  });

  // ── Header scroll ──────────────────────────────────────────────────────────
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // ── Mobile menu ────────────────────────────────────────────────────────────
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var open = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.style.overflow = open ? 'hidden' : '';
    });
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = '';
      });
    });
  }

  // ── Intersection animations ────────────────────────────────────────────────
  if (!prefersReduced) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (e.target.getAttribute('data-delay') || 0) + 'ms';
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('[data-animate]').forEach(function (el) { obs.observe(el); });
  } else {
    document.querySelectorAll('[data-animate]').forEach(function (el) { el.classList.add('in'); });
  }

  // ── Active nav highlight ───────────────────────────────────────────────────
  var sectionIds = ['about', 'skills', 'projects', 'roadmap', 'timeline', 'contact'];
  var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);
  var navLinks = Array.from(document.querySelectorAll('.nav-link'));

  function setActive(id) {
    navLinks.forEach(function (a) {
      var match = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', match);
      if (match) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  var obsNav = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) setActive(e.target.id); });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0.1 });
  sections.forEach(function (sec) { obsNav.observe(sec); });

  // ── Project filters (smooth) ───────────────────────────────────────────────
  var filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
  var projectCards = Array.from(document.querySelectorAll('.project-card'));

  function applyFilter(tag) {
    projectCards.forEach(function (card) {
      var tags = (card.getAttribute('data-tags') || '').split(/\s+/);
      var show = tag === 'all' || tags.includes(tag);
      if (show) {
        card.style.display = '';
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { card.classList.remove('hidden-filter'); });
        });
      } else {
        card.classList.add('hidden-filter');
        card.addEventListener('transitionend', function handler() {
          if (card.classList.contains('hidden-filter')) card.style.display = 'none';
          card.removeEventListener('transitionend', handler);
        });
      }
    });
  }

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tag = btn.getAttribute('data-filter');
      filterButtons.forEach(function (b) {
        b.classList.toggle('active', b === btn);
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      applyFilter(tag);
    });
  });
  applyFilter('all');

  // ── 3D card tilt on hover ────────────────────────────────────────────────
  if (!prefersReduced) {
    document.querySelectorAll('.glass-card, .project-card, .tl-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width;
        var y = (e.clientY - rect.top) / rect.height;
        var tiltX = (y - 0.5) * -6;
        var tiltY = (x - 0.5) * 6;
        card.style.transform = 'perspective(800px) rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
      });
    });
  }

  // ── Background parallax on scroll ──────────────────────────────────────────
  if (!prefersReduced) {
    var orb1 = document.querySelector('.bg-orb-1');
    var orb2 = document.querySelector('.bg-orb-2');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (orb1) orb1.style.translate = '0 ' + (y * 0.12) + 'px';
          if (orb2) orb2.style.translate = '0 ' + (y * -0.08) + 'px';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ── Scroll to top ──────────────────────────────────────────────────────────
  var scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
