import { Box, Typography } from "@mui/material";

interface BtoProps {
  name: string;
  bto: number | null;
}

const Bto = ({ name, bto }: BtoProps) => {
  return (
    <Box sx={{ width: "50%" }}>
      <Typography>{name}</Typography>
      <Typography>{bto ? bto + "€ HT" : "##"}</Typography>
    </Box>
  );
};

export default Bto;
