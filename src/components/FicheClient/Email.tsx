import EmailIcon from "@mui/icons-material/Email";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Email = ({ email }: { email: string }) => {
  return (
    <Grid item sx={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
      <IconButton sx={{ p: 0 }}>
        <EmailIcon sx={{ color: "primary.main", fontSize: "1.25rem" }} />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <Typography variant="subtitle2">Email (maps)</Typography>
        <Typography
          variant="subtitle2"
          color={grey[500]}
          sx={{ wordBreak: "break-word" }}
        >
          {email}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Email;
