import { Grid } from "@mui/material";
import { PageTitle } from "../components";

const MenuPage = ({ title }: { title: string }) => {
  return (
    <Grid container>
      <PageTitle title={title} />
    </Grid>
  );
};

export default MenuPage;
