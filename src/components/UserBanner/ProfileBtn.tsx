import { Box, IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggle } from "../../store/userSlice";

const ProfileBtn = () => {
  const dispatch = useDispatch();

  return (
    <IconButton onClick={() => dispatch(toggle())}>
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
        P
      </Box>
    </IconButton>
  );
};

export default ProfileBtn;
