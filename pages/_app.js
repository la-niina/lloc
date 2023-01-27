import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#4ADE7B",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Analytics />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
