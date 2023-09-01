import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge, BadgeProps, IconButton, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleNotifModal } from "../../store/userSlice";

const NotificationBtn = () => {
  const dispatch = useDispatch();
  const { notifications: notifNumber } = useSelector(
    (state: RootState) => state.user
  );

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
      <StyledBadge badgeContent={notifNumber} color="primary">
        <NotificationsIcon sx={{ color: `${grey[400]}`, fontSize: "2rem" }} />
      </StyledBadge>
    </IconButton>
  );
};

export default NotificationBtn;
