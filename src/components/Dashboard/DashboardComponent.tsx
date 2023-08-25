import { Grid } from "@mui/material";
import { UserBanner } from "./UserBanner";

const Dashboard = () => {
  return (
    <Grid container direction={"column"} sx={{ justifyContent: "flex-start" }}>
      <UserBanner />
    </Grid>
  );
};

export default Dashboard;
