import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 1.5rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 768px) {
    margin: 2rem 0 1rem;

    .scroll-controls {
      display: none; /* Hide scroll buttons on mobile, rely on touch scroll */
    }
  }
`;
export const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const GalleryContent = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 1rem 0;
  margin-bottom: 3rem;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ScrollButton = styled.button`
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a5568;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #00b96b;
    color: white;
    border-color: #00b96b;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
`;
