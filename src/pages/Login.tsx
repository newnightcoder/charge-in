import { Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { LoginForm, LogoText } from "../components";

const Login = () => {
  const PageContainer = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    width: "100%",
    paddingTop: "1.25rem",
    display: "grid",
    gridTemplateRows: "min-content 1fr",
    placeItems: "center",
    backgroundColor: theme.palette.white.main,
  }));

  return (
    <PageContainer>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1600px",
          px: 5,
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
            &lt; Retour vers la page d'accueil
          </Typography>
        </Link>

        <LogoText color="emerald" width="120px" />
      </Box>
      <Paper
        elevation={4}
        sx={{
          height: "auto",
          px: 3,
          py: 8,
          width: { xs: "80%", md: "500px" },
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
