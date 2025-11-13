// src/modules/Story/Story.jsx
import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
  memo,
} from "react";
import { storiesData } from "../../data";
import StoryCard from "../../components/Cards/StoryCard";
import FilterDropdown from "../../components/Filter/FilterDropdown";
import ScrollButton from "../../components/Buttons/ScrollButton";
import * as S from "./Story.styled";

const HORIZONTAL_SCROLL_AMOUNT = 320;

const Story = memo(() => {
  const storiesRef = useRef(null);
  const [storiesFilter, setStoriesFilter] = useState("");
  const [storiesCanScroll, setStoriesCanScroll] = useState({
    left: false,
    right: false,
  });

  const stories = useMemo(() => storiesData, []);

  const filteredStories = useMemo(() => {
    if (!storiesFilter) return stories;
    return stories.filter((story) => story.author === storiesFilter);
  }, [stories, storiesFilter]);

  const scroll = useCallback((direction) => {
    if (!storiesRef.current) return;
    storiesRef.current.scrollBy({
      left: HORIZONTAL_SCROLL_AMOUNT * direction,
      behavior: "smooth",
    });
  }, []);

  const updateScrollState = useCallback(() => {
    if (!storiesRef.current) return;
    const el = storiesRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScrollLeft = scrollWidth - clientWidth;
    setStoriesCanScroll({
      left: scrollLeft > 5,
      right: scrollLeft < maxScrollLeft - 5,
    });
  }, []);

  useEffect(() => {
    const el = storiesRef.current;
    updateScrollState();
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredStories.length]);

  const handleFilterChange = (author) => setStoriesFilter(author);
  const resetFilter = () => setStoriesFilter("");

  return (
    <S.Section id="stories">
      <S.SectionHeader>
        <div className="title-section">
          <h2>Explore Stories</h2>
          {storiesFilter && (
            <span className="filter-indicator" aria-live="polite">
              Showing works by {storiesFilter}
              <button
                onClick={resetFilter}
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
          onAuthorChange={handleFilterChange}
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
              <button onClick={resetFilter} className="reset-button">
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
            onClick={() => scroll(-1)}
            disabled={!storiesCanScroll.left}
          />
          <ScrollButton
            direction="right"
            onClick={() => scroll(1)}
            disabled={!storiesCanScroll.right}
          />
        </div>
      )}
    </S.Section>
  );
});

Story.displayName = "Story";
export default Story;
