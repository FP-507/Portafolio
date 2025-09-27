import React from "react";

const features = [
  "Instalable en dispositivos",
  "Funciona offline",
  "Carga rápida",
  "Responsive design"
];

export default function PWAFeatures() {
  return (
    <section id="pwa" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold mb-6">Características PWA</h3>
      <ul className="grid md:grid-cols-2 gap-4">
        {features.map((f, i) => (
          <li key={i} className="p-4 rounded-lg border bg-white/5">{f}</li>
        ))}
      </ul>
    </section>
  );
}
