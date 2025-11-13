// src/pages/StoryPage/StoryPage.jsx
import React, { useMemo, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { storiesData } from "../../data";
import CharacterCard from "../../components/Cards/CharacterCard";
import ScrollGallery from "../../components/ScrollGallery/ScrollGallery";
import Button from "../../components/Buttons/Button";
import * as S from "./StoryPage.styled";

const StoryPage = memo(() => {
  const { id } = useParams();

  const story = useMemo(() => storiesData.find((s) => s.id === id), [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!story) {
    return (
      <S.NotFound>
        <h2>Story not found!</h2>
      </S.NotFound>
    );
  }

  return (
    <S.StoryWrapper
      as={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <S.VideoContainer
        as={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <iframe
          src={story.video}
          title={story.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </S.VideoContainer>

      <S.StoryContent
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1>{story.title}</h1>
        <p className="author">By {story.author}</p>
        <p className="description">{story.description}</p>

        {story.fullStories && (
          <Button
            as="a"
            href={story.fullStories}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="large"
          >
            Read Full Story
          </Button>
        )}

        {story.characters?.length > 0 && (
          <ScrollGallery title="Characters">
            {story.characters.map((character) => (
              <CharacterCard key={character.name} character={character} />
            ))}
          </ScrollGallery>
        )}
      </S.StoryContent>
    </S.StoryWrapper>
  );
});

StoryPage.displayName = "StoryPage";
export default StoryPage;
