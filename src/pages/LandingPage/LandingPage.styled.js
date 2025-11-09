import styled from "styled-components";
import theme from "../../styles/theme";

const { color, breakpoint, shadow, typography } = theme;

export const Section = styled.section`
  padding: 4rem 2rem;
  background: ${color.surface};

  .scroll-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    padding-top: 20px;
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
      font-family: ${typography.fontFamily || "inherit"};
    }

    .reset-button {
      background: ${color.primary};
      color: ${color.white};
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-weight: ${typography.fontWeight.semibold};
      cursor: pointer;
      transition: all 0.22s ease;
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
  margin: 0 auto 1rem;
  gap: 2rem;

  .title-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      font-size: ${typography.fontSize["4xl"]};
      font-weight: ${typography.fontWeight.bold};
      color: ${color.primaryDark};
      margin: 0 0 0.5rem 0;

      ${breakpoint.mobile} {
        font-size: ${typography.fontSize["3xl"]};
        text-align: center;
      }
    }

    .filter-indicator {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: ${color.primary};
      color: ${color.white};
      padding: 0.375rem 0.6rem;
      border-radius: 20px;
      font-size: ${typography.fontSize.sm};
      font-weight: ${typography.fontWeight.semibold};
      animation: slideIn 0.28s ease;

      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(-6px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .clear-filter {
        background: rgba(255, 255, 255, 0.14);
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
        transition: transform 0.15s ease, background 0.15s ease;

        &:hover {
          transform: scale(1.08);
          background: rgba(255, 255, 255, 0.2);
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
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0;
  scrollbar-width: thin;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${color.primary};
    color: ${color.primary};
    border-radius: 6px;
  }

  ${breakpoint.mobile} {
    gap: 1rem;
    padding: 0.5rem;
  }
`;
