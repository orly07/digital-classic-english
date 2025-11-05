// App.js
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "./styles/global.css";

// Lazy load pages
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Story = lazy(() => import("./pages/Story/Story"));
const About = lazy(() => import("./modules/About/About"));
const SonnetDetail = lazy(() => import("./pages/SonnetDetail/SonnetDetail"));

const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '50vh' 
  }}>
    <div>Loading...</div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/story/:id" element={<Story />} />
            <Route path="/sonnet/:id" element={<SonnetDetail />} />
            <Route path="/about" element={<About />} />
            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;