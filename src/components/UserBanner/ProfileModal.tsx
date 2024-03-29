import CloseIcon from "@mui/icons-material/Close";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAvatarLetter } from "../../hooks";
import { RootState } from "../../store";
import { toggleProfileModal } from "../../store/userSlice";

const ProfileModal = () => {
  const { user, isProfileModalOpen } = useSelector(
    (state: RootState) => state.user
  );
  const avatarLetter = useAvatarLetter();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(toggleProfileModal());
  };

  const logout = () => {
    navigate("/");
    dispatch(toggleProfileModal());
  };

  const modalStyle = {
    height: "max-content",
    width: "300px",
    py: 2,
    position: "fixed",
    top: "8px",
    right: { xs: "15px", md: "7rem" },
    zIndex: isProfileModalOpen ? 150 : "-1",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    opacity: isProfileModalOpen ? 1 : 0,
    transition: "opacity 300ms",
    borderRadius: "8px",
    border: `1px solid ${grey[300]}`,
  };

  const avatarStyle = {
    height: "40px",
    width: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "secondary.main",
    color: "#FFF",
    borderRadius: "50%",
  };

  return (
    <Grid container direction="column" rowGap={2} sx={modalStyle}>
      <IconButton
        sx={{ position: "absolute", top: "5px", right: "5px" }}
        onClick={closeModal}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <Grid container item direction="column" rowGap={1} sx={{ px: 3 }}>
        <Grid item>
          <Typography variant="h6" fontWeight={600}>
            Profil
          </Typography>
        </Grid>
        <Grid item container columnGap={2} sx={{ alignItems: "center" }}>
          <Grid item>
            <Box sx={avatarStyle}>{avatarLetter}</Box>
          </Grid>
          <Grid item container direction={"column"} sx={{ width: "auto" }}>
            <Grid item>
              <Typography fontSize={"1rem"} fontWeight={600}>
                {user.prénom}&nbsp;{user.nom}
              </Typography>
            </Grid>
            <Grid item>
              <Typography fontSize={".8rem"} color={grey[500]}>
                {user.email}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        item
        direction={"column"}
        sx={{
          alignItems: "flex-start",
          borderTop: `1px solid ${grey[200]}`,
          borderBottom: `1px solid ${grey[200]}`,
          py: 2,
          px: 3,
        }}
      >
        <Grid item>
          <Button
            variant="text"
            sx={{ textTransform: "unset", color: "#000", fontWeight: "400" }}
            startIcon={<PersonOutlineOutlinedIcon />}
          >
            Informations personnelles
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="text"
            sx={{ textTransform: "unset", color: "#000", fontWeight: "400" }}
            startIcon={<VpnKeyOutlinedIcon />}
          >
            Changer mon mot de passe
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          width: "100%",
          px: 3,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          startIcon={<LogoutOutlinedIcon />}
          onClick={logout}
          sx={{
            textTransform: "unset",
            borderRadius: "8px",
            backgroundImage: "linear-gradient(to right,#82c4c1, #369C96)",
          }}
        >
          Déconnexion
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileModal;
