import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  span?: string | number;
}
const Section = ({ children, span }: SectionProps) => {
  return (
    <Grid
      container
      item
      direction={"column"}
      rowGap={2}
      sx={{
        bgcolor: "#FFF",
        p: 4,
        borderRadius: "8px",
        columnSpan: span ?? "",
      }}
    >
      {children}
    </Grid>
  );
};

export default Section;
