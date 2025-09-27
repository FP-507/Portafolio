import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Portfolio from "./Portfolio"
import { withLazyLoading } from "./components/LazyLoader"
import ErrorBoundary from "./components/ErrorBoundary"

// Lazy loaded pages
const LazyBlog = withLazyLoading(() => import("./pages/Blog"))
const LazyBlogPost = withLazyLoading(() => import("./pages/BlogPost"))
const LazyNotFound = withLazyLoading(() => import("./pages/NotFound"))

export default function App() {
  return (
    <ErrorBoundary>
      <Router basename="/Portafolio">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/blog" element={<LazyBlog />} />
          <Route path="/blog/:slug" element={<LazyBlogPost />} />
          <Route path="/404" element={<LazyNotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  )
}