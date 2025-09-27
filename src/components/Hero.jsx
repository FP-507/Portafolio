import { motion } from "framer-motion"
import { useAppContext } from "../context/AppContext"
import { ChevronDown, Code2, Database, Server } from "lucide-react"

export default function Hero() {
  const { lang } = useAppContext()

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
      role="banner"
      aria-label="Hero section"
    >
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        />
      </div>

      <header className="relative z-10 max-w-4xl mx-auto">
        {/* Tech icons floating animation */}
        <div className="absolute -top-20 left-0 hidden md:block">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Code2 className="w-8 h-8 text-blue-500/60" />
          </motion.div>
        </div>
        <div className="absolute -top-16 right-0 hidden md:block">
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Database className="w-8 h-8 text-purple-500/60" />
          </motion.div>
        </div>
        <div className="absolute top-32 -right-10 hidden lg:block">
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Server className="w-8 h-8 text-green-500/60" />
          </motion.div>
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent leading-tight"
          >
            {lang === "en" ? "Hello, I'm" : "Hola, soy"}{" "}
            <span className="block text-gray-900 dark:text-white">
              Fidel Pizart
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-700">
              <p className="text-lg font-medium text-blue-800 dark:text-blue-200">
                {lang === "en" ? "Backend Developer" : "Desarrollador Backend"}
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed"
            role="doc-subtitle"
          >
            {lang === "en"
              ? "Student passionate about backend development. Specialized in Python, always learning and open to new opportunities."
              : "Estudiante apasionado por el desarrollo backend. Especializado en Python, siempre aprendiendo y abierto a nuevas oportunidades."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === "en" ? "View My Work" : "Ver Mi Trabajo"}
              <motion.span 
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {lang === "en" ? "Get in Touch" : "Contactar"}
            </motion.a>
          </motion.div>
        </motion.div>
      </header>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label={lang === "en" ? "Scroll to about section" : "Ir a la sección sobre mí"}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  )
}
