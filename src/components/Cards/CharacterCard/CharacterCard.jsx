import React, { memo, useState, useCallback } from 'react';
import { 
  CardContainer, 
  CardImage, 
  CardContent, 
  CardTitle, 
  CardDescription,
  SeeMoreButton,
  LinesContainer,
  LinesText
} from './CharacterCard.styled';

const CharacterCard = memo(({ character }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showLines, setShowLines] = useState(false);

  const toggleDescription = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleImageInteraction = useCallback(() => {
    setShowLines(true);
  }, []);

  const handleImageLeave = useCallback(() => {
    setShowLines(false);
  }, []);

  // Check if description is long enough to need truncation
  const needsTruncation = character.description && character.description.length > 60;
  const hasLines = character.lines && character.lines.trim().length > 0;

  return (
    <CardContainer>
      <CardImage 
        src={character.img} 
        alt={character.name} 
        loading="lazy"
        onMouseEnter={handleImageInteraction}
        onMouseLeave={handleImageLeave}
        onClick={handleImageInteraction}
      />

      <CardContent>
        <CardTitle>{character.name}</CardTitle>
        
        {hasLines && showLines && (
          <LinesContainer>
            <LinesText>"{character.lines}"</LinesText>
          </LinesContainer>
        )}

        <CardDescription $isExpanded={isExpanded}>
          {character.description}
        </CardDescription>
        
        {needsTruncation && (
          <SeeMoreButton 
            onClick={toggleDescription}
            $isExpanded={isExpanded}
          >
            {isExpanded ? 'See Less' : 'See More'}
          </SeeMoreButton>
        )}
      </CardContent>
    </CardContainer>
  );
});

CharacterCard.displayName = 'CharacterCard';
export default CharacterCard;