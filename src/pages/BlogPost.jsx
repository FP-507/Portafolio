import React from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  Copy,
  Check,
  MessageCircle,
  ExternalLink as LinkIcon
} from "lucide-react"
import { useAppContext } from "../context/AppContext"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

// Mock blog posts data (same as Blog.jsx for consistency)
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
      en: `
# Getting Started with Python for Backend Development

Python has become one of the most popular languages for backend development, and for good reason. Its clean syntax, extensive libraries, and robust ecosystem make it an excellent choice for building scalable web applications.

## Why Choose Python for Backend Development?

### 1. Simplicity and Readability
Python's syntax is clean and intuitive, making it easy to write and maintain code. This is especially important in backend development where code needs to be robust and maintainable.

### 2. Rich Ecosystem
Python has an extensive collection of libraries and frameworks that can help you build almost anything:
- **Web Frameworks**: Django, FastAPI, Flask
- **Database ORMs**: SQLAlchemy, Django ORM
- **API Development**: FastAPI, Django REST Framework
- **Task Queues**: Celery, RQ

### 3. Performance and Scalability
While Python may not be the fastest language, it offers excellent performance for most web applications. With proper optimization and the right tools, Python can handle high-traffic applications.

## Setting Up Your Development Environment

Before we start coding, let's set up a proper development environment:

\`\`\`bash
# Install Python (if not already installed)
# On Windows: Download from python.org
# On macOS: brew install python
# On Linux: sudo apt-get install python3

# Create a virtual environment
python -m venv backend_env

# Activate the virtual environment
# On Windows:
backend_env\\Scripts\\activate
# On macOS/Linux:
source backend_env/bin/activate

# Install essential packages
pip install fastapi uvicorn sqlalchemy psycopg2-binary
\`\`\`

## Your First Backend API

Let's create a simple API using FastAPI:

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="My Backend API", version="1.0.0")

# Data models
class User(BaseModel):
    id: Optional[int] = None
    name: str
    email: str

# In-memory storage (use a database in production)
users = []

@app.get("/")
async def root():
    return {"message": "Welcome to my Backend API"}

@app.post("/users/", response_model=User)
async def create_user(user: User):
    user.id = len(users) + 1
    users.append(user)
    return user

@app.get("/users/", response_model=List[User])
async def get_users():
    return users

@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    for user in users:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")
\`\`\`

## Best Practices

### 1. Use Virtual Environments
Always use virtual environments to isolate your project dependencies:

\`\`\`bash
python -m venv myproject_env
source myproject_env/bin/activate  # On Windows: myproject_env\\Scripts\\activate
\`\`\`

### 2. Follow PEP 8 Style Guide
Use tools like \`black\` and \`flake8\` to ensure your code follows Python style conventions:

\`\`\`bash
pip install black flake8
black your_file.py
flake8 your_file.py
\`\`\`

### 3. Use Type Hints
Type hints make your code more readable and help catch errors early:

\`\`\`python
from typing import List, Optional

def get_user_names(users: List[User]) -> List[str]:
    return [user.name for user in users]
\`\`\`

### 4. Handle Errors Gracefully
Always implement proper error handling:

\`\`\`python
from fastapi import HTTPException

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    try:
        user = await database.fetch_user(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
\`\`\`

## Next Steps

Now that you have a basic understanding of Python backend development:

1. **Learn a Framework**: Dive deeper into FastAPI, Django, or Flask
2. **Database Integration**: Learn SQLAlchemy or Django ORM
3. **Authentication**: Implement JWT authentication
4. **Testing**: Write tests using pytest
5. **Deployment**: Learn Docker and cloud deployment

Python backend development is a rewarding journey. Start with simple projects and gradually work your way up to more complex applications. The key is to practice consistently and build real-world projects.

Happy coding! 🐍
      `,
      es: `
# Comenzando con Python para Desarrollo Backend

Python se ha convertido en uno de los lenguajes más populares para el desarrollo backend, y por buena razón. Su sintaxis limpia, amplia biblioteca y ecosistema robusto lo convierten en una excelente opción para construir aplicaciones web escalables.

## ¿Por qué elegir Python para Desarrollo Backend?

### 1. Simplicidad y Legibilidad
La sintaxis de Python es limpia e intuitiva, haciendo fácil escribir y mantener código. Esto es especialmente importante en el desarrollo backend donde el código necesita ser robusto y mantenible.

### 2. Ecosistema Rico
Python tiene una extensa colección de bibliotecas y frameworks que pueden ayudarte a construir casi cualquier cosa:
- **Frameworks Web**: Django, FastAPI, Flask
- **ORMs de Base de Datos**: SQLAlchemy, Django ORM
- **Desarrollo de APIs**: FastAPI, Django REST Framework
- **Colas de Tareas**: Celery, RQ

### 3. Rendimiento y Escalabilidad
Aunque Python no sea el lenguaje más rápido, ofrece excelente rendimiento para la mayoría de aplicaciones web. Con la optimización adecuada y las herramientas correctas, Python puede manejar aplicaciones de alto tráfico.

## Configurando tu Entorno de Desarrollo

Antes de comenzar a codificar, configuremos un entorno de desarrollo adecuado:

\`\`\`bash
# Instalar Python (si no está instalado)
# En Windows: Descargar de python.org
# En macOS: brew install python
# En Linux: sudo apt-get install python3

# Crear un entorno virtual
python -m venv backend_env

# Activar el entorno virtual
# En Windows:
backend_env\\Scripts\\activate
# En macOS/Linux:
source backend_env/bin/activate

# Instalar paquetes esenciales
pip install fastapi uvicorn sqlalchemy psycopg2-binary
\`\`\`

## Tu Primera API Backend

Creemos una API simple usando FastAPI:

\`\`\`python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Mi API Backend", version="1.0.0")

# Modelos de datos
class User(BaseModel):
    id: Optional[int] = None
    name: str
    email: str

# Almacenamiento en memoria (usa una base de datos en producción)
users = []

@app.get("/")
async def root():
    return {"message": "Bienvenido a mi API Backend"}

@app.post("/users/", response_model=User)
async def create_user(user: User):
    user.id = len(users) + 1
    users.append(user)
    return user

@app.get("/users/", response_model=List[User])
async def get_users():
    return users

@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: int):
    for user in users:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="Usuario no encontrado")
\`\`\`

## Mejores Prácticas

### 1. Usar Entornos Virtuales
Siempre usa entornos virtuales para aislar las dependencias de tu proyecto:

\`\`\`bash
python -m venv myproject_env
source myproject_env/bin/activate  # En Windows: myproject_env\\Scripts\\activate
\`\`\`

### 2. Seguir la Guía de Estilo PEP 8
Usa herramientas como \`black\` y \`flake8\` para asegurar que tu código siga las convenciones de estilo de Python:

\`\`\`bash
pip install black flake8
black your_file.py
flake8 your_file.py
\`\`\`

### 3. Usar Anotaciones de Tipo
Las anotaciones de tipo hacen tu código más legible y ayudan a detectar errores temprano:

\`\`\`python
from typing import List, Optional

def get_user_names(users: List[User]) -> List[str]:
    return [user.name for user in users]
\`\`\`

### 4. Manejar Errores Apropiadamente
Siempre implementa manejo de errores adecuado:

\`\`\`python
from fastapi import HTTPException

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    try:
        user = await database.fetch_user(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        return user
    except Exception as e:
        raise HTTPException(status_code=500, detail="Error interno del servidor")
\`\`\`

## Próximos Pasos

Ahora que tienes un entendimiento básico del desarrollo backend con Python:

1. **Aprende un Framework**: Profundiza en FastAPI, Django, o Flask
2. **Integración de Base de Datos**: Aprende SQLAlchemy o Django ORM
3. **Autenticación**: Implementa autenticación JWT
4. **Testing**: Escribe pruebas usando pytest
5. **Despliegue**: Aprende Docker y despliegue en la nube

El desarrollo backend con Python es un viaje gratificante. Comienza con proyectos simples y gradualmente avanza hacia aplicaciones más complejas. La clave es practicar consistentemente y construir proyectos del mundo real.

¡Feliz programación! 🐍
      `
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
      en: "When building web applications with Python, two frameworks stand out: FastAPI and Django. Both are excellent choices, but they serve different purposes and have different strengths...",
      es: "Al construir aplicaciones web con Python, dos frameworks destacan: FastAPI y Django. Ambos son excelentes opciones, pero sirven diferentes propósitos y tienen diferentes fortalezas..."
    },
    date: "2025-01-10",
    readTime: 8,
    category: "Frameworks",
    tags: ["FastAPI", "Django", "Comparison", "Web Development"],
    featured: false
  }
]

