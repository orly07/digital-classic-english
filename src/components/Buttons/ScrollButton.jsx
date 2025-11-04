import React, { memo } from 'react';
import { ScrollButtonContainer } from './ScrollButton.styled';

const ScrollButton = memo(({ 
  direction = 'right', 
  onClick, 
  ariaLabel,
  ...props 
}) => {
  const icon = direction === 'left' ? '‹' : '›';
  
  return (
    <ScrollButtonContainer 
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {icon}
    </ScrollButtonContainer>
  );
});

ScrollButton.displayName = 'ScrollButton';
export default ScrollButton;