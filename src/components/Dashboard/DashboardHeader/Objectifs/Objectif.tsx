import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import CircleProgress from "./CircleProgress";

interface ObjectifProps {
  objectif: {
    name: string;
    percent: number;
  };
}

const Objectif = ({ objectif }: ObjectifProps) => {
  const [status, setStatus] = useState<string | null>(null);
  const objStatus = {
    encours: "En cours",
    complété: "Complété",
  };

  const objWidth = "265px";
  const circlePgWidth = "110px";
  const gap = "8px";
  const objTextWidth = "50%";

  useEffect(() => {
    if (objectif.percent === 100) {
      return setStatus(objStatus.complété);
    }
    setStatus(objStatus.encours);
  }, [objectif.percent]);

  return (
    <Grid
      item
      container
      sx={{
        justifyContent: "flex-start",
        height: "110px",
        minWidth: objWidth,
        width: `calc(33% - ${gap})`,
        gap: gap,
        // border: "1px solid white",
      }}
    >
      <Grid
        item
        container
        direction={"column"}
        sx={{ width: objTextWidth, justifyContent: "center" }}
      >
        <Typography variant="subtitle1" color={grey[500]} width="auto" noWrap>
          {objectif.name}
        </Typography>
        <Typography
          variant="subtitle1"
          color={"#FFF"}
          fontWeight={700}
          sx={{ width: "auto", lineHeight: "1.2rem" }}
        >
          {status}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: circlePgWidth,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // border: "1px solid white",
        }}
      >
        <CircleProgress percent={objectif.percent} />
      </Grid>
    </Grid>
  );
};

export default Objectif;
