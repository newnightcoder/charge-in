import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Menu, UserBanner } from "../components";
import useWindowSize from "../hooks/useWindowSize";

const PageContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "minmax(200px, 280px) 1fr",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
  },
  overflow: "hidden",
}));

const Dashboard = () => {
  const { width } = useWindowSize();

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
      <Box
        className={"styled-scrollbar-dashboard"}
        sx={{
          height: "inherit",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "white.main",
          overflowY: "scroll",
        }}
      >
        {/* <DashboardComponent /> */}
        <UserBanner />
        {width < 900 && <Menu />}
        <Outlet />
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
