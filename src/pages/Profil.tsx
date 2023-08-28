import { Grid, Typography } from "@mui/material";
import { PageTitle } from "../components";

const Profil = () => {
  return (
    <Grid container direction={"column"}>
      <Grid item container>
        <PageTitle title={"Profil"} />
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "1.25rem", md: "2.5rem" } }}
            fontWeight={700}
            noWrap
          >
            &nbsp;: Prenom
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profil;
