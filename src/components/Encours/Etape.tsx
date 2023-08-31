import { Chip } from "@mui/material";
import { useMemo } from "react";

const Etape = ({ etape }: { etape: number }) => {
  const color = useMemo(() => {
    let textColor = "";
    let bgColor = "";

    switch (etape) {
      case 1:
        textColor = "#369C96";
        bgColor = "rgba(0, 179, 149, 0.15)";
        break;
      case 2:
        textColor = "rgb(255, 179, 25)";
        bgColor = "rgba(255, 179, 25, 0.15)";
        break;
      case 3:
        textColor = "rgb(153, 51, 255)";
        bgColor = "rgba(153, 51, 255, 0.15)";
        break;
      case 4:
        textColor = "rgb(255, 102, 179)";
        bgColor = "rgba(255, 102, 179, 0.15)";
        break;
      default:
        break;
    }

    return { text: textColor, bg: bgColor };
  }, [etape]);

  return (
    <Chip
      label={`Étape ${etape}`}
      sx={{
        fontWeight: 600,
        color: color.text,
        backgroundColor: color.bg,
        borderRadius: "4px",
        py: "1px",
      }}
    />
  );
};

export default Etape;
