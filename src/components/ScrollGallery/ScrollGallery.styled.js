import styled from "styled-components";
import { color, shadow, typography, breakpoint } from "../../styles/theme";

export const GalleryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0 1.5rem;
  position: relative;

  h3 {
    font-size: ${typography.fontSize["3xl"]};
    font-weight: ${typography.fontWeight.bold};
    color: ${color.black};
    margin: 0;

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  ${breakpoint.mobile} {
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
  gap: 1.5rem;
  overflow-x: auto;
  overflow-y: auto; /* allows vertical overflow */
  padding: 1rem 0;
  margin-bottom: 3rem;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  /* Hide scrollbar for Webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpoint.mobile} {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

export const ScrollButton = styled.button`
  background: ${color.white};
  border: 2px solid ${color.gray[200]};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${typography.fontSize["2xl"]};
  font-weight: ${typography.fontWeight.bold};
  color: ${color.gray[600]};
  transition: all 0.3s ease;
  box-shadow: ${shadow.md};

  &:hover {
    background: ${color.primary};
    color: ${color.white};
    border-color: ${color.primary};
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${breakpoint.mobile} {
    width: 40px;
    height: 40px;
    font-size: ${typography.fontSize.xl};
  }
`;
