import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import * as S from "./TeamCard.styled";
import { fadeInUp } from "../../utils/motionVariants";

const TeamCard = memo(({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80;

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  const shouldTruncate = member.description.length > maxLength;
  const displayText = isExpanded
    ? member.description
    : member.description.slice(0, maxLength) + (shouldTruncate ? "..." : "");

  return (
    <S.CardContainer
      as={motion.div}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      role="article"
      aria-label={`${member.name} - ${member.role}`}
    >
      <S.TeamImage
        src={member.image}
        alt={member.name}
        loading="lazy"
        decoding="async"
      />

      <S.CardContent>
        <div>
          <S.MemberName>{member.name}</S.MemberName>
          <S.MemberRole>{member.role}</S.MemberRole>
        </div>

        <S.MemberDescription $expanded={isExpanded}>
          {displayText}
        </S.MemberDescription>

        {shouldTruncate && (
          <S.ToggleButton
            onClick={toggleDescription}
            aria-expanded={isExpanded}
            aria-label={`Toggle description for ${member.name}`}
          >
            {isExpanded ? "See Less" : "See More"}
          </S.ToggleButton>
        )}
      </S.CardContent>
    </S.CardContainer>
  );
});

TeamCard.displayName = "TeamCard";
export default TeamCard;
