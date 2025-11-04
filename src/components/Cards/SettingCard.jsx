import React, { memo } from 'react';
import { 
  CardContainer, 
  CardImage, 
  CardContent, 
  CardTitle, 
  CardDescription 
} from './SettingCard.styled';

const SettingCard = memo(({ setting }) => {
  return (
    <CardContainer>
      <CardImage src={setting.img} alt={setting.name} loading="lazy" />
      <CardContent>
        <CardTitle>{setting.name}</CardTitle>
        <CardDescription>{setting.description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
});

SettingCard.displayName = 'SettingCard';
export default SettingCard;