import { Grid, Typography } from "@mui/material";

const TitleSection = ({ title }: { title: string }) => {
  return (
    <Grid item>
      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
    </Grid>
  );
};

export default TitleSection;
