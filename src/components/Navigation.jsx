import { useState, useCallback, useEffect, memo } from "react"
import { Link, useLocation } from "react-router-dom"
import { Moon, Sun, Languages, Menu, X } from "lucide-react"
import { useAppContext } from "../context/AppContext"
import { useScrollPosition } from "../hooks/useLocalStorage"

const Navigation = memo(() => {
  const { darkMode, toggleDarkMode, lang, toggleLang } = useAppContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const { isScrolled } = useScrollPosition()
  const location = useLocation()

  // Cerrar menú al hacer click fuera o presionar Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('nav')) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [menuOpen])

  const handleMenuToggle = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const handleMenuItemClick = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const sections = [
    { id: "home", en: "Home", es: "Inicio", href: "/#home" },
    { id: "about", en: "About", es: "Sobre mí", href: "/#about" },
    { id: "projects", en: "Projects", es: "Proyectos", href: "/#projects" },
    { id: "contact", en: "Contact", es: "Contacto", href: "/#contact" },
    { id: "blog", en: "Blog", es: "Blog", href: "/blog" },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 shadow-lg shadow-gray-200/20 dark:shadow-gray-800/20' 
        : 'bg-white/70 dark:bg-gray-900/70 shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-200">
            F
          </div>
          <span className={`font-bold transition-all duration-300 ${
            isScrolled ? 'text-lg' : 'text-xl'
          } bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent`}>
            Fidel Pizart
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-1">
          {sections.map((s) => {
            const isExternal = s.href?.startsWith('/#')
            const isActive = location.pathname === s.href || (s.id === 'home' && location.pathname === '/')
            
            if (isExternal) {
              return (
                <a
                  key={s.id}
                  href={s.href}
                  className={`relative px-4 py-2 transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 group ${
                    isActive 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  <span className="relative z-10">{lang === "en" ? s.en : s.es}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
                </a>
              )
            }
            
            return (
              <Link
                key={s.id}
                to={s.href}
                className={`relative px-4 py-2 transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 group ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <span className="relative z-10">{lang === "en" ? s.en : s.es}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200" />
              </Link>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-4 items-center">
          {/* Switch dark mode */}
          <button 
            onClick={toggleDarkMode}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Switch language */}
          <button 
            onClick={toggleLang}
            aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Languages size={20} />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white dark:bg-gray-900 shadow-md">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="hover:text-blue-500 transition-colors"
              onClick={handleMenuItemClick}
            >
              {lang === "en" ? s.en : s.es}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation