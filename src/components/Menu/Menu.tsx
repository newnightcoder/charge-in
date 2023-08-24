import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { Box, Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { LogoText } from "../../components";
import MenuSection from "./MenuSection";

const Menu = () => {
  return (
    <Grid
      container
      direction={"column"}
      sx={{ backgroundColor: "darkBlue.main", p: 4 }}
    >
      <LogoText width="50%" color="emerald" />
      <Button
        variant="contained"
        color="info"
        sx={{ textTransform: "unset", justifyContent: "flex-start" }}
        disableElevation
        startIcon={<GridViewRoundedIcon />}
      >
        Accueil
      </Button>
      <Box sx={{ width: "100%" }}>
        <Typography variant="overline" color={grey[500]} display="block">
          opportunités
        </Typography>
      </Box>
      <>
        {["utilisateurs", "données"].map((title, i) => (
          <MenuSection key={i} sectionTitle={title} />
        ))}
      </>
    </Grid>
  );
};

export default Menu;
