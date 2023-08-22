import Container, { ContainerProps } from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { LogoText } from "../components";

const Root = styled(Container)<ContainerProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
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
    <Root maxWidth={false}>
      <Link to="/login" style={linkStyle}>
        <LogoText width="50%" maxWidth="600px" />
      </Link>
    </Root>
  );
};

export default Home;
