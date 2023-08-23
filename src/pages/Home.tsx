import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { LogoText } from "../components";

const PageContainer = styled(Container)<ContainerProps>(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  height: "100vh",
  width: "100vw",
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
    <PageContainer maxWidth={false}>
      <Link to="/login" style={linkStyle}>
        <LogoText width="50%" maxWidth="600px" />
      </Link>
    </PageContainer>
  );
};

export default Home;
