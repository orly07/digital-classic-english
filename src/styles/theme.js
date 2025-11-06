
export const breakpoint = {
  mobile: "@media (max-width: 768px)",
  tablet: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px)",
};

export const color = {
  transparent: "transparent",
  white: "#ffffff",
  black: "#1a202c",

  primary: "#00b96b",
  primaryDark: "#009e5c",
  primaryLight: "#a7f3d0",

  secondary: "#059669", 
  accent: "#86efac", 

  success: "#16a34a",
  warning: "#f59e0b",
  danger: "#ef4444",
  info: "#22d3ee",

  background: "#f9fafb",
  surface: "#ffffff",

  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

export const shadow = {
  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
  sm: "0 2px 4px rgba(0, 0, 0, 0.08)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 20px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 40px rgba(0, 0, 0, 0.12)",
};

export const typography = {
  fontFamily: "'Inter', 'Roboto', sans-serif",
  fontSize: {
    xs: "0.75rem",   
    sm: "0.875rem",  
    base: "1rem",    
    lg: "1.125rem",  
    xl: "1.25rem",   
    "2xl": "1.5rem", 
    "3xl": "1.875rem", 
    "4xl": "2.25rem",
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

const theme = {
  breakpoint,
  color,
  shadow,
  typography,
};

export default theme;
