import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search, MapPin } from "lucide-react"
import { useAppContext } from "../context/AppContext"

export default function NotFound() {
  const { lang } = useAppContext()
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <motion.h1
            className="text-9xl md:text-[12rem] font-bold text-gray-200 dark:text-gray-700 select-none"
            animate={{ 
              textShadow: [
                "0 0 0px rgba(59, 130, 246, 0)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 0px rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.h1>
          
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <MapPin className="w-16 h-16 text-blue-500" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {lang === "en" ? "Page Not Found" : "Página No Encontrada"}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {lang === "en"
              ? "Oops! The page you're looking for seems to have wandered off into the digital void."
              : "¡Ups! La página que buscas parece haberse perdido en el vacío digital."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <motion.button
              onClick={goBack}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5" />
              {lang === "en" ? "Go Back" : "Volver"}
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Home className="w-5 h-5" />
                {lang === "en" ? "Go Home" : "Ir al Inicio"}
              </Link>
            </motion.div>
          </div>

          {/* Suggestions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Search className="w-5 h-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {lang === "en" ? "Quick Links" : "Enlaces Rápidos"}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { href: "/#home", label: lang === "en" ? "Home" : "Inicio" },
                { href: "/#about", label: lang === "en" ? "About" : "Sobre mí" },
                { href: "/#projects", label: lang === "en" ? "Projects" : "Proyectos" },
                { href: "/#contact", label: lang === "en" ? "Contact" : "Contacto" },
                { href: "/blog", label: "Blog" }
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400/30 rounded-full"
          />
          <motion.div
            animate={{ 
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-purple-400/30 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}