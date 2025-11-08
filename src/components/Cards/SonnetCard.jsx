// src/components/Cards/SonnetCard.jsx
import { memo } from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardAuthor,
  ListenButton,
} from "./SonnetCard.styled";

const SonnetCard = memo(({ sonnet }) => {
  return (
    <CardContainer to={`/sonnet/${sonnet.id}`}>
      <CardImage src={sonnet.img} alt={sonnet.title} loading="lazy" />
      <CardContent>
        <h5>{sonnet.title}</h5>
        <p>{sonnet.description}</p>
        <CardAuthor>By {sonnet.author}</CardAuthor>
        <ListenButton>Listen Now</ListenButton>
      </CardContent>
    </CardContainer>
  );
});

SonnetCard.displayName = "SonnetCard";
export default SonnetCard;
