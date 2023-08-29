import CloseIcon from "@mui/icons-material/Close";
import LoopIcon from "@mui/icons-material/Loop";
import { Grid, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Borne } from ".";
import { RootState } from "../../store";
import { toggle } from "../../store/borneSlice";
import { BaseBtn } from "../Buttons";

const ChangeModal = () => {
  const isChangeModalOpen = useSelector(
    (state: RootState) => state.borne.isChangeBorneOpen
  );
  const dispatch = useDispatch();

  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        inset: 0,
        zIndex: isChangeModalOpen ? 150 : "-1",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        backdropFilter: "blur(5px)",
        opacity: isChangeModalOpen ? 1 : 0,
        transition: "opacity 300ms",
      }}
    >
      <Grid
        item
        className="styled-scrollbar-modal"
        sx={{
          position: "relative",
          backgroundColor: "white.main",
          height: "100%",
          width: { xs: "90%", md: "75%" },
          pt: 6,
          px: 4,
          pb: 4,
          borderRadius: "12px",
          overflowY: "scroll",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={() => dispatch(toggle())}
        >
          <CloseIcon />
        </IconButton>

        <Grid
          item
          container
          direction={"column"}
          rowGap={4}
          sx={{ width: "100%" }}
        >
          <Grid
            item
            container
            columnGap={1}
            sx={{ width: "auto", alignItems: "center" }}
          >
            <LoopIcon color="primary" />
            <Typography variant="h6" fontWeight={600}>
              Changer la borne
            </Typography>
          </Grid>
          <Grid item sx={{ width: "auto" }}>
            <Typography>
              En changeant la borne, vous devrez changer d'installateur
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="column"
            rowGap={2}
            sx={{ width: "auto" }}
          >
            <Typography color="primary" fontWeight={600}>
              Borne actuelle
            </Typography>
            <Borne isDefault />
          </Grid>
          <Grid
            item
            container
            direction="column"
            rowGap={2}
            sx={{ width: "auto" }}
          >
            <Typography fontWeight={600}>Autres bornes proposées</Typography>
            <Borne hover />
            <Borne hover />
            <Borne hover />
          </Grid>
          <Grid item>
            <BaseBtn btnName="Enregistrer la borne" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChangeModal;
