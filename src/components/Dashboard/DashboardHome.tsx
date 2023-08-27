import { Grid } from "@mui/material";
import Actions from "./Actions";
import { DashboardHeader } from "./DashboardHeader";
import { StatisticBoard } from "./StatisticBoard";

const DashboardHome = () => {
  return (
    <Grid
      container
      direction={"column"}
      rowGap={4}
      sx={{
        maxWidth: "1200px",
        justifyContent: "flex-start",
        backgroundColor: "white.main",
      }}
    >
      <DashboardHeader />
      <StatisticBoard />
      <Actions />
    </Grid>
  );
};

export default DashboardHome;
