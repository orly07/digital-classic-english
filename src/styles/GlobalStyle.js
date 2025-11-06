import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  

  *, *:before, *:after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    line-height: 1.6;
    scroll-behavior: smooth;
    color: #333;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  p, h1, h2, h3, h4, h5, h6, span, div {
    user-select: text;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  svg, img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #00b96b;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #009e5a;
  }

  *:focus {
    outline: 2px solid #00b96b;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    html { font-size: 14px; }
    button, a { min-height: 44px; min-width: 44px; }
  }

  @media (max-width: 480px) {
    html { font-size: 13px; }
  }

  button, a, .nav-item {
    transition: all 0.3s ease;
  }

  button:focus-visible,
  a:focus-visible {
    outline: 2px solid #00b96b;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

export default GlobalStyle;
