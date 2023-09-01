import { Button } from "@mui/material";

interface BasicBtnProps {
  btnName: string;
  onClick?: () => void;
  submit?: boolean;
}

const BaseBtn = ({ btnName, onClick, submit }: BasicBtnProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      type={submit ? "submit" : "button"}
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
