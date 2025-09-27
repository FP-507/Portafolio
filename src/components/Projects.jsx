import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Expo Junior",
    description: "Proyecto académico en Python con enfoque en aprendizaje.",
    link: "https://github.com/FP-507/Expo-Junior"
  },
  // Puedes agregar más proyectos aquí
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h3 className="text-2xl font-bold mb-6">Proyectos destacados</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
