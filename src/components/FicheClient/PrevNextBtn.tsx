import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface PrevNextBtnProps {
  next?: boolean;
  onClick?: () => void;
  client?: {
    prenom: string;
    nom: string;
  };
}

const PrevNextBtn = ({ next, onClick, client }: PrevNextBtnProps) => {
  return (
    <Grid container width="auto">
      {!next && (
        <Grid item>
          <IconButton sx={{ pl: 0 }} onClick={onClick}>
            <NavigateBeforeIcon
              sx={{ fontSize: "2rem", color: "primary.main" }}
            />
          </IconButton>
        </Grid>
      )}

      <Grid
        container
        direction={"column"}
        width="auto"
        sx={{ alignItems: next ? "flex-start" : "flex-end" }}
      >
        <Grid item width="max-content">
          <Typography color={grey[400]}>
            {next ? "Suivant" : "Précédent"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={400}
            width={{ xs: "10ch", md: "16ch" }}
            noWrap
          >
            {client?.nom}&nbsp;{client?.prenom}
          </Typography>
        </Grid>
      </Grid>

      {next && (
        <Grid item>
          <IconButton sx={{ pr: 0 }} onClick={onClick}>
            <NavigateNextIcon
              sx={{ fontSize: "2rem", color: "primary.main" }}
            />
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
};

export default PrevNextBtn;
