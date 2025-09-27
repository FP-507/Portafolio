import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wifi, WifiOff } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function OfflineIndicator() {
  const { lang } = useAppContext()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [showOfflineMessage, setShowOfflineMessage] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      setShowOfflineMessage(false)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowOfflineMessage(true)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Check initial state
    if (!navigator.onLine) {
      setShowOfflineMessage(true)
    }

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  // Auto-hide offline message after coming back online
  useEffect(() => {
    if (isOnline && showOfflineMessage) {
      const timer = setTimeout(() => {
        setShowOfflineMessage(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isOnline, showOfflineMessage])

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 right-0 bg-yellow-500 text-white px-4 py-2 text-center text-sm font-medium z-50"
        >
          <div className="flex items-center justify-center gap-2">
            <WifiOff className="w-4 h-4" />
            <span>
              {lang === 'en' 
                ? 'You are offline. Some features may not work properly.'
                : 'Estás sin conexión. Algunas funciones pueden no funcionar correctamente.'}
            </span>
          </div>
        </motion.div>
      )}
      
      {isOnline && showOfflineMessage && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 right-0 bg-green-500 text-white px-4 py-2 text-center text-sm font-medium z-50"
        >
          <div className="flex items-center justify-center gap-2">
            <Wifi className="w-4 h-4" />
            <span>
              {lang === 'en' 
                ? 'Back online!'
                : '¡Conexión restaurada!'}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}