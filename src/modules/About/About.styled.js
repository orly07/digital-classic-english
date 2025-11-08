import styled from "styled-components";
import { color, typography, breakpoint } from "../../styles/theme";

export const AboutSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: ${color.surface};
  color: ${color.black};

  h1 {
    font-size: ${typography.fontSize["4xl"]};
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 1rem;
    color: ${color.black};

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["3xl"]};
    }

    @media (max-width: 480px) {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  h2 {
    margin-top: 3rem;
    font-size: ${typography.fontSize["3xl"]};
    font-weight: ${typography.fontWeight.bold};
    color: ${color.black};

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  p {
    max-width: 700px;
    margin: 1rem auto;
    line-height: 1.7;
    color: ${color.gray[600]};
    font-size: ${typography.fontSize.lg};
  }

  ${breakpoint.mobile} {
    padding: 4rem 2rem;
  }
`;

export const MissionVisionValues = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  padding: 0 2rem;

  ${breakpoint.mobile} {
    gap: 2rem;
    margin-top: 3rem;
    padding: 0 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ${breakpoint.tablet} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TeamSection = styled.section`
  background: ${color.gray[50]};
  padding: 5rem 2rem;
  text-align: center;

  h2 {
    font-size: ${typography.fontSize["3xl"]};
    font-weight: ${typography.fontWeight.bold};
    color: ${color.black};
    margin-bottom: 1rem;

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    margin-top: 3rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }

  ${breakpoint.mobile} {
    padding: 4rem 1rem;

    .team-container {
      gap: 2rem;
    }
  }
`;

/* =============================
   🔹 Contact Section
============================= */
export const ContactSection = styled.section`
  background: ${color.black};
  color: ${color.white};
  padding: 5rem 2rem;
  text-align: center;

  h2 {
    font-size: ${typography.fontSize["3xl"]};
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 1.5rem;

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  p {
    max-width: 600px;
    margin: 0.75rem auto;
    line-height: 1.6;
    color: ${color.gray[200]};
  }

  .contact-info {
    margin: 2rem auto 3rem;
    max-width: 400px;

    p {
      margin: 0.5rem 0;
      font-size: ${typography.fontSize.lg};
    }

    strong {
      color: ${color.primary};
    }
  }

  ${breakpoint.mobile} {
    padding: 4rem 1rem;
  }
`;
