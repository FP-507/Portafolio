import { createContext, useContext, useEffect, useCallback } from 'react'
import { useLocalStorage, useSystemTheme } from '../hooks/useLocalStorage'

const AppContext = createContext()

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const systemTheme = useSystemTheme()
  
  // Estados con persistencia usando el hook personalizado
  const [darkMode, setDarkMode] = useLocalStorage('portfolio-darkMode', systemTheme)
  const [lang, setLang] = useLocalStorage('portfolio-lang', 'en')

  // Aplica dark mode al documento
  useEffect(() => {
    try {
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch (error) {
      console.warn('Error applying dark mode:', error)
    }
  }, [darkMode])

  // Funciones de toggle optimizadas con useCallback
  const toggleDarkMode = useCallback(() => setDarkMode(prev => !prev), [setDarkMode])
  const toggleLang = useCallback(() => setLang(prev => prev === 'en' ? 'es' : 'en'), [setLang])

  const value = {
    darkMode,
    setDarkMode,
    toggleDarkMode,
    lang,
    setLang,
    toggleLang,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}