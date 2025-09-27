import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="p-6 rounded-xl border bg-white/5 border-white/10">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="opacity-80 mb-3">{description}</p>
      <a href={link} target="_blank" rel="noopener" className="text-indigo-400 hover:underline">GitHub ↗</a>
    </motion.div>
  );
}
