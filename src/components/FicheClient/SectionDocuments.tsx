import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Document, Section, TitleSection } from ".";
import { BaseBtn } from "../Buttons";

interface DocumentsProps {
  documents: {
    docs: { title: string; fichier: string }[];
    autres: { fichier: string }[];
  };
}

const SectionDocuments = ({ documents }: DocumentsProps) => {
  console.log(documents);

  return (
    <Section span={"1/3"}>
      <TitleSection title="Documents ajoutés" />

      <Grid
        container
        item
        columnGap={2}
        rowGap={2}
        sx={{ pb: 2, borderBottom: `1px solid ${grey[300]}` }}
      >
        {documents.docs.map((doc, i: number) => (
          <Document key={i} doc={doc} />
        ))}
      </Grid>
      <Grid
        container
        item
        columnGap={2}
        rowGap={2}
        sx={{ pb: 2, alignItems: "center" }}
      >
        <Typography variant="subtitle1" fontWeight={500} noWrap>
          Autres documents
        </Typography>
        {documents.autres.map((doc, i: number) => (
          <Document key={i} doc={doc} isAutres />
        ))}
      </Grid>

      <Grid item>
        <BaseBtn btnName="Modifier les documents" />
      </Grid>
    </Section>
  );
};

export default SectionDocuments;
