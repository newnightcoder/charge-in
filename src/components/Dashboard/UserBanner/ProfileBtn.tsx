import { Box, IconButton } from "@mui/material";

const ProfileBtn = () => {
  return (
    <IconButton>
      <Box
        sx={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundColor: "purple.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFF",
        }}
      >
        P
      </Box>
    </IconButton>
  );
};

export default ProfileBtn;
