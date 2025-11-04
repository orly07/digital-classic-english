import React, { memo } from 'react';
import { 
  CardContainer, 
  CardTitle, 
  CardContent,
  ValuesList,
  ValueItem 
} from './MissionVisionCard.styled';

const MissionVisionCard = memo(({ 
  title, 
  content, 
  values = [],
  icon: Icon 
}) => {
  return (
    <CardContainer>
      {Icon && <Icon className="card-icon" />}
      <CardTitle>{title}</CardTitle>
      <CardContent>
        {content}
        {values.length > 0 && (
          <ValuesList>
            {values.map((value, index) => (
              <ValueItem key={index}>
                {value.icon && <value.icon />}
                <span>{value.text}</span>
              </ValueItem>
            ))}
          </ValuesList>
        )}
      </CardContent>
    </CardContainer>
  );
});

MissionVisionCard.displayName = 'MissionVisionCard';
export default MissionVisionCard;