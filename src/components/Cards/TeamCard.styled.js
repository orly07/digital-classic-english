import styled from "styled-components";
import { color, shadow, breakpoint, typography } from "../../styles/theme";

export const CardContainer = styled.div`
  background: ${color.white};
  border-radius: 16px;
  box-shadow: ${shadow.md};
  max-width: 320px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease, transform 0.3s ease;
  border: 1px solid ${color.gray[200]};
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadow.lg};
  }

  ${breakpoint.mobile} {
    padding: 1.5rem;
    max-width: 100%;
  }
`;

export const TeamImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1.5rem;
  border: 4px solid ${color.primary};
  transition: transform 0.3s ease, border-color 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
    border-color: ${color.primaryDark};
  }

  ${breakpoint.mobile} {
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
  font-weight: ${typography.fontWeight.bold};
  color: ${color.black};
  font-size: ${typography.fontSize.xl};
  margin: 0;
`;

export const MemberRole = styled.p`
  color: ${color.primary};
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.base};
  margin: 0;
`;

export const MemberDescription = styled.p`
  color: ${color.gray[600]};
  margin: 0;
  font-size: ${typography.fontSize.sm};
  line-height: 1.6;
  overflow: hidden;
  text-align: center;

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
  color: ${color.primary};
  cursor: pointer;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.semibold};
  margin-top: 0.25rem;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: ${color.primaryDark};
    text-decoration: underline;
    transform: translateY(-1px);
  }
`;
