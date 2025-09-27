import React, { Suspense } from 'react'

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="relative">
      <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
      <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-blue-500 border-t-transparent"></div>
    </div>
    <span className="ml-4 text-gray-600 dark:text-gray-400">Cargando...</span>
  </div>
)

// Loading skeleton for sections
const SectionSkeleton = ({ height = "h-64" }) => (
  <div className={`${height} bg-gray-200 dark:bg-gray-700 animate-pulse rounded-2xl`}>
    <div className="p-6 space-y-4">
      <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded-lg w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/6"></div>
      </div>
    </div>
  </div>
)

// Error boundary for lazy loaded components
class LazyErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Lazy loading error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[200px] p-6">
          <div className="text-center">
            <p className="text-red-500 dark:text-red-400 mb-2">
              Error al cargar el componente
            </p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Higher-order component for lazy loading with better UX
export const withLazyLoading = (importFunc, fallback = <LoadingSpinner />) => {
  const LazyComponent = React.lazy(importFunc)
  
  return function WrappedComponent(props) {
    return (
      <LazyErrorBoundary>
        <Suspense fallback={fallback}>
          <LazyComponent {...props} />
        </Suspense>
      </LazyErrorBoundary>
    )
  }
}

export { LoadingSpinner, SectionSkeleton, LazyErrorBoundary }