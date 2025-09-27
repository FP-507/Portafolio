import React, { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  Search, 
  Calendar, 
  Clock, 
  Tag, 
  ArrowRight, 
  BookOpen,
  Filter,
  X
} from "lucide-react"
import { useAppContext } from "../context/AppContext"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    slug: "getting-started-with-python",
    title: { 
      en: "Getting Started with Python for Backend Development", 
      es: "Comenzando con Python para Desarrollo Backend" 
    },
    excerpt: { 
      en: "A comprehensive guide to starting your backend development journey with Python, covering the fundamentals and best practices.",
      es: "Una guía completa para comenzar tu viaje de desarrollo backend con Python, cubriendo los fundamentos y mejores prácticas."
    },
    content: { 
      en: "Python has become one of the most popular languages for backend development...",
      es: "Python se ha convertido en uno de los lenguajes más populares para el desarrollo backend..."
    },
    date: "2025-01-15",
    readTime: 5,
    category: "Python",
    tags: ["Python", "Backend", "Beginner", "Programming"],
    featured: true
  },
  {
    id: 2,
    slug: "fastapi-vs-django",
    title: { 
      en: "FastAPI vs Django: Choosing the Right Framework", 
      es: "FastAPI vs Django: Eligiendo el Framework Correcto" 
    },
    excerpt: { 
      en: "Comparing two of the most popular Python web frameworks to help you make the right choice for your project.",
      es: "Comparando dos de los frameworks web de Python más populares para ayudarte a elegir el correcto para tu proyecto."
    },
    content: { 
      en: "When building web applications with Python, two frameworks stand out...",
      es: "Al construir aplicaciones web con Python, dos frameworks destacan..."
    },
    date: "2025-01-10",
    readTime: 8,
    category: "Frameworks",
    tags: ["FastAPI", "Django", "Comparison", "Web Development"],
    featured: false
  },
  {
    id: 3,
    slug: "database-optimization-tips",
    title: { 
      en: "Database Optimization Tips for Better Performance", 
      es: "Consejos de Optimización de Base de Datos para Mejor Rendimiento" 
    },
    excerpt: { 
      en: "Learn practical techniques to optimize your database queries and improve application performance.",
      es: "Aprende técnicas prácticas para optimizar tus consultas de base de datos y mejorar el rendimiento de la aplicación."
    },
    content: { 
      en: "Database performance is crucial for any web application...",
      es: "El rendimiento de la base de datos es crucial para cualquier aplicación web..."
    },
    date: "2025-01-05",
    readTime: 10,
    category: "Database",
    tags: ["PostgreSQL", "Optimization", "Performance", "SQL"],
    featured: true
  }
]

const categories = ["All", "Python", "Frameworks", "Database", "DevOps"]

export default function Blog() {
  const { lang } = useAppContext()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState([])

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags)
  }, [])

  // Filter posts based on search, category, and tags
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const title = post.title[lang].toLowerCase()
      const excerpt = post.excerpt[lang].toLowerCase()
      const matchesSearch = title.includes(searchTerm.toLowerCase()) || 
                          excerpt.includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.every(tag => post.tags.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })
  }, [searchTerm, selectedCategory, selectedTags, lang])

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("All")
    setSelectedTags([])
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />
      
      <main className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {lang === "en" ? "Blog" : "Blog"}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {lang === "en"
                ? "Thoughts, tutorials, and insights about backend development and technology"
                : "Pensamientos, tutoriales y perspectivas sobre desarrollo backend y tecnología"}
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={lang === "en" ? "Search posts..." : "Buscar posts..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900'
                  }`}
                >
                  {category === "All" ? (lang === "en" ? "All" : "Todos") : category}
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {lang === "en" ? "Filter by tags:" : "Filtrar por etiquetas:"}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900'
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {(searchTerm || selectedCategory !== "All" || selectedTags.length > 0) && (
              <div className="text-center">
                <button
                  onClick={clearFilters}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                  {lang === "en" ? "Clear Filters" : "Limpiar Filtros"}
                </button>
              </div>
            )}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 group ${
                  post.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {post.featured && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-2 text-center">
                    {lang === "en" ? "Featured Post" : "Post Destacado"}
                  </div>
                )}
                
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime} {lang === "en" ? "min read" : "min lectura"}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title[lang]}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt[lang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-200"
                  >
                    {lang === "en" ? "Read More" : "Leer Más"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                {lang === "en" ? "No posts found" : "No se encontraron posts"}
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                {lang === "en" 
                  ? "Try adjusting your search criteria"
                  : "Intenta ajustar tus criterios de búsqueda"}
              </p>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}