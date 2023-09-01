import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { toggleNotifModal } from "../../store/userSlice";

const NotificationBtn = () => {
  const dispatch = useDispatch();

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    "& .MuiBadge-badge": {
      right: 4,
      top: 10,
    },
  }));
  return (
    <IconButton
      aria-label="cloche"
      onClick={() => dispatch(toggleNotifModal())}
    >
      <StyledBadge badgeContent={4} color="primary">
        <NotificationsIcon sx={{ color: `${grey[400]}`, fontSize: "2rem" }} />
      </StyledBadge>
    </IconButton>
  );
};

export default NotificationBtn;
