import { memo } from "react";
import {
  CardContainer,
  CardContent,
  CardAuthor,
  ListenButton,
} from "./SonnetCard.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const SonnetCard = memo(({ sonnet }) => {
  return (
    <CardContainer to={`/sonnet/${sonnet.id}`}>
        <LazyLoadImage
          src={sonnet.img}
          alt={sonnet.title}
          effect="blur"
          width="100%"
        />

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
