import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useMemo } from "react";
import MenuBtn from "./MenuBtn";

interface MenuSectionProps {
  sectionTitle: string;
}

const MenuSection = ({ sectionTitle }: MenuSectionProps) => {
  const section = {
    utilisateurs: "utilisateurs",
    données: "données",
  };

  const buttons = {
    utilisateurs: [
      "CEO & Admins",
      "Project Managers",
      "Installateurs",
      "Clients B2C",
    ],
    données: ["Bornes", "Véhicules", "Accessoires", "Objectifs"],
  };

  const btnList = useMemo(() => {
    return sectionTitle === section.utilisateurs
      ? buttons.utilisateurs
      : sectionTitle === section.données
      ? buttons.données
      : [];
  }, [section, buttons]);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="overline" color={grey[500]} display="block">
        {sectionTitle}
      </Typography>
      <>
        {btnList.map((btn, i) => (
          <MenuBtn key={i} btnName={btn} />
        ))}
      </>
    </Box>
  );
};

export default MenuSection;
