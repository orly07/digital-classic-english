import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: #fff;
  color: #222;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #1a202c;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  h2 {
    margin-top: 3rem;
    font-size: 2.25rem;
    font-weight: 700;
    color: #1a202c;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    max-width: 700px;
    margin: 1rem auto;
    line-height: 1.7;
    color: #4a5568;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const MissionVisionValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-top: 3rem;
  }
`;

export const TeamSection = styled.section`
  background: #f8f9fa;
  padding: 5rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #1a202c;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
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

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    
    .team-container {
      gap: 2rem;
    }
  }
`;

export const ContactSection = styled.section`
  background: #1a202c;
  color: #fff;
  padding: 5rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    max-width: 600px;
    margin: 0.75rem auto;
    line-height: 1.6;
    color: #e2e8f0;
  }

  .contact-info {
    margin: 2rem auto 3rem;
    max-width: 400px;

    p {
      margin: 0.5rem 0;
      font-size: 1.1rem;
    }

    strong {
      color: #00b96b;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;