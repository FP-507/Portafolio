import React from "react";

const testimonials = [
  {
    name: "Juan Pérez",
    text: "Fidel es un profesional dedicado y siempre busca la excelencia en sus proyectos."
  },
  {
    name: "Ana Gómez",
    text: "Su capacidad para aprender y adaptarse es impresionante. Recomiendo trabajar con él."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold mb-6">Testimonios</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 rounded-xl border bg-white/5 border-white/10">
            <p className="mb-2">"{t.text}"</p>
            <span className="font-semibold">- {t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
