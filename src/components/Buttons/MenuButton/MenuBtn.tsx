import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BtnIcon, menu } from "..";
import { formatRouteName } from "../../../helpers";

interface MenuBtnProps extends PropsWithChildren {
  btnName: string;
  dropdown?: boolean;
  dropdownOption?: boolean;
  open?: boolean;
  onClick?: () => void;
  handleOption?: (opt: string) => void;
}

const MenuBtn = ({
  btnName,
  dropdown,
  onClick,
  // handleOption,
  dropdownOption,
}: MenuBtnProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const linkTo = dropdownOption
    ? "#"
    : btnName === menu.accueil
    ? "/dashboard"
    : `/dashboard/${formatRouteName(btnName)}`;

  const handleOption = (opt: string) => {
    const isEnCours = pathname.endsWith("en-cours");
    const isArchives = pathname.endsWith("archives");
    const formattedOption = opt
      .replace(" ", "-")
      .replace("é", "e")
      .toLowerCase();

    if (isEnCours && formattedOption === "en-cours") return;
    if (isArchives && formattedOption === "archives") return;

    const newPath = `${pathname}/${formattedOption}`;
    const replacedPath = `${pathname.replace(
      /(en-cours|archives)$/,
      formattedOption
    )}`;
    navigate(isEnCours || isArchives ? replacedPath : newPath);
  };

  const btnStyle = {
    textTransform: "unset",
    justifyContent: "flex-start",
    borderBottomLeftRadius: dropdown ? "0" : "4px",
    borderBottomRightRadius: dropdown ? "0" : "4px",
    color: dropdownOption ? grey[500] : "",
    "&:hover": {
      color: dropdownOption ? "turquoise.main" : "",
    },
    "&.active": {
      backgroundColor: "info.dark",
      // color: dropdownOption ? "turquoise.main" : "",
    },
  };

  return (
    <Button
      variant={dropdownOption ? "text" : "contained"}
      color={dropdownOption ? "inherit" : "info"}
      fullWidth
      disableElevation
      startIcon={<BtnIcon btnName={btnName} />}
      component={NavLink}
      to={linkTo}
      end
      onClick={
        dropdownOption
          ? () => handleOption!(btnName)
          : dropdown
          ? onClick
          : undefined
      }
      sx={btnStyle}
    >
      {btnName}
      {dropdown && <AddIcon sx={{ position: "absolute", right: "10px" }} />}
    </Button>
  );
};

export default MenuBtn;
