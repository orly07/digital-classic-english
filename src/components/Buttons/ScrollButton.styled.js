import styled from "styled-components";
import theme from "../../styles/theme";
const { color, shadow, typography, breakpoint } = theme;

export const ScrollButtonContainer = styled.button`
  background: ${color.white};
  border: 2px solid ${color.gray[200]};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${typography.fontSize["2xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${color.gray[600]};
  transition: all 0.3s ease;
  box-shadow: ${shadow.sm};
  min-height: 48px;
  min-width: 48px;

  &:hover {
    background: ${color.primary};
    color: ${color.white};
    border-color: ${color.primary};
    transform: scale(1.05);
    box-shadow: ${shadow.md};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      background: ${color.white};
      color: ${color.gray[600]};
      border-color: ${color.gray[200]};
      transform: none;
      box-shadow: none;
    }
  }

  ${breakpoint.mobile} {
    width: 40px;
    height: 40px;
    min-height: 40px;
    min-width: 40px;
    font-size: ${typography.fontSize.xl};
  }
`;
