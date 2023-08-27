import { Grid } from "@mui/material";
import PageTitle from "../../PageTitle";
import Objectifs from "./Objectifs/Objectifs";

const DashboardHeader = () => {
  return (
    <Grid container item direction={"column"} rowSpacing={{ xs: 2, md: 3 }}>
      <Grid item>
        <PageTitle title={"Tableau de bord"} />
      </Grid>

      <Grid item>
        <Objectifs />
      </Grid>
    </Grid>
  );
};

export default DashboardHeader;
