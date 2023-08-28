import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import { PageTitle } from "../components";

const MenuPage = ({ title }: { title: string }) => {
  return (
    <Grid container>
      <PageTitle title={title} />
      <Outlet />
    </Grid>
  );
};

export default MenuPage;
