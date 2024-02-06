import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    // mode: "dark",
    primary: {
      main: "#9155FD",
    },
    secondary: {
      main: "#f48fb1",
    },
    white: {
      main: "#fff",
    },
    orange: {
      main: "#ffdb0f",
    },

    background: {
      default: "",
      // paper: '#121019',
      //paper: "rgb(10, 10, 53)",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9155FD",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

export { customTheme, darkTheme };
