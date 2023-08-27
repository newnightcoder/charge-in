import { Box, Grid } from "@mui/material";
import { ActionBtn, actions } from "../Buttons";
import DashboardSectionTitle from "./DashboardSectionTitle";

const Actions = () => {
  return (
    <Grid container>
      <DashboardSectionTitle
        str1="Actions"
        str2="rapides"
        color1="#000"
        color2="#369C96"
      />

      <Box sx={{ width: "100%", display: "flex" }}>
        {Object.values(actions).map((act, i) => (
          <ActionBtn key={i} btnName={act} index={i} />
        ))}
      </Box>
    </Grid>
  );
};

export default Actions;
