import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#0097b2",
      strong: "#004D40",
    },
    secondary: {
      main: "#ffC107",
    },
    third: {
      main: "#7a7a7a",
    },
    error: {
      main: red.A400,
    },
    typography: {
      h1: {
        fontSize: 28,
      },
      h2: {
        fontSize: 24,
      },
      h3: {
        fontSize: 20,
      },
      body1: {
        fontSize: 16,
      },
      body2: {
        fontSize: 14,
      },
      body3: {
        fontSize: 12,
      },
    },
  },
});

export default theme;
