import { Grid } from "@mui/material";
import { theme } from "../../../theme/theme";
import DashboardSectionTitle from "../DashboardSectionTitle";
import DropdownSelect from "./DropdownSelect";
import StatisticGrid from "./StatisticGrid";

const StatisticBoard = () => {
  const sectionTitle = {
    str1: "Statistiques de",
    str2: "Charge-in",
  };
  return (
    <Grid container direction={"column"} rowGap={3}>
      <Grid
        container
        item
        columnGap={2}
        rowGap={1}
        sx={{
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <DashboardSectionTitle
          str1={sectionTitle.str1}
          str2={sectionTitle.str2}
          color1={"#000"}
          color2={theme.palette.primary.main}
        />
        <Grid item>
          <DropdownSelect />
        </Grid>
      </Grid>
      <StatisticGrid />
    </Grid>
  );
};

export default StatisticBoard;
