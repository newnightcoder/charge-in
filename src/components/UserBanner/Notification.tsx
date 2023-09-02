import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import useAvatarLetter from "../../hooks/useAvatarLetter";
import { RootState } from "../../store";

const Notification = ({ index }: { index: number }) => {
  const { user } = useSelector((state: RootState) => state.user);
  const avatarLetter = useAvatarLetter();
  const notification = {
    msg: "a ajouté un installateur",
    date: "Il y a 3 jours",
  };

  return (
    <Grid
      item
      sx={{
        opacity: index <= 1 ? 1 : 0.4,
        borderBottom: `1px solid ${grey[300]}`,
        width: "100%",
        py: 1,
        "&:hover": { cursor: index <= 1 ? "pointer" : "default" },
      }}
    >
      <Grid
        container
        flexWrap={"nowrap"}
        columnGap={2}
        sx={{ alignItems: "center" }}
      >
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
            {avatarLetter}
          </Box>
        </Grid>

        <Grid container item direction="column">
          <Grid item>
            <Typography fontSize={".8rem"}>
              <span style={{ fontWeight: 600 }}>
                {user.prénom}&nbsp;{user.nom}
              </span>
              &nbsp;{notification.msg}
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={".8rem"}>{notification.date}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Notification;
