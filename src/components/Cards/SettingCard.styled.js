import styled from 'styled-components';

export const CardContainer = styled.div`
  min-width: 350px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    min-width: 300px;
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    min-width: 280px;
    padding: 1rem;
  }
`;

export const CardImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
  margin: 0 auto 1rem;
  border: 3px solid #00b96b;
  display: block;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CardTitle = styled.h6`
  font-weight: 700;
  margin: 0;
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CardDescription = styled.p`
  color: #718096;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;