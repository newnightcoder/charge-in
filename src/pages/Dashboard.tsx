import { Box, Grid } from "@mui/material";
import { green } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { Menu } from "../components";

const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "grid",
  gridTemplateColumns: "minmax(200px, 350px) 1fr",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
}));

const Dashboard = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          width: "auto",
          display: { xs: "none", md: "flex" },
          border: `5px solid ${green[700]}`,
        }}
      >
        <Menu />
      </Box>
      <Box sx={{ border: `4px solid black}` }}>
        <Grid container direction={"column"}>
          <Box sx={{ height: "100%" }}>dashboard</Box>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
