import styled from "styled-components";
import theme from "../../styles/theme";

const { breakpoint, color, shadow, typography } = theme;

export const StoryWrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;

  .video-container {
    margin-bottom: 2rem;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: ${shadow.lg};
  }

  iframe {
    width: 100%;
    height: 500px;
    border: none;
    display: block;

    ${breakpoint.mobile} {
      height: 300px;
    }

    @media (max-width: 480px) {
      height: 250px;
    }
  }

  .story-content {
    text-align: center;

    h1 {
      font-size: ${typography.fontSize["4xl"]};
      font-weight: ${typography.fontWeight.bold};
      margin-bottom: 0.5rem;
      color: ${color.black};
      font-family: ${typography.fontFamily};

      ${breakpoint.mobile} {
        font-size: ${typography.fontSize["3xl"]};
      }

      @media (max-width: 480px) {
        font-size: ${typography.fontSize["2xl"]};
      }
    }

    .author {
      color: ${color.primary};
      font-size: ${typography.fontSize.lg};
      font-weight: ${typography.fontWeight.semibold};
      margin-bottom: 2rem;
      font-family: ${typography.fontFamily};
    }

    .description {
      font-size: ${typography.fontSize.base};
      line-height: 1.7;
      color: ${color.gray[600]};
      max-width: 800px;
      margin: 0 auto 3rem;
      font-family: ${typography.fontFamily};
    }

    .link-button {
      display: inline-block;
      background: ${color.primary};
      color: ${color.white};
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: ${typography.fontWeight.semibold};
      margin-bottom: 3rem;
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
    padding: 1rem;
  }
`;
