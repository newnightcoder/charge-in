import { Grid } from "@mui/material";
import { UserBanner } from ".";

const Dashboard = () => {
  return (
    <Grid container direction={"column"} sx={{ justifyContent: "flex-start" }}>
      <UserBanner />
    </Grid>
  );
};

export default Dashboard;
