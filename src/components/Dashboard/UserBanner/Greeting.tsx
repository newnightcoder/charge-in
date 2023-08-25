import { Typography } from "@mui/material";

const Greeting = () => {
  // A mettre dans Redux
  const username = {
    nom: "Nom",
    prenom: "Prénom",
  };
  const salutation = "Bonjour,";

  return (
    <>
      <Typography variant="subtitle1" display={"block"}>
        {salutation}
      </Typography>
      <Typography
        variant="subtitle1"
        display={"block"}
        color={"emerald.main"}
        fontWeight={700}
      >
        {username.prenom} {username.nom}
      </Typography>
    </>
  );
};

export default Greeting;
