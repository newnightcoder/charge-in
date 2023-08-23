import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    white: {
      main: string;
    };
    emerald: {
      main: string;
      light: string;
      dark: string;
    };
    purple: {
      main: string;
      light: string;
      dark: string;
    };
    turquoise: {
      main: string;
      light: string;
      dark: string;
    };
  }

  interface PaletteOptions {
    white: {
      main: React.CSSProperties["color"];
    };
    emerald: {
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
    };
    purple: {
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
    };
    turquoise: {
      main: React.CSSProperties["color"];
      light: React.CSSProperties["color"];
      dark: React.CSSProperties["color"];
    };
  }
}
