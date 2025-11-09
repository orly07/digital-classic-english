import styled from "styled-components";
import { color, shadow, breakpoint, typography } from "../../styles/theme";

export const CardContainer = styled.div`
  background: ${color.white};
  border-radius: 20px;
  box-shadow: ${shadow.md};
  padding: 2.5rem 2rem;
  max-width: 380px;
  text-align: center;
  border: 1px solid ${color.gray[200]};
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  width: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${shadow.lg};
  }

  .card-icon {
    font-size: 2.8rem;
    color: ${color.primary};
    margin-bottom: 1.25rem;
  }

  ${breakpoint.tablet} {
  max-width: 100%;
    padding: 2rem 1.25rem;
  }
`;

export const CardTitle = styled.h3`
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: 1rem;
  color: ${color.gray[900]};
  font-size: ${typography.fontSize["2xl"]};
  font-family: ${typography.fontFamily};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  .card-description {
    color: ${color.gray[700]};
    font-size: ${typography.fontSize.base};
    line-height: 1.7;
    text-align: center;
  }
`;

export const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ValueItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0.5rem 0;
  transition: color 0.3s ease, transform 0.3s ease;

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
      transform: scale(1.15);
    }
  }
`;
