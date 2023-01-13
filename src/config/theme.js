import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Merriweather Sans, Arial, sans-serif",
  },
  palette: {
    primary: {
      main: "#556cd6",
      heading: "#6E1704",
    },
    secondary: {
      main: "#19857b",
    },
    circlebg: {
      line1: "#b21218",
      line2: "#d0671c",
      line3: "#bfae9f",
    },
    error: {
      main: red.A400,
    },
    background: {
      main: "#d71920",
      header: "#fff",
    },
  },
});

export default theme;
