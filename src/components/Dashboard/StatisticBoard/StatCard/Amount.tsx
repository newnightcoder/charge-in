import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

interface AmountProps {
  amount: {
    amount: number;
    price: boolean;
  };
}

const Amount = ({ amount }: AmountProps) => {
  return (
    <Typography
      fontWeight={700}
      fontSize={"1.6rem"}
      sx={{
        "&:after": {
          content: '"HT"',
          display: amount.price ? "inline-block" : "none",
          position: "relative",
          top: "-5px",
          right: "-5px",
          color: grey[500],
          fontSize: ".85rem",
          fontWeight: 500,
        },
      }}
    >{`${amount.amount}${amount.price ? "€" : ""}`}</Typography>
  );
};

export default Amount;
