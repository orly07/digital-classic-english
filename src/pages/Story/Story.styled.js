import styled from 'styled-components';

export const StoryWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;

  .video-container {
    margin-bottom: 2rem;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  iframe {
    width: 100%;
    height: 500px;
    border: none;
    display: block;

    @media (max-width: 768px) {
      height: 300px;
    }

    @media (max-width: 480px) {
      height: 250px;
    }
  }

  .story-content {
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

    .description {
      font-size: 1.1rem;
      line-height: 1.7;
      color: #4a5568;
      max-width: 800px;
      margin: 0 auto 3rem;
    }

    .link-button {
      display: inline-block;
      background: #00b96b;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin-bottom: 3rem;
      transition: all 0.3s ease;

      &:hover {
        background: #009e5a;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 185, 107, 0.3);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;