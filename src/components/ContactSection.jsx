import React from "react";
import { Linkedin } from "lucide-react";

export default function ContactSection({ t }) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-2xl font-bold mb-6">{t.contactSection}</h3>
      <p className="mb-4">{t.sendMessage}</p>
      <a
        href="https://www.linkedin.com/in/fidel-pizart-3ba135383"
        target="_blank"
        rel="noopener"
        className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 inline-flex items-center gap-2"
      >
        <Linkedin size={18} /> {t.sendButton}
      </a>
    </section>
  );
}
