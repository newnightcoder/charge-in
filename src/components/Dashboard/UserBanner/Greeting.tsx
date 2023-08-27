import { Box, Typography } from "@mui/material";

const Greeting = () => {
  // A mettre dans Redux
  const username = {
    nom: "Nom",
    prenom: "Prénom",
  };
  const salutation = "Bonjour,";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
        gap: 1,
      }}
    >
      <Typography variant="subtitle1" display={"block"}>
        {salutation}
      </Typography>
      <Typography
        variant="subtitle1"
        display={"block"}
        color={"emerald.main"}
        fontWeight={700}
        noWrap
      >
        {username.prenom} {username.nom}
      </Typography>
    </Box>
  );
};

export default Greeting;
