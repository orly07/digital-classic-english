import styled from "styled-components";
import { color, shadow, breakpoint, typography } from "../../styles/theme";

export const CardContainer = styled.div`
  background: ${color.white};
  border-radius: 16px;
  box-shadow: ${shadow.md};
  padding: 2.5rem 2rem;
  max-width: 380px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid ${color.gray[200]};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadow.lg};
  }

  .card-icon {
    font-size: 2.5rem;
    color: ${color.primary};
    margin-bottom: 1rem;
  }

  @media ${breakpoint.mobile} {
    padding: 2rem 1.25rem;
  }
`;

export const CardTitle = styled.h3`
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: 1.5rem;
  color: ${color.gray[800]};
  font-size: ${typography.fontSize["2xl"]};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const ValueItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  svg {
    font-size: 1.25rem;
    color: ${color.primary};
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  span {
    color: ${color.gray[700]};
    font-weight: ${typography.fontWeight.medium};
  }

  &:hover {
    span {
      color: ${color.primary};
    }

    svg {
      transform: scale(1.1);
    }
  }
`;
