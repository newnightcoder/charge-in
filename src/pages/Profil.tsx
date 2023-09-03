import { Grid, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FicheClient, PageTitle } from "../components";
import { PrevNextBtn } from "../components/FicheClient";
import { RootState } from "../store";

const Profil = () => {
  const { id } = useParams();
  const { clients } = useSelector((state: RootState) => state.clients);
  const client = [...clients].find((client) => client.nom === id);
  const [currentClient, setCurrentClient] = useState(client);

  const prevClient = [...clients].find(
    (cl, i) => clients.indexOf(cl) === clients.indexOf(currentClient!) - 1
  );
  const nextClient = [...clients].find(
    (cl, i) => clients.indexOf(cl) === clients.indexOf(currentClient!) + 1
  );

  const [isLastClient, setIsLastClient] = useState(false);
  const [isFirstClient, setIsFirstClient] = useState(false);

  const handleNextClient = useCallback(() => {
    console.log("clicking next");
    if (!nextClient) return setIsLastClient(true);
    setCurrentClient(nextClient);
  }, [nextClient]);

  const handlePrevClient = useCallback(() => {
    console.log("clicking next");
    if (!prevClient) return setIsFirstClient(true);
    setCurrentClient(prevClient);
  }, [prevClient]);

  useEffect(() => {
    if (isLastClient && nextClient) return setIsLastClient(false);
    if (isFirstClient && prevClient) return setIsFirstClient(false);
  }, [isFirstClient, isLastClient, prevClient, nextClient]);

  return (
    <Grid container direction={"column"} rowGap={3} sx={{ pb: 4 }}>
      <Grid
        container
        justifyContent={!prevClient ? "flex-end" : "space-between"}
        sx={{ pt: 1 }}
      >
        {prevClient && (
          <PrevNextBtn
            next={false}
            onClick={handlePrevClient}
            client={{ nom: prevClient.nom, prenom: prevClient.prenom }}
          />
        )}
        {nextClient && (
          <PrevNextBtn
            next
            onClick={handleNextClient}
            client={{ nom: nextClient.nom, prenom: nextClient.prenom }}
          />
        )}
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
            &nbsp;: {currentClient!.prenom} {currentClient!.nom}
          </Typography>
        </Grid>
      </Grid>
      <FicheClient client={currentClient!} />
      <Grid container justifyContent={"space-between"}>
        <PrevNextBtn next={false} />
        <PrevNextBtn next />
      </Grid>
    </Grid>
  );
};

export default Profil;
