import { Box, Grid, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../hooks";
import { RootState } from "../../store";

interface BorneProps {
  isDefault?: boolean;
  hover?: boolean;
}

const Borne = ({ isDefault, hover }: BorneProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();
  const [gridWidth, setGridWidth] = useState(0);
  const isChangeModalOpen = useSelector(
    (state: RootState) => state.borne.isChangeBorneOpen
  );

  const CustomDivider = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "1px",
    backgroundColor: grey[400],
    [theme.breakpoints.down("md")]: {
      height: "1px",
      width: "75%",
    },
  }));

  useEffect(() => {
    if (gridRef?.current && width > 900 && !isChangeModalOpen) {
      setGridWidth(gridRef.current.getBoundingClientRect().width);
    }
  }, [width, isChangeModalOpen, gridRef]);

  return (
    <Grid
      ref={gridRef}
      container
      item
      className="styled-scrollbar-borne"
      sx={{
        height: "min-content",
        flexDirection:
          (isChangeModalOpen && width > 900) || (gridWidth > 500 && width > 900)
            ? "row"
            : "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        border: `1px solid ${isDefault ? "#369C96" : grey[400]}`,
        boxShadow: isDefault ? "0px 0px 21px -3px rgba(54,156,150,1)" : "none",
        borderRadius: "12px",
        backgroundColor: "#FFF",
        py: 4,
        overflowX: "auto",
        "&:hover": hover
          ? {
              cursor: "pointer",
              border: "1px solid #369C96",
              boxShadow: "0px 0px 21px -3px rgba(54,156,150,1)",
            }
          : null,
      }}
    >
      <Grid item sx={{ px: 4, py: 2 }}>
        Wallbox
      </Grid>

      {/* <Grid item> */}
      <CustomDivider />
      {/* </Grid> */}

      <Grid
        container
        item
        direction={"column"}
        rowGap={1}
        width="min-content"
        sx={{ px: 4, py: 2 }}
      >
        <Grid item width="min-content">
          <Typography
            variant="subtitle2"
            noWrap
            fontSize="1rem"
            fontWeight={600}
          >
            Pulsar Plus
          </Typography>
        </Grid>

        <Grid item container direction="column" width="min-content">
          <ul
            style={{
              width: "min-content",
              whiteSpace: "nowrap",
              fontSize: ".85rem",
              paddingLeft: "20px",
            }}
          >
            <li>Puissance max pour votre installation: 22kW</li>
            <li>Contrôle d'accès: RFID</li>
            <li>Temps de charge: 6h30</li>
            <li>Optimisation coût de recharge: Oui</li>
            <li>Borne connectée</li>
          </ul>
        </Grid>
      </Grid>

      <CustomDivider />

      <Grid item sx={{ with: "max-content" }}>
        <Typography
          variant="h3"
          fontWeight={600}
          color="secondary"
          noWrap
          sx={{ px: 4, py: 2 }}
        >
          2200.00 €
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Borne;
