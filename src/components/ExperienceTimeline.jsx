import React from "react";

const experiences = [
  {
    year: "2024",
    role: "Desarrollador Python",
    company: "Freelance",
    description: "Automatización de procesos y desarrollo de herramientas personalizadas."
  },
  {
    year: "2023",
    role: "Desarrollador Web",
    company: "Proyecto Expo Junior",
    description: "Desarrollo de plataforma educativa en Python."
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold mb-6">Experiencia</h3>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="p-6 rounded-xl border bg-white/5 border-white/10">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{exp.year}</span>
              <span>{exp.company}</span>
            </div>
            <div className="font-bold mb-1">{exp.role}</div>
            <div className="opacity-80">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
