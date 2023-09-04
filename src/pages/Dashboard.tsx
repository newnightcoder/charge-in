import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, UserBanner } from "../components";
import useWindowSize from "../hooks/useWindowSize";

const PageContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  overflow: "hidden",
}));

const Dashboard = () => {
  const { width } = useWindowSize();
  const ref = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuContainerStyle = {
    position: "relative",
    width: "280px",
    height: "inherit",
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    backgroundColor: "darkBlue.main",
    transition: "width 300ms",
  };

  const dashboardOuterContainerStyle = {
    position: "relative",
    height: "inherit",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white.main",
    overflowY: "scroll",
    overflowX: "hidden",
    transition: "width 300ms",
  };

  const dashboardInnerContainerStyle = {
    height: "inherit",
    width: "100%",
    maxWidth: "1200px",
    px: { xs: 2, md: 4 },
    py: { xs: 1, md: 2 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white.main",
    gap: 3,
  };

  const handleCollapse = (
    bool: boolean,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (bool) {
      ref!.current!.style.width = "0";
      return setIsCollapsed(true);
    }
    ref!.current!.style.width = "280px";
    return setIsCollapsed(false);
  };

  return (
    <PageContainer>
      <Box ref={ref} sx={menuContainerStyle}>
        <IconButton
          sx={{ position: "absolute", top: "5px", right: "7px", zIndex: "150" }}
          onClick={() => handleCollapse(true, ref)}
        >
          <KeyboardDoubleArrowLeftIcon sx={{ color: "#FFF" }} />
        </IconButton>
        <Menu isCollapsed={isCollapsed} />
      </Box>
      <Box
        className={"styled-scrollbar-dashboard"}
        sx={dashboardOuterContainerStyle}
      >
        {isCollapsed && width > 900 && (
          <IconButton
            sx={{
              position: "absolute",
              top: "5px",
              left: "7px",
              zIndex: "150",
            }}
            onClick={() => handleCollapse(false, ref)}
          >
            <KeyboardDoubleArrowRightIcon sx={{ color: "#000" }} />
          </IconButton>
        )}
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
