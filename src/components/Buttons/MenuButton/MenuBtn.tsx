import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { PropsWithChildren } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { BtnIcon, menu } from "..";
import { formatRouteName } from "../../../helpers";
import { useHandleOption } from "../../../hooks";

interface MenuBtnProps extends PropsWithChildren {
  btnName: string;
  dropdown?: boolean;
  dropdownOption?: boolean;
  open?: boolean;
  onClick?: () => void;
  parent?: string;
}

const MenuBtn = ({
  btnName,
  dropdown,
  onClick,
  dropdownOption,
  parent,
}: MenuBtnProps) => {
  const { pathname } = useLocation();
  const handleOption = useHandleOption();

  const linkTo = dropdownOption
    ? "#"
    : btnName === menu.accueil
    ? "/dashboard"
    : `/dashboard/${formatRouteName(btnName)}`;

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
      color:
        dropdownOption &&
        pathname.includes(parent!.toLowerCase()) &&
        pathname.includes(
          btnName.replace(" ", "-").replace(/é/i, "e").toLowerCase()
        )
          ? "turquoise.main"
          : "",
    },
  };
  const handleClick = dropdownOption
    ? () => handleOption(btnName, parent!)
    : dropdown
    ? onClick
    : undefined;

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
      onClick={handleClick}
      sx={btnStyle}
    >
      {btnName}
      {dropdown && <AddIcon sx={{ position: "absolute", right: "10px" }} />}
    </Button>
  );
};

export default MenuBtn;
