import React, { memo, useState } from 'react';
import { 
  CardContainer, 
  TeamImage, 
  CardContent, 
  MemberName, 
  MemberRole, 
  MemberDescription,
  ToggleButton
} from './TeamCard.styled';

const TeamCard = memo(({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80; 

  const toggleDescription = () => setIsExpanded(!isExpanded);

  const shouldTruncate = member.description.length > maxLength;
  const displayText = isExpanded 
    ? member.description 
    : member.description.slice(0, maxLength) + (shouldTruncate ? "..." : "");

  return (
    <CardContainer>
      <TeamImage 
        src={member.image} 
        alt={member.name}
        loading="lazy"
      />
      <CardContent>
        <MemberName>{member.name}</MemberName>
        <MemberRole>{member.role}</MemberRole>

        <MemberDescription $expanded={isExpanded}>
          {displayText}
        </MemberDescription>

        {shouldTruncate && (
          <ToggleButton onClick={toggleDescription}>
            {isExpanded ? "See Less" : "See More"}
          </ToggleButton>
        )}
      </CardContent>
    </CardContainer>
  );
});

TeamCard.displayName = 'TeamCard';
export default TeamCard;
