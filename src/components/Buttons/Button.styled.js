import styled from "styled-components";
import theme from "../../styles/theme";

const { color, shadow, typography, breakpoint } = theme;

const sizeStyles = {
  small: {
    padding: "8px 16px",
    fontSize: typography.fontSize.sm,
    borderRadius: "6px",
  },
  medium: {
    padding: "12px 24px",
    fontSize: typography.fontSize.base,
    borderRadius: "8px",
  },
  large: {
    padding: "14px 32px",
    fontSize: typography.fontSize.lg,
    borderRadius: "12px",
  },
};

const variantStyles = {
  primary: {
    background: color.primary,
    color: color.white,
    border: "none",
    hoverBackground: color.primaryDark,
    hoverColor: color.white,
  },
  secondary: {
    background: color.transparent,
    color: color.white,
    border: `2px solid ${color.white}`,
    hoverBackground: color.white,
    hoverColor: color.gray[900],
  },
  outline: {
    background: color.transparent,
    color: color.primary,
    border: `2px solid ${color.primary}`,
    hoverBackground: color.primary,
    hoverColor: color.white,
  },
  ghost: {
    background: color.transparent,
    color: color.gray[600],
    border: `2px solid ${color.gray[200]}`,
    hoverBackground: color.primary,
    hoverColor: color.white,
    hoverBorder: color.primary,
  },
};

export const ButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ $variant }) => variantStyles[$variant].background};
  color: ${({ $variant }) => variantStyles[$variant].color};
  border: ${({ $variant }) => variantStyles[$variant].border};
  border-radius: ${({ $size }) => sizeStyles[$size].borderRadius};
  padding: ${({ $size }) => sizeStyles[$size].padding};
  font-size: ${({ $size }) => sizeStyles[$size].fontSize};
  font-weight: ${typography.fontWeight.semibold};
  font-family: ${typography.fontFamily};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  min-height: 44px;
  min-width: 44px;
  white-space: nowrap;
  line-height: 1.5;
  box-shadow: ${shadow.sm};

  &:hover {
    background: ${({ $variant }) => variantStyles[$variant].hoverBackground};
    color: ${({ $variant }) => variantStyles[$variant].hoverColor};
    border-color: ${({ $variant }) =>
      variantStyles[$variant].hoverBorder || variantStyles[$variant].hoverBackground};
    transform: translateY(-2px);
    box-shadow: ${shadow.md};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;

    &:hover {
      background: ${({ $variant }) => variantStyles[$variant].background};
      color: ${({ $variant }) => variantStyles[$variant].color};
      border-color: ${({ $variant }) => variantStyles[$variant].border};
    }
  }

  ${breakpoint.mobile} {
    min-height: 40px;
    min-width: 40px;

    ${({ $size }) =>
      $size === "large" &&
      `
      padding: 12px 24px;
      font-size: ${typography.fontSize.base};
    `}
  }
`;
