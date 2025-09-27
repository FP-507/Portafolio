import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, RefreshCw, X } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function PWAPrompt() {
  const { lang } = useAppContext()
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [registration, setRegistration] = useState(null)

  useEffect(() => {
    // Check if device is iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent))
    
    // Check if app is in standalone mode
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)

    // Handle beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    // Handle app installed event
    const handleAppInstalled = () => {
      setShowInstallPrompt(false)
      setDeferredPrompt(null)
      console.log('PWA was installed')
    }

    // Register service worker and handle updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/Portafolio/sw.js')
        .then((reg) => {
          setRegistration(reg)
          
          // Check for waiting service worker
          if (reg.waiting) {
            setShowUpdatePrompt(true)
          }

          // Listen for updates
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setShowUpdatePrompt(true)
              }
            })
          })
        })
        .catch((error) => {
          console.log('SW registration failed: ', error)
        })

      // Listen for controller change
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload()
      })
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted') {
        setDeferredPrompt(null)
        setShowInstallPrompt(false)
      }
    }
  }

  const handleUpdateClick = () => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    }
  }

  const dismissInstallPrompt = () => {
    setShowInstallPrompt(false)
    // Don't show again for 7 days
    localStorage.setItem('installPromptDismissed', Date.now() + 7 * 24 * 60 * 60 * 1000)
  }

  const shouldShowInstallPrompt = () => {
    if (isStandalone || !showInstallPrompt) return false
    
    const dismissedUntil = localStorage.getItem('installPromptDismissed')
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) return false
    
    return true
  }

  return (
    <>
      {/* Install Prompt for supported browsers */}
      <AnimatePresence>
        {shouldShowInstallPrompt() && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50"
          >
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-2">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {lang === 'en' ? 'Install App' : 'Instalar App'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {lang === 'en' 
                    ? 'Add this portfolio to your home screen for quick access!'
                    : '¡Agrega este portafolio a tu pantalla de inicio para acceso rápido!'}
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleInstallClick}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    {lang === 'en' ? 'Install' : 'Instalar'}
                  </button>
                  <button
                    onClick={dismissInstallPrompt}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    {lang === 'en' ? 'Later' : 'Después'}
                  </button>
                </div>
              </div>
              
              <button
                onClick={dismissInstallPrompt}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS Install Instructions */}
      <AnimatePresence>
        {isIOS && !isStandalone && showInstallPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50"
          >
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-2">
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {lang === 'en' ? 'Install on iOS' : 'Instalar en iOS'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {lang === 'en' 
                    ? 'To install this app on your iOS device:'
                    : 'Para instalar esta app en tu dispositivo iOS:'}
                </p>
                <ol className="text-xs text-gray-600 dark:text-gray-400 space-y-1 mb-3">
                  <li>
                    {lang === 'en' 
                      ? '1. Tap the share button in Safari'
                      : '1. Toca el botón compartir en Safari'}
                  </li>
                  <li>
                    {lang === 'en' 
                      ? '2. Select "Add to Home Screen"'
                      : '2. Selecciona "Añadir a pantalla de inicio"'}
                  </li>
                </ol>
                
                <button
                  onClick={() => setShowInstallPrompt(false)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  {lang === 'en' ? 'Got it' : 'Entendido'}
                </button>
              </div>
              
              <button
                onClick={() => setShowInstallPrompt(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Update Prompt */}
      <AnimatePresence>
        {showUpdatePrompt && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl shadow-lg p-4 z-50"
          >
            <div className="flex items-start gap-3">
              <div className="bg-green-100 dark:bg-green-900 rounded-lg p-2">
                <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {lang === 'en' ? 'Update Available' : 'Actualización Disponible'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {lang === 'en' 
                    ? 'A new version of the app is available. Update now?'
                    : 'Una nueva versión de la app está disponible. ¿Actualizar ahora?'}
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={handleUpdateClick}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    {lang === 'en' ? 'Update' : 'Actualizar'}
                  </button>
                  <button
                    onClick={() => setShowUpdatePrompt(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    {lang === 'en' ? 'Later' : 'Después'}
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => setShowUpdatePrompt(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}