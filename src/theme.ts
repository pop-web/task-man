import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63a4ff",
      main: "#1976d2",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff5c8d",
      main: "#d81b60",
      dark: "#a00037",
      contrastText: "#ffffff",
    },
  },
});

export default theme;
