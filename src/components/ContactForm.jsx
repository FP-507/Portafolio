import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Mail, 
  MessageSquare,
  Loader2
} from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function ContactForm() {
  const { lang } = useAppContext()
  const form = useRef()
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm({
    mode: 'onChange'
  })

  const onSubmit = async (data) => {
    setStatus('loading')
    
    try {
      // Configure your EmailJS service ID, template ID, and public key
      const serviceId = 'YOUR_SERVICE_ID'
      const templateId = 'YOUR_TEMPLATE_ID'
      const publicKey = 'YOUR_PUBLIC_KEY'
      
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || (lang === 'en' ? 'Contact from Portfolio' : 'Contacto desde Portfolio'),
        message: data.message,
        to_name: 'Fidel Pizart'
      }
      
      // For demo purposes, we'll simulate the email sending
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Uncomment this when you set up EmailJS:
      // await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setStatus('success')
      setMessage(lang === 'en' 
        ? 'Message sent successfully! I\'ll get back to you soon.' 
        : '¡Mensaje enviado exitosamente! Te responderé pronto.'
      )
      reset()
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
      
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setMessage(lang === 'en' 
        ? 'Failed to send message. Please try again or contact me directly.' 
        : 'Error al enviar mensaje. Inténtalo de nuevo o contáctame directamente.'
      )
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputClasses = "w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
  const errorClasses = "border-red-500 dark:border-red-400 focus:ring-red-500"

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {lang === 'en' ? 'Send me a message' : 'Envíame un mensaje'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {lang === 'en' 
              ? 'Have a project in mind? Let\'s discuss it!' 
              : '¿Tienes un proyecto en mente? ¡Hablemos!'
            }
          </p>
        </div>

        <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              {lang === 'en' ? 'Full Name' : 'Nombre Completo'}
            </label>
            <input
              type="text"
              {...register('name', {
                required: lang === 'en' ? 'Name is required' : 'El nombre es requerido',
                minLength: {
                  value: 2,
                  message: lang === 'en' ? 'Name must be at least 2 characters' : 'El nombre debe tener al menos 2 caracteres'
                }
              })}
              className={`${inputClasses} ${errors.name ? errorClasses : ''}`}
              placeholder={lang === 'en' ? 'John Doe' : 'Juan Pérez'}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-1 text-sm text-red-500 dark:text-red-400 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              {lang === 'en' ? 'Email Address' : 'Correo Electrónico'}
            </label>
            <input
              type="email"
              {...register('email', {
                required: lang === 'en' ? 'Email is required' : 'El email es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: lang === 'en' ? 'Invalid email address' : 'Correo electrónico inválido'
                }
              })}
              className={`${inputClasses} ${errors.email ? errorClasses : ''}`}
              placeholder={lang === 'en' ? 'john@example.com' : 'juan@ejemplo.com'}
            />
            <AnimatePresence>
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-1 text-sm text-red-500 dark:text-red-400 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {lang === 'en' ? 'Subject (Optional)' : 'Asunto (Opcional)'}
            </label>
            <input
              type="text"
              {...register('subject')}
              className={inputClasses}
              placeholder={lang === 'en' ? 'Project collaboration' : 'Colaboración en proyecto'}
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              {lang === 'en' ? 'Message' : 'Mensaje'}
            </label>
            <textarea
              rows={5}
              {...register('message', {
                required: lang === 'en' ? 'Message is required' : 'El mensaje es requerido',
                minLength: {
                  value: 10,
                  message: lang === 'en' ? 'Message must be at least 10 characters' : 'El mensaje debe tener al menos 10 caracteres'
                }
              })}
              className={`${inputClasses} resize-none ${errors.message ? errorClasses : ''}`}
              placeholder={lang === 'en' 
                ? 'Tell me about your project or just say hello...' 
                : 'Cuéntame sobre tu proyecto o solo saluda...'
              }
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-1 text-sm text-red-500 dark:text-red-400 flex items-center"
                >
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.message.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={!isValid || status === 'loading'}
            className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              !isValid || status === 'loading'
                ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-blue-500'
            }`}
            whileHover={isValid && status !== 'loading' ? { scale: 1.02 } : {}}
            whileTap={isValid && status !== 'loading' ? { scale: 0.98 } : {}}
          >
            <span className="flex items-center justify-center">
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {lang === 'en' ? 'Sending...' : 'Enviando...'}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {lang === 'en' ? 'Send Message' : 'Enviar Mensaje'}
                </>
              )}
            </span>
          </motion.button>
        </form>

        {/* Status Messages */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
            >
              <div className="flex items-center text-green-800 dark:text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <p className="font-medium">{message}</p>
              </div>
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
            >
              <div className="flex items-center text-red-800 dark:text-red-400">
                <AlertCircle className="w-5 h-5 mr-2" />
                <p className="font-medium">{message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Setup Instructions */}
        {status === 'idle' && (
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
            <p className="text-sm text-blue-800 dark:text-blue-400">
              <strong>{lang === 'en' ? 'Setup Note:' : 'Nota de Configuración:'}</strong>{' '}
              {lang === 'en' 
                ? 'To enable email functionality, configure EmailJS in ContactForm.jsx' 
                : 'Para habilitar la funcionalidad de email, configura EmailJS en ContactForm.jsx'
              }
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}