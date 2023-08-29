import { Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface InfoDetailProps {
  label: string;
  content: string | number;
  direction?: string;
  gapInfo?: string;
}

const InfoDetail = ({
  label,
  content,
  direction,
  gapInfo,
}: InfoDetailProps) => {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: direction ?? "column",
        gap: gapInfo ?? "5px",
      }}
    >
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="subtitle2" color={grey[500]}>
        {content}
      </Typography>
    </Grid>
  );
};

export default InfoDetail;
