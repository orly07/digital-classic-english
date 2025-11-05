import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./styles/global.css";
import "./components/ErrorBoundary/ErrorBoundary";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

// Lazy load pages
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Story = lazy(() => import("./pages/Story/Story"));
const About = lazy(() => import("./modules/About/About"));
const SonnetDetail = lazy(() => import("./pages/SonnetDetail/SonnetDetail"));

// Loading component
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
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
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
