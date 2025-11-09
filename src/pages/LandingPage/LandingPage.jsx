import React, {
  useMemo,
  memo,
  lazy,
  Suspense,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";
import { storiesData, sonnetsData } from "../../data";
import StoryCard from "../../components/Cards/StoryCard";
import SonnetCard from "../../components/Cards/SonnetCard";
import FilterDropdown from "../../components/Filter/FilterDropdown";
import ScrollButton from "../../components/Buttons/ScrollButton";
import LoadingFallback from "../../components/Loading/LoadingFallback";
import Hero from "../../modules/Hero/Hero";
import * as S from "./LandingPage.styled";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeInUp, slideUp } from "../../utils/motionVariants";

const About = lazy(() => import("../../modules/About"));

const HORIZONTAL_SCROLL_AMOUNT = 320; 

const LandingPage = memo(() => {
  const storiesRef = useRef(null);
  const sonnetsRef = useRef(null);

  const [storiesFilter, setStoriesFilter] = useState("");
  const [sonnetsFilter, setSonnetsFilter] = useState("");

  const [storiesCanScroll, setStoriesCanScroll] = useState({
    left: false,
    right: false,
  });
  const [sonnetsCanScroll, setSonnetsCanScroll] = useState({
    left: false,
    right: false,
  });

  const stories = useMemo(() => storiesData, []);
  const sonnets = useMemo(() => sonnetsData, []);

  const filteredStories = useMemo(() => {
    if (!storiesFilter) return stories;
    return stories.filter((story) => story.author === storiesFilter);
  }, [stories, storiesFilter]);

  const filteredSonnets = useMemo(() => {
    if (!sonnetsFilter) return sonnets;
    return sonnets.filter((sonnet) => sonnet.author === sonnetsFilter);
  }, [sonnets, sonnetsFilter]);

  const scroll = useCallback((ref, direction) => {
    if (!ref?.current) return;
    const amount = HORIZONTAL_SCROLL_AMOUNT * direction;
    ref.current.scrollBy({ left: amount, behavior: "smooth" });
  }, []);

  const updateScrollState = useCallback((ref, setter) => {
    if (!ref?.current) {
      setter({ left: false, right: false });
      return;
    }
    const el = ref.current;
    window.requestAnimationFrame(() => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScrollLeft = scrollWidth - clientWidth;
      setter({
        left: scrollLeft > 5,
        right: scrollLeft < maxScrollLeft - 5,
      });
    });
  }, []);


  useEffect(() => {
    const storiesEl = storiesRef.current;
    const sonnetsEl = sonnetsRef.current;

    const handle = () => {
      updateScrollState(storiesRef, setStoriesCanScroll);
      updateScrollState(sonnetsRef, setSonnetsCanScroll);
    };


    handle();

    if (storiesEl)
      storiesEl.addEventListener("scroll", handle, { passive: true });
    if (sonnetsEl)
      sonnetsEl.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle, { passive: true });

    return () => {
      if (storiesEl) storiesEl.removeEventListener("scroll", handle);
      if (sonnetsEl) sonnetsEl.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, [updateScrollState, filteredStories.length, filteredSonnets.length]);

  const handleStoriesFilterChange = useCallback((author) => {
    setStoriesFilter(author);
  }, []);

  const handleSonnetsFilterChange = useCallback((author) => {
    setSonnetsFilter(author);
  }, []);

  const resetStoriesFilter = useCallback(() => setStoriesFilter(""), []);
  const resetSonnetsFilter = useCallback(() => setSonnetsFilter(""), []);

  return (
    <>
      <Hero />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.Section id="stories">
          <S.SectionHeader>
            <div className="title-section">
              <h2>Explore Stories</h2>
              {storiesFilter && (
                <span className="filter-indicator" aria-live="polite">
                  Showing works by {storiesFilter}
                  <button
                    onClick={resetStoriesFilter}
                    className="clear-filter"
                    aria-label="Clear stories filter"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            <FilterDropdown
              data={stories}
              selectedAuthor={storiesFilter}
              onAuthorChange={handleStoriesFilterChange}
              placeholder="All Stories"
              label="Filter Stories"
            />
          </S.SectionHeader>

          <S.ScrollContainer>
            <S.ScrollContent
              ref={storiesRef}
              tabIndex={0}
              aria-label="Stories list"
            >
              {filteredStories.length > 0 ? (
                filteredStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))
              ) : (
                <div className="no-results" role="status" aria-live="polite">
                  <p>No stories found for the selected author.</p>
                  <button onClick={resetStoriesFilter} className="reset-button">
                    Show All Stories
                  </button>
                </div>
              )}
            </S.ScrollContent>
          </S.ScrollContainer>

          {filteredStories.length > 0 && (
            <div
              className="scroll-controls"
              role="group"
              aria-label="Scroll stories"
            >
              <ScrollButton
                direction="left"
                onClick={() => scroll(storiesRef, -1)}
                aria-label="Scroll stories left"
                disabled={!storiesCanScroll.left}
              />
              <ScrollButton
                direction="right"
                onClick={() => scroll(storiesRef, 1)}
                aria-label="Scroll stories right"
                disabled={!storiesCanScroll.right}
              />
            </div>
          )}
        </S.Section>
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <S.Section id="sonnets">
          <S.SectionHeader>
            <div className="title-section">
              <h2>Other Literary Works</h2>
              {sonnetsFilter && (
                <span className="filter-indicator" aria-live="polite">
                  Showing works by {sonnetsFilter}
                  <button
                    onClick={resetSonnetsFilter}
                    className="clear-filter"
                    aria-label="Clear sonnets filter"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>

            <FilterDropdown
              data={sonnets}
              selectedAuthor={sonnetsFilter}
              onAuthorChange={handleSonnetsFilterChange}
              placeholder="All Sonnets"
              label="Filter Sonnets"
            />
          </S.SectionHeader>

          <S.ScrollContainer>
            <S.ScrollContent
              ref={sonnetsRef}
              tabIndex={0}
              aria-label="Sonnets list"
            >
              {filteredSonnets.length > 0 ? (
                filteredSonnets.map((sonnet) => (
                  <SonnetCard key={sonnet.id} sonnet={sonnet} />
                ))
              ) : (
                <div className="no-results" role="status" aria-live="polite">
                  <p>No sonnets found for the selected author.</p>
                  <button onClick={resetSonnetsFilter} className="reset-button">
                    Show All Sonnets
                  </button>
                </div>
              )}
            </S.ScrollContent>
          </S.ScrollContainer>

          {filteredSonnets.length > 0 && (
            <div
              className="scroll-controls"
              role="group"
              aria-label="Scroll sonnets"
            >
              <ScrollButton
                direction="left"
                onClick={() => scroll(sonnetsRef, -1)}
                aria-label="Scroll sonnets left"
                disabled={!sonnetsCanScroll.left}
              />
              <ScrollButton
                direction="right"
                onClick={() => scroll(sonnetsRef, 1)}
                aria-label="Scroll sonnets right"
                disabled={!sonnetsCanScroll.right}
              />
            </div>
          )}
        </S.Section>
      </motion.div>

      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
    </>
  );
});

LandingPage.displayName = "LandingPage";
export default LandingPage;
