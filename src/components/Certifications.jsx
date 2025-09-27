import React from "react"
import { motion } from "framer-motion"
import { 
  Award, 
  ExternalLink, 
  Calendar, 
  CheckCircle, 
  Star,
  Shield,
  Trophy,
  BookOpen,
  Code,
  Database,
  Cloud,
  Settings
} from "lucide-react"
import { useAppContext } from "../context/AppContext"

const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Professional",
    provider: "Amazon Web Services",
    date: "2024",
    level: { en: "Professional", es: "Profesional" },
    status: "verified",
    credentialId: "AWS-PSA-2024-001",
    description: {
      en: "Validates advanced technical skills and experience in designing distributed applications and systems on the AWS platform.",
      es: "Valida habilidades técnicas avanzadas y experiencia en el diseño de aplicaciones y sistemas distribuidos en la plataforma AWS."
    },
    skills: ["AWS Architecture", "Microservices", "Cloud Security", "Performance Optimization"],
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    verifyUrl: "https://aws.amazon.com/verification/PSA2024001",
    category: "Cloud",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    name: "Google Professional Cloud Developer",
    provider: "Google Cloud",
    date: "2024",
    level: { en: "Professional", es: "Profesional" },
    status: "verified",
    credentialId: "GCP-PCD-2024-001",
    description: {
      en: "Demonstrates proficiency in building scalable and reliable applications using Google Cloud technologies.",
      es: "Demuestra competencia en la construcción de aplicaciones escalables y confiables usando tecnologías de Google Cloud."
    },
    skills: ["Google Cloud Platform", "Kubernetes", "App Engine", "Cloud Functions"],
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    verifyUrl: "https://cloud.google.com/certification/verify/PCD2024001",
    category: "Cloud",
    color: "from-blue-500 to-green-500"
  },
  {
    id: 3,
    name: "PostgreSQL 14 Associate Certification",
    provider: "PostgreSQL Global Development Group",
    date: "2023",
    level: { en: "Associate", es: "Asociado" },
    status: "verified",
    credentialId: "PSQL-14-2023-001",
    description: {
      en: "Validates expertise in PostgreSQL database administration, optimization, and advanced SQL development.",
      es: "Valida experiencia en administración de base de datos PostgreSQL, optimización y desarrollo SQL avanzado."
    },
    skills: ["PostgreSQL", "Database Design", "Performance Tuning", "Advanced SQL"],
    logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    verifyUrl: "https://postgresql.org/verify/PSQL142023001",
    category: "Database",
    color: "from-blue-600 to-purple-600"
  },
  {
    id: 4,
    name: "Certified Kubernetes Application Developer",
    provider: "Cloud Native Computing Foundation",
    date: "2023",
    level: { en: "Professional", es: "Profesional" },
    status: "verified",
    credentialId: "CKAD-2023-001",
    description: {
      en: "Demonstrates the ability to design, build and deploy cloud-native applications for Kubernetes.",
      es: "Demuestra la capacidad de diseñar, construir e implementar aplicaciones nativas de la nube para Kubernetes."
    },
    skills: ["Kubernetes", "Docker", "Container Orchestration", "Cloud Native"],
    logo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    verifyUrl: "https://cncf.io/verify/CKAD2023001",
    category: "DevOps",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 5,
    name: "Python Institute Certified Expert (PCEP)",
    provider: "Python Institute",
    date: "2022",
    level: { en: "Expert", es: "Experto" },
    status: "verified",
    credentialId: "PCEP-2022-001",
    description: {
      en: "Validates advanced Python programming skills and best practices in software development.",
      es: "Valida habilidades avanzadas de programación Python y mejores prácticas en desarrollo de software."
    },
    skills: ["Python", "Object-oriented Programming", "Algorithm Design", "Code Optimization"],
    logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    verifyUrl: "https://pythoninstitute.org/verify/PCEP2022001",
    category: "Programming",
    color: "from-green-500 to-blue-500"
  },
  {
    id: 6,
    name: "Scrum Master Certified (SMC)",
    provider: "Scrum Alliance",
    date: "2022",
    level: { en: "Certified", es: "Certificado" },
    status: "verified",
    credentialId: "SMC-2022-001",
    description: {
      en: "Demonstrates understanding of Scrum framework and ability to lead agile development teams.",
      es: "Demuestra comprensión del framework Scrum y capacidad para liderar equipos de desarrollo ágil."
    },
    skills: ["Scrum", "Agile Methodologies", "Team Leadership", "Project Management"],
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60&q=80",
    verifyUrl: "https://scrumalliance.org/verify/SMC2022001",
    category: "Management",
    color: "from-indigo-500 to-purple-500"
  }
]

