import styled from "styled-components";

export const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
  
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

  .no-results {
    text-align: center;
    padding: 3rem 2rem;
    color: #718096;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-width: 100%;

    p {
      margin: 0;
      font-size: 1.1rem;
    }

    .reset-button {
      background: #00b96b;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: #009e5a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 185, 107, 0.3);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  gap: 2rem;

  .title-section {
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #1a202c;
      margin: 0 0 0.5rem 0;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .filter-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #00b96b;
      color: white;
      padding: 0.5rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      animation: slideIn 0.3s ease;

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .clear-filter {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.2s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;


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