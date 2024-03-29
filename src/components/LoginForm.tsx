import LoginIcon from "@mui/icons-material/Login";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isPassVisible, setIsPassVisible] = useState(false);

  const handlePassVisibility = () => {
    setIsPassVisible((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const inputStyle = {
    input: {
      padding: "10px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "emerald.main",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "emerald.main",
    },
    "&:autofill .MuiOutlinedInput": {
      backgroundColor: "red",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
          <Typography
            variant="h1"
            fontSize={{ xs: "2rem", sm: "3rem" }}
            fontWeight={700}
            noWrap
          >
            Se connecter
          </Typography>
          <LoginIcon
            color="primary"
            sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
          />
        </Box>
        <Typography color={grey[600]} sx={{ pt: 1 }}>
          Entrez vos identifiants pour accéder à votre espace personnel.
        </Typography>
      </Container>

      <Container>
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <FormControl sx={{ width: "100%", my: 1 }}>
            <label
              htmlFor="email"
              style={{ fontWeight: 500, paddingBottom: "6px" }}
            >
              Adresse mail
            </label>
            <OutlinedInput
              type="email"
              id="email"
              name="usrname"
              placeholder="adresse@mail.com"
              sx={inputStyle}
              autoComplete="new-password"
            />
          </FormControl>
          <FormControl sx={{ width: "100%", my: 1 }}>
            <label
              htmlFor="password"
              style={{ fontWeight: 500, paddingBottom: "6px" }}
            >
              Mot de passe
            </label>
            <OutlinedInput
              type={isPassVisible ? "text" : "password"}
              id="password"
              name="pass"
              placeholder="*****"
              sx={inputStyle}
              autoComplete="new-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handlePassVisibility}
                    edge="end"
                  >
                    {isPassVisible ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              my: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "4px",
              }}
            >
              <Checkbox
                color="secondary"
                sx={{ "&.MuiCheckbox-root": { p: 0, m: 0 } }}
              />
              <Typography fontSize={14}>Se souvenir de moi</Typography>
            </Box>
            <Button color="primary" sx={{ textTransform: "unset" }}>
              Mot de passe oublié?
            </Button>
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ py: 2, mt: 1 }}
          >
            se connecter
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default LoginForm;
