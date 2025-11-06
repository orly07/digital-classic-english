import styled from "styled-components";
import { color, typography, breakpoint, shadow } from "../../styles/theme";
import heroBg from "../../assets/hero-bg.webp";
import heroBgMobile from "../../assets/classic-english-cover-mobile.webp";

export const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  background: url(${heroBg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.white};
  position: relative;
  padding: 0 2rem;
  overflow: hidden;

  /* Overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  ${breakpoint.mobile} {
    min-height: 500px;
    padding: 0 1rem;
    background: url(${heroBgMobile}) center/cover no-repeat;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;

  h1 {
    font-size: 3.5rem;
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 1.5rem;
    line-height: 1.2;

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

  > div {
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

/* =============================
   🔹 Hero Buttons
============================= */
export const HeroButton = styled.button`
  background: ${({ $primary }) =>
    $primary ? color.primary : color.transparent};
  color: ${color.white};
  border: ${({ $primary }) =>
    $primary ? "none" : `2px solid ${color.white}`};
  border-radius: 12px;
  padding: 14px 32px;
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.base};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;
  box-shadow: ${({ $primary }) => ($primary ? shadow.sm : "none")};

  &:hover {
    background: ${({ $primary }) =>
      $primary ? color.primaryDark : color.white};
    color: ${({ $primary }) => ($primary ? color.white : color.black)};
    transform: translateY(-2px);
    box-shadow: ${shadow.md};
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;