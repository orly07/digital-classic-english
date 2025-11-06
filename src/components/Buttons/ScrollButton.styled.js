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
  color: ${color.gray[600]};
  transition: all 0.3s ease;
  box-shadow: ${shadow.sm};
  outline: none;

  &:hover {
    background: linear-gradient(135deg, ${color.primary}, ${color.secondary || color.primary});
    color: ${color.white};
    border-color: transparent;
    box-shadow: ${shadow.md};
  }

  &:focus-visible {
    outline: 2px solid ${color.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }

  ${breakpoint.mobile} {
    width: 40px;
    height: 40px;
    font-size: ${typography.fontSize.xl};
  }
`;
