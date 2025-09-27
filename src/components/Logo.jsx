import React from "react";
import { motion } from "framer-motion";

export default function Logo({ src }) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      src={src}
      alt="Logo"
      className="w-12 h-12 object-cover rounded-lg shadow-2xl"
    />
  );
}
