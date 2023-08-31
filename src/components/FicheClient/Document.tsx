import { Chip, Grid, Typography } from "@mui/material";

interface DocumentProps {
  doc: {
    title?: string;
    fichier: string;
  };
}

const Document = ({ doc }: DocumentProps) => {
  return (
    <Grid
      container
      item
      direction={"column"}
      rowGap={0.75}
      width={{ xs: "max-content", md: "33%" }}
    >
      <Grid item sx={{ pr: 2 }}>
        <Typography variant="subtitle1" fontWeight={500} noWrap>
          {doc.title}
        </Typography>
      </Grid>
      <Grid item>
        <Chip
          label={doc.fichier}
          sx={{
            fontWeight: 600,
            color: "#369C96",
            backgroundColor: "rgba(0, 179, 149, 0.15)",
            borderRadius: "4px",
            py: "1px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Document;
