import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";

import App from "./App";

let theme = createTheme({
  palette: {
    primary: {
      dark: "#008094",
      main: "#00838f",
      light: "#00b8d4",
    },
    secondary: {
      dark: "#618833",
      main: "#8bc34a",
      light: "#a2cf6e",
    },
    tertiary: {
      main: "#005967",
    },
  },
});

theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

export default theme;
