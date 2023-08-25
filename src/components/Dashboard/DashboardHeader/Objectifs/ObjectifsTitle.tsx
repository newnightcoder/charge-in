import { Grid, Typography } from "@mui/material";

const ObjectifsTitle = () => {
  return (
    <Grid item container columnGap={0.75} width="auto" sx={{ wrap: "nowrap" }}>
      <Typography
        variant="h2"
        fontSize={"1.25rem"}
        fontWeight={700}
        sx={{ color: "#FFF" }}
      >
        Objectifs de
      </Typography>
      <Typography
        variant="h2"
        fontSize={"1.25rem"}
        fontWeight={700}
        sx={{ color: "turquoise.main" }}
      >
        Charge-in
      </Typography>
    </Grid>
  );
};

export default ObjectifsTitle;
