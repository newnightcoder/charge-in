import { Grid } from "@mui/material";
import { ClientProps } from "./FicheClient";
import PrevNextBtn from "./PrevNextBtn";

interface PrevNextSectionProps {
  nextClient: ClientProps["client"];
  prevClient: ClientProps["client"];
  handlePrev: () => void;
  handleNext: () => void;
}

const PrevNextSection = ({
  prevClient,
  nextClient,
  handlePrev,
  handleNext,
}: PrevNextSectionProps) => {
  return (
    <Grid
      container
      justifyContent={!prevClient ? "flex-end" : "space-between"}
      sx={{ pt: 1 }}
    >
      {prevClient && (
        <PrevNextBtn
          next={false}
          onClick={handlePrev}
          client={{
            nom: prevClient.nom,
            prenom: prevClient.prenom,
          }}
        />
      )}
      {nextClient && (
        <PrevNextBtn
          next
          onClick={handleNext}
          client={{
            nom: nextClient.nom,
            prenom: nextClient.prenom,
          }}
        />
      )}
    </Grid>
  );
};

export default PrevNextSection;
