import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
