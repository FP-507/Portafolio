import React from "react";

const certifications = [
  {
    name: "Certificado Python",
    issuer: "Coursera",
    year: "2023"
  },
  {
    name: "React Developer",
    issuer: "Udemy",
    year: "2024"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-bold mb-6">Certificaciones</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((c, i) => (
          <div key={i} className="p-6 rounded-xl border bg-white/5 border-white/10">
            <div className="font-bold mb-1">{c.name}</div>
            <div className="opacity-80">{c.issuer} — {c.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
