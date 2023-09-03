import { Grid, Typography } from "@mui/material";

const Archives = () => {
  return (
    <Grid container item width={"100%"} sx={{ justifyContent: "center" }}>
      <Typography
        variant="overline"
        fontStyle={"italic"}
        fontWeight={400}
        fontSize={"1.25rem"}
      >
        Archives
      </Typography>
    </Grid>
  );
};

export default Archives;
