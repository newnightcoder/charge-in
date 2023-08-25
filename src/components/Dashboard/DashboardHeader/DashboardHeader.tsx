import { BoltOutlined } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Objectifs } from ".";

const DashboardHeader = () => {
  return (
    <Grid container item direction={"column"} rowSpacing={2} sx={{ py: 2.5 }}>
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        <BoltOutlined sx={{ color: "primary.main", fontSize: "3rem" }} />
        <Typography variant="h1" fontSize={"2.5rem"} fontWeight={700}>
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
