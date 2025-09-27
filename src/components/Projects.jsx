import { motion } from "framer-motion"
import { useAppContext } from "../context/AppContext"
import { 
  Github, 
  ExternalLink, 
  Code2, 
  Database, 
  Server,
  Globe,
  Star,
  GitBranch
} from "lucide-react"

export default function Projects() {
  const { lang } = useAppContext()
  
  const projects = [
    {
      id: 1,
      title: "Expo-Junior",
      link: "https://github.com/FP-507/Expo-Junior",
      demo: null,
      image: "/api/placeholder/400/240",
      descEn: "A comprehensive project showcasing modern Python backend development with FastAPI, PostgreSQL integration, and RESTful API design patterns.",
      descEs: "Un proyecto integral que demuestra el desarrollo backend moderno con Python usando FastAPI, integración con PostgreSQL y patrones de diseño de API RESTful.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
      status: "Completed",
      statusEs: "Completado",
      featured: true
    },
    {
      id: 2,
      title: "Portfolio Web",
      link: "https://github.com/FP-507/Portafolio",
      demo: "#",
      image: "/api/placeholder/400/240",
      descEn: "Modern responsive portfolio built with React, Tailwind CSS, and Framer Motion. Features dark/light mode, internationalization, and smooth animations.",
      descEs: "Portfolio moderno y responsivo construido con React, Tailwind CSS y Framer Motion. Incluye modo oscuro/claro, internacionalización y animaciones suaves.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      status: "In Progress",
      statusEs: "En Progreso",
      featured: true
    },
    {
      id: 3,
      title: "API Learning Project",
      link: "#",
      demo: null,
      image: "/api/placeholder/400/240",
      descEn: "Learning-focused project exploring advanced API concepts, authentication, and database optimization techniques.",
      descEs: "Proyecto enfocado en aprendizaje explorando conceptos avanzados de API, autenticación y técnicas de optimización de bases de datos.",
      technologies: ["Python", "Django", "Redis", "JWT"],
      status: "Learning",
      statusEs: "Aprendiendo",
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const getTechIcon = (tech) => {
    const icons = {
      "Python": Code2,
      "FastAPI": Server,
      "PostgreSQL": Database,
      "React": Code2,
      "Django": Server,
      "Docker": Server
    }
    return icons[tech] || Code2
  }

  const getTechColor = (tech) => {
    const colors = {
      "Python": "from-blue-500 to-blue-600",
      "FastAPI": "from-green-500 to-green-600", 
      "PostgreSQL": "from-blue-600 to-blue-700",
      "React": "from-cyan-500 to-cyan-600",
      "Tailwind CSS": "from-teal-500 to-teal-600",
      "Framer Motion": "from-pink-500 to-pink-600",
      "Vite": "from-purple-500 to-purple-600",
      "Django": "from-green-600 to-green-700",
      "Redis": "from-red-500 to-red-600",
      "JWT": "from-orange-500 to-orange-600",
      "Docker": "from-blue-500 to-blue-600"
    }
    return colors[tech] || "from-gray-500 to-gray-600"
  }

  return (
    <section id="projects" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {lang === "en" ? "Featured Projects" : "Proyectos Destacados"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {lang === "en" 
              ? "A collection of my work showcasing different technologies and problem-solving approaches"
              : "Una colección de mi trabajo mostrando diferentes tecnologías y enfoques de resolución de problemas"
            }
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/10 dark:to-purple-400/10" />
                <div className="absolute top-4 right-4">
                  {project.featured && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-yellow-500 text-yellow-900 text-xs font-medium rounded-full">
                      <Star className="w-3 h-3" />
                      Featured
                    </div>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <GitBranch className="w-4 h-4" />
                    <span className="text-sm">
                      {lang === "en" ? project.status : project.statusEs}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {lang === "en" ? project.descEn : project.descEs}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => {
                    const Icon = getTechIcon(tech)
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTechColor(tech)}`}
                      >
                        <Icon className="w-3 h-3" />
                        {tech}
                      </div>
                    )
                  })}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {lang === "en" ? "Code" : "Código"}
                    </span>
                  </motion.a>

                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {lang === "en" ? "Demo" : "Demo"}
                      </span>
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200 dark:border-blue-800">
            <Globe className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 dark:text-gray-300">
              {lang === "en" 
                ? "More projects coming soon..."
                : "Más proyectos próximamente..."
              }
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
