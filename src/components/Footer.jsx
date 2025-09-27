import { motion } from "framer-motion"
import { useAppContext } from "../context/AppContext"
import { Heart, Code2, Coffee, Github, Linkedin, ArrowUp } from "lucide-react"

export default function Footer() {
  const { lang } = useAppContext()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Fidel Pizart</h3>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              {lang === "en"
                ? "Backend Developer passionate about creating efficient and scalable solutions."
                : "Desarrollador Backend apasionado por crear soluciones eficientes y escalables."}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              {lang === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h4>
            
            <nav className="space-y-2">
              {[
                { href: "#home", label: lang === "en" ? "Home" : "Inicio" },
                { href: "#about", label: lang === "en" ? "About" : "Sobre mí" },
                { href: "#projects", label: lang === "en" ? "Projects" : "Proyectos" },
                { href: "#contact", label: lang === "en" ? "Contact" : "Contacto" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:text-blue-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social & Status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              {lang === "en" ? "Connect" : "Conecta"}
            </h4>
            
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <motion.a
                href="https://github.com/FP-507"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/fidel-pizart-3ba135383"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {lang === "en" ? "Available for work" : "Disponible para trabajar"}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>
              {lang === "en"
                ? "© 2025 Fidel Pizart. Built with"
                : "© 2025 Fidel Pizart. Construido con"}
            </span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>&</span>
            <Coffee className="w-4 h-4 text-amber-400" />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>React • Tailwind CSS • Framer Motion</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={lang === "en" ? "Back to top" : "Volver arriba"}
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
