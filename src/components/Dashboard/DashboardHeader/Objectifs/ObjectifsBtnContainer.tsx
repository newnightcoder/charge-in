import { Grid } from "@mui/material";
import { ObjectifBtn } from ".";

const ObjectifsBtnContainer = () => {
  const objectifBtns = [
    "1er trimestre",
    "2ème trimestre",
    "3ème trimestre",
    "année 2023",
  ];

  return (
    <Grid
      item
      container
      columnGap={1}
      rowGap={1.4}
      sx={{
        width: "auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {objectifBtns.map((btn, i) => (
        <Grid item key={i}>
          <ObjectifBtn name={btn} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ObjectifsBtnContainer;
