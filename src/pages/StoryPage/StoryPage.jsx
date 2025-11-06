import React, { useMemo, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { storiesData } from '../../data'; 
import CharacterCard from "../../components/Cards/CharacterCard";
import ScrollGallery from '../../components/ScrollGallery/ScrollGallery';
import Button from '../../components/Buttons/Button';
import { StoryWrapper } from './StoryPage.styled';

const StoryPage = memo(() => {
  const { id } = useParams();
  
  const story = useMemo(() => 
    storiesData.find((s) => s.id === id),
    [id]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (!story) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', marginTop: '80px' }}>
        <h2>Story not found!</h2>
      </div>
    );
  }

  return (
    <StoryWrapper>
      <div className="video-container">
        <iframe 
          src={story.video} 
          title={story.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      <div className="story-content">
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

      </div>
    </StoryWrapper>
  );
});

StoryPage.displayName = 'Story';
export default StoryPage;