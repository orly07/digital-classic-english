import React, { useMemo, memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { LoadingFallback } from "../../components/Loading/LoadingFallback";
import { useStories } from "../../utils/hooks/useStory";

import CharacterCard from "../../components/Cards/CharacterCard";
import ScrollGallery from "../../components/ScrollGallery/ScrollGallery";
import Button from "../../components/Buttons/Button";
import * as S from "./StoryPage.styled";

const StoryPage = memo(() => {
  const { id } = useParams();

  const { stories, loading } = useStories();

  const story = useMemo(
    () => stories.find((s) => s.slug === id),
    [stories, id]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (loading) {
    return (
      <S.NotFound>
        <LoadingFallback />
      </S.NotFound>
    );
  }

  if (!story) {
    return (
      <S.NotFound>
        <h2>Story not found!</h2>
      </S.NotFound>
    );
  }

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const match = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
    if (!match) return url; // fallback
    return `https://www.youtube.com/embed/${match[1]}`;
  };

  return (
    <S.StoryWrapper
      as={motion.div}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* VIDEO SECTION */}
      {story.video && (
        <S.VideoContainer
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src={getEmbedUrl(story.video)}
            title={story.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </S.VideoContainer>
      )}

      {/* STORY CONTENT */}
      <S.StoryContent
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1>{story.title}</h1>
        <p className="author">By {story.author}</p>
        <p className="description">{story.description}</p>

        {/* FULL STORY BUTTON */}
        {story.fullStory && (
          <Button
            as="a"
            href={story.fullStory}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="large"
          >
            Read Full Story
          </Button>
        )}

        {/* CHARACTERS SECTION */}
        {story.character?.length > 0 && (
          <ScrollGallery title="Characters">
            {story.character.map((char) => (
              <CharacterCard key={char.id ?? char.name} character={char} />
            ))}
          </ScrollGallery>
        )}
      </S.StoryContent>
    </S.StoryWrapper>
  );
});

StoryPage.displayName = "StoryPage";
export default StoryPage;
