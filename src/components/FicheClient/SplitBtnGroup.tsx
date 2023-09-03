import { Button, Grid } from "@mui/material";
import { SplitSelectBtn } from "../Buttons";

const SplitBtnGroup = () => {
  return (
    <Grid
      container
      item
      rowGap={1.5}
      sx={{
        justifyContent: "space-between",
        gridColumn: { xs: "", md: "1/3" },
      }}
    >
      <Grid item>
        <SplitSelectBtn etape />
      </Grid>
      <Grid container item columnGap={2} sx={{ width: "auto" }}>
        <Grid item>
          <Button
            variant="outlined"
            size="large"
            sx={{
              textTransform: "unset",
              color: "primary.main",
              borderRadius: "8px",
              borderWidth: "2px",
              py: 0.65,
              "&:hover": {
                borderWidth: "2px",
              },
            }}
          >
            Statut
          </Button>
        </Grid>
        <Grid item>
          <SplitSelectBtn />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SplitBtnGroup;
