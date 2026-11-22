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
      nav_roadmap: 'Trayectoria',
      nav_services: 'Qué hago',
      stat_projects: 'Proyectos',
      stat_certs: 'Certificaciones',
      stat_awards: 'Premios',
      stat_since: 'Programando desde',
      services_heading: 'Qué puedo aportar',
      services_lead: 'Cuatro áreas donde ya tengo proyectos y certificaciones que lo demuestran.',
      proof_label: 'Prueba:',
      svc1_title: 'Aplicaciones web',
      svc1_body: 'Backends con Django y FastAPI, bases de datos SQL y APIs REST, de la idea al despliegue.',
      svc2_title: 'Datos y reportes',
      svc2_body: 'Limpieza de datos, dashboards en Excel y Power BI, y análisis con Pandas que terminan en decisiones.',
      svc3_title: 'IA aplicada',
      svc3_body: 'Integración de modelos de lenguaje en productos reales: asistentes con citas, búsqueda y analítica.',
      svc4_title: 'Seguridad y calidad',
      svc4_body: 'Auditoría de código, manejo seguro de contraseñas y tests automáticos con integración continua.',
      nav_contact: 'Contacto',
      about_heading: 'Sobre mí',
      about_profile_title: 'Quién soy',
      about_profile_body: 'Estudiante de Bachiller en Ciencias en Colón, Panamá, y desarrollador Python desde 2024. Aprendo construyendo: aplicaciones web, análisis de datos e IA aplicada a problemas reales, como un marketplace B2B para la Zona Libre de Colón. Certificado como Microsoft Excel Expert y en Python por Cisco.',
      about_progress_title: 'En construcción',
      about_progress_body: 'Profundizando en estructuras de datos, pruebas automatizadas, buenas prácticas y arquitectura de proyectos.',
      about_motivation_title: 'Lo que Me Motiva',
      about_motivation_item1: 'Aprender algo nuevo cada semana',
      about_motivation_item2: 'Escribir código claro',
      about_motivation_item3: 'Automatizar lo repetitivo',
      skills_heading: 'Habilidades',
      projects_heading: 'Proyectos',
      nav_certs: 'Certificaciones',
      nav_achievements: 'Logros',
      filter_all: 'Todos',
      filter_ai: 'IA',
      filter_apps: 'Web & Apps',
      filter_data: 'Datos',
      filter_security: 'Seguridad',
      filter_game: 'Juegos',
      featured_label: 'Proyecto destacado',
      proj_tradeflow_desc: 'Marketplace B2B para la Zona Libre de Colón: los compradores mayoristas descubren inventario verificado, los vendedores gestionan su tienda, planes SaaS y logística, y un panel de analítica con IA les da KPIs, pronósticos y un chat de consultas. Incluye panel de administración en React, app Android (TWA) y versión en inglés y español.',
      proj_tradeflow_note: 'Código privado · Expo ¡Supérate! 2026',
      proj_securityguard_desc: 'Auditor de seguridad para código, repositorios y sitios web: análisis estático con más de 25 patrones de vulnerabilidad, detección de secretos filtrados y revisión de dependencias con CVE conocidos, en un reporte priorizado.',
      proj_supply_title: 'Inventario y Abastecimiento',
      proj_supply_desc: 'Análisis de la cadena de suministro de una distribuidora ficticia: nivel de servicio, clasificación ABC-XYZ, desempeño de proveedores y plan de reposición con stock de seguridad y EOQ. Libro de Excel con LAMBDA y matrices dinámicas, e informe de Power BI con 83 medidas DAX.',
      proj_asistente_title: 'Asistente de Documentos IA',
      proj_asistente_desc: 'Pregúntale a tus apuntes: un buscador BM25 encuentra los fragmentos relevantes y Claude responde citando la fuente exacta.',
      proj_api_title: 'API de Tareas',
      proj_api_desc: 'API REST con FastAPI y SQLite: filtros, paginación y estadísticas, con tests automáticos y CI en GitHub Actions.',
      proj_auditor_title: 'Auditor de Contraseñas',
      proj_auditor_desc: 'Mide la fuerza de una contraseña y revisa si fue filtrada usando k-anonimato: la contraseña nunca sale de tu equipo.',
      proj_ventas_title: 'Análisis de Ventas',
      proj_ventas_desc: 'Limpieza de datos, gráficos y un reporte automático sobre un año de ventas de una cadena ficticia de tiendas.',
      proj_racha_title: 'Hábitos',
      proj_racha_desc: 'App web sin frameworks para registrar hábitos: rachas, mapa de calor de 12 semanas y exportar/importar datos.',
      proj_ondas_title: 'Mapa de Ondas Interactivo',
      proj_ondas_desc: 'Mapa mental interactivo sobre tecnologías de ondas: cada rama trae un experimento, desde el espectro electromagnético y AM/FM hasta radar, sonar y un medidor de decibeles.',
      proj_dungeon_desc: 'Juego de lucha 2D multijugador local con 5 personajes, escudos con tiempo de recarga, proyectiles con física y selección de escenario en cada ronda.',
      repo_label: 'Repositorio →',
      demo_label: 'Ver demo →',
      certs_heading: 'Certificaciones',
      cert_date_expert: 'Mayo 2026',
      cert_date_associate: 'Octubre 2025',
      cert_date_pe2: 'Noviembre 2026',
      cert_date_pe1: 'Agosto 2026',
      cert_toeic_issuer: 'Inglés · ETS',
      cert_ia_title: 'Iniciación al Desarrollo con IA',
      cert_date_ia: 'Octubre 2025 · 6 h',
      cert_cyber_title: 'Fundamentos de Ciberseguridad',
      cert_date_cyber: 'Marzo 2026 · Bootcamp de 22 h',
      achievements_heading: 'Logros y Experiencia',
      ach_awards_title: 'Reconocimientos',
      ach_award_1: '2.º lugar · Expo Tech estudiantil ¡Supérate!',
      ach_award_2: '1.er lugar · Feria de Ciencias del Colegio Abel Bravo (2023)',
      ach_award_3: 'Proyecto de innovación tecnológica en la Expo de Logros ¡Supérate!',
      ach_award_4: 'Propuesta tecnológica para un hackathon estudiantil',
      ach_exp_title: 'Experiencia y formación',
      ach_exp_1_role: 'Asistente de Logística (prácticas)',
      ach_exp_1_date: 'Dic 2025 – Ene 2026',
      ach_exp_1_detail: 'Documentación y gestión de inventarios.',
      ach_edu_1: 'Programa Empresarial ¡Supérate!',
      ach_edu_1_detail: 'Formación en informática, inglés y valores.',
      ach_edu_2: 'Bachiller en Ciencias',
      present: 'actualidad',
      ach_vol_title: 'Voluntariado',
      ach_vol_1_date: 'Abril 2026',
      ach_vol_1_detail: '10 horas de construcción de viviendas en Buena Vista, Colón.',
      ach_vol_2_date: 'Junio 2026',
      ach_vol_2_detail: 'Recolección y reciclaje.',
      ach_vol_3_detail: 'Recaudación de fondos.',
      roadmap_heading: 'Ruta de Aprendizaje',
      roadmap_data_cyber: 'Fundamentos de ciberseguridad',
      timeline_heading: 'Línea de Tiempo',
      roadmap_lead: 'Cada etapa está respaldada por un proyecto o una certificación.',
      roadmap_done: 'Completado',
      roadmap_active: 'En curso',
      roadmap_upcoming: 'Próximo',
      rm1_title: 'Fundamentos de Python', rm1_a: 'Sintaxis y POO', rm1_b: 'Estructuras de datos', rm1_c: 'Manejo de errores',
      rm2_title: 'Datos y análisis', rm2_a: 'Excel y Power Query',
      rm3_title: 'Desarrollo web', rm3_b: 'FastAPI y REST',
      rm4_title: 'Calidad de software', rm4_a: 'Tests con pytest', rm4_b: 'CI con GitHub Actions', rm4_c: 'Git y revisiones', rm4_proof: 'API de Tareas',
      rm5_title: 'IA aplicada', rm5_a: 'APIs de LLM', rm5_b: 'RAG y búsqueda', rm5_c: 'Analítica con IA', rm5_proof: 'Asistente IA',
      rm6_title: 'Ciberseguridad', rm6_b: 'Hashing y secretos', rm6_c: 'Auditoría de código',
      rm7_title: 'Producción', rm7_b: 'Despliegue en la nube', rm7_c: 'Monitoreo', rm7_proof: 'Siguiente paso',
      m_nov: 'Nov', m_aug: 'Ago', m_jun: 'Jun', m_may: 'May', m_apr: 'Abr', m_mar: 'Mar', m_dec: 'Dic', m_oct: 'Oct',
      timeline_2026: 'Proyectos de mayor escala e impacto',
      tl26_nov: 'Python Essentials 2 (Cisco) y cinco proyectos nuevos con tests y CI.',
      tl26_aug: 'Python Essentials 1 (Cisco).',
      tl26_jun: 'Voluntariado con Hogar Eco y Fanlyc.',
      tl26_may: 'Certificación Microsoft Excel Expert.',
      tl26_apr: 'Construcción de viviendas con TECHO en Buena Vista, Colón.',
      tl26_mar: 'Bootcamp Fundamentos de Ciberseguridad con Comunidad DOJO y WoSec Panamá (22 h).',
      tl26_star: 'TradeFlow Colón para la Expo ¡Supérate! 2026 y Security Guard.',
      timeline_2025: 'Practicando y construyendo',
      tl25_dec: 'Prácticas profesionales en World Logistic: documentación e inventarios.',
      tl25_oct: 'Certificación Microsoft Excel Associate y curso de Iniciación al Desarrollo con IA (MoureDev).',
      tl25_a: 'TOEIC nivel B2 en inglés.',
      tl25_b: 'Juegos con Pygame, chat en tiempo real, bots y APIs.',
      timeline_2024: 'Inicio en Python',
      tl24_a: 'Primer print("Hola, Python").',
      tl24_b: 'Ingreso al Programa ¡Supérate! y al Bachiller en Ciencias del Colegio Abel Bravo.',
      tl24_c: 'Primer TOEIC B2.',
      timeline_2023: 'Primer premio',
      timeline_2023_body: '1.er lugar en la Feria de Ciencias del Colegio Abel Bravo.',
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
      nav_roadmap: 'Journey',
      nav_services: 'What I do',
      stat_projects: 'Projects',
      stat_certs: 'Certifications',
      stat_awards: 'Awards',
      stat_since: 'Coding since',
      services_heading: 'What I can bring',
      services_lead: 'Four areas where I already have projects and certifications to show for it.',
      proof_label: 'Proof:',
      svc1_title: 'Web applications',
      svc1_body: 'Backends with Django and FastAPI, SQL databases and REST APIs, from idea to deployment.',
      svc2_title: 'Data & reporting',
      svc2_body: 'Data cleaning, dashboards in Excel and Power BI, and Pandas analysis that leads to decisions.',
      svc3_title: 'Applied AI',
      svc3_body: 'Bringing language models into real products: assistants with citations, search and analytics.',
      svc4_title: 'Security & quality',
      svc4_body: 'Code auditing, safe password handling and automated tests with continuous integration.',
      nav_contact: 'Contact',
      about_heading: 'About Me',
      about_profile_title: 'Who I am',
      about_profile_body: 'Science high-school student in Colón, Panama, and Python developer since 2024. I learn by building: web apps, data analysis and AI applied to real problems, like a B2B marketplace for the Colón Free Trade Zone. Certified Microsoft Excel Expert and Cisco-certified in Python.',
      about_progress_title: 'Under construction',
      about_progress_body: 'Diving deeper into data structures, automated tests, best practices and project architecture.',
      about_motivation_title: 'What Motivates Me',
      about_motivation_item1: 'Learn something new weekly',
      about_motivation_item2: 'Write clear code',
      about_motivation_item3: 'Automate the repetitive',
      skills_heading: 'Skills',
      projects_heading: 'Projects',
      nav_certs: 'Certifications',
      nav_achievements: 'Achievements',
      filter_all: 'All',
      filter_ai: 'AI',
      filter_apps: 'Web & Apps',
      filter_data: 'Data',
      filter_security: 'Security',
      filter_game: 'Games',
      featured_label: 'Featured project',
      proj_tradeflow_desc: 'B2B marketplace for the Colón Free Trade Zone: wholesale buyers discover verified inventory, sellers manage their store, SaaS plans and logistics, and an AI analytics panel gives them KPIs, forecasts and a Q&A chat. Includes a React admin panel, an Android app (TWA) and English and Spanish versions.',
      proj_tradeflow_note: 'Private code · Expo ¡Supérate! 2026',
      proj_securityguard_desc: 'Security auditor for code, repositories and websites: static analysis with 25+ vulnerability patterns, leaked-secret detection and dependency checks against known CVEs, in a prioritized report.',
      proj_supply_title: 'Inventory & Supply Planning',
      proj_supply_desc: 'Supply-chain analysis for a fictional distributor: service level, ABC-XYZ classification, supplier performance and a replenishment plan with safety stock and EOQ. Excel workbook with LAMBDA and dynamic arrays, plus a Power BI report with 83 DAX measures.',
      proj_asistente_title: 'AI Document Assistant',
      proj_asistente_desc: 'Ask your own notes: a BM25 search finds the relevant passages and Claude answers citing the exact source.',
      proj_api_title: 'Task API',
      proj_api_desc: 'REST API with FastAPI and SQLite: filters, pagination and stats, with automated tests and CI on GitHub Actions.',
      proj_auditor_title: 'Password Auditor',
      proj_auditor_desc: 'Measures password strength and checks for leaks using k-anonymity: your password never leaves your machine.',
      proj_ventas_title: 'Sales Analysis',
      proj_ventas_desc: 'Data cleaning, charts and an auto-generated report on a year of sales from a fictional store chain.',
      proj_racha_title: 'Habits',
      proj_racha_desc: 'Framework-free web app to track habits: streaks, a 12-week heatmap and data export/import.',
      proj_ondas_title: 'Interactive Waves Map',
      proj_ondas_desc: 'Interactive mind map about wave technologies: every branch includes an experiment, from the electromagnetic spectrum and AM/FM to radar, sonar and a decibel meter.',
      proj_dungeon_desc: 'Local multiplayer 2D fighting game with 5 characters, shields with cooldowns, physics-based projectiles and stage selection every round.',
      repo_label: 'Repo →',
      demo_label: 'Live demo →',
      certs_heading: 'Certifications',
      cert_date_expert: 'May 2026',
      cert_date_associate: 'October 2025',
      cert_date_pe2: 'November 2026',
      cert_date_pe1: 'August 2026',
      cert_toeic_issuer: 'English · ETS',
      cert_ia_title: 'Intro to AI-Assisted Development',
      cert_date_ia: 'October 2025 · 6 h',
      cert_cyber_title: 'Cybersecurity Fundamentals',
      cert_date_cyber: 'March 2026 · 22-hour bootcamp',
      achievements_heading: 'Achievements & Experience',
      ach_awards_title: 'Awards',
      ach_award_1: '2nd place · ¡Supérate! Student Expo Tech',
      ach_award_2: '1st place · Colegio Abel Bravo Science Fair (2023)',
      ach_award_3: 'Tech innovation project at the ¡Supérate! Achievements Expo',
      ach_award_4: 'Tech proposal for a student hackathon',
      ach_exp_title: 'Experience & education',
      ach_exp_1_role: 'Logistics Assistant (internship)',
      ach_exp_1_date: 'Dec 2025 – Jan 2026',
      ach_exp_1_detail: 'Documentation and inventory management.',
      ach_edu_1: '¡Supérate! Business Program',
      ach_edu_1_detail: 'Training in computing, English and values.',
      ach_edu_2: 'High School Diploma in Science',
      present: 'present',
      ach_vol_title: 'Volunteering',
      ach_vol_1_date: 'April 2026',
      ach_vol_1_detail: '10 hours building homes in Buena Vista, Colón.',
      ach_vol_2_date: 'June 2026',
      ach_vol_2_detail: 'Collection and recycling.',
      ach_vol_3_detail: 'Fundraising.',
      roadmap_heading: 'Learning Roadmap',
      roadmap_data_cyber: 'Cybersecurity fundamentals',
      timeline_heading: 'Timeline',
      roadmap_lead: 'Every stage is backed by a project or a certification.',
      roadmap_done: 'Done',
      roadmap_active: 'In progress',
      roadmap_upcoming: 'Next',
      rm1_title: 'Python fundamentals', rm1_a: 'Syntax and OOP', rm1_b: 'Data structures', rm1_c: 'Error handling',
      rm2_title: 'Data & analysis', rm2_a: 'Excel and Power Query',
      rm3_title: 'Web development', rm3_b: 'FastAPI and REST',
      rm4_title: 'Software quality', rm4_a: 'Tests with pytest', rm4_b: 'CI with GitHub Actions', rm4_c: 'Git and reviews', rm4_proof: 'Task API',
      rm5_title: 'Applied AI', rm5_a: 'LLM APIs', rm5_b: 'RAG and search', rm5_c: 'AI analytics', rm5_proof: 'AI Assistant',
      rm6_title: 'Cybersecurity', rm6_b: 'Hashing and secrets', rm6_c: 'Code auditing',
      rm7_title: 'Production', rm7_b: 'Cloud deployment', rm7_c: 'Monitoring', rm7_proof: 'Next step',
      m_nov: 'Nov', m_aug: 'Aug', m_jun: 'Jun', m_may: 'May', m_apr: 'Apr', m_mar: 'Mar', m_dec: 'Dec', m_oct: 'Oct',
      timeline_2026: 'Bigger projects, bigger impact',
      tl26_nov: 'Python Essentials 2 (Cisco) and five new projects with tests and CI.',
      tl26_aug: 'Python Essentials 1 (Cisco).',
      tl26_jun: 'Volunteering with Hogar Eco and Fanlyc.',
      tl26_may: 'Microsoft Excel Expert certification.',
      tl26_apr: 'Building homes with TECHO in Buena Vista, Colón.',
      tl26_mar: 'Cybersecurity Fundamentals bootcamp with Comunidad DOJO and WoSec Panamá (22 h).',
      tl26_star: 'TradeFlow Colón for the ¡Supérate! Expo 2026, and Security Guard.',
      timeline_2025: 'Practicing and building',
      tl25_dec: 'Internship at World Logistic: documentation and inventory.',
      tl25_oct: 'Microsoft Excel Associate certification and MoureDev’s Intro to AI-Assisted Development course.',
      tl25_a: 'TOEIC English level B2.',
      tl25_b: 'Pygame games, real-time chat, bots and APIs.',
      timeline_2024: 'Getting started with Python',
      tl24_a: 'First print("Hello, Python").',
      tl24_b: 'Joined the ¡Supérate! Program and the Science track at Colegio Abel Bravo.',
      tl24_c: 'First TOEIC B2.',
      timeline_2023: 'First award',
      timeline_2023_body: '1st place at the Colegio Abel Bravo Science Fair.',
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
  const sectionIds = ['about', 'services', 'projects', 'certs', 'achievements', 'roadmap', 'contact'];
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
      { prompt: '> ', text: 'Loading: Python · Django · AI · Data', speed: 11, pause: 80  },
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

    function exitTerminal() {
      // Fade out directly — no flicker class needed
      boot.style.transition = 'opacity 0.9s cubic-bezier(0.4,0,0.2,1)';
      boot.style.opacity = '0';
      setTimeout(() => {
        boot.style.display = 'none';
        const heroEls = document.querySelectorAll('.hero [data-animate]');
        heroEls.forEach(el => {
          const d = parseInt(el.getAttribute('data-delay') || 0);
          setTimeout(() => el.classList.add('in'), d * 1.3);
        });
      }, 950);
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
