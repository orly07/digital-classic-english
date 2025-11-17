import React, {
  memo,
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";

import { useSonnet } from "../../utils/hooks/useSonnet";
import SonnetCard from "../../components/Cards/SonnetCard";
import FilterDropdown from "../../components/Filter/FilterDropdown";
import ScrollButton from "../../components/Buttons/ScrollButton";
import LoadingFallback from "../../components/Loading/LoadingFallback";
import * as S from "./Sonnet.styled";

const HORIZONTAL_SCROLL_AMOUNT = 320;

const Sonnet = memo(() => {
  const sonnetsRef = useRef(null);
  const { sonnets, loading } = useSonnet();
  const [sonnetsFilter, setSonnetsFilter] = useState("");
  const [sonnetsCanScroll, setSonnetsCanScroll] = useState({
    left: false,
    right: false,
  });

  const filteredSonnets = useMemo(() => {
    if (!sonnetsFilter) return sonnets;
    return sonnets.filter((s) => s.author === sonnetsFilter);
  }, [sonnets, sonnetsFilter]);

  const scroll = useCallback((direction) => {
    if (!sonnetsRef.current) return;
    sonnetsRef.current.scrollBy({
      left: HORIZONTAL_SCROLL_AMOUNT * direction,
      behavior: "smooth",
    });
  }, []);

  const updateScrollState = useCallback(() => {
    if (!sonnetsRef.current) return;
    const el = sonnetsRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScrollLeft = scrollWidth - clientWidth;
    setSonnetsCanScroll({
      left: scrollLeft > 5,
      right: scrollLeft < maxScrollLeft - 5,
    });
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = sonnetsRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredSonnets.length]);

  const handleFilterChange = (author) => setSonnetsFilter(author);
  const resetFilter = () => setSonnetsFilter("");

  if (loading) return <LoadingFallback />;

  return (
    <S.Section id="sonnets">
      <S.SectionHeader>
        <div className="title-section">
          <h2>Other Literary Works</h2>
          {sonnetsFilter && (
            <span className="filter-indicator" aria-live="polite">
              Showing works by {sonnetsFilter}
              <button
                onClick={resetFilter}
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
          onAuthorChange={handleFilterChange}
          placeholder="Other Literary Works"
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
              <SonnetCard key={sonnet.slug} sonnet={sonnet} />
            ))
          ) : (
            <div className="no-results" role="status" aria-live="polite">
              <p>No sonnets found for the selected author.</p>
              <button onClick={resetFilter} className="reset-button">
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
            onClick={() => scroll(-1)}
            disabled={!sonnetsCanScroll.left}
          />
          <ScrollButton
            direction="right"
            onClick={() => scroll(1)}
            disabled={!sonnetsCanScroll.right}
          />
        </div>
      )}
    </S.Section>
  );
});

Sonnet.displayName = "Sonnet";
export default Sonnet;
