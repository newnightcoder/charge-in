import { Box, Grid, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface BorneProps {
  isDefault?: boolean;
  hover?: boolean;
  borne?: boolean;
}

const ChoixClient = ({ isDefault, hover, borne }: BorneProps) => {
  const CustomDivider = styled(Box)(({ theme }) => ({
    height: "70%",
    width: "1px",
    backgroundColor: grey[300],
    [theme.breakpoints.down("md")]: {
      height: "1px",
      width: "75%",
    },
  }));

  const choix = {
    name: borne ? "Wallbox" : "BLAX",
    liste: {
      name: "Pulsar Plus",
    },
  };

  const SpecsList = () => {
    return (
      <Grid item container direction="column" width="auto">
        <ul
          style={{
            fontSize: ".85rem",
            paddingLeft: "20px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          {borne ? (
            <>
              <li>Puissance max pour votre installation: 22kW</li>
              <li>Contrôle d'accès: RFID</li>
              <li>Temps de charge: 6h30</li>
              <li>Optimisation coût de recharge: Oui</li>
              <li>Borne connectée</li>
            </>
          ) : (
            <>
              <li>Chez vous à partir de [Date]</li>
              <li>Votre installateur est à [x]km de chez vous</li>
              <li>Garantie 2 ans</li>
              <li>Installateur certifié</li>
            </>
          )}
        </ul>
      </Grid>
    );
  };

  return (
    <Grid
      container
      item
      className="styled-scrollbar-borne"
      sx={{
        height: "min-content",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-evenly",
        border: `1px solid ${isDefault ? "#369C96" : grey[400]}`,
        boxShadow: isDefault ? "0px 0px 21px -3px rgba(54,156,150,1)" : "none",
        borderRadius: "12px",
        backgroundColor: "#FFF",
        py: 2,
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
        {choix.name}
      </Grid>

      <CustomDivider />

      <Grid
        container
        item
        direction={"column"}
        rowGap={1}
        width={{ md: "max-content" }}
        sx={{
          p: 2,
          alignItems: { xs: "center", md: "flex-start" },
        }}
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
        <SpecsList />
      </Grid>

      <CustomDivider />

      <Grid item sx={{ with: "max-content" }}>
        <Typography
          variant={"h3"}
          fontWeight={600}
          color="secondary"
          noWrap
          sx={{ px: 2, py: 2, fontSize: { xs: "2rem", md: "3rem" } }}
        >
          2200.00 €
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ChoixClient;
