import { Button } from "@mui/material";

interface BasicBtnProps {
  btnName: string;
  onClick?: () => void;
}

const BaseBtn = ({ btnName, onClick }: BasicBtnProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: "8px",
        px: 4,
        textTransform: "unset",
        fontSize: "1rem",
      }}
      onClick={onClick}
    >
      {btnName}
    </Button>
  );
};

export default BaseBtn;
