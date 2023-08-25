import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { MenuBtn, MenuDropdownSection, MenuSection } from ".";
import { LogoText } from "../../components";
import { RootState } from "../../store";
import { button } from "../Buttons";

const Menu = () => {
  const sections = ["opportunités", "utilisateurs", "données"];
  const isMenuOpen = useSelector((state: RootState) => state.menu.isMenuOpen);
  const menuStyle = {
    position: { xs: "fixed", md: "relative" },
    inset: { xs: "0", md: "unset" },
    zIndex: { xs: 100, md: 1 },
    height: "auto",
    justifyContent: "flex-start",
    backgroundColor: "darkBlue.main",
    overflowY: "scroll",
    py: { xs: 3, md: 4 },
    px: 3,
    transform: {
      xs: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
      md: "none",
    },
    transition: "transform 500ms",
  };

  return (
    <Grid
      container
      direction={"column"}
      className={"styled-scrollbar-menu"}
      wrap="nowrap"
      rowGap={4}
      sx={menuStyle}
    >
      <Grid
        item
        sx={{
          width: { xs: "max-content", md: "auto" },
          alignSelf: { xs: "flex-end", md: "unset" },
        }}
      >
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
