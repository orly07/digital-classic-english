// src/components/Cards/StoryCard.jsx
import { memo } from "react";
import {
  CardContainer,
  CardImage,
  CardContent,
  CardAuthor,
  CardLink,
} from "./StoryCard.styled";

const StoryCard = memo(({ story }) => {
  return (
    <CardContainer to={`/story/${story.id}`}>
      <CardImage src={story.img} alt={story.title} loading="lazy" />
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
