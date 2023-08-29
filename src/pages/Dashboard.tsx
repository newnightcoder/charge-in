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

  const menuContainerStyle = {
    width: "auto",
    height: "inherit",
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    backgroundColor: "darkBlue.main",
  };

  const dashboardOuterContainerStyle = {
    height: "inherit",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white.main",
    overflowY: "scroll",
  };

  const dashboardInnerContainerStyle = {
    height: "inherit",
    width: "100%",
    maxWidth: "1300px",
    px: { xs: 2, md: 4 },
    py: { xs: 1, md: 2 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white.main",
    gap: 3,
  };

  return (
    <PageContainer>
      <Box sx={menuContainerStyle}>
        <Menu />
      </Box>
      <Box
        className={"styled-scrollbar-dashboard"}
        sx={dashboardOuterContainerStyle}
      >
        <Box sx={dashboardInnerContainerStyle}>
          <UserBanner />
          {width < 900 && <Menu />}
          <Outlet />
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
