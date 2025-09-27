import { useState, useEffect } from 'react'

/**
 * Custom hook para manejar localStorage con manejo de errores
 * @param {string} key - La clave para localStorage
 * @param {*} initialValue - Valor inicial si no existe en localStorage
 * @returns {[value, setValue]} - Array con el valor actual y función para actualizarlo
 */
export const useLocalStorage = (key, initialValue) => {
  // Función para obtener valor del localStorage
  const getStoredValue = () => {
    try {
      if (typeof window === 'undefined') {
        return initialValue
      }

      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(getStoredValue)

  // Función para actualizar el valor
  const setValue = (value) => {
    try {
      // Permite que value sea una función como en useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      
      setStoredValue(valueToStore)
      
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
      // Aún actualizar el estado aunque falle el guardado en localStorage
      setStoredValue(value instanceof Function ? value(storedValue) : value)
    }
  }

  return [storedValue, setValue]
}

/**
 * Custom hook para detectar preferencias del sistema
 * @returns {boolean} - true si el usuario prefiere modo oscuro
 */
export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => setSystemTheme(e.matches)
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return systemTheme
}

/**
 * Custom hook para scroll suave
 * @returns {function} - Función para hacer scroll a un elemento
 */
export const useSmoothScroll = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      })
    }
  }

  return scrollTo
}

/**
 * Custom hook para detectar posición del scroll
 * @returns {object} - Objeto con scrollY e isScrolled
 */
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY, isScrolled }
}