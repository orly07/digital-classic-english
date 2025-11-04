import styled from "styled-components";

export const CardContainer = styled.div`
  min-width: 280px;
  max-width: 320px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    min-width: 260px;
    max-width: 280px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
`;

export const CardContent = styled.div`
  padding: 1.5rem;

  h5 {
    font-weight: 700;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    color: #1a202c;
    line-height: 1.3;
  }

  p {
    color: #718096;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const CardAuthor = styled.small`
  color: #00b96b;
  font-weight: 600;
  font-size: 0.85rem;
`;