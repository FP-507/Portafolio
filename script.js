// Theme toggle + intersection animations + persistence
(function(){
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const langBtn = document.getElementById('langToggle');
  const THEME_KEY = 'pref-theme';
  const LANG_KEY = 'pref-lang';
  // Modal eliminado: limpieza de variables relacionadas

  function applyTheme(theme){
    const dark = theme === 'dark';
    root.classList.toggle('theme-dark', dark);
    if(toggleBtn){
      toggleBtn.setAttribute('aria-pressed', dark ? 'true':'false');
      const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
      toggleBtn.setAttribute('aria-label', label);
    }
  }

  const stored = localStorage.getItem(THEME_KEY);
  if(stored){
    applyTheme(stored);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark':'light');
  }

  toggleBtn && toggleBtn.addEventListener('click', () => {
    const isDark = root.classList.contains('theme-dark');
    const newTheme = isDark ? 'light' : 'dark';
    document.body.classList.add('theme-transition');
    localStorage.setItem(THEME_KEY,newTheme);
    applyTheme(newTheme);
    setTimeout(()=> document.body.classList.remove('theme-transition'), 700);
  });

  // --- Internacionalización ---
  const translations = {
    es: {
      hero_name: 'Fidel Pizart',
      hero_role: 'Desarrollador Python',
      nav_about: 'Sobre mí',
      nav_projects: 'Proyectos',
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
  // Nombres de proyectos permanecen constantes (sin traducción)
  proj1_desc: 'App para aprender inglés: práctica de conversación con una IA que responde a tu voz y registra tu progreso.',
  proj2_desc: 'Juego de ajedrez donde una IA simple aprende patrones de tus partidas para ajustar su estilo.',
  proj3_desc: 'Plantilla para bots de Discord: comandos básicos, estructura modular y punto de partida para extender.',
      repo_label: 'Repositorio →',
      roadmap_heading: 'Ruta de Aprendizaje',
      timeline_heading: 'Línea de Tiempo',
      timeline_2025: '2025 · Practicando y construyendo',
      timeline_2024: '2024 · Inicio en Python',
      contact_heading: 'Contacto',
      contact_body: 'Si deseas ponerte en contacto, escríbeme por LinkedIn o GitHub. Abierto a colaborar y a retos interesantes.',
      lang_button: 'ES / EN'
    },
    en: {
      hero_name: 'Fidel Pizart',
      hero_role: 'Python Developer',
      nav_about: 'About',
      nav_projects: 'Projects',
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
  // Project names remain constant (not translated)
  proj1_desc: 'English learning app: conversational practice with an AI that reacts to your voice and tracks progress.',
  proj2_desc: 'Chess game where a simple AI learns patterns from your games to adjust its style.',
  proj3_desc: 'Discord bot template: basic commands, modular structure and a starting point to extend.',
      repo_label: 'Repo →',
      roadmap_heading: 'Learning Roadmap',
      timeline_heading: 'Timeline',
      timeline_2025: '2025 · Practicing and Building',
      timeline_2024: '2024 · Getting Started with Python',
      contact_heading: 'Contact',
      contact_body: 'If you want to reach out, contact me on LinkedIn or GitHub. Open to collaboration and interesting challenges.',
      lang_button: 'EN / ES'
    }
  };

  function applyLanguage(lang){
    const dict = translations[lang] || translations.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key]){
        if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', dict[key]);
        } else {
          el.textContent = dict[key];
        }
      }
    });
    // Re-aplicar aria-pressed text for filters after translation if needed (text already set via data-i18n)
    // Actualizar atributo lang de <html>
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
    langBtn && langBtn.setAttribute('data-lang', lang);
    langBtn && (langBtn.querySelector('.lang-label').textContent = dict.lang_button);
  }

  const storedLang = localStorage.getItem(LANG_KEY) || 'es';
  applyLanguage(storedLang);

  langBtn && langBtn.addEventListener('click', () => {
    const current = langBtn.getAttribute('data-lang') || 'es';
    const next = current === 'es' ? 'en' : 'es';
    localStorage.setItem(LANG_KEY, next);
    applyLanguage(next);
    // Reaplicar estado activo después del cambio de idioma
    const activeSection = document.querySelector('.menu_list a.active');
    if(!activeSection){
      // Forzar cálculo inicial evaluando la sección en el centro del contenedor
      const scroller = document.querySelector('.container');
      if(scroller){
        const midpoint = scroller.scrollTop + scroller.clientHeight/2;
        let currentId = null;
        for(const sec of sections){
          const top = sec.offsetTop;
            const bottom = top + sec.offsetHeight;
            if(midpoint >= top && midpoint < bottom){
              currentId = sec.id; break;
            }
        }
        if(currentId) setActive(currentId); else setActive(sections[0].id);
      } else {
        setActive(sections[0].id);
      }
    }
  });

  // Lógica de modal eliminada (se conservan comentarios para histórico)

  // Intersection animations
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced) {
    const animated = document.querySelectorAll('[data-animate]');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting){
          const delay = e.target.getAttribute('data-delay') || 0;
          e.target.style.transitionDelay = delay + 'ms';
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    animated.forEach(el => { obs.observe(el); });
  } else {
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('in'));
  }

  // Resaltado de sección activa en navegación
  const sectionIds = ['about','skills','projects','roadmap','timeline','contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll('.menu_list a'));

  function setActive(id){
    navLinks.forEach(a => {
      const match = a.getAttribute('href') === '#' + id;
      a.classList.toggle('active', match);
      if(match) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current');
    });
  }

  const scrollRoot = document.querySelector('.container') || null;
  const obsNav = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) setActive(e.target.id); });
  }, { root: scrollRoot, rootMargin: '-40% 0px -50% 0px', threshold: 0.1 });
  sections.forEach(sec => obsNav.observe(sec));

  // Ripple / pulse al hacer click en navegación
  document.querySelectorAll('.menu_btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left)/rect.width)*100;
      const y = ((e.clientY - rect.top)/rect.height)*100;
      btn.style.setProperty('--ripple-x', x+'%');
      btn.style.setProperty('--ripple-y', y+'%');
      btn.classList.add('ripple-on');
      btn.querySelector('a').addEventListener('blur', ()=> btn.classList.remove('ripple-on'), { once:true });
      // usar pseudo after via clase
      btn.style.setProperty('--ripple-timestamp', Date.now());
      const after = ()=>{
        btn.classList.remove('ripple-on');
      };
      setTimeout(after, 650);
    });
  });

  // --- Filtros de proyectos ---
  const filterBar = document.querySelector('.project-filters');
  const filterButtons = filterBar ? Array.from(filterBar.querySelectorAll('.filter-btn')) : [];
  const projectCards = Array.from(document.querySelectorAll('.project.card'));

  function applyFilter(tag){
    projectCards.forEach(card => {
      const tags = (card.getAttribute('data-tags')||'').split(/\s+/);
      const show = tag === 'all' || tags.includes(tag);
      card.style.display = show ? '' : 'none';
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-filter');
      filterButtons.forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', b === btn ? 'true':'false'); });
      applyFilter(tag);
    });
  });

  // Inicial
  applyFilter('all');
})();
