import styled from "styled-components";
import { color, shadow, breakpoint, typography } from "../../../styles/theme";

export const CardContainer = styled.div`
  min-width: 350px;
  background: ${color.surface};
  border-radius: 12px;
  box-shadow: ${shadow.md};
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${color.gray[200]};
  display: flex;
  flex-direction: column;
  height: fit-content;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadow.lg};
  }

  @media ${breakpoint.mobile} {
    min-width: 280px;
    padding: 1rem;
  }
`;

export const CardImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 3px solid ${color.primary};
  display: block;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${color.primaryDark};
    transform: scale(1.03);
    box-shadow: ${shadow.md};
  }

  @media ${breakpoint.mobile} {
    width: 180px;
    height: 180px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const CardTitle = styled.h6`
  font-weight: ${typography.fontWeight.bold};
  margin: 0;
  color: ${color.gray[700]};
  font-size: ${typography.fontSize.lg};
  line-height: 1.3;

  @media ${breakpoint.mobile} {
    font-size: ${typography.fontSize.base};
  }
`;

export const LinesContainer = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, ${color.gray[50]}, ${color.gray[200]});
  border-radius: 8px;
  border-left: 4px solid ${color.primary};
  animation: fadeInUp 0.3s ease;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LinesText = styled.p`
  margin: 0;
  font-style: italic;
  font-size: ${typography.fontSize.sm};
  line-height: 1.5;
  color: ${color.gray[600]};
  text-align: center;
  font-weight: ${typography.fontWeight.medium};

  &::before,
  &::after {
    color: ${color.primary};
    font-size: 1.2em;
  }

  &::before {
    content: "“";
    margin-right: 4px;
  }

  &::after {
    content: "”";
    margin-left: 4px;
  }
`;

export const CardDescription = styled.p`
  color: ${color.gray[600]};
  font-size: ${typography.fontSize.sm};
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.$isExpanded ? "unset" : "3")};
  -webkit-box-orient: vertical;
  overflow: ${(props) => (props.$isExpanded ? "visible" : "hidden")};

  @supports not (-webkit-line-clamp: 3) {
    max-height: ${(props) => (props.$isExpanded ? "none" : "4.5em")};
    overflow: hidden;
  }
`;

export const SeeMoreButton = styled.button`
  background: transparent;
  color: ${color.primary};
  border: 1px solid ${color.primary};
  border-radius: 6px;
  padding: 8px 16px;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 0.5rem;

  &:hover {
    background: ${color.primary};
    color: ${color.white};
    transform: translateY(-1px);
    box-shadow: ${shadow.sm};
  }

  &:active {
    transform: translateY(0);
  }
`;
