import React, { memo, useRef } from "react";
import ScrollButton from "../../components/Buttons/ScrollButton";
import { GalleryContainer, GalleryContent, ScrollContainer } from "./ScrollGallery.styled";

const ScrollGallery = memo(({ children, title }) => {
  const galleryRef = useRef(null);

  const scroll = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = 400;
      galleryRef.current.scrollLeft += direction * scrollAmount;
    }
  };

  return (
    <div>
      <GalleryContainer>
        <h3>{title}</h3>
      </GalleryContainer>

      <GalleryContent ref={galleryRef}>{children}
      </GalleryContent>

      <ScrollContainer>
        <ScrollButton
          direction="left"
          onClick={() => scroll(-1)}
          aria-label={`Scroll ${title} left`}
        />
        <ScrollButton
          direction="right"
          onClick={() => scroll(1)}
          aria-label={`Scroll ${title} right`}
        />
      </ScrollContainer>
    </div>
  );
});

ScrollGallery.displayName = "ScrollGallery";
export default ScrollGallery;
