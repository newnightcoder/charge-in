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
        <LogoText width="50%" maxWidth="600px" color="white" />
      </Link>
    </PageContainer>
  );
};

export default Home;
