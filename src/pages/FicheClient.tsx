import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PageTitle } from "../components";
import { RootState } from "../store";

const FicheClient = () => {
  const { id } = useParams();
  const { clients } = useSelector((state: RootState) => state.clients);
  const profil = [...clients].find((client) => client.nom === id);

  return (
    <Grid container direction={"column"}>
      <Grid item container sx={{ alignItems: "center" }}>
        <PageTitle title={"Profil"} />
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "1.25rem", md: "2.5rem" } }}
            fontWeight={700}
            noWrap
          >
            &nbsp;: {profil!.prenom} {profil!.nom}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FicheClient;
