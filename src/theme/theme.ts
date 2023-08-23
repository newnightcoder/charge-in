import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    white: {
      main: "#F4F8F6",
    },
    emerald: {
      main: "#369C96",
      light: "#82c4c1",
      dark: "#1d5f57",
    },
    purple: {
      main: "#304399",
      light: "#7989c6",
      dark: "#1b2877",
    },
    turquoise: {
      main: "#4BD2CA",
      light: "#d8f4f3",
      dark: "#00907e",
    },
  },
  typography:{
    fontFamily:["Poppins", "sans-serif"].join(",")
  }
});
