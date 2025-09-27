import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Hola, soy Fidel Pizart</h2>
        <p className="mb-6 text-lg opacity-80">Soy un programador autodidacta de Panamá con enfoque en Python. Me interesa la automatización de procesos y la creación de herramientas útiles.</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition">Ver proyectos</a>
          <a href="#contact" className="px-4 py-2 rounded-xl bg-slate-700 text-white hover:bg-slate-600 transition">Contactar</a>
        </div>
      </motion.div>
    </section>
  );
}
