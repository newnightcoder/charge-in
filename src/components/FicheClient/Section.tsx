import { Grid, Paper } from "@mui/material";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  span?: string | number;
}
const Section = ({ children, span }: SectionProps) => {
  const sectionStyle = {
    width: "inherit",
    bgcolor: "#FFF",
    p: 4,
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
  };

  return (
    <Grid container item sx={{ gridColumn: span ?? "" }}>
      <Paper elevation={2} sx={sectionStyle}>
        {children}
      </Paper>
    </Grid>
  );
};

export default Section;
