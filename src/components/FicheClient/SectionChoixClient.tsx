import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { ChoixClient, Section, TitleSection } from ".";
import { setIsBorne, toggle } from "../../store/borneSlice";
import { BaseBtn } from "../Buttons";

interface SectionChoixClientProps {
  borne?: boolean;
}

const SectionChoixClient = ({ borne }: SectionChoixClientProps) => {
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(toggle());
    if (borne) {
      dispatch(setIsBorne(true));
    } else {
      dispatch(setIsBorne(false));
    }
  };

  const title = borne ? "Borne choisie" : "Installateur choisi";
  const btnName = borne ? "Modifier la borne" : "Modifier l'installateur";

  return (
    <Section span="1/3">
      <TitleSection title={title} />

      <ChoixClient borne={borne} />

      <Grid item>
        <BaseBtn btnName={btnName} onClick={toggleModal} />
      </Grid>
    </Section>
  );
};

export default SectionChoixClient;
