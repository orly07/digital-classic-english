import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./styles/global.css";

// Lazy load pages
const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const Story = lazy(() => import("./pages/Story/Story"));

// Loading component
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
    <Layout>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/story/:id" element={<Story />} />
          {/* Remove About route since it's now part of LandingPage */}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;