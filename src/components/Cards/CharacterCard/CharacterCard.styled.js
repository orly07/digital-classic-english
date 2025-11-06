import styled from "styled-components";
import { color, shadow } from "../../../styles/theme";

export const CardContainer = styled.div`
  min-width: 350px;
  background: white;
  border-radius: 12px;
  box-shadow: ${shadow.soft};
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: fit-content;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${shadow.medium};
  }

  @media (max-width: 768px) {
    min-width: 300px;
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    min-width: 280px;
    height: fit-content;

    padding: 1rem;
  }
`;

export const CardImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin: 0 auto 1rem;
  border: 3px solid ${color.green};
  display: block;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${color.green};
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(0, 185, 107, 0.3);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  min-height: 0;
`;

export const CardTitle = styled.h6`
  font-weight: 700;
  margin: 0;
  color: ${color.gray[700]};
  font-size: 1.25rem;
  line-height: 1.3;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const LinesContainer = styled.div`
  margin: 0.5rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
  border-left: 4px solid ${color.green};
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
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${color.gray[600]};
  text-align: center;
  font-weight: 500;

  &::before {
    content: "“";
    font-size: 1.2em;
    color: ${color.green};
    margin-right: 4px;
  }

  &::after {
    content: "”";
    font-size: 1.2em;
    color: ${color.green};
    margin-left: 4px;
  }
`;

export const CardDescription = styled.p`
  color: #718096;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.$isExpanded ? "unset" : "3")};
  -webkit-box-orient: vertical;
  overflow: ${(props) => (props.$isExpanded ? "visible" : "hidden")};
  flex: 1;
  min-height: 0;

  /* Fallback for browsers that don't support line-clamp */
  @supports not (-webkit-line-clamp: 3) {
    max-height: ${(props) => (props.$isExpanded ? "none" : "4.5em")};
    overflow: hidden;
  }
`;

export const SeeMoreButton = styled.button`
  background: transparent;
  color: #00b96b;
  border: 1px solid #00b96b;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;
  margin-top: 0.5rem;
  flex-shrink: 0;
  min-height: 36px;

  &:hover {
    background: #00b96b;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 185, 107, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;
