import React, { memo } from "react";
import { motion } from "framer-motion";
import * as S from "./MissionVisionCard.styled";
import { fadeInUp } from "../../utils/motionVariants";

const MissionVisionCard = memo(({ title, content, values = [], icon: Icon }) => {
  return (
    <S.CardContainer
      as={motion.div}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      role="article"
      aria-label={`${title} Card`}
    >
      {Icon && <Icon className="card-icon" aria-hidden="true" />}
      <S.CardTitle>{title}</S.CardTitle>
      <S.CardContent>
        <p className="card-description">{content}</p>
        {values.length > 0 && (
          <S.ValuesList>
            {values.map(({ icon: ValueIcon, text }, index) => (
              <S.ValueItem key={index}>
                {ValueIcon && <ValueIcon aria-hidden="true" />}
                <span>{text}</span>
              </S.ValueItem>
            ))}
          </S.ValuesList>
        )}
      </S.CardContent>
    </S.CardContainer>
  );
});

MissionVisionCard.displayName = "MissionVisionCard";
export default MissionVisionCard;
