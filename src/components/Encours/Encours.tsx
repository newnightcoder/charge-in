import { Grid } from "@mui/material";
import Tableau from "./Tableau";

const Encours = ({ title }: { title: string }) => {
  return (
    <Grid item container>
      <Grid item container>
        <Tableau />
      </Grid>

      <Grid item container></Grid>
    </Grid>
  );
};

export default Encours;
