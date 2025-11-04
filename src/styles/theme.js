// src/styles/theme.js
export const breakpoint = {
  mobile: "@media only screen and (max-width: 768px)",
  tablet: "@media only screen and (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media only screen and (min-width: 1025px)",
};

export const color = {
  transparent: "rgba(0,0, 0,0)",
  white: "#ffffff",
  black: "#1a202c",
  green: "#00b96b",
  darkGreen: "#009e6a",
  paleGreen: "#75975e",
  background: "#f8f9fa",
  warning: "#FF9800",
  danger: "#f44336",
  blue: "#2563eb",
  orange: "#ea580c",
  gray: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  }
};

export const shadow = {
  thin: "0 2px 4px rgba(0, 0, 0, 0.05)",
  soft: "0 4px 6px rgba(0, 0, 0, 0.07)",
  medium: "0 8px 25px rgba(0, 0, 0, 0.15)",
  large: "0 20px 40px rgba(0, 0, 0, 0.1)",
};

export default {
  breakpoint,
  color,
  shadow
};