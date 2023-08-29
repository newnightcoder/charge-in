import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";

const Phone = ({ phone }: { phone: string }) => {
  return (
    <Grid item sx={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
      <IconButton sx={{ p: 0 }}>
        <PhoneIcon
          sx={{
            color: "primary.main",
            fontSize: "1.25rem",
            transform: "translateY(1px)",
          }}
        />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <Typography variant="subtitle2">Téléphone</Typography>
        <Button
          variant="text"
          color="primary"
          sx={{
            width: "min-content",
            whiteSpace: "nowrap",
            p: 0,
          }}
        >
          {phone}
        </Button>
      </Box>
    </Grid>
  );
};

export default Phone;
