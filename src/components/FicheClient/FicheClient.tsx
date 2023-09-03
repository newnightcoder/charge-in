import { Grid } from "@mui/material";
import {
  ChangeModal,
  SectionAccessoires,
  SectionChoixClient,
  SectionCommentaires,
  SectionDocuments,
  SectionInfoPerso,
  SectionQuestionnaire,
  SectionRemise,
  SplitBtnGroup,
} from ".";

export interface ClientProps {
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
    documents: {
      docs: { title: string; fichier: string }[];
      autres: { fichier: string }[];
    };
    accessoires: { name: string; price: number | null }[];
  };
}

const FicheClient = ({ client }: ClientProps) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      md: "calc(40% - 12px) calc(60% - 12px)",
    },
  };

  return (
    <Grid item columnGap={3} rowGap={3} sx={gridStyle}>
      <SplitBtnGroup />
      <SectionInfoPerso client={client!} />
      <SectionQuestionnaire questionnaire={client!.questionnaire!} />
      <SectionCommentaires />
      <SectionDocuments documents={client!.documents} />
      <SectionChoixClient borne />
      <SectionChoixClient />
      <SectionRemise />
      <SectionAccessoires accessoires={client!.accessoires} />
      <ChangeModal />
    </Grid>
  );
};

export default FicheClient;
