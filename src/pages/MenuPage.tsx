import { Button, Grid } from "@mui/material";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const MenuPage = ({ title }: { title: string }) => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const isInDropdownOption = pathname.includes(id as string);

  return (
    <Grid container direction={"column"} rowGap={4}>
      {!isInDropdownOption && (
        <Grid
          item
          container
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <PageTitle title={title} />
          <Grid container item width="auto " columnGap={2}>
            <Button
              variant="contained"
              sx={{
                textTransform: "unset",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              Ajouter un utilisateur
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                textTransform: "unset",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              Supprimer un utilisateur
            </Button>
          </Grid>
        </Grid>
      )}
      <Outlet />
    </Grid>
  );
};

export default MenuPage;
