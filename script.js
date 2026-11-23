// Portfolio — Theme, i18n, animations, interactivity
(function () {
  const root = document.documentElement;
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggle');
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
      hero_available: "Disponible para prácticas y proyectos",
      hero_name: 'Fidel Pizart',
      meta_description: "Fidel Pizart, desarrollador Python en Colón, Panamá. Aplicaciones web, análisis de datos y diseño web, con proyectos publicados y demos en vivo.",
      meta_title: "Fidel Pizart · Desarrollador Python, Datos y Web",
      hero_role: "Desarrollador Python · Datos · Web",
      hero_desc: "Convierto problemas reales en software que funciona: aplicaciones web, análisis de datos que guían decisiones y sitios con diseño propio. Desde Colón, Panamá.",
      hero_cta_projects: "Ver mi trabajo",
      hero_cta_contact: "Hablemos",
      nav_about: 'Sobre mí',
      nav_skills: 'Habilidades',
      nav_projects: 'Proyectos',
      nav_roadmap: 'Trayectoria',
      nav_services: 'Qué hago',
      stat_projects: 'Proyectos',
      stat_certs: 'Certificaciones',
      stat_awards: 'Premios',
      stat_since: 'Programando desde',
      services_heading: "Qué puedo aportar a tu equipo",
      services_lead: "Cuatro áreas en las que ya entregué proyectos publicados, con código abierto y demos en vivo.",
      proof_label: 'Prueba:',
      svc1_title: 'Aplicaciones web',
      svc1_body: "Backends con Django y FastAPI: APIs seguras con autenticación y roles, colaboración en tiempo real y tests automáticos desde el primer día.",
      svc2_title: 'Análisis de datos',
      svc2_body: "Del dato crudo a la decisión: SQL, Pandas y machine learning para saber qué canal rinde, qué cliente se va y cuánto pedir.",
      svc3_title: 'Diseño web',
      svc3_body: "Sitios con identidad propia, sistemas de diseño accesibles y landings pensadas para convertir, sin plantillas.",
      svc4_title: 'IA y seguridad',
      svc4_body: "IA integrada en productos reales y una mirada de seguridad en cada línea: auditoría de código e integración continua.",
      nav_contact: 'Contacto',
      about_heading: 'Sobre mí',
      about_profile_title: "Quién soy",
      about_profile_body: "Soy desarrollador Python y estudiante de Bachiller en Ciencias en Colón, Panamá. Empecé a programar en 2024 con una regla: cada proyecto tiene que resolver algo concreto. Así nacieron un marketplace B2B para la Zona Libre de Colón, modelos que anticipan qué clientes se van y un lenguaje de programación propio. Tengo certificaciones de Microsoft (Excel Expert) y Cisco (Python Essentials 1 y 2), y trabajo en español e inglés.",
      about_progress_title: "Cómo trabajo",
      about_progress_body: "Entiendo el problema antes de escribir código, valido con datos y entrego con tests, documentación y una demo que cualquiera puede probar.",
      about_motivation_title: "Lo que me mueve",
      about_motivation_item1: "Resolver problemas reales, no ejercicios",
      about_motivation_item2: "Código claro que otros puedan mantener",
      about_motivation_item3: "Aprender algo nuevo cada semana",
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
      p_tradeflow_d: "Mi proyecto más ambicioso: un marketplace B2B que conecta a compradores mayoristas con el inventario verificado de la Zona Libre de Colón. Los vendedores gestionan su tienda, planes SaaS y logística, y un panel con IA les entrega KPIs, pronósticos y respuestas al instante. Incluye panel de administración en React, app Android y versión bilingüe.",
      p_tradeflow_nota: "Código privado · Expo ¡Supérate! 2026",
      p_pulso_t: "Pulso Commerce",
      p_pulso_d: "¿Qué canales traen clientes que vuelven? Lo respondí para una tienda online ficticia con SQL, cohortes, segmentación RFM y CAC/LTV, en un dashboard interactivo. Resultado: Instagram Ads apenas recupera su costo (1,2x) mientras Email rinde 10,4x.",
      p_churn_t: "Predicción de abandono",
      p_churn_d: "Un modelo que anticipa qué clientes de una telecom van a cancelar (AUC 0,81) y decide a quién ofrecer retención según el dinero en juego: contactar al 30 % más riesgoso salva el 61 % de las bajas y deja +$12 500, en lugar de perder $19 500. Datos sintéticos.",
      p_demanda_t: "Pronóstico de demanda",
      p_demanda_d: "Cuánto pedir sin quedarse corto ni sobrar: pronóstico semanal para 12 series de un supermercado, con feriados panameños. Un ensamble de Holt-Winters y Gradient Boosting reduce el error un 27 % y se convierte en un plan de pedidos con stock de seguridad.",
      p_supplychain_t: "Inventario y Abastecimiento",
      p_supplychain_d: "Diagnóstico completo de la cadena de suministro de una distribuidora ficticia: nivel de servicio, clasificación ABC-XYZ, desempeño de proveedores y reposición con EOQ. Excel avanzado con LAMBDA y un informe de Power BI con 83 medidas DAX.",
      p_supplychain_nota: "Excel · Power BI",
      p_agenda_t: "Agenda Clínica",
      p_agenda_d: "Una API de citas médicas pensada para producción: autenticación JWT, tres roles, turnos calculados según el horario de cada médico y cero choques de agenda. Contraseñas con PBKDF2, Docker y 16 tests de punta a punta.",
      p_coral_t: "Coral · lenguaje en español",
      p_coral_d: "Creé mi propio lenguaje de programación en español, desde cero en Python: lexer, parser Pratt e intérprete con programación orientada a objetos completa (clases abstractas, encapsulamiento, herencia y sobrecarga de operadores), excepciones y pruebas integradas. Sus errores enseñan: señalan la columna exacta y sugieren la palabra correcta. Se prueba en el navegador.",
      p_pizarra_t: "Pizarra · Kanban en tiempo real",
      p_pizarra_d: "Un Kanban donde todo el equipo trabaja a la vez: cada tarjeta que alguien crea o mueve aparece al instante en las demás pantallas, con presencia en vivo, arrastrar y soltar y reconexión automática por WebSockets.",
      p_securityguard_t: "Security Guard",
      p_securityguard_d: "Un auditor que revisa código, repositorios y sitios web en busca de vulnerabilidades: más de 25 patrones, secretos filtrados y dependencias con CVE conocidos, en un reporte priorizado por riesgo.",
      p_asistente_t: "Asistente de Documentos IA",
      p_asistente_d: "Pregúntale a tus propios documentos: un buscador BM25 encuentra lo relevante y Claude responde citando la fuente exacta, para que cada respuesta se pueda verificar.",
      p_altura_t: "Altura · café de especialidad",
      p_altura_d: "Un sitio que se siente como la marca: dirección de arte editorial para una marca ficticia de café de Boquete, ilustraciones en SVG, gráfico de altitud animado, suscripción con precio en vivo y guías de preparación con temporizador.",
      p_prisma_t: "Prisma UI · sistema de diseño",
      p_prisma_d: "Un sistema de diseño completo con su documentación: elige un color de marca y todo se retematiza manteniendo el contraste WCAG. Componentes accesibles, modo claro y oscuro, y código listo para copiar.",
      p_cuenta_t: "Cuenta Clara · landing SaaS",
      p_cuenta_d: "Una landing con carácter para un SaaS ficticio de facturación en Panamá: estilo neo-brutalista, maqueta animada del producto y calculadoras de ITBMS y de horas ahorradas que convierten la visita en interés.",
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
      contact_heading: "Hablemos",
      contact_body: "¿Tienes un proyecto, una vacante o una idea que quieres llevar a cabo? Escríbeme: respondo rápido y me encantan los buenos retos.",
      cta_linkedin: 'Conectar en LinkedIn',
      cta_email: 'Enviar Email',
      cta_github: 'Ver GitHub',
    },
    en: {
      hero_available: "Available for internships and projects",
      hero_name: 'Fidel Pizart',
      meta_description: "Fidel Pizart, Python developer in Colón, Panama. Web apps, data analysis and web design, with published projects and live demos.",
      meta_title: "Fidel Pizart · Python Developer, Data and Web",
      hero_role: "Python Developer · Data · Web",
      hero_desc: "I turn real problems into working software: web apps, data analysis that drives decisions and websites with original design. Based in Colón, Panama.",
      hero_cta_projects: "See my work",
      hero_cta_contact: "Let's talk",
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_roadmap: 'Journey',
      nav_services: 'What I do',
      stat_projects: 'Projects',
      stat_certs: 'Certifications',
      stat_awards: 'Awards',
      stat_since: 'Coding since',
      services_heading: "What I bring to your team",
      services_lead: "Four areas where I've already shipped published projects, with open code and live demos.",
      proof_label: 'Proof:',
      svc1_title: 'Web applications',
      svc1_body: "Django and FastAPI backends: secure APIs with authentication and roles, real-time collaboration and automated tests from day one.",
      svc2_title: 'Data analysis',
      svc2_body: "From raw data to decisions: SQL, Pandas and machine learning to know which channel pays off, which customer is leaving and how much to order.",
      svc3_title: 'Web design',
      svc3_body: "Sites with their own identity, accessible design systems and landing pages built to convert, no templates.",
      svc4_title: 'AI & security',
      svc4_body: "AI built into real products and a security mindset in every line: code auditing and continuous integration.",
      nav_contact: 'Contact',
      about_heading: 'About Me',
      about_profile_title: "Who I am",
      about_profile_body: "I'm a Python developer and science high-school student in Colón, Panama. I started coding in 2024 with one rule: every project has to solve something concrete. That led to a B2B marketplace for the Colón Free Trade Zone, models that predict which customers will leave, and my own programming language. I hold Microsoft (Excel Expert) and Cisco (Python Essentials 1 & 2) certifications and work in Spanish and English.",
      about_progress_title: "How I work",
      about_progress_body: "I understand the problem before writing code, validate with data, and ship with tests, documentation and a demo anyone can try.",
      about_motivation_title: "What drives me",
      about_motivation_item1: "Solving real problems, not exercises",
      about_motivation_item2: "Clear code others can maintain",
      about_motivation_item3: "Learning something new every week",
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
      p_tradeflow_d: "My most ambitious project: a B2B marketplace connecting wholesale buyers with verified inventory from the Colón Free Trade Zone. Sellers manage their store, SaaS plans and logistics, while an AI panel delivers KPIs, forecasts and instant answers. Includes a React admin panel, an Android app and a bilingual version.",
      p_tradeflow_nota: "Private code · Expo ¡Supérate! 2026",
      p_pulso_t: "Pulso Commerce",
      p_pulso_d: "Which channels bring customers who come back? I answered it for a fictional online store with SQL, cohorts, RFM segmentation and CAC/LTV, in an interactive dashboard. Result: Instagram Ads barely pays back (1.2x) while Email returns 10.4x.",
      p_churn_t: "Churn Prediction",
      p_churn_d: "A model that predicts which telecom customers will cancel (0.81 AUC) and decides who gets a retention offer based on the money at stake: contacting the riskiest 30% catches 61% of churners and earns +$12,500 instead of losing $19,500. Synthetic data.",
      p_demanda_t: "Demand Forecasting",
      p_demanda_d: "How much to order without running short or overstocking: weekly forecasts for 12 supermarket series, including Panamanian holidays. A Holt-Winters + Gradient Boosting ensemble cuts error by 27% and becomes an order plan with safety stock.",
      p_supplychain_t: "Inventory & Supply Planning",
      p_supplychain_d: "A full supply-chain diagnosis for a fictional distributor: service level, ABC-XYZ classification, supplier performance and EOQ replenishment. Advanced Excel with LAMBDA and a Power BI report with 83 DAX measures.",
      p_supplychain_nota: "Excel · Power BI",
      p_agenda_t: "Clinic Scheduler API",
      p_agenda_d: "A medical appointment API built for production: JWT auth, three roles, slots computed from each doctor's schedule and zero double bookings. PBKDF2 passwords, Docker and 16 end-to-end tests.",
      p_coral_t: "Coral · a Spanish language",
      p_coral_d: "I built my own Spanish-language programming language from scratch in Python: lexer, Pratt parser and an interpreter with full object-oriented programming (abstract classes, encapsulation, inheritance and operator overloading), exceptions and built-in testing. Its errors teach: they point to the exact column and suggest the right word. Try it in the browser.",
      p_pizarra_t: "Pizarra · Real-time Kanban",
      p_pizarra_d: "A Kanban board where the whole team works at once: every card someone creates or moves appears instantly on everyone's screen, with live presence, drag and drop and automatic reconnection over WebSockets.",
      p_securityguard_t: "Security Guard",
      p_securityguard_d: "An auditor that scans code, repositories and websites for vulnerabilities: 25+ patterns, leaked secrets and dependencies with known CVEs, in a risk-prioritized report.",
      p_asistente_t: "AI Document Assistant",
      p_asistente_d: "Ask your own documents: a BM25 search finds what's relevant and Claude answers citing the exact source, so every answer can be checked.",
      p_altura_t: "Altura · specialty coffee",
      p_altura_d: "A site that feels like the brand: editorial art direction for a fictional coffee brand from Boquete, SVG illustrations, an animated altitude chart, a subscription with live pricing and brew guides with a timer.",
      p_prisma_t: "Prisma UI · design system",
      p_prisma_d: "A complete design system with its own docs: pick a brand color and everything re-themes while keeping WCAG contrast. Accessible components, light and dark modes, and copy-ready code.",
      p_cuenta_t: "Cuenta Clara · SaaS landing",
      p_cuenta_d: "A landing page with personality for a fictional invoicing SaaS in Panama: neo-brutalist style, an animated product mockup, and sales-tax and time-saved calculators that turn visits into interest.",
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
      contact_heading: "Let's talk",
      contact_body: "Have a project, an opening or an idea you want to build? Write to me: I reply fast and love a good challenge.",
      cta_linkedin: 'Connect on LinkedIn',
      cta_email: 'Send Email',
      cta_github: 'View GitHub',
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
    langButtons.forEach(b => b.setAttribute('aria-pressed', b.dataset.setLang === lang ? 'true' : 'false'));
    if (dict.meta_description) document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta_description);
    if (dict.meta_title) document.title = dict.meta_title;
    // Re-trigger typing effect
    typeHeroRole(dict.hero_role);
  }

  const langButtons = Array.from(document.querySelectorAll('[data-set-lang]'));
  let storedLang = null;
  try { storedLang = localStorage.getItem(LANG_KEY); } catch (e) { /* almacenamiento bloqueado */ }
  // Sin preferencia guardada, se usa el idioma del navegador.
  applyLanguage(storedLang || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en'));

  langButtons.forEach(b => b.addEventListener('click', () => {
    const lang = b.dataset.setLang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* sin persistencia */ }
    applyLanguage(lang);
  }));

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
  // Se usa la posición de scroll (no un umbral de intersección), así funciona con secciones de
  // cualquier altura, como Proyectos. Las secciones sin enlace propio resaltan el más cercano.
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const ENLACE_DE = { skills: 'services', timeline: 'roadmap' };
  let activeId = null;

  function setActive(id) {
    if (id === activeId) return;
    activeId = id;
    navLinks.forEach(a => {
      const match = id !== null && a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', match);
      if (match) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }

  function updateActiveNav() {
    const linea = window.innerHeight * 0.35;
    let actual = null;
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top <= linea) actual = sec.id;
    }
    // Al llegar al final de la página, el último enlace (Contacto) queda activo.
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) actual = 'contact';
    setActive(actual ? (ENLACE_DE[actual] || actual) : null);
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  window.addEventListener('resize', updateActiveNav);
  updateActiveNav();

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
