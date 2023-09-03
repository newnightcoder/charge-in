import { Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Tableau from "./Tableau";

const Encours = () => {
  const { pathname } = useLocation();
  const isMaisonsSection = pathname.includes("maisons");

  return (
    <Grid item container>
      {isMaisonsSection ? (
        <Tableau />
      ) : (
        <Grid container item width={"100%"} sx={{ justifyContent: "center" }}>
          <Typography
            variant="overline"
            fontStyle={"italic"}
            fontWeight={400}
            fontSize={"1.25rem"}
          >
            En cours
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Encours;
