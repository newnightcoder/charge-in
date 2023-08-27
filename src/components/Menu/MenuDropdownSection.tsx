import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MenuDropdown } from ".";
import { menu } from "../Buttons";
import { MenuSectionProps } from "./MenuSection";

const MenuDropdownSection = ({ sectionTitle }: MenuSectionProps) => {
  const sections = Object.values(menu.opportunités);

  return (
    <Grid container item direction={"column"} rowSpacing={0.75}>
      <Grid item>
        <Typography variant="overline" color={grey[500]} display="block">
          {sectionTitle}
        </Typography>
      </Grid>
      <Grid container item direction={"column"} spacing={1.5}>
        {sections.map((section, i) => (
          <Grid item key={i}>
            <MenuDropdown btnName={section} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default MenuDropdownSection;
