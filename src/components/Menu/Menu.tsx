import { Grid } from "@mui/material";
import { MenuBtn, MenuDropdownSection, MenuSection } from ".";
import { LogoText } from "../../components";
import { button } from "../Buttons";

const Menu = () => {
  const sections = ["opportunités", "utilisateurs", "données"];

  return (
    <Grid
      container
      direction={"column"}
      className={"styled-scrollbar-menu"}
      wrap="nowrap"
      rowSpacing={4}
      sx={{
        height: "auto",
        justifyContent: "flex-start",
        backgroundColor: "darkBlue.main",
        overflowY: "scroll",
        py: 4,
        px: 3,
      }}
    >
      <Grid item>
        <LogoText height="30px" color="emerald" />
      </Grid>

      <Grid item>
        <Grid container direction={"column"} rowSpacing={1}>
          <Grid item>
            <MenuBtn btnName={button.accueil} />
          </Grid>
          <Grid item container direction={"column"} rowSpacing={1}>
            {sections.map((title, i) =>
              title === sections[0] ? (
                <Grid item key={i}>
                  <MenuDropdownSection sectionTitle={title} />
                </Grid>
              ) : (
                <MenuSection sectionTitle={title} key={i} />
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Menu;
