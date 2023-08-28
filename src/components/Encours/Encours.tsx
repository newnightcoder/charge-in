import { Grid, OutlinedInput } from "@mui/material";
import Tableau from "./Tableau";

const Encours = () => {
  return (
    <Grid container>
      <Grid item container columnGap={3} sx={{ alignItems: "center" }}>
        <Grid item>25 résultats</Grid>
        <Grid item>
          <OutlinedInput size="small" />
        </Grid>
        <Grid item>
          <OutlinedInput size="small" />
        </Grid>
      </Grid>

      <Grid item container>
        <Tableau />
      </Grid>

      <Grid item container></Grid>
    </Grid>
  );
};

export default Encours;
