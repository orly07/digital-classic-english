import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 380px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }

  .card-icon {
    font-size: 2.5rem;
    color: #00b96b;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    max-width: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a202c;
  font-size: 1.5rem;
  line-height: 1.3;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin: 0;
`;

export const ValueItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    font-size: 1.25rem;
    color: #00b96b;
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  span {
    color: #4a5568;
    font-weight: 500;
    line-height: 1.5;
  }

  &:hover {
    span {
      color: #1a202c;
    }

    svg {
      transform: scale(1.1);
    }
  }
`;