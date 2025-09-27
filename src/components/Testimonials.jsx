import React from "react"
import { motion } from "framer-motion"
import { 
  Quote, 
  Star, 
  Mail,
  Building,
  MapPin,
  ExternalLink,
  Users,
  MessageSquare
} from "lucide-react"
import { useAppContext } from "../context/AppContext"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: { en: "Senior Full Stack Developer", es: "Desarrolladora Senior Full Stack" },
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    testimonial: {
      en: "I had the pleasure of working with this developer on several backend projects. Their expertise in Python and FastAPI is exceptional. They consistently delivered high-quality, scalable solutions that exceeded our expectations. Their attention to detail and problem-solving skills are outstanding.",
      es: "Tuve el placer de trabajar con este desarrollador en varios proyectos backend. Su experiencia en Python y FastAPI es excepcional. Consistentemente entregó soluciones escalables de alta calidad que superaron nuestras expectativas. Su atención al detalle y habilidades para resolver problemas son sobresalientes."
    },
    linkedIn: "https://linkedin.com/in/sarahjohnson",
    project: { en: "E-commerce API Platform", es: "Plataforma API E-commerce" },
    date: "2024"
  },
  {
    id: 2,
    name: "Miguel Rodriguez",
    position: { en: "Tech Lead", es: "Líder Técnico" },
    company: "DataFlow Systems",
    location: "Madrid, Spain",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    testimonial: {
      en: "Exceptional backend developer with deep knowledge of database optimization and API design. They transformed our legacy system into a modern, efficient architecture. Their code quality and documentation are exemplary. Highly recommended for any serious backend development project.",
      es: "Desarrollador backend excepcional con profundo conocimiento de optimización de bases de datos y diseño de APIs. Transformaron nuestro sistema legado en una arquitectura moderna y eficiente. Su calidad de código y documentación son ejemplares. Altamente recomendado para cualquier proyecto serio de desarrollo backend."
    },
    linkedIn: "https://linkedin.com/in/miguelrodriguez",
    project: { en: "Data Analytics Platform", es: "Plataforma de Análisis de Datos" },
    date: "2024"
  },
  {
    id: 3,
    name: "Emily Chen",
    position: { en: "Product Manager", es: "Gerente de Producto" },
    company: "InnovateLab",
    location: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    testimonial: {
      en: "Working with them was a game-changer for our startup. They built a robust backend infrastructure that could scale with our rapid growth. Their communication skills are excellent, and they always delivered on time. They're not just a developer, but a true technology partner.",
      es: "Trabajar con ellos fue un cambio de juego para nuestra startup. Construyeron una infraestructura backend robusta que pudo escalar con nuestro crecimiento rápido. Sus habilidades de comunicación son excelentes, y siempre entregaron a tiempo. No son solo un desarrollador, sino un verdadero socio tecnológico."
    },
    linkedIn: "https://linkedin.com/in/emilychen",
    project: { en: "SaaS Platform MVP", es: "MVP Plataforma SaaS" },
    date: "2023"
  }
]

export default function Testimonials() {
  const { lang } = useAppContext()

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-purple-900/20 dark:via-gray-900 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {lang === "en" ? "Client Testimonials" : "Testimonios de Clientes"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {lang === "en"
              ? "What colleagues and clients say about working with me"
              : "Lo que colegas y clientes dicen sobre trabajar conmigo"}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.testimonial[lang]}"
              </p>

              {/* Project Info */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-6">
                <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {lang === "en" ? "Project:" : "Proyecto:"} {testimonial.project[lang]}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.date}
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
                  />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="ml-4 flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position[lang]}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Building className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
                <a
                  href={testimonial.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
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
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {lang === "en" ? "Ready to Work Together?" : "¿Listo para Trabajar Juntos?"}
            </h3>
            <p className="mb-6 opacity-90">
              {lang === "en"
                ? "Join the list of satisfied clients and let's build something amazing together"
                : "Únete a la lista de clientes satisfechos y construyamos algo increíble juntos"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                {lang === "en" ? "Get in Touch" : "Ponte en Contacto"}
              </a>
              <a
                href="/portfolio-examples"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                {lang === "en" ? "View Portfolio" : "Ver Portafolio"}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Projects Completed" : "Proyectos Completados"}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Happy Clients" : "Clientes Satisfechos"}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Success Rate" : "Tasa de Éxito"}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Avg Response Time" : "Tiempo Promedio Respuesta"}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}