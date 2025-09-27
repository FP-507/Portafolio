import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import ErrorBoundary from "./components/ErrorBoundary"
import { AppProvider } from "./context/AppContext"
import { withLazyLoading, SectionSkeleton } from "./components/LazyLoader"

const LazyAbout = withLazyLoading(() => import("./components/About"), <SectionSkeleton height="h-96" />)
const LazyProjects = withLazyLoading(() => import("./components/Projects"), <SectionSkeleton height="h-[600px]" />)
const LazyTestimonials = withLazyLoading(() => import("./components/Testimonials"), <SectionSkeleton height="h-96" />)
const LazyExperienceTimeline = withLazyLoading(() => import("./components/ExperienceTimeline"), <SectionSkeleton height="h-[800px]" />)
const LazyCertifications = withLazyLoading(() => import("./components/Certifications"), <SectionSkeleton height="h-96" />)
const LazyPWAFeatures = withLazyLoading(() => import("./components/PWAFeatures"), <SectionSkeleton height="h-96" />)
const LazyContact = withLazyLoading(() => import("./components/Contact"), <SectionSkeleton height="h-80" />)
const LazyFooter = withLazyLoading(() => import("./components/Footer"), <SectionSkeleton height="h-64" />)

export default function Portfolio() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <div className="font-sans">
          <Navigation />
          <main>
            <Hero />
            <LazyAbout />
            <LazyProjects />
            <LazyTestimonials />
            <LazyExperienceTimeline />
            <LazyCertifications />
            <LazyPWAFeatures />
            <LazyContact />
          </main>
          <LazyFooter />
        </div>
      </AppProvider>
    </ErrorBoundary>
  )
}
