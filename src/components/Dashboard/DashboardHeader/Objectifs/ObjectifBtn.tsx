import { Button, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

const ObjectifBtn = ({ name }: { name: string }) => {
  const ObjBtn = styled(Button)(({ theme }) => ({
    width: "130px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
    backgroundImage: `linear-gradient(${theme.palette.info.main},${theme.palette.info.main})`,
    textTransform: "lowercase",
    whiteSpace: "nowrap",
    padding: "5px 18px",
    fontSize: ".8rem",
    color: grey[500],
    borderRadius: "7px",
    "&:hover": {
      backgroundImage: "linear-gradient(117deg, #8BDFDA, #369C96)",
      color: grey[50],
    },
    "&:active": {
      backgroundImage: "linear-gradient(117deg, #8BDFDA, #369C96)",
      color: grey[50],
    },
  }));

  return <ObjBtn>{name}</ObjBtn>;
};

export default ObjectifBtn;
