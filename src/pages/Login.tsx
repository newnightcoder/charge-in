import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { LoginForm, LogoText } from "../components";
import { useWindowSize } from "../hooks";

const Login = () => {
  const PageContainer = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    width: "100%",
    paddingTop: "1.25rem",
    paddingBottom: "1.75rem",
    display: "grid",
    gridTemplateRows: "min-content 1fr",
    placeItems: "center",
    backgroundColor: theme.palette.white.main,
  }));

  const { width } = useWindowSize();

  return (
    <PageContainer>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1600px",
          px: { xs: 3, sm: 5 },
          pb: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{ color: "emerald.main", "&:hover": { color: "emerald.dark" } }}
            fontSize={".9rem"}
          >
            &lt; Retour {width > 600 && "vers la page d'accueil"}
          </Typography>
        </Link>
        <LogoText color="emerald" height="25px" />
      </Box>
      <Paper
        elevation={4}
        sx={{
          height: "auto",
          px: 3,
          py: { xs: 6, sm: 8 },
          width: { xs: "95%", md: "500px" },
          maxWidth: { xs: "500px" },
          bgcolor: "white",
        }}
      >
        <LoginForm />
      </Paper>
    </PageContainer>
  );
};

export default Login;
