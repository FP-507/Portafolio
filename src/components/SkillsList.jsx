import React from "react";

export default function SkillsList({ lang }) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <li className="p-4 rounded-lg border bg-white/5">Python — {lang === 'es' ? 'Avanzado' : 'Advanced'}</li>
      <li className="p-4 rounded-lg border bg-white/5">React — {lang === 'es' ? 'Intermedio' : 'Intermediate'}</li>
      <li className="p-4 rounded-lg border bg-white/5">TailwindCSS — {lang === 'es' ? 'Intermedio' : 'Intermediate'}</li>
    </ul>
  );
}
