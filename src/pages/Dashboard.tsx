import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Menu } from "../components";

const PageContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "minmax(200px, 350px) 1fr",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
  overflow: "hidden",
}));

const Dashboard = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          width: "auto",
          height: "inherit",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          backgroundColor: "darkBlue.main",
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
