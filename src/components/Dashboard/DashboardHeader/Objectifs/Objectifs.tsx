import { Grid } from "@mui/material";
import { Objectif, ObjectifsBtnContainer } from ".";
import { theme } from "../../../../theme/theme";
import DashboardSectionTitle from "../../DashboardSectionTitle";

const Objectifs = () => {
  const objectifs = [
    { name: "50 Partenaires", percent: 76 },
    { name: "100 installateurs", percent: 45 },
    { name: "200 installations", percent: 100 },
  ];

  const sectionTitle = {
    str1: "Objectifs de",
    str2: "Charge-in",
  };

  return (
    <Grid
      container
      item
      direction={"column"}
      rowGap={2}
      sx={{
        p: 4,
        backgroundImage: "linear-gradient(116deg,#094972, #326B8F)",
        borderRadius: "12px",
        // "& >*+*": {
        //   marginTop: "16px",
        // },
      }}
    >
      <Grid
        item
        container
        columnGap={2}
        rowGap={1.5}
        sx={{ alignItems: "center" }}
      >
        <DashboardSectionTitle
          str1={sectionTitle.str1}
          str2={sectionTitle.str2}
          color1={"#FFF"}
          color2={theme.palette.turquoise.main}
        />
        <ObjectifsBtnContainer />
      </Grid>

      <Grid
        item
        container
        columnGap={2}
        rowGap={1}
        sx={{ justifyContent: "center" }}
      >
        {objectifs.map((obj, i) => (
          <Objectif key={i} objectif={obj} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Objectifs;
