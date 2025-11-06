import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingFallback from "../components/Loading/LoadingFallback";

const LandingPage = lazy(() => import("../pages/LandingPage/LandingPage"));
const Story = lazy(() => import("../pages/Story/Story"));
const About = lazy(() => import("../modules/About/About"));
const SonnetDetail = lazy(() => import("../pages/SonnetDetail/SonnetDetail"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/sonnet/:id" element={<SonnetDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default React.memo(AppRoutes);
