import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FicheClient, PageTitle } from "../components";
import { PrevNextBtn } from "../components/FicheClient";
import { RootState } from "../store";

const Profil = () => {
  const { id } = useParams();
  const { clients } = useSelector((state: RootState) => state.clients);
  const client = [...clients].find((client) => client.nom === id);

  return (
    <Grid container direction={"column"} rowGap={3} sx={{ pb: 4 }}>
      <Grid container justifyContent={"space-between"}>
        <PrevNextBtn next={false} />
        <PrevNextBtn next />
      </Grid>
      <Grid
        item
        container
        sx={{ alignItems: "center", textOverflow: "ellipsis" }}
        flexWrap="nowrap"
      >
        <PageTitle title={"Profil"} />
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                md: "2.5rem",
              },
            }}
            fontWeight={700}
            noWrap
          >
            &nbsp;: {client!.prenom} {client!.nom}
          </Typography>
        </Grid>
      </Grid>
      <FicheClient client={client!} />
      <Grid container justifyContent={"space-between"}>
        <PrevNextBtn next={false} />
        <PrevNextBtn next />
      </Grid>
    </Grid>
  );
};

export default Profil;
