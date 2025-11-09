import React, { memo, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import * as S from "./AuthorCard.styled";
import { fadeInUp } from "../../utils/motionVariants";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MAX_LENGTH = 160;

const AuthorCard = memo(({ author }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => setIsExpanded((prev) => !prev);

  const shouldTruncate = author.description.length > MAX_LENGTH;
  const displayText = isExpanded
    ? author.description
    : author.description.slice(0, MAX_LENGTH) + (shouldTruncate ? "..." : "");

  return (
    <motion.div variants={fadeInUp} whileHover={{ scale: 1.03 }}>
      <S.CardContainer>
        <S.ImageWrapper>
          <LazyLoadImage
            src={author.image}
            alt={author.name}
            effect="blur"
            width="100%"
          />
        </S.ImageWrapper>

        <S.AuthorName>{author.name}</S.AuthorName>

        <S.AuthorDescription $expanded={isExpanded}>
          {displayText}
        </S.AuthorDescription>

        {shouldTruncate && (
          <S.ToggleButton onClick={toggleDescription}>
            {isExpanded ? "See Less" : "See More"}
          </S.ToggleButton>
        )}
      </S.CardContainer>
    </motion.div>
  );
});

AuthorCard.displayName = "AuthorCard";
export default AuthorCard;
