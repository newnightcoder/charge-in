import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface PrevNextBtnProps {
  next?: boolean;
}

const PrevNextBtn = ({ next }: PrevNextBtnProps) => {
  return (
    <Grid container width="auto">
      {!next && (
        <Grid item>
          <IconButton sx={{ pl: 0 }}>
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
          <Typography fontWeight={400}>Prénom Nom</Typography>
        </Grid>
      </Grid>

      {next && (
        <Grid item>
          <IconButton sx={{ pr: 0 }}>
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
