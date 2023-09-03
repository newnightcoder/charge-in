import { Grid, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  span?: string | number;
}
const Section = ({ children, span }: SectionProps) => {
  const sectionStyle = {
    width: "100%",
    bgcolor: "#FFF",
    p: 4,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
    // overflowX: "scroll",
  };

  return (
    <Grid
      container
      item
      sx={{
        gridColumn: { xs: "", md: span ?? "" },
        borderRadius: "8px",
        overflow: "auto",
      }}
    >
      <Paper elevation={2} sx={sectionStyle}>
        {children}
      </Paper>
    </Grid>
  );
};

export default Section;
