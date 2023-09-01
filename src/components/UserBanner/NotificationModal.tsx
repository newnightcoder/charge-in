import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { Notification } from ".";
import { RootState } from "../../store";
import { toggleNotifModal } from "../../store/userSlice";

const NotificationModal = () => {
  const { isNotificationModalOpen, notifications: notifNumber } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();
  const notifications = Array.from(Array(notifNumber));

  const closeModal = () => {
    dispatch(toggleNotifModal());
  };

  const modalStyle = {
    height: "max-content",
    maxHeight: "300px",
    width: "340px",
    py: 2,
    position: "fixed",
    top: "8px",
    right: { xs: "15px", md: "11rem" },
    zIndex: isNotificationModalOpen ? 150 : "-1",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    opacity: isNotificationModalOpen ? 1 : 0,
    transition: "opacity 300ms",
    borderRadius: "8px",
    border: `1px solid ${grey[300]}`,
    overflow: "hidden",
  };

  return (
    <Box sx={modalStyle}>
      <IconButton
        sx={{ position: "absolute", top: "5px", right: "5px" }}
        onClick={closeModal}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <Box
        sx={{
          px: 2,
          pb: 1.5,
          borderBottom: `1px solid ${grey[300]}`,
          width: "100%",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Notifications
        </Typography>
      </Box>

      <Box
        className="styled-scrollbar-modal"
        sx={{
          height: "max-content",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <Grid
          container
          direction={"column"}
          sx={{
            height: "max-content",
            width: "100%",
            px: 1,
          }}
        >
          {notifications.map((_, i) => (
            <Notification key={i} />
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pt: 2,
          pb: 1,
          px: 2,
        }}
      >
        <Typography fontSize=".9rem">
          {notifNumber}&nbsp;
          {`notification${notifNumber < 2 ? "" : "s"}`}
        </Typography>
        <Button
          variant="contained"
          // onClick={logout}
          sx={{
            textTransform: "unset",
            borderRadius: "8px",
            backgroundImage: "linear-gradient(to right,#82c4c1, #369C96)",
          }}
        >
          Tout effacer
        </Button>
      </Box>
    </Box>
  );
};

export default NotificationModal;
