import styled from "styled-components";
import heroBg from "../../assets/hero-bg.webp";
import heroBgMobile from "../../assets/classic-english-cover-mobile.webp";

export const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  background: url(${heroBg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  padding: 0 2rem;
  overflow: hidden;

  /* 🔹 Overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4); /* adjust opacity for darkness */
    z-index: 0;
  }

  @media (max-width: 768px) {
    min-height: 500px;
    padding: 0 1rem;
    background: url(${heroBgMobile}) center/cover no-repeat;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1; /* ensures content is above overlay */
  text-align: center;
  max-width: 800px;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    opacity: 0.9;

    @media (max-width: 768px) {
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

export const HeroButton = styled.button`
  background: ${(props) => (props.$primary ? "#00b96b" : "transparent")};
  color: white;
  border: ${(props) => (props.$primary ? "none" : "2px solid white")};
  border-radius: 12px;
  padding: 14px 32px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 160px;

  &:hover {
    background: ${(props) => (props.$primary ? "#009e5a" : "white")};
    color: ${(props) => (props.$primary ? "white" : "#333")};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 280px;
  }
`;
