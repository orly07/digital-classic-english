import styled from "styled-components";
import theme from "../../styles/theme";

const { breakpoint, color, shadow, typography } = theme;

export const StoryWrapper = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 100px auto 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${breakpoint.mobile} {
    padding: 1rem;
  }
`;

export const VideoContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: ${shadow.lg};
  background: ${color.gray[100]};

  iframe {
    width: 100%;
    height: 500px;
    border: none;
    display: block;

    ${breakpoint.tablet} {
      height: 400px;
    }

    ${breakpoint.mobile} {
      height: 280px;
    }

    @media (max-width: 480px) {
      height: 240px;
    }
  }
`;

export const StoryContent = styled.div`
  text-align: center;

  h1 {
    font-size: ${typography.fontSize["4xl"]};
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: 0.5rem;
    color: ${color.black};
    font-family: ${typography.fontFamily};

    ${breakpoint.tablet} {
      font-size: ${typography.fontSize["3xl"]};
    }

    ${breakpoint.mobile} {
      font-size: ${typography.fontSize["2xl"]};
    }
  }

  .author {
    color: ${color.primary};
    font-size: ${typography.fontSize.lg};
    font-weight: ${typography.fontWeight.semibold};
    margin-bottom: 1.5rem;
  }

  .description {
    font-size: ${typography.fontSize.base};
    line-height: 1.8;
    color: ${color.gray[600]};
    max-width: 800px;
    margin: 0 auto 2.5rem;
  }
`;

export const NotFound = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  margin-top: 80px;

  h2 {
    color: ${color.gray[600]};
    font-size: ${typography.fontSize["2xl"]};
    font-weight: ${typography.fontWeight.semibold};
  }
`;
