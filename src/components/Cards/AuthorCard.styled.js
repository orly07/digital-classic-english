import styled from "styled-components";
import { color, shadow, typography, breakpoint } from "../../styles/theme";

export const CardContainer = styled.div`
  background: ${color.white};
  border-radius: 18px;
  box-shadow: ${shadow.md};
  padding: 2rem;
  text-align: center;
  border: 1px solid ${color.gray[200]};
  max-width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${shadow.lg};
  }

  @media ${breakpoint.mobile} {
    padding: 1.5rem;
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${color.primary};
  background: ${color.gray[100]};
  margin-bottom: 1.2rem;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }

  @media ${breakpoint.mobile} {
    width: 140px;
    height: 140px;
  }
`;

export const AuthorName = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${color.black};
  margin-bottom: 0.75rem;
`;

export const AuthorDescription = styled.p`
  color: ${color.gray[700]};
  font-size: ${typography.fontSize.sm};
  line-height: 1.6;
  text-align: justify;
  overflow: hidden;
  margin-bottom: 0.75rem;
  flex-grow: 1;

  ${({ $expanded }) =>
    !$expanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  `}
`;

export const ToggleButton = styled.button`
  border: none;
  background: none;
  color: ${color.primary};
  cursor: pointer;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  margin-top: 0.25rem;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${color.primaryDark};
    text-decoration: underline;
    transform: scale(1.05);
  }
`;
