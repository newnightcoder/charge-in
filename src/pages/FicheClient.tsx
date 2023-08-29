import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { InfoPerso, PageTitle, Questionnaire } from "../components";
import { RootState } from "../store";

const FicheClient = () => {
  const { id } = useParams();
  const { clients } = useSelector((state: RootState) => state.clients);
  const client = [...clients].find((client) => client.nom === id);

  return (
    <Grid container direction={"column"} rowGap={3} sx={{ pb: 4 }}>
      <Grid item container sx={{ alignItems: "center" }}>
        <PageTitle title={"Profil"} />
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "1.25rem", md: "2.5rem" } }}
            fontWeight={700}
            noWrap
          >
            &nbsp;: {client!.prenom} {client!.nom}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        columnGap={3}
        rowGap={3}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "calc(40% - 12px) calc(60% - 12px)",
          },
        }}
      >
        <InfoPerso client={client!} />
        <Questionnaire questionnaire={client!.questionnaire!} />
      </Grid>
    </Grid>
  );
};

export default FicheClient;
