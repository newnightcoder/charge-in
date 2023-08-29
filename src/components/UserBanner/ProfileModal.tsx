import { Box, Divider, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ProfileModal = () => {
  const { user, isModalOpen: isProfileModalOpen } = useSelector(
    (state: RootState) => state.user
  );

  return (
    <Grid
      container
      direction="column"
      rowGap={2}
      sx={{
        height: "300px",
        width: "300px",
        p: 3,
        position: "absolute",
        top: "0",
        right: "5rem",
        zIndex: isProfileModalOpen ? 100 : "-1",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        border: "1px solid white.main",
        backgroundColor: "#fff",
        opacity: isProfileModalOpen ? 1 : 0,
        transition: "opacity 300ms",
        borderRadius: "8px",
      }}
    >
      <Grid item>
        <Typography variant="h6" fontWeight={600}>
          Profil
        </Typography>
      </Grid>

      <Grid item container columnGap={2} sx={{ alignItems: "center" }}>
        <Grid item>
          <Box
            sx={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              backgroundColor: "secondary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFF",
            }}
          >
            P
          </Box>
        </Grid>
        <Grid item container direction={"column"} sx={{ width: "auto" }}>
          <Typography fontSize={"1rem"} fontWeight={600}>
            {user.prénom}&nbsp;{user.nom}
          </Typography>
          <Typography fontSize={".8rem"} color={grey[500]}>
            {user.email}
          </Typography>
        </Grid>

        <Grid item>
          <Divider />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileModal;
