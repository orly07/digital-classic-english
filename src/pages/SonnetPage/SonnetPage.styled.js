import styled from "styled-components";
import { color, shadow, breakpoint, typography } from "../../styles/theme";

export const SonnetDetailWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 80px;

  ${breakpoint.mobile} {
    padding: 1rem;
  }
`;

export const SonnetContent = styled.div`
  text-align: center;

  h1 {
    font-size: ${typography.fontSize["4xl"]};
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    color: ${color.gray[700]};
    font-family: ${typography.fontFamily};

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["3xl"]};
    }

    @media (max-width: 480px) {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  .author {
    color: ${color.primaryDark};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.semibold};
    margin-bottom: 2rem;
    font-family: ${typography.fontFamily};
  }
`;

export const TopControlsContainer = styled.div`
  margin-bottom: 3rem;
`;

export const ControlButtonsTop = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;

  svg {
    font-size: 1em;
    vertical-align: middle;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

export const SettingsPanel = styled.div`
  background: ${color.background};
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${color.gray[200]};
  box-shadow: ${shadow.sm};
  animation: slideDown 0.3s ease;
  margin: 0 auto;
  max-width: 500px;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const VoiceSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .setting-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: ${typography.fontWeight.semibold};
      color: ${color.gray[700]};
      font-size: ${typography.fontSize.sm};
      font-family: ${typography.fontFamily};
    }

    select,
    input[type="range"] {
      padding: 0.5rem;
      border: 2px solid ${color.gray[200]};
      border-radius: 6px;
      background: ${color.white};
      transition: all 0.3s ease;
      font-family: ${typography.fontFamily};

      &:focus {
        outline: none;
        border-color: ${color.primary};
        box-shadow: 0 0 0 3px ${color.primaryLight};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    input[type="range"] {
      padding: 0;
      height: 6px;
      background: ${color.gray[200]};
      border: none;
      border-radius: 3px;
      outline: none;

      &::-webkit-slider-thumb {
        appearance: none;
        width: 18px;
        height: 18px;
        background: ${color.primary};
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: ${color.primaryDark};
          transform: scale(1.1);
        }
      }

      &::-moz-range-thumb {
        width: 18px;
        height: 18px;
        background: ${color.primary};
        border-radius: 50%;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease;

        &:hover {
          background: ${color.primaryDark};
          transform: scale(1.1);
        }
      }
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const SonnetText = styled.div`
  text-align: center;
  margin: 3rem 0;
  line-height: 1.8;
  font-size: ${typography.fontSize.lg};
  color: ${color.gray[700]};
  font-style: italic;
  background: linear-gradient(135deg, ${color.background}, ${color.gray[100]});
  padding: 2.5rem;
  border-radius: 16px;
  border-left: 4px solid ${color.primary};
  font-family: ${typography.fontFamily};

  .sonnet-line {
    margin: 1.5rem 0;
    line-height: 1.6;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${breakpoint.mobile} {
    padding: 2rem 1.5rem;
    font-size: ${typography.fontSize.base};
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    font-size: ${typography.fontSize.sm};
  }
`;

export const AudioControls = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: ${color.white};
  border-radius: 16px;
  box-shadow: ${shadow.lg};
  border: 1px solid ${color.gray[200]};

  .browser-support {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${color.gray[200]};
    
    small {
      color: ${color.gray[500]};
      font-style: italic;
      font-family: ${typography.fontFamily};
    }
  }

  ${breakpoint.mobile} {
    padding: 1.5rem;
  }
`;

export const PlaybackControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
