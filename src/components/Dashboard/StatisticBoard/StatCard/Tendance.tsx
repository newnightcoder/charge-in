import { Box, Typography } from "@mui/material";
import { green, grey, red } from "@mui/material/colors";

const Tendance = ({ tendency }: { tendency: string }) => {
  const positive = tendency.includes("+");
  const negative = tendency.includes("-");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
        color: positive ? green[500] : negative ? red[500] : grey[500],
      }}
    >
      <span
        style={{
          display: "block",
          fontSize: "1.5rem",
          transform: `${
            positive ? "rotate(-90deg)" : negative ? "rotate(90deg)" : ""
          }`,
        }}
      >
        {positive || negative ? <>&gt;</> : <>=</>}
      </span>
      <Typography width={"auto"}>{tendency}</Typography>
    </Box>
  );
};

export default Tendance;
