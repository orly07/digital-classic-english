import { memo } from 'react';
import { 
  CardContainer, 
  CardImage, 
  CardContent, 
  CardTitle, 
  CardDescription 
} from './CharacterCard.styled';

const CharacterCard = memo(({ character }) => {
  return (
    <CardContainer>
      <CardImage src={character.img} alt={character.name} loading="lazy" />
      <CardContent>
        <CardTitle>{character.name}</CardTitle>
        <CardDescription>{character.description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
});

CharacterCard.displayName = 'CharacterCard';
export default CharacterCard;