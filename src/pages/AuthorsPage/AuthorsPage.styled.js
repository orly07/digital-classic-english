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
  font-size: ${typography.fontSize["2xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${color.black};
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;
