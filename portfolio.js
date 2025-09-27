// Portafolio - Plantilla React (Ultimate - Mejorado)
// INSTRUCCIONES (resumen):
// 1) Coloca imágenes en /public como: logo-dark.png y logo-light.png (opcional).
// 2) Si prefieres no subir archivos, pega tu logo en formato base64 en la variable `EMBED_BASE64_LOGO` más abajo.
// 3) Este componente incluye: dark/light logos, fallback SVG, animaciones sutiles, hover effects, modo noche/claro, selector ES/EN y pequeños consejos de despliegue.
// 4) Para desplegar: Vercel o Netlify soportan apps CRA / Vite; asegúrate de copiar /public/logo-*.png al deploy.

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Sun, Moon, Globe, Download } from "lucide-react";

// ---- CONFIGURACIÓN RÁPIDA (edita si quieres) ----
// Si tienes una versión base64 del logo, pégala aquí (sin comillas extra). Ejemplo: const EMBED_BASE64_LOGO = "data:image/png;base64,iVBORw0...";
const EMBED_BASE64_LOGO = "data:image/png;base64,vVKTySKVsf+GYNL4OYZ7zhMJXa9TGKiki0v0XPgTvi7OD3tVMfPBVv37MOrV10lNB3xoJU2CQYvO67owc...J6QmOSdrGABRXUkRE5H1bsjPb/6fAAAA//8yO3jvyz64JAAAAABJRU5ErkJggg=="; // <-- pega tu base64 aquí si quieres incrustarlo y evitar archivos externos

