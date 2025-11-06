import React, {
  useMemo,
  memo,
  lazy,
  Suspense,
  useRef,
  useState,
  useCallback,
} from "react";
import { storiesData, sonnetsData } from "../../data";
import StoryCard from "../../components/Cards/StoryCard";
import SonnetCard from "../../components/Cards/SonnetCard";
import FilterDropdown from "../../components/Filter/FilterDropdown";
import ScrollButton from "../../components/Buttons/ScrollButton";
import LoadingFallback from "../../components/Loading/LoadingFallback";
import Hero from "../../modules/Hero/Hero";
import * as S from "./LandingPage.styled";

const About = lazy(() => import("../../modules/About/About"));

const LandingPage = memo(() => {
  const storiesRef = useRef(null);
  const sonnetsRef = useRef(null);

  const [storiesFilter, setStoriesFilter] = useState("");
  const [sonnetsFilter, setSonnetsFilter] = useState("");

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
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollLeft += direction * scrollAmount;
    }
  }, []);

  const handleStoriesFilterChange = useCallback((author) => {
    setStoriesFilter(author);
  }, []);

  const handleSonnetsFilterChange = useCallback((author) => {
    setSonnetsFilter(author);
  }, []);

  const resetStoriesFilter = useCallback(() => {
    setStoriesFilter("");
  }, []);

  const resetSonnetsFilter = useCallback(() => {
    setSonnetsFilter("");
  }, []);

  return (
    <>
      <Hero />

      <S.Section id="stories">
        <S.SectionHeader>
          <div className="title-section">
            <h2>Explore Stories</h2>
            {storiesFilter && (
              <span className="filter-indicator">
                Showing works by {storiesFilter}
                <button
                  onClick={resetStoriesFilter}
                  className="clear-filter"
                  aria-label="Clear filter"
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
          <S.ScrollContent ref={storiesRef}>
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))
            ) : (
              <div className="no-results">
                <p>No stories found for the selected author.</p>
                <button onClick={resetStoriesFilter} className="reset-button">
                  Show All Stories
                </button>
              </div>
            )}
          </S.ScrollContent>
        </S.ScrollContainer>

        {filteredStories.length > 0 && (
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
        )}
      </S.Section>

      <S.Section id="sonnets">
        <S.SectionHeader>
          <div className="title-section">
            <h2>Other Literary Works</h2>
            {sonnetsFilter && (
              <span className="filter-indicator">
                Showing works by {sonnetsFilter}
                <button
                  onClick={resetSonnetsFilter}
                  className="clear-filter"
                  aria-label="Clear filter"
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
          <S.ScrollContent ref={sonnetsRef}>
            {filteredSonnets.length > 0 ? (
              filteredSonnets.map((sonnet) => (
                <SonnetCard key={sonnet.id} sonnet={sonnet} />
              ))
            ) : (
              <div className="no-results">
                <p>No sonnets found for the selected author.</p>
                <button onClick={resetSonnetsFilter} className="reset-button">
                  Show All Sonnets
                </button>
              </div>
            )}
          </S.ScrollContent>
        </S.ScrollContainer>

        {filteredSonnets.length > 0 && (
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
        )}
      </S.Section>

      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
    </>
  );
});

LandingPage.displayName = "LandingPage";
export default LandingPage;
