import { memo } from "react";
import { Link } from "react-router-dom";
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
    <CardContainer as={Link} to={`/sonnet/${sonnet.slug}`}>
      <LazyLoadImage
        src={sonnet.image?.url} // nested from GraphQL
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
