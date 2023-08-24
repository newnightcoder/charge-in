import { Grid } from "@mui/material";

const UserBanner = () => {
  // A mettre dans Redux
  const username = {
    nom: "Nom",
    prenom: "Prenom",
  };
  const salutation = `Bonjour ${username.nom} ${username.prenom}`;

  return (
    <Grid
      container
      item
      sx={{ border: "1px solid red", justifyContent: "flex-end" }}
    >
      <Grid item>{salutation}</Grid>
      <Grid item></Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default UserBanner;
