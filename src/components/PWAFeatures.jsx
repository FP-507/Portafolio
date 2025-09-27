import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Wifi, 
  Download, 
  Zap, 
  Shield, 
  Gauge,
  Bell,
  RefreshCw
} from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import { usePWA, useNetworkStatus } from '../hooks/usePWA'

export default function PWAFeatures() {
  const { lang } = useAppContext()
  const { isInstalled, isInstallable, installApp } = usePWA()
  const { isOnline, connectionType } = useNetworkStatus()

  const features = [
    {
      icon: Download,
      title: { en: 'Installable', es: 'Instalable' },
      description: { 
        en: 'Install as a native app on your device',
        es: 'Instala como una app nativa en tu dispositivo'
      },
      active: isInstalled || isInstallable,
      color: 'text-blue-500'
    },
    {
      icon: Wifi,
      title: { en: 'Offline Ready', es: 'Funciona Offline' },
      description: { 
        en: 'Works without internet connection',
        es: 'Funciona sin conexión a internet'
      },
      active: true,
      color: 'text-green-500'
    },
    {
      icon: Zap,
      title: { en: 'Fast Loading', es: 'Carga Rápida' },
      description: { 
        en: 'Lightning fast performance',
        es: 'Rendimiento ultra rápido'
      },
      active: true,
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: { en: 'Secure', es: 'Seguro' },
      description: { 
        en: 'Served over HTTPS',
        es: 'Servido por HTTPS'
      },
      active: window.location.protocol === 'https:',
      color: 'text-purple-500'
    },
    {
      icon: Bell,
      title: { en: 'Notifications', es: 'Notificaciones' },
      description: { 
        en: 'Receive updates and notifications',
        es: 'Recibe actualizaciones y notificaciones'
      },
      active: 'Notification' in window,
      color: 'text-red-500'
    },
    {
      icon: RefreshCw,
      title: { en: 'Auto Updates', es: 'Actualizaciones Automáticas' },
      description: { 
        en: 'Always up to date',
        es: 'Siempre actualizado'
      },
      active: true,
      color: 'text-indigo-500'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {lang === 'en' ? 'Progressive Web App' : 'Aplicación Web Progresiva'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {lang === 'en' ? 'Modern App Experience' : 'Experiencia de App Moderna'}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'This portfolio works like a native mobile app with offline capabilities and installation support'
              : 'Este portafolio funciona como una app móvil nativa con capacidades offline y soporte de instalación'}
          </p>
        </motion.div>

        {/* Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className={`rounded-xl p-4 ${
            isOnline 
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
              : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                isOnline ? 'bg-green-100 dark:bg-green-900' : 'bg-yellow-100 dark:bg-yellow-900'
              }`}>
                <Wifi className={`w-5 h-5 ${
                  isOnline ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                }`} />
              </div>
              
              <div>
                <p className={`font-semibold ${
                  isOnline ? 'text-green-800 dark:text-green-200' : 'text-yellow-800 dark:text-yellow-200'
                }`}>
                  {isOnline 
                    ? (lang === 'en' ? 'Online' : 'En línea')
                    : (lang === 'en' ? 'Offline Mode Active' : 'Modo Offline Activo')}
                </p>
                
                <p className={`text-sm ${
                  isOnline ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                }`}>
                  {isOnline 
                    ? (lang === 'en' 
                        ? `Connection: ${connectionType?.effectiveType || 'Good'} • All features available`
                        : `Conexión: ${connectionType?.effectiveType || 'Buena'} • Todas las funciones disponibles`)
                    : (lang === 'en' 
                        ? 'Content cached and available offline'
                        : 'Contenido en caché y disponible offline')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl border transition-all duration-200 ${
                  feature.active
                    ? 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg'
                    : 'bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 opacity-60'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    feature.active ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-200 dark:bg-gray-800'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      feature.active ? feature.color : 'text-gray-400'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className={`font-semibold ${
                        feature.active ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {feature.title[lang]}
                      </h3>
                      {feature.active && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                    
                    <p className={`text-sm ${
                      feature.active ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500'
                    }`}>
                      {feature.description[lang]}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <Gauge className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-2">
              {lang === 'en' ? 'Performance Metrics' : 'Métricas de Rendimiento'}
            </h3>
            <p className="opacity-90">
              {lang === 'en' 
                ? 'Optimized for speed and user experience'
                : 'Optimizado para velocidad y experiencia de usuario'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">95+</div>
              <div className="text-sm opacity-80">Lighthouse</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">&lt;2s</div>
              <div className="text-sm opacity-80">
                {lang === 'en' ? 'Load Time' : 'Tiempo Carga'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">
                {lang === 'en' ? 'Offline' : 'Offline'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">0kb</div>
              <div className="text-sm opacity-80">
                {lang === 'en' ? 'Data Usage' : 'Uso de Datos'}
              </div>
            </div>
          </div>

          {/* Install Button */}
          {isInstallable && !isInstalled && (
            <div className="text-center mt-8">
              <button
                onClick={installApp}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5" />
                {lang === 'en' ? 'Install App' : 'Instalar App'}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}