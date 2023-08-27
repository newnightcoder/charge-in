import { Grid } from "@mui/material";
import Actions from "./Actions";
import { DashboardHeader } from "./DashboardHeader";
import { StatisticBoard } from "./StatisticBoard";

const DashboardHome = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        maxWidth: "1200px",
        justifyContent: "flex-start",
        backgroundColor: "white.main",
        px: { xs: 2, md: 4 },
        py: { xs: 1, md: 2 },
      }}
    >
      <DashboardHeader />
      <StatisticBoard />
      <Actions />
    </Grid>
  );
};

export default DashboardHome;
