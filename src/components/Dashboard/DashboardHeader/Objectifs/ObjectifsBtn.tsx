import { Button, Grid, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const ObjectifsBtn = () => {
  const ObjectifBtn = styled(Button)(({ theme }) => ({
    width: "130px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
    backgroundImage: `linear-gradient(${theme.palette.info.main},${theme.palette.info.main})`,
    textTransform: "lowercase",
    whiteSpace: "nowrap",
    padding: "5px 18px",
    fontSize: ".8rem",
    color: grey[500],
    borderRadius: "7px",
    "&:hover": {
      backgroundImage: "linear-gradient(117deg, #8BDFDA, #369C96)",
      color: grey[50],
    },
    "&:active": {
      backgroundImage: "linear-gradient(117deg, #8BDFDA, #369C96)",
      color: grey[50],
    },
  }));

  return (
    <Grid
      item
      container
      columnGap={3}
      rowGap={1}
      sx={{
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
        // border: "1px solid white",
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
  );
};

export default ObjectifsBtn;
