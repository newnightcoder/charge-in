import { Button, Grid, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Objectif from "./Objectif";

const Objectifs = () => {
  const ObjectifBtn = styled(Button)(({ theme }) => ({
    backgroundImage: `linear-gradient(${theme.palette.info.main},${theme.palette.info.main})`,
    textTransform: "lowercase",
    padding: "5px 18px",
    fontSize: ".8rem",
    color: grey[500],
    borderRadius: "10px",
    "&:hover": {
      backgroundImage: "linear-gradient(117deg, #8BDFDA, #369C96)",
      color: grey[50],
    },
    "&:active": {
      backgroundImage: "linear-gradient(117deg, #8BDFDA, #369C96)",
      color: grey[50],
    },
  }));

  const objectifs = [
    { name: "50 Partenaires", percent: 76 },
    { name: "100 installateurs", percent: 45 },
    { name: "200 installations", percent: 100 },
  ];

  return (
    <Grid
      container
      direction={"column"}
      sx={{
        backgroundImage: "linear-gradient(116deg,#094972, #326B8F)",
        p: 4,
        borderRadius: "12px",
        gap: 2.5,
      }}
    >
      <Grid item container direction={"row"} sx={{ gap: 3 }}>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            // border: "2px solid red",
          }}
        >
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
        <Grid
          item
          container
          sx={{
            width: "auto",
            gap: 2,
            // border: "1px solid red",
          }}
        >
          <Grid item>
            <ObjectifBtn>1er trimestre</ObjectifBtn>
          </Grid>
          <Grid item>
            <ObjectifBtn>2ème trimestre</ObjectifBtn>
          </Grid>
          <Grid item>
            <ObjectifBtn>3ème trimestre</ObjectifBtn>
          </Grid>
          <Grid item>
            <ObjectifBtn>année 2023</ObjectifBtn>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        sx={{
          width: "auto",
          justifyContent: "center",
          gap: 2,
          // border: "1px solid red",
        }}
      >
        {objectifs.map((obj, i) => (
          <Objectif key={i} objectif={obj} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Objectifs;