const categories = [
  { name: "All", icon: Award, color: "text-gray-600" },
  { name: "Cloud", icon: Cloud, color: "text-blue-500" },
  { name: "Database", icon: Database, color: "text-green-500" },
  { name: "Programming", icon: Code, color: "text-purple-500" },
  { name: "DevOps", icon: Settings, color: "text-orange-500" },
  { name: "Management", icon: BookOpen, color: "text-pink-500" }
]

export default function Certifications() {
  const { lang } = useAppContext()
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory)

  const getLevelIcon = (level) => {
    switch (level.en.toLowerCase()) {
      case "professional":
        return Trophy
      case "expert":
        return Star
      case "certified":
        return Award
      default:
        return CheckCircle
    }
  }

  const getLevelColor = (level) => {
    switch (level.en.toLowerCase()) {
      case "professional":
        return "text-yellow-500"
      case "expert":
        return "text-purple-500"
      case "certified":
        return "text-blue-500"
      default:
        return "text-green-500"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-900/20 dark:via-gray-900 dark:to-cyan-900/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            {lang === "en" ? "Certifications & Credentials" : "Certificaciones y Credenciales"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {lang === "en"
              ? "Validated expertise across cloud platforms, databases, and development frameworks"
              : "Experiencia validada en plataformas cloud, bases de datos y frameworks de desarrollo"}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.name
                    ? 'bg-indigo-500 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-gray-200 dark:border-gray-600'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.name === "All" ? (lang === "en" ? "All" : "Todas") : category.name}
              </button>
            )
          })}
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => {
            const LevelIcon = getLevelIcon(cert.level)
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                {/* Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                
                <div className="p-8">
                  {/* Provider Logo and Verification */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={cert.logo}
                        alt={cert.provider}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.provider}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {cert.status === "verified" && (
                            <>
                              <Shield className="w-4 h-4 text-green-500" />
                              <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                                {lang === "en" ? "Verified" : "Verificado"}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <LevelIcon className={`w-5 h-5 ${getLevelColor(cert.level)}`} />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {cert.level[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {cert.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    {cert.description[lang]}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      {lang === "en" ? "Skills Validated:" : "Habilidades Validadas:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{lang === "en" ? "Issued" : "Emitido"}: {cert.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Award className="w-4 h-4" />
                      <span>{lang === "en" ? "ID" : "ID"}: {cert.credentialId}</span>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 group-hover:from-indigo-600 group-hover:to-cyan-600"
                  >
                    <Shield className="w-4 h-4" />
                    {lang === "en" ? "Verify Credential" : "Verificar Credencial"}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-indigo-600 mb-2">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Active Certifications" : "Certificaciones Activas"}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Verified Status" : "Estado Verificado"}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Technology Areas" : "Áreas Tecnológicas"}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {lang === "en" ? "Latest Certification" : "Última Certificación"}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {lang === "en" ? "Continuous Learning & Growth" : "Aprendizaje y Crecimiento Continuo"}
            </h3>
            <p className="mb-6 opacity-90">
              {lang === "en"
                ? "I'm constantly updating my skills with the latest industry certifications and best practices"
                : "Constantemente actualizo mis habilidades con las últimas certificaciones de la industria y mejores prácticas"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Award className="w-5 h-5" />
                {lang === "en" ? "Discuss My Expertise" : "Discutir Mi Experiencia"}
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                {lang === "en" ? "View Full Resume" : "Ver CV Completo"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}