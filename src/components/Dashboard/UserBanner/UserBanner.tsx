import { Divider, Grid } from "@mui/material";
import { Greeting, NotificationBtn, ProfileBtn } from ".";

const UserBanner = () => {
  return (
    <Grid
      container
      item
      direction="column"
      rowSpacing={1.5}
      sx={{ pt: 1.5, px: 3 }}
    >
      <Grid
        container
        item
        width={"max-content"}
        columnSpacing={2.5}
        sx={{ alignSelf: "flex-end" }}
      >
        <Grid item sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Greeting />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <NotificationBtn />
        </Grid>
        <Grid item>
          <ProfileBtn />
        </Grid>
      </Grid>

      <Grid item>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default UserBanner;
