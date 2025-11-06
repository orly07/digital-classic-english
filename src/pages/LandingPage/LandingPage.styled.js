import styled from "styled-components";
import theme from "../../styles/theme";

const { color, breakpoint, shadow, typography } = theme;

export const Section = styled.section`
  padding: 4rem 2rem;
  background: ${color.background};

  .scroll-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding-top: 20px;

    ${breakpoint.mobile} {
      align-self: center;
    }
  }

  .no-results {
    text-align: center;
    padding: 3rem 2rem;
    color: ${color.gray[500]};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    min-width: 100%;

    p {
      margin: 0;
      font-size: ${typography.fontSize.lg};
      font-family: ${typography.fontFamily};
    }

    .reset-button {
      background: ${color.primary};
      color: ${color.white};
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: ${typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: ${shadow.sm};

      &:hover {
        background: ${color.primaryDark};
        transform: translateY(-2px);
        box-shadow: ${shadow.md};
      }
    }
  }

  ${breakpoint.mobile} {
    padding: 3rem 1rem;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 2rem;
  padding: 0 1rem;
  gap: 2rem;

  .title-section {
    h2 {
      font-size: ${typography.fontSize["4xl"]};
      font-weight: ${typography.fontWeight.bold};
      color: ${color.black};
      margin: 0 0 0.5rem 0;
      font-family: ${typography.fontFamily};

      ${breakpoint.mobile} {
        font-size: ${typography.fontSize["3xl"]};
      }
    }

    .filter-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: ${color.primary};
      color: ${color.white};
      padding: 0.5rem;
      border-radius: 20px;
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.medium};
      animation: slideIn 0.3s ease;

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .clear-filter {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: ${color.white};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.2s ease;

        &:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }
      }
    }
  }

  ${breakpoint.mobile} {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
  }
`;

export const ScrollContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ScrollContent = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${breakpoint.mobile} {
    gap: 1.5rem;
    padding: 0.5rem;
  }
`;
