import { Grid } from "@mui/material";
import { ActionBtn, actions } from "../Buttons";
import DashboardSectionTitle from "./DashboardSectionTitle";

const Actions = () => {
  const btnWrapperStyle = {
    width: { xs: "75%", md: "300px" },
    maxWidth: "450px",
  };

  return (
    <Grid container direction={"column"} rowGap={3}>
      <DashboardSectionTitle
        str1="Actions"
        str2="rapides"
        color1="#000"
        color2="#369C96"
      />

      <Grid
        container
        item
        columnGap={1.25}
        rowGap={1}
        sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
      >
        {Object.values(actions).map((act, i) => (
          <Grid item key={i} sx={btnWrapperStyle}>
            <ActionBtn btnName={act} index={i} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Actions;
