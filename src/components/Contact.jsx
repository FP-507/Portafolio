import { motion } from "framer-motion"
import { useAppContext } from "../context/AppContext"
import ContactForm from "./ContactForm"
import { 
  Github, 
  Linkedin, 
  FileText, 
  Mail, 
  MessageCircle,
  Send,
  Coffee,
  Sparkles
} from "lucide-react"

export default function Contact() {
  const { lang } = useAppContext()

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/FP-507",
      icon: Github,
      color: "from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-black dark:hover:from-gray-500 dark:hover:to-gray-700",
      description: lang === "en" ? "Check out my code" : "Revisa mi código"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fidel-pizart-3ba135383",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      description: lang === "en" ? "Let's connect professionally" : "Conectemos profesionalmente"
    },
    {
      name: "CV",
      url: "https://www.canva.com/design/DAGwp5rUOGU/kCHPV3YKcYbwVzN5gEJHug/view",
      icon: FileText,
      color: "from-green-600 to-green-700",
      hoverColor: "hover:from-green-700 hover:to-green-800",
      description: lang === "en" ? "Download my resume" : "Descarga mi CV"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-700 mb-6">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 dark:text-blue-200 font-medium">
              {lang === "en" ? "Let's Work Together" : "Trabajemos Juntos"}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {lang === "en" ? "Get in Touch" : "Contacto"}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {lang === "en"
              ? "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development."
              : "Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes, o simplemente charlar sobre tecnología y desarrollo."}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden`}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`${link.description} - ${link.name}`}
              >
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${link.color} ${link.hoverColor} transition-all duration-300 mb-4 group-hover:scale-110 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {link.name}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {link.description}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
                
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Send className="w-5 h-5 text-blue-500" />
                </motion.div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <ContactForm />
        </motion.div>

        {/* Alternative Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {lang === "en" ? "Or reach me directly:" : "O contáctame directamente:"}
          </p>
          
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer"
            onClick={() => window.location.href = 'mailto:fidel.pizart@example.com'}
          >
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              fidel.pizart@example.com
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-6 text-gray-600 dark:text-gray-400">
            <Coffee className="w-4 h-4" />
            <span className="text-sm">
              {lang === "en" 
                ? "Always up for a virtual coffee chat!" 
                : "¡Siempre dispuesto para una charla virtual!"
              }
            </span>
          </div>
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
          />
        </div>
      </div>
    </section>
  )
}
