import { Grid, Typography } from "@mui/material";

interface DashboardSectionTitleProps {
  str1: string;
  str2?: string;
  color1: string;
  color2?: string;
}

const DashboardSectionTitle = ({
  str1,
  str2,
  color1,
  color2,
}: DashboardSectionTitleProps) => {
  return (
    <Grid item container columnGap={0.75} width="auto" sx={{ wrap: "nowrap" }}>
      <Typography
        variant="h2"
        fontSize={"1.5rem"}
        fontWeight={700}
        sx={{ color: color1 }}
      >
        {str1}
      </Typography>
      <Typography
        variant="h2"
        fontSize={"1.5rem"}
        fontWeight={700}
        sx={{ color: color2 }}
      >
        {str2}
      </Typography>
    </Grid>
  );
};

export default DashboardSectionTitle;
