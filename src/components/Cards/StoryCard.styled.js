// src/components/Cards/StoryCard.styled.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, shadow, breakpoint, typography } from "../../styles/theme";

export const CardContainer = styled(Link)`
  min-width: 300px;
  max-width: 340px;
  background: ${color.surface};
  border-radius: 16px;
  box-shadow: ${shadow.sm};
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid ${color.gray[200]};

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadow.lg};
  }

  ${breakpoint.mobile} {
    min-width: 280px;
    max-width: 300px;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  font-family: ${typography.fontFamily};

  h5 {
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 0.75rem;
    font-size: ${typography.fontSize.base};
    color: ${color.gray[700]};
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: ${color.gray[500]};
    font-size: ${typography.fontSize.sm};
    line-height: 1.5;
    margin-bottom: 1rem;
    height: 40px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const CardAuthor = styled.small`
  color: ${color.primary};
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.sm};
  display: block;
  margin-bottom: 1rem;
  font-family: ${typography.fontFamily};
`;

export const CardLink = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${color.primary};
  color: ${color.white};
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.sm};
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  box-shadow: ${shadow.xs};

  &:hover {
    background: ${color.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${shadow.md};
  }
`;
