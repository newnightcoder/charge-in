import { Box, Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Comment = () => {
  return (
    <Grid
      container
      wrap="nowrap"
      columnGap={2}
      sx={{ alignItems: "flex-start" }}
    >
      <Grid item sx={{ width: "min-content" }}>
        <Box
          component={"div"}
          sx={{
            height: "35px",
            width: "35px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "linear-gradient( #82c4c1,#369C96)",
            color: "#FFF",
            transform: "translateY(-5px)",
          }}
        >
          N
        </Box>
      </Grid>
      <Grid
        container
        item
        direction={"column"}
        rowGap={1.5}
        sx={{ width: "auto" }}
      >
        <Grid
          item
          container
          columnGap={2}
          sx={{ width: "min-content" }}
          wrap="nowrap"
        >
          <Grid item>
            <Typography fontWeight={600} noWrap>
              Nabil LOFTY
            </Typography>
          </Grid>
          <Grid item>
            <Typography fontSize={".9rem"} noWrap color={grey[400]}>
              Le 16/06/2023, à 18:28
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "auto" }}>
          <Typography color={grey[700]} fontSize=".9rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            perferendis sit facere omnis maxime voluptatibus dolorem deserunt
            tenetur quasi cumque illum nemo, optio dicta aliquam eveniet earum
            nihil officia maiores.
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "unset", fontSize: ".9rem" }}
          >
            Historique des commentaires
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Comment;
