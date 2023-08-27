import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Abonnements = ({ abo }: { abo: number | undefined }) => {
  return (
    <Box>
      <Typography variant="subtitle1" fontSize=".8rem" color={grey[500]}>
        Nombre d'abonnements
      </Typography>
      <Typography fontSize=".8rem" fontWeight={700} lineHeight="1rem">
        {abo}
      </Typography>
    </Box>
  );
};

export default Abonnements;
