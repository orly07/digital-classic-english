import { memo } from "react";
import { CardContainer, CardImage, CardContent, CardAuthor, CardLink } from "./StoryCard.styled";

const StoryCard = memo(({ story }) => {
  return (
    <CardContainer>
      <CardImage src={story.img} alt={story.title} loading="lazy" />
      <CardContent>
        <h5>{story.title}</h5>
        <p>{story.description}</p>
        <CardAuthor>By {story.author}</CardAuthor>
        <CardLink to={`/story/${story.id}`}>View Story</CardLink>
      </CardContent>
    </CardContainer>
  );
});

StoryCard.displayName = 'StoryCard';
export default StoryCard;