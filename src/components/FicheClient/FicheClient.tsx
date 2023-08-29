import { Grid } from "@mui/material";
import {
  ChangeModal,
  Commentaires,
  InfoPerso,
  Questionnaire,
  SectionChoixClient,
} from ".";

interface ClientProps {
  client: {
    prenom: string;
    nom: string;
    borne: number;
    devis: null;
    etape: number;
    contact: {
      adresse: string;
      codePostal: number;
      tel: string;
      email: string;
    };
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
  };
}

const FicheClient = ({ client }: ClientProps) => {
  return (
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
      <Commentaires />
      <SectionChoixClient borne />
      <SectionChoixClient />
      <ChangeModal />
    </Grid>
  );
};

export default FicheClient;
