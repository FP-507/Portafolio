import React from "react"
import { motion } from "framer-motion"
import { 
  Calendar, 
  MapPin, 
  Building, 
  Trophy, 
  Code, 
  Users, 
  TrendingUp,
  ExternalLink,
  Briefcase
} from "lucide-react"
import { useAppContext } from "../context/AppContext"

const experiences = [
  {
    id: 1,
    title: { en: "Senior Backend Developer", es: "Desarrollador Backend Senior" },
    company: "TechFlow Solutions",
    location: "Remote",
    period: { en: "2023 - Present", es: "2023 - Presente" },
    duration: { en: "1+ year", es: "1+ año" },
    type: { en: "Full-time", es: "Tiempo completo" },
    description: {
      en: "Leading backend development for enterprise-scale applications serving 100k+ users. Architecting microservices infrastructure and optimizing database performance.",
      es: "Liderando el desarrollo backend para aplicaciones de escala empresarial sirviendo a 100k+ usuarios. Arquitecturando infraestructura de microservicios y optimizando el rendimiento de la base de datos."
    },
    achievements: [
      {
        en: "Reduced API response time by 60% through database optimization",
        es: "Redujo el tiempo de respuesta de API en 60% mediante optimización de base de datos"
      },
      {
        en: "Implemented microservices architecture serving 1M+ requests daily",
        es: "Implementó arquitectura de microservicios sirviendo 1M+ solicitudes diarias"
      },
      {
        en: "Led team of 5 developers in agile environment",
        es: "Lideró equipo de 5 desarrolladores en entorno ágil"
      }
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "Redis", "AWS"],
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    website: "https://techflow.com"
  },
  {
    id: 2,
    title: { en: "Backend Developer", es: "Desarrollador Backend" },
    company: "DataSync Corp",
    location: "San Francisco, CA",
    period: { en: "2022 - 2023", es: "2022 - 2023" },
    duration: { en: "1 year", es: "1 año" },
    type: { en: "Full-time", es: "Tiempo completo" },
    description: {
      en: "Developed robust APIs and data processing systems for fintech applications. Focused on security, scalability, and compliance with financial regulations.",
      es: "Desarrolló APIs robustas y sistemas de procesamiento de datos para aplicaciones fintech. Se enfocó en seguridad, escalabilidad y cumplimiento de regulaciones financieras."
    },
    achievements: [
      {
        en: "Built secure payment processing system handling $2M+ monthly",
        es: "Construyó sistema seguro de procesamiento de pagos manejando $2M+ mensuales"
      },
      {
        en: "Achieved 99.9% uptime for critical financial services",
        es: "Logró 99.9% de tiempo de actividad para servicios financieros críticos"
      },
      {
        en: "Implemented comprehensive testing suite with 95% coverage",
        es: "Implementó suite de testing integral con 95% de cobertura"
      }
    ],
    technologies: ["Django", "PostgreSQL", "Celery", "Redis", "Stripe API", "AWS"],
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    website: "https://datasync.com"
  },
  {
    id: 3,
    title: { en: "Python Developer", es: "Desarrollador Python" },
    company: "InnovateLab",
    location: "Madrid, Spain",
    period: { en: "2021 - 2022", es: "2021 - 2022" },
    duration: { en: "1 year", es: "1 año" },
    type: { en: "Contract", es: "Contrato" },
    description: {
      en: "Developed automation tools and data analysis systems for marketing agencies. Created ETL pipelines and reporting dashboards.",
      es: "Desarrolló herramientas de automatización y sistemas de análisis de datos para agencias de marketing. Creó pipelines ETL y dashboards de reportes."
    },
    achievements: [
      {
        en: "Automated reporting processes saving 20+ hours weekly",
        es: "Automatizó procesos de reportes ahorrando 20+ horas semanales"
      },
      {
        en: "Built data pipeline processing 1TB+ daily marketing data",
        es: "Construyó pipeline de datos procesando 1TB+ de datos de marketing diarios"
      },
      {
        en: "Increased client reporting accuracy by 40%",
        es: "Aumentó la precisión de reportes de clientes en 40%"
      }
    ],
    technologies: ["Python", "Pandas", "SQLAlchemy", "Apache Airflow", "MongoDB", "Tableau"],
    logo: "https://images.unsplash.com/photo-1553028826-f4804151e2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    website: "https://innovatelab.com"
  },
  {
    id: 4,
    title: { en: "Junior Developer", es: "Desarrollador Junior" },
    company: "StartupHub",
    location: "Barcelona, Spain",
    period: { en: "2020 - 2021", es: "2020 - 2021" },
    duration: { en: "1 year", es: "1 año" },
    type: { en: "Full-time", es: "Tiempo completo" },
    description: {
      en: "Started career building web applications and learning modern development practices. Contributed to multiple startup projects and gained experience in agile methodologies.",
      es: "Comenzó carrera construyendo aplicaciones web y aprendiendo prácticas de desarrollo modernas. Contribuyó a múltiples proyectos de startups y ganó experiencia en metodologías ágiles."
    },
    achievements: [
      {
        en: "Completed 10+ web development projects successfully",
        es: "Completó exitosamente 10+ proyectos de desarrollo web"
      },
      {
        en: "Learned and applied modern Python frameworks",
        es: "Aprendió y aplicó frameworks modernos de Python"
      },
      {
        en: "Contributed to open-source projects and community",
        es: "Contribuyó a proyectos de código abierto y la comunidad"
      }
    ],
    technologies: ["Flask", "SQLite", "HTML/CSS", "JavaScript", "Git", "Linux"],
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    website: "https://startuphub.com"
  }
]

const stats = [
  { 
    label: { en: "Years of Experience", es: "Años de Experiencia" }, 
    value: "4+", 
    icon: Calendar,
    color: "text-blue-600"
  },
  { 
    label: { en: "Projects Completed", es: "Proyectos Completados" }, 
    value: "50+", 
    icon: Code,
    color: "text-green-600"
  },
  { 
    label: { en: "Teams Led", es: "Equipos Liderados" }, 
    value: "3", 
    icon: Users,
    color: "text-purple-600"
  },
  { 
    label: { en: "Performance Improvements", es: "Mejoras de Rendimiento" }, 
    value: "60%", 
    icon: TrendingUp,
    color: "text-orange-600"
  }
]

export default function ExperienceTimeline() {
  const { lang } = useAppContext()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {lang === "en" ? "Professional Experience" : "Experiencia Profesional"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {lang === "en"
              ? "My journey in backend development and the impact I've made along the way"
              : "Mi viaje en desarrollo backend y el impacto que he generado en el camino"}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label[lang]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Company Header */}
                  <div className="flex items-center mb-6">
                    <img
                      src={experience.logo}
                      alt={experience.company}
                      className="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title[lang]}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <Building className="w-4 h-4" />
                        <span className="font-semibold">{experience.company}</span>
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.period[lang]}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {experience.type[lang]}
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {experience.duration[lang]}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description[lang]}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-3">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      {lang === "en" ? "Key Achievements" : "Logros Clave"}
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          {achievement[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      {lang === "en" ? "Technologies Used" : "Tecnologías Utilizadas"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {lang === "en" ? "Ready for Your Next Project?" : "¿Listo para tu Próximo Proyecto?"}
            </h3>
            <p className="mb-6 opacity-90">
              {lang === "en"
                ? "Let's discuss how my experience can help bring your ideas to life"
                : "Discutamos cómo mi experiencia puede ayudar a dar vida a tus ideas"}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              {lang === "en" ? "Let's Work Together" : "Trabajemos Juntos"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}