import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto 2rem;
    padding: 0 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .scroll-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-top: 20px;

    @media (max-width: 768px) {
      align-self: center;
    }
  }
`;

export const ScrollContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ScrollContent = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0.5rem;
  }
`;