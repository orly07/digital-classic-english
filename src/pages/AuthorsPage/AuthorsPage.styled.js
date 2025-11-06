import styled from "styled-components";
import { color, typography, breakpoint } from "../../styles/theme";

export const PageContainer = styled.div`
  padding: 6rem 2rem;
  background: ${color.gray[50]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${breakpoint.mobile} {
    padding: 4rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: ${typography.fontSize["4xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${color.primaryDark};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: ${color.gray[700]};
  font-size: ${typography.fontSize.base};
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

export const AuthorsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
