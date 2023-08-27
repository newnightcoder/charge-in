import { Grid } from "@mui/material";
import { theme } from "../../../theme/theme";
import DashboardSectionTitle from "../DashboardSectionTitle";
import StatisticGrid from "./StatisticGrid";

const StatisticBoard = () => {
  const sectionTitle = {
    str1: "Statistiques de",
    str2: "Charge-in",
  };
  return (
    <Grid container direction={"column"} rowGap={4}>
      <DashboardSectionTitle
        str1={sectionTitle.str1}
        str2={sectionTitle.str2}
        color1={"#000"}
        color2={theme.palette.primary.main}
      />
      <StatisticGrid />
    </Grid>
  );
};

export default StatisticBoard;
