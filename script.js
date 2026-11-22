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
      services_lead: 'Cuatro áreas donde ya tengo proyectos publicados y certificaciones que lo demuestran.',
      proof_label: 'Prueba:',
      svc1_title: 'Aplicaciones web',
      svc1_body: 'Backends con Django y FastAPI, APIs REST con autenticación, tiempo real con WebSockets y tests automáticos.',
      svc2_title: 'Análisis de datos',
      svc2_body: 'SQL, Pandas y machine learning para responder preguntas de negocio, con dashboards en Power BI y en la web.',
      svc3_title: 'Diseño web',
      svc3_body: 'Sitios con dirección de arte propia, sistemas de diseño accesibles y landings que convierten, sin depender de plantillas.',
      svc4_title: 'IA y seguridad',
      svc4_body: 'Modelos de lenguaje integrados en productos reales, auditoría de código y tests automáticos con integración continua.',
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
      featured_label: 'Proyecto destacado',
      filter_data: "Análisis de datos",
      filter_prog: "Programación",
      filter_design: "Diseño web",
      p_tradeflow_t: "TradeFlow Colón",
      p_tradeflow_d: "Marketplace B2B para la Zona Libre de Colón: los compradores mayoristas descubren inventario verificado, los vendedores gestionan su tienda, planes SaaS y logística, y un panel de analítica con IA les da KPIs, pronósticos y un chat de consultas. Incluye panel de administración en React, app Android (TWA) y versión en inglés y español.",
      p_tradeflow_nota: "Código privado · Expo ¡Supérate! 2026",
      p_pulso_t: "Pulso Commerce",
      p_pulso_d: "Analítica de e-commerce de punta a punta: modelo relacional, 5 consultas SQL, retención por cohortes, segmentación RFM y CAC/LTV por canal, en un dashboard interactivo. Hallazgo: Instagram Ads apenas recupera su costo (LTV:CAC 1,2x) frente a Email (10,4x).",
      p_churn_t: "Predicción de abandono",
      p_churn_d: "Modelo que predice qué clientes de una telecom van a cancelar (AUC 0,81) y elige a quién ofrecer retención según el beneficio: contactar al 30 % de mayor riesgo captura el 61 % de los abandonos y deja +$12 500, frente a −$19 500 si se contacta a todos.",
      p_demanda_t: "Pronóstico de demanda",
      p_demanda_d: "Pronóstico semanal para 12 series de un supermercado con feriados panameños. Un ensamble de Holt-Winters y Gradient Boosting reduce el error un 27 % frente a la línea base, validado con backtesting de origen móvil, y se convierte en plan de pedidos con stock de seguridad.",
      p_supplychain_t: "Inventario y Abastecimiento",
      p_supplychain_d: "Análisis de la cadena de suministro de una distribuidora ficticia: nivel de servicio, clasificación ABC-XYZ, desempeño de proveedores y plan de reposición con stock de seguridad y EOQ. Libro de Excel con LAMBDA y matrices dinámicas, e informe de Power BI con 83 medidas DAX.",
      p_supplychain_nota: "Excel · Power BI",
      p_agenda_t: "Agenda Clínica",
      p_agenda_d: "API REST de citas médicas con autenticación JWT y tres roles. Calcula turnos libres según el horario de cada médico, impide choques de horario y aplica la política de cancelación. Contraseñas con PBKDF2 y 16 tests de punta a punta.",
      p_coral_t: "Coral · lenguaje en español",
      p_coral_d: "Lenguaje de programación propio con palabras clave en español: lexer, parser Pratt, AST e intérprete con clausuras, escritos desde cero sin dependencias. Errores con línea y columna, 28 tests y un playground que lo ejecuta en el navegador.",
      p_pizarra_t: "Pizarra · Kanban en tiempo real",
      p_pizarra_d: "Tablero Kanban colaborativo: lo que una persona crea, mueve o borra aparece al instante para todas, con presencia de quién está conectado, arrastrar y soltar y reconexión automática. El servidor valida y difunde cada acción.",
      p_securityguard_t: "Security Guard",
      p_securityguard_d: "Auditor de seguridad para código, repositorios y sitios web: análisis estático con más de 25 patrones de vulnerabilidad, detección de secretos filtrados y revisión de dependencias con CVE conocidos, en un reporte priorizado.",
      p_asistente_t: "Asistente de Documentos IA",
      p_asistente_d: "Pregúntale a tus apuntes: un buscador BM25 encuentra los fragmentos relevantes y Claude responde citando la fuente exacta.",
      p_altura_t: "Altura · café de especialidad",
      p_altura_d: "Sitio para una marca ficticia de café de Boquete: estilo editorial, ilustraciones en SVG, gráfico de altitud animado, configurador de suscripción con precio en vivo y guías de preparación con temporizador.",
      p_prisma_t: "Prisma UI · sistema de diseño",
      p_prisma_d: "Sistema de diseño con su documentación: colores en OKLCH que se retematizan en vivo, contraste WCAG calculado por cada color y componentes accesibles (formularios, pestañas, diálogo y tabla ordenable) con modo claro y oscuro.",
      p_cuenta_t: "Cuenta Clara · landing SaaS",
      p_cuenta_d: "Landing neo-brutalista para un SaaS ficticio de facturación en Panamá, con maqueta animada del producto, calculadora de ITBMS, calculadora de horas ahorradas y precios mensuales o anuales.",
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
      rm4_title: 'Calidad de software', rm4_a: 'Tests con pytest', rm4_b: 'CI con GitHub Actions', rm4_c: 'Git y revisiones', rm4_proof: 'Agenda Clínica',
      rm5_title: 'IA aplicada', rm5_a: 'APIs de LLM', rm5_b: 'RAG y búsqueda', rm5_c: 'Analítica con IA', rm5_proof: 'Asistente IA',
      rm6_title: 'Ciberseguridad', rm6_b: 'Hashing y secretos', rm6_c: 'Auditoría de código',
      rm7_title: 'Producción', rm7_b: 'Despliegue en la nube', rm7_c: 'Monitoreo', rm7_proof: 'Siguiente paso',
      m_nov: 'Nov', m_aug: 'Ago', m_jun: 'Jun', m_may: 'May', m_apr: 'Abr', m_mar: 'Mar', m_dec: 'Dic', m_oct: 'Oct',
      timeline_2026: 'Proyectos de mayor escala e impacto',
      tl26_nov: 'Python Essentials 2 (Cisco) y nueve proyectos profesionales en análisis de datos, programación y diseño web.',
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
      services_lead: 'Four areas where I already have published projects and certifications to show for it.',
      proof_label: 'Proof:',
      svc1_title: 'Web applications',
      svc1_body: 'Backends with Django and FastAPI, authenticated REST APIs, real-time WebSockets and automated tests.',
      svc2_title: 'Data analysis',
      svc2_body: 'SQL, Pandas and machine learning to answer business questions, with dashboards in Power BI and on the web.',
      svc3_title: 'Web design',
      svc3_body: 'Sites with their own art direction, accessible design systems and landing pages that convert, no templates.',
      svc4_title: 'AI & security',
      svc4_body: 'Language models built into real products, code auditing and automated tests with continuous integration.',
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
      featured_label: 'Featured project',
      filter_data: "Data analysis",
      filter_prog: "Programming",
      filter_design: "Web design",
      p_tradeflow_t: "TradeFlow Colón",
      p_tradeflow_d: "B2B marketplace for the Colón Free Trade Zone: wholesale buyers discover verified inventory, sellers manage their store, SaaS plans and logistics, and an AI analytics panel gives them KPIs, forecasts and a Q&A chat. Includes a React admin panel, an Android app (TWA) and English and Spanish versions.",
      p_tradeflow_nota: "Private code · Expo ¡Supérate! 2026",
      p_pulso_t: "Pulso Commerce",
      p_pulso_d: "End-to-end e-commerce analytics: relational model, 5 SQL queries, cohort retention, RFM segmentation and CAC/LTV by channel, in an interactive dashboard. Finding: Instagram Ads barely pays back (1.2x LTV:CAC) versus Email (10.4x).",
      p_churn_t: "Churn Prediction",
      p_churn_d: "Model that predicts which telecom customers will cancel (0.81 AUC) and picks who gets a retention offer by profit: contacting the riskiest 30% catches 61% of churners and earns +$12,500, versus −$19,500 if everyone is contacted.",
      p_demanda_t: "Demand Forecasting",
      p_demanda_d: "Weekly forecasting for 12 supermarket series with Panamanian holidays. A Holt-Winters + Gradient Boosting ensemble cuts error by 27% versus the baseline, validated with rolling-origin backtesting, and turns into an order plan with safety stock.",
      p_supplychain_t: "Inventory & Supply Planning",
      p_supplychain_d: "Supply-chain analysis for a fictional distributor: service level, ABC-XYZ classification, supplier performance and a replenishment plan with safety stock and EOQ. Excel workbook with LAMBDA and dynamic arrays, plus a Power BI report with 83 DAX measures.",
      p_supplychain_nota: "Excel · Power BI",
      p_agenda_t: "Clinic Scheduler API",
      p_agenda_d: "REST API for medical appointments with JWT auth and three roles. It computes free slots from each doctor's schedule, prevents double booking and enforces the cancellation policy. PBKDF2 passwords and 16 end-to-end tests.",
      p_coral_t: "Coral · a Spanish language",
      p_coral_d: "My own programming language with Spanish keywords: lexer, Pratt parser, AST and an interpreter with closures, written from scratch with no dependencies. Errors with line and column, 28 tests and a playground that runs it in the browser.",
      p_pizarra_t: "Pizarra · Real-time Kanban",
      p_pizarra_d: "Collaborative Kanban board: whatever one person creates, moves or deletes shows up instantly for everyone, with presence, drag and drop and automatic reconnection. The server validates and broadcasts every action.",
      p_securityguard_t: "Security Guard",
      p_securityguard_d: "Security auditor for code, repositories and websites: static analysis with 25+ vulnerability patterns, leaked-secret detection and dependency checks against known CVEs, in a prioritized report.",
      p_asistente_t: "AI Document Assistant",
      p_asistente_d: "Ask your own notes: a BM25 search finds the relevant passages and Claude answers citing the exact source.",
      p_altura_t: "Altura · specialty coffee",
      p_altura_d: "Website for a fictional coffee brand from Boquete: editorial art direction, SVG illustrations, an animated altitude chart, a subscription builder with live pricing and brew guides with a timer.",
      p_prisma_t: "Prisma UI · design system",
      p_prisma_d: "Design system with its own docs: OKLCH colors that re-theme live, WCAG contrast computed for every color and accessible components (forms, tabs, dialog, sortable table) with light and dark modes.",
      p_cuenta_t: "Cuenta Clara · SaaS landing",
      p_cuenta_d: "Neo-brutalist landing page for a fictional invoicing SaaS in Panama, with an animated product mockup, a sales-tax (ITBMS) calculator, a time-saved calculator and monthly or yearly pricing.",
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
      rm4_title: 'Software quality', rm4_a: 'Tests with pytest', rm4_b: 'CI with GitHub Actions', rm4_c: 'Git and reviews', rm4_proof: 'Clinic API',
      rm5_title: 'Applied AI', rm5_a: 'LLM APIs', rm5_b: 'RAG and search', rm5_c: 'AI analytics', rm5_proof: 'AI Assistant',
      rm6_title: 'Cybersecurity', rm6_b: 'Hashing and secrets', rm6_c: 'Code auditing',
      rm7_title: 'Production', rm7_b: 'Cloud deployment', rm7_c: 'Monitoring', rm7_proof: 'Next step',
      m_nov: 'Nov', m_aug: 'Aug', m_jun: 'Jun', m_may: 'May', m_apr: 'Apr', m_mar: 'Mar', m_dec: 'Dec', m_oct: 'Oct',
      timeline_2026: 'Bigger projects, bigger impact',
      tl26_nov: 'Python Essentials 2 (Cisco) and nine professional projects in data analysis, programming and web design.',
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
