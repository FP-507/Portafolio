import React from "react";
import { Github, Linkedin, Download } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-70 text-sm">
      <p>{t.footer}</p>
      <div className="flex gap-4">
        <a href="https://github.com/FP-507" target="_blank" rel="noopener"><Github size={18} /></a>
        <a href="https://www.linkedin.com/in/fidel-pizart-3ba135383" target="_blank" rel="noopener"><Linkedin size={18} /></a>
        <a href="https://www.canva.com/design/DAGwp5rUOGU/kCHPV3YKcYbwVzN5gEJHug/view" target="_blank" rel="noopener"><Download size={18} /></a>
      </div>
    </footer>
  );
}
