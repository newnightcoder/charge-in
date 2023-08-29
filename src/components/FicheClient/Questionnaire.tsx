import { Divider, Grid, Typography } from "@mui/material";
import InfoDetail from "./InfoDetail";

interface QuestionnaireProps {
  questionnaire: {
    residence: string;
    parking: string;
    status: string;
    notif: string;
    achat: string;
    modele: string;
    usage: string;
    capacité: string;
    delai: string;
    priseDeContact: string;
    prix: null;
  };
}

const Questionnaire = ({ questionnaire }: QuestionnaireProps) => {
  return (
    <Grid
      container
      item
      direction={"column"}
      rowGap={2}
      sx={{ bgcolor: "#FFF", p: 4, borderRadius: "8px" }}
    >
      <Grid item>
        <Typography variant="h6">Réponses au questionnaire</Typography>
      </Grid>

      <Grid container item direction="column" rowGap={2}>
        <Grid
          container
          item
          columnGap={2}
          rowGap={1}
          sx={{ justifyContent: "space-between" }}
        >
          <InfoDetail label="Je vis dans" content={questionnaire.residence} />
          <InfoDetail
            label="Ma place de Parking"
            content={questionnaire.parking}
          />
          <InfoDetail label="Je suis" content={questionnaire.status} />
        </Grid>
        <InfoDetail
          label="Notification d'un refus de la part de votre copropriété?"
          content={questionnaire.notif}
          direction="row"
          gapInfo="12px"
        />

        <Grid item>
          <Divider />
        </Grid>
        <InfoDetail label="Achat" content={questionnaire.achat} />
        <InfoDetail
          label="Modèle"
          content={questionnaire.modele}
          direction="row"
          gapInfo="12px"
        />
        <Grid container item columnGap={6} rowGap={2}>
          <InfoDetail label="Usage" content={questionnaire.usage} />
          <InfoDetail
            label="Capacité Nominale de la batterie"
            content={questionnaire.capacité}
          />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <InfoDetail
          label="Délai d'installation de la borne"
          content={questionnaire.delai}
          direction="row"
          gapInfo="12px"
        />
        <InfoDetail
          label="Avez-vous déjà contacté un installateur?"
          content={questionnaire.priseDeContact}
          direction="row"
          gapInfo="12px"
        />
        <Grid
          container
          item
          columnGap={2}
          rowGap={1}
          sx={{ justifyContent: "space-between" }}
        >
          <InfoDetail label="Le prix" content={questionnaire.prix ?? "##€"} />
          <InfoDetail label="Installateur" content={"Information ici"} />
          <InfoDetail label="Modèle Borne" content={"Information ici"} />
          <InfoDetail label="Marque borne" content={"Information ici"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Questionnaire;
