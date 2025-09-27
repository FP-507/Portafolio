
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import ExperienceTimeline from "./components/ExperienceTimeline"
import Certifications from "./components/Certifications"
import PWAFeatures from "./components/PWAFeatures"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Portfolio() {
  return (
    <div className="font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <ExperienceTimeline />
        <Certifications />
        <PWAFeatures />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
