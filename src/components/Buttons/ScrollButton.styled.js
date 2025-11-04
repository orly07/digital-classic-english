import styled from 'styled-components';

export const ScrollButtonContainer = styled.button`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a5568;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 48px;
  min-width: 48px;

  &:hover {
    background: #00b96b;
    color: white;
    border-color: #00b96b;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 185, 107, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    &:hover {
      background: white;
      color: #4a5568;
      border-color: #e2e8f0;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    min-height: 40px;
    min-width: 40px;
    font-size: 1.25rem;
  }
`;