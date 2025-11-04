import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #1a202c;
  color: #fff;
  text-align: center;
  padding: 3rem 2rem 2rem;

  p {
    margin-bottom: 1.5rem;
    color: #a0aec0;
    font-size: 1rem;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 1.5rem;

    svg {
      cursor: pointer;
      transition: all 0.3s ease;
      color: #a0aec0;

      &:hover {
        color: #00b96b;
        transform: translateY(-2px);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;

    .socials {
      gap: 1rem;
      font-size: 1.25rem;
    }
  }
`;