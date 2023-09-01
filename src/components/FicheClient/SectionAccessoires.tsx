import { Box, Grid, Typography } from "@mui/material";
import { Section, TitleSection } from ".";
import { BaseBtn } from "../Buttons";

interface AccessoireProps {
  accessoires: { name: string; price: number | null }[];
}

const SectionAccessoires = ({ accessoires }: AccessoireProps) => {
  return (
    <Section span={"1/3"}>
      <TitleSection title="Accessoires" />

      <Grid item>
        <Box
          component={"ul"}
          sx={{
            listStyle: "disc",
            display: "flex",
            columnGap: "40px",
            rowGap: "16px",
            flexWrap: "wrap",
            paddingLeft: "20px",
          }}
        >
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
        <BaseBtn btnName={"Modifier les accessoires"} />
      </Grid>
    </Section>
  );
};

export default SectionAccessoires;
