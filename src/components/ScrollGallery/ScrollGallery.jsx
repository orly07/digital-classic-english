import React, { memo, useRef, useState, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  GalleryContainer,
  GalleryContent,
  ScrollContainer,
} from "./ScrollGallery.styled";
import ScrollButton from "../../components/Buttons/ScrollButton";

const ScrollGallery = memo(({ children, title }) => {
  const galleryRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = galleryRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollWidth > el.scrollLeft + el.clientWidth + 1);
    }
  }, []);

  const scroll = useCallback((direction) => {
    const el = galleryRef.current;
    if (el) {
      const scrollAmount = 400;
      el.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  }, []);

  // Monitor scroll changes
  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  // Optional keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") scroll(1);
      if (e.key === "ArrowLeft") scroll(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [scroll]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <GalleryContainer>
        <h3>{title}</h3>
      </GalleryContainer>

      <GalleryContent ref={galleryRef} role="region" aria-label={title}>
        {children}
      </GalleryContent>

      <ScrollContainer>
        <ScrollButton
          direction="left"
          disabled={!canScrollLeft}
          onClick={() => scroll(-1)}
          aria-label={`Scroll ${title} left`}
        />
        <ScrollButton
          direction="right"
          disabled={!canScrollRight}
          onClick={() => scroll(1)}
          aria-label={`Scroll ${title} right`}
        />
      </ScrollContainer>
    </motion.section>
  );
});

ScrollGallery.displayName = "ScrollGallery";
export default ScrollGallery;
