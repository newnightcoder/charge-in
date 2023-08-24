import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { LogoText } from "../components";

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.emerald.main,
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const linkStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Home = () => {
  return (
    <PageContainer>
      <Link to="/login" style={linkStyle}>
        <LogoText height="10vh" color="white" />
      </Link>
    </PageContainer>
  );
};

export default Home;
