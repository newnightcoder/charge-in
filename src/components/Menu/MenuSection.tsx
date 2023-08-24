import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMemo } from "react";
import MenuBtn from "./MenuBtn";

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

  const buttons = useMemo(
    () => ({
      utilisateurs: [
        "CEO & Admins",
        "Project Managers",
        "Installateurs",
        "Clients B2C",
      ],
      données: ["Bornes", "Véhicules", "Accessoires", "Objectifs"],
    }),
    []
  );

  const btnList = useMemo(() => {
    return sectionTitle === section.utilisateurs
      ? buttons.utilisateurs
      : sectionTitle === section.données
      ? buttons.données
      : [];
  }, [section, buttons, sectionTitle]);

  return (
    <Grid container item direction={"column"} rowSpacing={0.75}>
      <Grid item>
        <Typography variant="overline" color={grey[500]} display="block">
          {sectionTitle}
        </Typography>
      </Grid>
      <Grid container item direction={"column"} spacing={1.5}>
        {btnList.map((btn, i) => (
          <Grid item key={i}>
            <MenuBtn btnName={btn} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MenuSection;
