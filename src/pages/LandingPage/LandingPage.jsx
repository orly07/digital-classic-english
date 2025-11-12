import React, { memo, lazy, Suspense } from "react";
import { motion as Motion } from "framer-motion";
import Hero from "../../modules/Hero/Hero";
import LoadingFallback from "../../components/Loading/LoadingFallback";
import { fadeInUp, slideUp } from "../../utils/motionVariants";

const Story = lazy(() => import("../../modules/Story"));
const Sonnet = lazy(() => import("../../modules/Sonnet"));
const About = lazy(() => import("../../modules/About"));

const LandingPage = memo(() => {
  return (
    <>
      <Hero />

      <Suspense fallback={<LoadingFallback />}>
        <Motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Story />
        </Motion.div>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Sonnet />
        </Motion.div>
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
    </>
  );
});

LandingPage.displayName = "LandingPage";
export default LandingPage;
