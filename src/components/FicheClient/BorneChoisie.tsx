import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { Borne, Section, TitleSection } from ".";
import { toggle } from "../../store/borneSlice";
import { BaseBtn } from "../Buttons";

const BorneChoisie = () => {
  const dispatch = useDispatch();

  return (
    <Section span="1/3">
      <TitleSection title="Borne choisie" />

      <Borne />

      <Grid item>
        <BaseBtn
          btnName=" Modifier la borne"
          onClick={() => dispatch(toggle())}
        />
      </Grid>
    </Section>
  );
};

export default BorneChoisie;
