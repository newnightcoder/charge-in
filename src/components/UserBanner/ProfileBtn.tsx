import { Box, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAvatarLetter } from "../../hooks";
import { toggleProfileModal } from "../../store/userSlice";

const ProfileBtn = () => {
  const dispatch = useDispatch();
  const avatarLetter = useAvatarLetter();

  return (
    <IconButton onClick={() => dispatch(toggleProfileModal())}>
      <Box
        sx={{
          height: { xs: "35px", md: "50px" },
          width: { xs: "35px", md: "50px" },
          borderRadius: "50%",
          backgroundColor: "purple.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFF",
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        {avatarLetter}
      </Box>
    </IconButton>
  );
};

export default ProfileBtn;
