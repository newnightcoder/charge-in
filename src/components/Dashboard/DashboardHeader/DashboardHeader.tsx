import { BoltOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Objectifs } from ".";

const DashboardHeader = () => {
  return (
    <Grid
      container
      item
      direction={"column"}
      rowSpacing={{ xs: 2, md: 5 }}
      sx={{ py: 2.5, mb: 2 }}
    >
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <BoltOutlined sx={{ color: "primary.main", fontSize: "3rem" }} />
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "1.25rem", md: "2.5rem" } }}
          fontWeight={700}
          noWrap
        >
          Tableau de bord
        </Typography>
      </Grid>

      <Grid item>
        <Objectifs />
      </Grid>
    </Grid>
  );
};

export default DashboardHeader;
