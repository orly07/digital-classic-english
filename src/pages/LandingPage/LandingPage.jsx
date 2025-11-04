import React, { useMemo, memo, lazy, Suspense, useRef } from "react";
import { storiesData, sonnetsData } from "../../data/data";
import StoryCard from "../../components/Cards/StoryCard";
import SonnetCard from "../../components/Cards/SonnetCard";
import  ScrollButton  from "../../components/Buttons/ScrollButton";
import Hero from "../../modules/Hero/Hero";
import { Section, ScrollContainer, ScrollContent } from "./LandingPage.styled";

// Lazy load About
const About = lazy(() => import("../../modules/About/About"));

const LandingPage = memo(() => {
  const stories = useMemo(() => storiesData, []);
  const sonnets = useMemo(() => sonnetsData, []);
  const storiesRef = useRef(null);
  const sonnetsRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <>
      <Hero />

      <Section id="stories">
        <div className="section-header">
          <h2>Explore Stories</h2>
        </div>

        <ScrollContainer>
          <ScrollContent ref={storiesRef}>
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </ScrollContent>
        </ScrollContainer>

        <div className="scroll-controls">
          <ScrollButton
            direction="left"
            onClick={() => scroll(storiesRef, -1)}
            aria-label="Scroll stories left"
          />
          <ScrollButton
            direction="right"
            onClick={() => scroll(storiesRef, 1)}
            aria-label="Scroll stories right"
          />
        </div>
      </Section>

      <Section id="sonnets">
        <div className="section-header">
          <h2>Explore Sonnets</h2>
        </div>

        <ScrollContainer>
          <ScrollContent ref={sonnetsRef}>
            {sonnets.map((sonnet) => (
              <SonnetCard key={sonnet.id} sonnet={sonnet} />
            ))}
          </ScrollContent>
        </ScrollContainer>
        
        <div className="scroll-controls">
          <ScrollButton
            direction="left"
            onClick={() => scroll(sonnetsRef, -1)}
            aria-label="Scroll sonnets left"
          />
          <ScrollButton
            direction="right"
            onClick={() => scroll(sonnetsRef, 1)}
            aria-label="Scroll sonnets right"
          />
        </div>
      </Section>

      <Suspense
        fallback={
          <div style={{ textAlign: "center", padding: "4rem" }}>
            Loading About...
          </div>
        }
      >
        <About />
      </Suspense>
    </>
  );
});

LandingPage.displayName = "LandingPage";
export default LandingPage;