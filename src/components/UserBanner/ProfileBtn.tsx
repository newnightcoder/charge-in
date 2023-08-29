import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileBtn = () => {
  const navigate = useNavigate();

  return (
    <IconButton>
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
