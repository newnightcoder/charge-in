import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { FormEvent } from "react";

const LoginForm = () => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <Typography variant="h1" fontSize={"3rem"} fontWeight={700}>
          Se connecter
        </Typography>
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
              id="email"
              name="usrname"
              placeholder="adresse@mail.com"
              type="email"
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
              id="password"
              name="pass"
              placeholder="*****"
              type="password"
              sx={inputStyle}
              autoComplete="new-password"
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
