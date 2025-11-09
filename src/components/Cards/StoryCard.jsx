// src/components/Cards/StoryCard.jsx
import { memo } from "react";
import {
  CardContainer,
  CardContent,
  CardAuthor,
  CardLink,
} from "./StoryCard.styled";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StoryCard = memo(({ story }) => {
  return (
    <CardContainer to={`/story/${story.id}`}>
      <LazyLoadImage
        src={story.img}
        alt={story.title}
        effect="blur"
      />

      <CardContent>
        <h5>{story.title}</h5>
        <p>{story.description}</p>
        <CardAuthor>By {story.author}</CardAuthor>
        <CardLink>View Story</CardLink>
      </CardContent>
    </CardContainer>
  );
});

StoryCard.displayName = "StoryCard";
export default StoryCard;
