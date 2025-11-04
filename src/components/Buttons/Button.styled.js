import styled from 'styled-components';

const sizeStyles = {
  small: {
    padding: '8px 16px',
    fontSize: '0.875rem',
    borderRadius: '6px',
  },
  medium: {
    padding: '12px 24px',
    fontSize: '1rem',
    borderRadius: '8px',
  },
  large: {
    padding: '14px 32px',
    fontSize: '1.125rem',
    borderRadius: '12px',
  }
};

const variantStyles = {
  primary: {
    background: '#00b96b',
    color: 'white',
    border: 'none',
    hoverBackground: '#009e5a',
    hoverColor: 'white',
  },
  secondary: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
    hoverBackground: 'white',
    hoverColor: '#333',
  },
  outline: {
    background: 'transparent',
    color: '#00b96b',
    border: '2px solid #00b96b',
    hoverBackground: '#00b96b',
    hoverColor: 'white',
  },
  ghost: {
    background: 'transparent',
    color: '#4a5568',
    border: '2px solid #e2e8f0',
    hoverBackground: '#00b96b',
    hoverColor: 'white',
    hoverBorder: '#00b96b',
  }
};

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${props => variantStyles[props.$variant].background};
  color: ${props => variantStyles[props.$variant].color};
  border: ${props => variantStyles[props.$variant].border};
  border-radius: ${props => sizeStyles[props.$size].borderRadius};
  padding: ${props => sizeStyles[props.$size].padding};
  font-size: ${props => sizeStyles[props.$size].fontSize};
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 44px;
  min-width: 44px;
  white-space: nowrap;
  line-height: 1.5;

  &:hover {
    background: ${props => variantStyles[props.$variant].hoverBackground};
    color: ${props => variantStyles[props.$variant].hoverColor};
    border-color: ${props => variantStyles[props.$variant].hoverBorder || variantStyles[props.$variant].hoverBackground};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 185, 107, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    
    &:hover {
      background: ${props => variantStyles[props.$variant].background};
      color: ${props => variantStyles[props.$variant].color};
      border-color: ${props => variantStyles[props.$variant].border};
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    min-height: 40px;
    min-width: 40px;
    
    ${props => props.$size === 'large' && `
      padding: 12px 24px;
      font-size: 1rem;
    `}
  }
`;