import styled from "styled-components";
import { color, typography, breakpoint, shadow } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background: ${color.gray[900]};
  color: ${color.white};
  text-align: center;
  padding: 3rem 2rem 2rem;
  box-shadow: ${shadow.thin};
  border-top: 1px solid ${color.gray[800]};
  transition: background 0.3s ease;

  p {
    margin-bottom: 1.5rem;
    color: ${color.gray[400]};
    font-size: ${typography.fontSize.base};
    line-height: 1.6;
    letter-spacing: 0.2px;

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize.sm};
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 1.5rem;

    ${breakpoint.mobile} {
      gap: 1rem;
      font-size: 1.25rem;
    }
  }

  ${breakpoint.tablet} {
    padding: 2.5rem 1.5rem;
  }

  ${breakpoint.mobile} {
    padding: 2rem 1rem;
  }
`;

export const SocialIcon = styled.span`
  color: ${color.gray[400]};
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${color.primary};
    transform: translateY(-3px) scale(1.05);
    filter: drop-shadow(0 2px 6px rgba(0, 185, 107, 0.3));
  }

  &:focus-visible {
    outline: 2px solid ${color.primary};
    outline-offset: 4px;
    border-radius: 6px;
  }
`;
