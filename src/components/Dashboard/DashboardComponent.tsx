import { Grid } from "@mui/material";
import { DashboardHeader } from "./DashboardHeader";
import { UserBanner } from "./UserBanner";

const Dashboard = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        maxWidth: "1200px",
        justifyContent: "flex-start",
        backgroundColor: "white.main",
        px: 4,
        py: 2,
      }}
    >
      <UserBanner />
      <DashboardHeader />
    </Grid>
  );
};

export default Dashboard;
