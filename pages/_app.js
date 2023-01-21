import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#4ADE7B",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono','DejaVu Sans Mono', 'Bitstream Vera Sans Mono'",
    },
    fontSizes: {
      xs: "0.75rem" /* 12px */,
      sm: "0.875rem" /* 14px */,
      base: "1rem" /* 16px */,
      md: "1rem" /* 16px */,
      lg: "1.125rem" /* 18px */,
      xl: "1.25rem" /* 20px */,
      "2xl": "1.5rem" /* 24px */,
      "3xl": "1.875rem" /* 30px */,
      "4xl": "2.25rem" /* 36px */,
      "5xl": "3rem" /* 48px */,
      "6xl": "3.75rem" /* 60px */,
      "7xl": "4.5rem" /* 72px */,
      "8xl": "6rem" /* 96px */,
      "9xl": "8rem" /* 128px */,
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </NextUIProvider>
  );
}
