
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
            F
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Fidel Pizart
          </span>
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link>
          <a href="#about" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">About</a>
          <a href="#projects" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">Projects</a>
          <a href="#contact" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</a>
          <Link to="/blog" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600">Blog</Link>
        </div>
      </div>
    </nav>
  )
}