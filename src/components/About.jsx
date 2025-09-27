import { motion } from "framer-motion"
import { useAppContext } from "../context/AppContext"
import { 
  Code2, 
  Database, 
  Server, 
  GitBranch, 
  Terminal, 
  BookOpen,
  Target,
  Heart,
  Zap
} from "lucide-react"

export default function About() {
  const { lang } = useAppContext()

  const skills = [
    { name: "Python", icon: Code2, level: 85, color: "from-blue-500 to-blue-600" },
    { name: "PostgreSQL", icon: Database, level: 75, color: "from-green-500 to-green-600" },
    { name: "FastAPI", icon: Server, level: 70, color: "from-purple-500 to-purple-600" },
    { name: "Git", icon: GitBranch, level: 80, color: "from-orange-500 to-orange-600" },
    { name: "Linux", icon: Terminal, level: 65, color: "from-gray-600 to-gray-700" },
    { name: "Learning", icon: BookOpen, level: 95, color: "from-pink-500 to-pink-600" }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {lang === "en" ? "About Me" : "Sobre mí"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {lang === "en" ? "Passion for Code" : "Pasión por el Código"}
              </h3>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {lang === "en"
                ? "I'm a dedicated student with an insatiable curiosity for backend development. My journey in programming has been driven by a genuine love for solving complex problems and building robust systems."
                : "Soy un estudiante dedicado con una curiosidad insaciable por el desarrollo backend. Mi viaje en la programación ha sido impulsado por un amor genuino por resolver problemas complejos y construir sistemas robustos."}
            </p>

            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-blue-500" />
              <p className="text-gray-700 dark:text-gray-300">
                {lang === "en"
                  ? "Specialized in Python and always exploring new technologies"
                  : "Especializado en Python y siempre explorando nuevas tecnologías"}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-purple-500" />
              <p className="text-gray-700 dark:text-gray-300">
                {lang === "en"
                  ? "Open to new opportunities and collaborative projects"
                  : "Abierto a nuevas oportunidades y proyectos colaborativos"}
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center lg:text-left">
              {lang === "en" ? "Skills & Technologies" : "Habilidades y Tecnologías"}
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-100 dark:border-blue-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {lang === "en" ? "Currently Learning" : "Aprendiendo Actualmente"}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {lang === "en"
                  ? "Docker, Kubernetes, AWS, and advanced Python frameworks"
                  : "Docker, Kubernetes, AWS y frameworks avanzados de Python"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
