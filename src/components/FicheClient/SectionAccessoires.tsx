import { Box, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { Section, TitleSection } from ".";
import { setIsAccessoire, toggle } from "../../store/borneSlice";
import { BaseBtn } from "../Buttons";

interface AccessoireProps {
  accessoires: { name: string; price: number | null }[];
}

const SectionAccessoires = ({ accessoires }: AccessoireProps) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(setIsAccessoire(true));
    dispatch(toggle());
  };

  const section = {
    title: "Accessoires",
    btnName: "Modifier les accessoires",
  };

  const listStyle = {
    listStyle: "disc",
    display: "flex",
    columnGap: "40px",
    rowGap: "16px",
    flexWrap: "wrap",
    paddingLeft: "20px",
  };

  return (
    <Section span={"1/3"}>
      <TitleSection title={section.title} />

      <Grid item>
        <Box component={"ul"} sx={listStyle}>
          {accessoires.map((access, i) => (
            <li key={i} style={{ display: "list-item" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Typography variant="subtitle1" fontWeight={500} noWrap>
                  {access.name}
                </Typography>
                <Typography fontWeight={600} color="primary">
                  {access.price ?? "##"}€
                </Typography>
              </Box>
            </li>
          ))}
        </Box>
      </Grid>

      <Grid item>
        <BaseBtn btnName={section.btnName} onClick={handleModal} />
      </Grid>
    </Section>
  );
};

export default SectionAccessoires;
