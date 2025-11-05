import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SonnetDetailWrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 80px;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00b96b;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    background: rgba(0, 185, 107, 0.1);
    transform: translateX(-4px);
  }
`;

export const SonnetContent = styled.div`
  text-align: center;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: #1a202c;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  .author {
    color: #00b96b;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 2rem;
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

// Add this new styled component for button content
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
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
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
      font-weight: 600;
      color: #4a5568;
      font-size: 0.9rem;
    }

    select, input[type="range"] {
      padding: 0.5rem;
      border: 2px solid #e2e8f0;
      border-radius: 6px;
      background: white;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: #00b96b;
        box-shadow: 0 0 0 3px rgba(0, 185, 107, 0.1);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    input[type="range"] {
      padding: 0;
      height: 6px;
      background: #e2e8f0;
      border: none;
      border-radius: 3px;
      outline: none;

      &::-webkit-slider-thumb {
        appearance: none;
        width: 18px;
        height: 18px;
        background: #00b96b;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease;

        &:hover {
          background: #009e5a;
          transform: scale(1.1);
        }
      }

      &::-moz-range-thumb {
        width: 18px;
        height: 18px;
        background: #00b96b;
        border-radius: 50%;
        cursor: pointer;
        border: none;
        transition: all 0.2s ease;

        &:hover {
          background: #009e5a;
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
  font-size: 1.2rem;
  color: #4a5568;
  font-style: italic;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  padding: 2.5rem;
  border-radius: 16px;
  border-left: 4px solid #00b96b;

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

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    font-size: 1rem;
  }
`;

export const AudioControls = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);

  .browser-support {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #e2e8f0;
    
    small {
      color: #718096;
      font-style: italic;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const PlaybackControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;