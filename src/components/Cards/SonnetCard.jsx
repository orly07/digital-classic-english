import { memo } from "react";
import { 
  CardContainer, 
  CardImage, 
  CardContent, 
  CardAuthor, 
  ListenButton 
} from "./SonnetCard.styled";

const SonnetCard = memo(({ sonnet }) => {
  return (
    <CardContainer>
      <CardImage src={sonnet.img} alt={sonnet.title} loading="lazy" />
      <CardContent>
        <h5>{sonnet.title}</h5>
        <p>{sonnet.description}</p>
        <CardAuthor>By {sonnet.author}</CardAuthor>
        <ListenButton to={`/sonnet/${sonnet.id}`}>
          Listen Now
        </ListenButton>
      </CardContent>
    </CardContainer>
  );
});

SonnetCard.displayName = 'SonnetCard';
export default SonnetCard;
