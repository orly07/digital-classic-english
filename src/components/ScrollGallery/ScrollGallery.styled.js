import styled from "styled-components";
import { color, typography, breakpoint } from "../../styles/theme";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 1.5rem;
  position: relative;

  h3 {
    font-size: ${typography.fontSize["3xl"]};
    font-weight: ${typography.fontWeight.bold};
    color: ${color.gray[900]};
    margin: 0;
    text-transform: capitalize;

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  ${breakpoint.mobile} {
    margin: 2rem 0 1rem;
  }
`;

export const GalleryContent = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 1rem 0;
  margin-bottom: 2rem;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }

  ${breakpoint.mobile} {
    gap: 1rem;
  }
`;

export const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
