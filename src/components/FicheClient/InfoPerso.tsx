import { Grid, Typography } from "@mui/material";
import Email from "./Email";
import InfoDetail from "./InfoDetail";
import Phone from "./Phone";

interface InfoPersoProps {
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
  };
}

const InfoPerso = ({ client }: InfoPersoProps) => {
  return (
    <Grid
      container
      item
      direction={"column"}
      rowGap={2}
      sx={{
        bgcolor: "#FFF",
        p: 4,
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Grid item>
        <Typography variant="h6">Informations personnelles</Typography>
      </Grid>
      <InfoDetail label="Prénom" content={client.prenom} />
      <InfoDetail label="Nom" content={client.nom} />
      <InfoDetail label="Code Postal" content={client.contact.codePostal} />
      <InfoDetail label="Adresse" content={client.contact.adresse} />
      <Email email={client.contact.email} />
      <Phone phone={client.contact.tel} />
    </Grid>
  );
};

export default InfoPerso;
