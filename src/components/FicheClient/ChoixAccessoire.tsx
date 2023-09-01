import { Checkbox, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { forwardRef, MouseEventHandler } from "react";

interface ChoixAccessoireProps {
  selected?: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ChoixAccessoire = forwardRef<HTMLDivElement, ChoixAccessoireProps>(
  ({ selected, onClick }, ref) => {
    const accessoire = { name: "Nom de l'accessoire", price: "12€" };

    const style = {
      border: `1px solid ${selected ? "#369C96" : grey[500]}`,
      borderRadius: "8px",
      px: 2,
      py: 1,
      "&:hover": {
        cursor: "pointer",
        border: `1px solid  #369C96`,
      },
      backgroundColor: selected ? "rgba(0, 179, 149, 0.1)" : "",
    };

    return (
      <Grid
        container
        item
        columnGap={2}
        width={"max-content"}
        sx={style}
        ref={ref}
        onClick={onClick}
      >
        <Typography fontWeight={500} noWrap sx={{ pr: 2 }}>
          {accessoire.name} - {accessoire.price}
        </Typography>
        <Checkbox
          color="primary"
          sx={{ "&.MuiCheckbox-root": { p: 0, m: 0 } }}
          checked={selected}
        />
      </Grid>
    );
  }
);

export default ChoixAccessoire;
