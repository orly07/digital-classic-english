import styled from "styled-components";
import { color, shadow, breakpoint } from "../../styles/theme";

export const CardContainer = styled.div`
  background: ${color.white};
  border-radius: 16px;
  box-shadow: ${shadow.soft};
  width: 100%;
  max-width: 320px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadow.medium};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
  }
`;

export const TeamImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  margin: 0 auto 1.5rem;
  border: 4px solid ${color.green};
  display: block;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }

  @media ${breakpoint.mobile} {
    width: 140px;
    height: 140px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MemberName = styled.h4`
  font-weight: 700;
  margin: 0;
  color: ${color.black};
  font-size: 1.375rem;
  line-height: 1.3;
`;

export const MemberRole = styled.p`
  color: ${color.green};
  font-weight: 600;
  margin: 0;
  font-size: 1rem;
  line-height: 1.4;
`;

export const MemberDescription = styled.p`
  color: ${color.gray[600]};
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  overflow: hidden;

  ${({ $expanded }) =>
    !$expanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `}
`;

export const ToggleButton = styled.button`
  border: none;
  background: none;
  color: ${color.green};
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 0.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${color.darkGreen};
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;
