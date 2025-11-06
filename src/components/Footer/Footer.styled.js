import styled from "styled-components";
import { color, typography, breakpoint, shadow } from "../../styles/theme";

export const FooterContainer = styled.footer`
  background: ${color.gray[900]};
  color: ${color.white};
  text-align: center;
  padding: 3rem 2rem 2rem;
  box-shadow: ${shadow.thin};

  p {
    margin-bottom: 1.5rem;
    color: ${color.gray[400]};
    font-size: ${typography.fontSize.base};
    line-height: 1.6;

    @media ${breakpoint.mobile} {
      font-size: ${typography.fontSize.sm};
    }
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 1.5rem;

    svg {
      cursor: pointer;
      transition: all 0.3s ease;
      color: ${color.gray[400]};

      &:hover {
        color: ${color.green};
        transform: translateY(-3px);
        filter: drop-shadow(0 2px 6px rgba(0, 185, 107, 0.3));
      }
    }
  }

  @media ${breakpoint.tablet} {
    padding: 2.5rem 1.5rem;
  }

  @media ${breakpoint.mobile} {
    padding: 2rem 1rem;

    .socials {
      gap: 1rem;
      font-size: 1.25rem;
    }
  }
`;
