import CloseIcon from "@mui/icons-material/Close";
import LoopIcon from "@mui/icons-material/Loop";
import { Grid, IconButton, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChoixAccessoire, ChoixClient } from ".";
import { RootState } from "../../store";
import { setIsAccessoire, toggle } from "../../store/borneSlice";
import { BaseBtn } from "../Buttons";

const ChangeModal = () => {
  const isChangeModalOpen = useSelector(
    (state: RootState) => state.borne.isChangeBorneOpen
  );
  const { isBorne, isAccessoire } = useSelector(
    (state: RootState) => state.borne
  );
  const dispatch = useDispatch();

  const accessoireRefs = useRef<HTMLDivElement[]>([]);
  const accessoiresQty = 10;
  const [selectedAccessoires, setSelectedAccessoires] = useState<boolean[]>(
    Array(accessoiresQty).fill(false)
  );

  const handleAccessoireClick = (index: number) => {
    const selectedAccessoiresCopy = [...selectedAccessoires];
    selectedAccessoiresCopy[index] = !selectedAccessoiresCopy[index];
    setSelectedAccessoires(selectedAccessoiresCopy);
  };

  const closeModal = () => {
    dispatch(toggle());
    if (isAccessoire) return dispatch(setIsAccessoire(false));
  };

  const modal = {
    title: isBorne
      ? "Changer la borne"
      : isAccessoire
      ? "Changer les accessoires"
      : "Changer l'installateur",
    msg: isBorne
      ? "En changeant la borne, vous devrez changer d'installateur"
      : "",
    actuel: isBorne
      ? "Borne actuelle"
      : isAccessoire
      ? ""
      : "Installateur actuel",
    autres: isBorne
      ? "Autres bornes proposées"
      : isAccessoire
      ? ""
      : "Autres installateurs proposés",
    btn: isBorne
      ? "Enregistrer la borne"
      : isAccessoire
      ? "Enregistrer les accessoires"
      : "Enregistrer l'installateur",
  };

  const containerStyle = {
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
  };

  const modalContainerStyle = {
    position: "relative",
    backgroundColor: "white.main",
    height: isAccessoire ? "max-content" : "85%",
    width: isAccessoire ? "max-content" : { xs: "90%", md: "75%" },
    maxWidth: isAccessoire ? "750px" : "unset",
    pt: 6,
    px: 4,
    pb: 4,
    borderRadius: "12px",
    overflowY: "scroll",
  };

  return (
    <Grid container sx={containerStyle}>
      <Grid item className="styled-scrollbar-modal" sx={modalContainerStyle}>
        <IconButton
          sx={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={closeModal}
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
              {modal.title}
            </Typography>
          </Grid>
          {modal.msg && (
            <Grid item sx={{ width: "auto" }}>
              <Typography>{modal.msg}</Typography>
            </Grid>
          )}
          {isAccessoire ? (
            <Grid container item columnGap={2} rowGap={2}>
              {Array.from(Array(accessoiresQty)).map((_, i) => (
                <ChoixAccessoire
                  key={i}
                  ref={(el) => (accessoireRefs.current[i] = el!)}
                  onClick={() => handleAccessoireClick(i)}
                  selected={selectedAccessoires[i]}
                />
              ))}
            </Grid>
          ) : (
            <>
              <Grid
                item
                container
                direction="column"
                rowGap={2}
                sx={{ width: "auto" }}
              >
                <Typography color="primary" fontWeight={600}>
                  {modal.actuel}
                </Typography>
                <ChoixClient isDefault borne={isBorne} />
              </Grid>
              <Grid
                item
                container
                direction="column"
                rowGap={2}
                sx={{ width: "auto" }}
              >
                <Typography fontWeight={600}>{modal.autres}</Typography>
                <ChoixClient hover borne={isBorne} />
                <ChoixClient hover borne={isBorne} />
                <ChoixClient hover borne={isBorne} />
              </Grid>
            </>
          )}

          <Grid item>
            <BaseBtn btnName={modal.btn} onClick={closeModal} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ChangeModal;