// Colores para el fallback SVG y para el glow del logo. Ajusta si quieres que coincida con tu marca.
const LOGO_GRADIENT_START = "#00A3FF"; // azul claro
const LOGO_GRADIENT_END = "#0066CC";   // azul oscuro
// -----------------------------------------------

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("es"); // 'es' o 'en'

  const t = {
    es: {
      hi: "Hola, soy",
      viewProjects: "Ver proyectos",
      contact: "Contactar",
      projects: "Proyectos destacados",
      skills: "Habilidades",
      contactSection: "Contacto",
      sendMessage: "Envíame un mensaje",
      sendButton: "Enviar",
      aboutShort: "Soy un programador autodidacta de Panamá con enfoque en Python. Me interesa la automatización de procesos y la creación de herramientas útiles.",
      workTogether: "Trabajemos juntos",
      downloadCV: "Ver CV",
      github: "GitHub",
      linkedin: "LinkedIn"
    },
    en: {
      hi: "Hi, I'm",
      viewProjects: "View projects",
      contact: "Contact",
      projects: "Featured projects",
      skills: "Skills",
      contactSection: "Contact",
      sendMessage: "Send me a message",
      sendButton: "Send",
      aboutShort: "I'm a self-taught developer from Panama focused on Python. I like automating processes and building useful tools.",
      workTogether: "Let's work together",
      downloadCV: "View CV",
      github: "GitHub",
      linkedin: "LinkedIn"
    }
  }[lang];

  // Logo sources (public folder)
  const publicUrl = (typeof process !== 'undefined' && process.env && process.env.PUBLIC_URL) ? process.env.PUBLIC_URL : "";
  const logoDarkSrc = publicUrl + "/logo-dark.png";
  const logoLightSrc = publicUrl + "/logo-light.png";

  const [failedDark, setFailedDark] = useState(false);
  const [failedLight, setFailedLight] = useState(false);
  const [currentLogoSrc, setCurrentLogoSrc] = useState(EMBED_BASE64_LOGO || (dark ? logoDarkSrc : logoLightSrc));

  useEffect(() => {
    // prefer embedded base64 if provided
    if (EMBED_BASE64_LOGO) {
      setCurrentLogoSrc(EMBED_BASE64_LOGO);
      return;
    }
    if (dark) {
      if (!failedDark) setCurrentLogoSrc(logoDarkSrc);
      else if (!failedLight) setCurrentLogoSrc(logoLightSrc);
      else setCurrentLogoSrc(null);
    } else {
      if (!failedLight) setCurrentLogoSrc(logoLightSrc);
      else if (!failedDark) setCurrentLogoSrc(logoDarkSrc);
      else setCurrentLogoSrc(null);
    }
  }, [dark, failedDark, failedLight]);

  // Smooth scroll helper for internal navigation (adds a little offset for header)
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 88; // adjust depending on header height
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  const handleImgError = () => {
    // If embedded failed, mark both failed
    if (currentLogoSrc === EMBED_BASE64_LOGO) {
      setFailedDark(true);
      setFailedLight(true);
      setCurrentLogoSrc(null);
      return;
    }
    if (dark) {
      if (!failedDark) {
        setFailedDark(true);
        if (!failedLight) setCurrentLogoSrc(logoLightSrc);
        else setCurrentLogoSrc(null);
      } else {
        setFailedLight(true);
        setCurrentLogoSrc(null);
      }
    } else {
      if (!failedLight) {
        setFailedLight(true);
        if (!failedDark) setCurrentLogoSrc(logoDarkSrc);
        else setCurrentLogoSrc(null);
      } else {
        setFailedDark(true);
        setCurrentLogoSrc(null);
      }
    }
  };

  // Projects and skills
  const projects = [
    { title: "Expo-Junior", desc: "Repositorio: Expo-Junior — proyecto público en mi GitHub.", tags: ["Python", "Open Source"], link: "https://github.com/FP-507/Expo-Junior" },
    { title: "Expo-Junior (Docs)", desc: "Documentación y ejemplos del proyecto Expo-Junior.", tags: ["Python", "Docs"], link: "https://github.com/FP-507/Expo-Junior" }
  ];

  const skills = [
    { name: "Python", label: "Avanzado", pct: 95 },
    { name: "APIs / Backend", label: "Intermedio", pct: 80 },
    { name: "Automatización", label: "Intermedio", pct: 85 },
    { name: "Docker / DevOps", label: "Básico", pct: 55 },
    { name: "Frontend", label: "Básico", pct: 45 }
  ];

  const containerBg = dark ? "from-slate-900 via-slate-800 to-black text-slate-100" : "from-white via-gray-50 to-gray-100 text-slate-900";
  const cardBg = dark ? "bg-white/5 border-white/10" : "bg-white shadow-sm border-gray-200";

  // Inline SVG fallback uses the configured gradient colors
  const LogoFallback = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor={LOGO_GRADIENT_START} />
          <stop offset="100%" stopColor={LOGO_GRADIENT_END} />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="16" fill={dark ? "#071029" : "#ffffff"} />
      <g transform="translate(20,14) scale(0.8)" fill="none" stroke="url(#g1)" strokeWidth="3">
        <path d="M30 4v8" strokeLinecap="round" />
        <path d="M18 22h24l-5 8h-14l-5-8z" strokeLinecap="round" />
        <path d="M8 52h40" strokeLinecap="round" />
        <path d="M14 52c0 12 12 18 24 18s24-6 24-18" strokeLinecap="round" />
        <circle cx="14" cy="76" r="3" fill={LOGO_GRADIENT_START} />
        <circle cx="36" cy="76" r="3" fill={LOGO_GRADIENT_END} />
        <circle cx="58" cy="76" r="3" fill={LOGO_GRADIENT_START} />
      </g>
    </svg>
  );

  // Motion variants for subtle logo entrance + hover
  const logoEntrance = { hidden: { opacity: 0, y: 6, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } };
  const logoHover = { hover: { scale: 1.06, rotate: 0.6, transition: { duration: 0.25 } } };

  const renderLogo = (size = "small") => {
    const imgClass = size === "small" ? "w-10 h-10 object-cover rounded-lg" : "w-full h-full object-cover";
    const motionProps = { initial: "hidden", animate: "visible", variants: logoEntrance };

    if (currentLogoSrc) {
      // use framer-motion on the image for entrance and hover
      return (
        <motion.img
          {...motionProps}
          whileHover={logoHover.hover}
          src={currentLogoSrc}
          onError={handleImgError}
          alt="Logo"
          className={imgClass}
          style={{ boxShadow: `0 6px 20px rgba(0, 128, 255, 0.12)` }}
        />
      );
    }

    // fallback SVG wrapped in motion
    return (
      <motion.div {...motionProps} whileHover={logoHover.hover} className={size === "small" ? "w-10 h-10" : "w-40 h-40"}>
        <LogoFallback className={size === "small" ? "w-10 h-10" : "w-40 h-40"} />
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${containerBg} antialiased transition-colors`}> 
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-2xl ${dark ? 'bg-gradient-to-br from-indigo-500 to-cyan-400' : 'bg-gradient-to-br from-cyan-300 to-indigo-200'}`}>
            {renderLogo("small")}
          </div>
          <div>
            <h1 className="text-xl font-semibold">Fidel Pizart</h1>
            <p className="text-sm opacity-80">{lang === 'es' ? 'Desarrollador — Principalmente Python' : 'Developer — primarily Python'}</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <button onClick={() => scrollToId('projects')} className="text-sm hover:underline">{t.projects}</button>
          <button onClick={() => scrollToId('skills')} className="text-sm hover:underline">{t.skills}</button>
          <button onClick={() => scrollToId('contact')} className="text-sm hover:underline">{t.contactSection}</button>

          <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} title={lang === 'es' ? 'Cambiar a English' : 'Switch to Español'} className="ml-3 p-2 rounded hover:bg-white/5 inline-flex items-center gap-1">
            <span className="text-sm font-medium">{lang === 'es' ? 'ES' : 'EN'}</span>
            <span aria-hidden>{lang === 'es' ? '🇪🇸' : '🇺🇸'}</span>
          </button>

          <button onClick={() => setDark(!dark)} title="Toggle theme" className="p-2 rounded hover:bg-white/5">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t.hi} <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">Fidel</span>
            </h2>

            <p className="mt-4 max-w-xl">{t.aboutShort}</p>

            <div className="mt-6 flex gap-3">
              <button onClick={() => scrollToId('projects')} className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-lg shadow hover:scale-105 transition-transform">{t.viewProjects}</button>
              <a href="https://www.linkedin.com/in/fidel-pizart-3ba135383" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg">{t.contact}</a>
            </div>

            <div className="mt-6 flex items-center gap-3 opacity-90">
              <a href="https://github.com/FP-507" aria-label="GitHub" className="hover:opacity-80"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/fidel-pizart-3ba135383" aria-label="LinkedIn" className="hover:opacity-80"><Linkedin size={18} /></a>
              <a href="https://www.canva.com/design/DAGwp5rUOGU/kCHPV3YKcYbwVzN5gEJHug/view?utm_content=DAGwp5rUOGU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2177720318" aria-label="CV" className="hover:opacity-80"><Download size={18} /></a>
            </div>
          </motion.div>

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className={`p-6 rounded-2xl ${cardBg} backdrop-blur-md border shadow-xl`}>
            <div className="h-64 md:h-72 flex items-center justify-center">
              <div className="w-40 h-40 rounded-xl overflow-hidden">
                {renderLogo("large")}
              </div>
            </div>

            <div className="mt-4 text-sm opacity-90">
              <p><strong>{lang === 'es' ? 'Especialidad:' : 'Specialty:'}</strong> Python — Backend, automatización y APIs</p>
              <p className="mt-2"><strong>{lang === 'es' ? 'Estado:' : 'Status:'}</strong> {lang === 'es' ? 'Estudiante, buscando oportunidades y aprendizaje continuo.' : 'Student, looking for learning opportunities and growth.'}</p>
            </div>

          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-12">
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold">{t.projects}</motion.h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.12 }} className={`block p-5 rounded-2xl ${cardBg} hover:scale-105 transform transition-shadow shadow-lg`}>
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <p className="mt-2 text-sm opacity-80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{p.tags.map(tg => (<span key={tg} className="text-xs px-2 py-1 rounded-full bg-white/6">{tg}</span>))}</div>
              </motion.a>
            ))}
          </div>

        </section>

        {/* Skills */}
        <section id="skills" className="py-12">
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold">{t.skills}</motion.h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {skills.map(s => (
                <div key={s.name} className="mb-6">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/6">{s.label}</span>
                  </div>
                  <div className="w-full h-3 bg-white/6 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ duration: 1 }} className={`h-full rounded-full ${dark ? 'bg-gradient-to-r from-cyan-400 to-indigo-600' : 'bg-gradient-to-r from-cyan-400 to-indigo-600'}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`p-6 rounded-xl ${cardBg}`}>
              <h4 className="font-semibold">{lang === 'es' ? 'Breve sobre mí' : 'About me'}</h4>
              <p className="mt-2 text-sm opacity-80">{t.aboutShort}</p>
              <div className="mt-4">
                <a href="#contact" className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 rounded-lg">{t.workTogether}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-bold">{t.contactSection}</motion.h3>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${cardBg}`}>
              <h4 className="font-semibold">{t.sendMessage}</h4>
              <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/in/fidel-pizart-3ba135383', '_blank'); }}>
                <input placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'} className="p-3 rounded bg-white/6 outline-none" />
                <input placeholder={lang === 'es' ? 'Tu email' : 'Your email'} className="p-3 rounded bg-white/6 outline-none" />
                <textarea placeholder={lang === 'es' ? 'Mensaje' : 'Message'} className="p-3 rounded bg-white/6 outline-none h-28" />
                <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 rounded">{t.sendButton}</button>
              </form>
            </div>

            <div className={`p-6 rounded-xl ${cardBg} flex flex-col justify-between`}>
              <div>
                <p className="text-sm opacity-80">GitHub: <a href="https://github.com/FP-507" className="text-cyan-300 font-medium">github.com/FP-507</a></p>
                <p className="mt-2 text-sm opacity-80">LinkedIn: <a href="https://www.linkedin.com/in/fidel-pizart-3ba135383" className="text-cyan-300 font-medium">fidel-pizart-3ba135383</a></p>
                <p className="mt-2 text-sm opacity-80">CV: <a href="https://www.canva.com/design/DAGwp5rUOGU/kCHPV3YKcYbwVzN5gEJHug/view?utm_content=DAGwp5rUOGU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2177720318" className="text-cyan-300 font-medium">{t.downloadCV}</a></p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <a href="https://github.com/FP-507" className="inline-flex items-center gap-2 px-3 py-2 border rounded"><Github size={16}/> {t.github}</a>
                <a href="https://www.linkedin.com/in/fidel-pizart-3ba135383" className="inline-flex items-center gap-2 px-3 py-2 border rounded"><Linkedin size={16}/> {t.linkedin}</a>
                <a href="https://www.canva.com/design/DAGwp5rUOGU/kCHPV3YKcYbwVzN5gEJHug/view?utm_content=DAGwp5rUOGU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2177720318" className="inline-flex items-center gap-2 px-3 py-2 border rounded"><Download size={16}/> {t.downloadCV}</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 text-center text-sm opacity-60">Diseñado por <strong>Fidel Pizart</strong> • Plantilla creada por ChatGPT</footer>
      </main>
    </div>
  );
}