export default function BlogPost() {
  const { slug } = useParams()
  const { lang } = useAppContext()
  const [copied, setCopied] = React.useState(false)

  // Find the blog post
  const post = blogPosts.find(p => p.slug === slug)

  // If post not found, redirect to 404
  if (!post) {
    return <Navigate to="/404" replace />
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const shareUrl = window.location.href
  const shareTitle = post.title[lang]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareOnSocialMedia = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <Navigation />
      
      <main className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === "en" ? "Back to Blog" : "Volver al Blog"}
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {post.featured && (
              <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                {lang === "en" ? "Featured Post" : "Post Destacado"}
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {post.title[lang]}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt[lang]}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} {lang === "en" ? "min read" : "min lectura"}
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Share2 className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {lang === "en" ? "Share:" : "Compartir:"}
                </span>
              </div>
              <button
                onClick={shareOnSocialMedia}
                className="p-2 text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors"
                title="Share on Social Media"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                onClick={shareOnSocialMedia}
                className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-lg transition-colors"
                title="Share Link"
              >
                <LinkIcon className="w-4 h-4" />
              </button>
              <button
                onClick={copyToClipboard}
                className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                title={lang === "en" ? "Copy link" : "Copiar enlace"}
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content[lang].replace(/\n/g, '<br />') 
              }} 
            />
          </motion.article>

          {/* Navigation to other posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                {lang === "en" ? "More Posts" : "Más Posts"}
              </Link>
              
              {/* You could add next/previous post navigation here */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {lang === "en" ? "Thanks for reading!" : "¡Gracias por leer!"}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}