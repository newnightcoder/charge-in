import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMemo } from "react";
import { menu } from "../Buttons";
import MenuBtn from "../Buttons/MenuButton/MenuBtn";

export interface MenuSectionProps {
  sectionTitle: string;
}

const MenuSection = ({ sectionTitle }: MenuSectionProps) => {
  const section = useMemo(
    () => ({
      utilisateurs: "utilisateurs",
      données: "données",
    }),
    []
  );

  const btnList =
    sectionTitle === section.utilisateurs
      ? menu.utilisateurs
      : sectionTitle === section.données
      ? menu.données
      : [];

  return (
    <Grid container item direction={"column"} rowSpacing={0.75}>
      <Grid item>
        <Typography variant="overline" color={grey[500]} display="block">
          {sectionTitle}
        </Typography>
      </Grid>
      <Grid container item direction={"column"} spacing={1.5}>
        {Object.values(btnList).map((btn, i) => (
          <Grid item key={i}>
            <MenuBtn btnName={btn} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MenuSection;
