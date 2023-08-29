import { Chip } from "@mui/material";

const Etape = ({ etape }: { etape: number }) => {
  const createBg = () => {
    switch (etape) {
      case 1:
        return "rgba(0,179,149,.15)";
      case 2:
        return "rgb(255,179,25, .15)";
      case 3:
        return "rgba(153,51,255,.15)";
      case 4:
        return "rgba(255,102,179,.15)";
    }
  };

  const createTextColor = () => {
    switch (etape) {
      case 1:
        return "#369C96";
      case 2:
        return "rgb(255,179,25)";
      case 3:
        return "rgb(153,51,255)";
      case 4:
        return "rgb(255,102,179)";
    }
  };

  return (
    <Chip
      label={`Étape ${etape}`}
      sx={{
        fontWeight: 600,
        color: createTextColor(),
        backgroundColor: createBg(),
        borderRadius: "4px",
        py: "1px",
      }}
    />
  );
};

export default Etape;
