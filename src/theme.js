import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#0097b2",
      strong: "#004D40",
    },
    secondary: {
      main: "#ffC107",
      light: "#ffe596",
    },
    third: {
      main: "#7a7a7a",
      light: "#e9e6ed",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontSize: 60,
    },
    h2: {
      fontSize: 40,
    },
    h3: {
      fontSize: 32,
    },
    h4: {
      fontSize: 20,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
