// src/routes/AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingFallback from "../components/Loading/LoadingFallback";
import ScrollToTop from "../utils/helpers/ScrollToTop";

const LandingPage = lazy(() => import("../pages/LandingPage"));
const Story = lazy(() => import("../pages/StoryPage"));
const About = lazy(() => import("../modules/About"));
const SonnetPage = lazy(() => import("../pages/SonnetPage"));
const AuthorsPage = lazy(() => import("../pages/AuthorsPage"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/sonnet/:id" element={<SonnetPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/authors" element={<AuthorsPage />} />
      </Routes>
    </Suspense>
  );
};

export default React.memo(AppRoutes);
