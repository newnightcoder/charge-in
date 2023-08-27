import { Grid } from "@mui/material";
import useWindowSize from "../../hooks/useWindowSize";
import Menu from "../Menu/Menu";
import { DashboardHeader } from "./DashboardHeader";
import { StatisticBoard } from "./StatisticBoard";
import { UserBanner } from "./UserBanner";

const Dashboard = () => {
  const { width } = useWindowSize();

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
      {width < 900 && <Menu />}
      <UserBanner />
      <DashboardHeader />
      <StatisticBoard />
    </Grid>
  );
};

export default Dashboard;
