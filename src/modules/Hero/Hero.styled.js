import styled from "styled-components";
import { color, typography, breakpoint } from "../../styles/theme";
import heroBg from "../../assets/hero-bg.webp";
import heroBgMobile from "../../assets/classic-english-cover-mobile.webp";

export const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  color: ${color.white};
  text-align: center;
  background: url(${heroBg}) center/cover no-repeat fixed;
  background-attachment: fixed;
  padding: 0 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
    z-index: 0;
  }

  ${breakpoint.mobile} {
    background: url(${heroBgMobile}) center/cover no-repeat;
    background-attachment: scroll;
    min-height: 500px;
    padding: 0 1rem;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
  padding: 2rem;

  h1 {
    font-size: 3.5rem;
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

    ${breakpoint.mobile} {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.4rem;
    font-weight: ${typography.fontWeight.normal};
    margin-bottom: 2.5rem;
    line-height: 1.6;
    opacity: 0.9;

    ${breakpoint.mobile} {
      font-size: 1.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }
`;
