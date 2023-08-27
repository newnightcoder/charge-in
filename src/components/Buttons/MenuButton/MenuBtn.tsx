import AddIcon from "@mui/icons-material/Add";
import BusinessIcon from "@mui/icons-material/Business";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { HTMLAttributes } from "react";
import menu from "./menuBtnList";

interface MenuBtnProps {
  btnName: string;
  dropdown?: boolean;
  dropdownOption?: boolean;
  open?: boolean;
  onClick?: () => void;
  active?: HTMLAttributes<HTMLButtonElement>;
}

const MenuBtn = ({
  btnName,
  dropdown,
  onClick,
  dropdownOption,
}: MenuBtnProps) => {
  const BtnIcon = () => {
    switch (btnName) {
      case menu.accueil:
        return <GridViewRoundedIcon />;
      case menu.opportunités.maisons:
        return <HouseOutlinedIcon />;
      case menu.opportunités.appartements:
        return <HouseOutlinedIcon />;
      case menu.opportunités.études:
        return <BusinessIcon />;
      case menu.utilisateurs.admin:
        return <VerifiedUserIcon />;
      case menu.utilisateurs.managers:
        return <PersonOutlineIcon />;
      case menu.utilisateurs.installateurs:
        return <PersonOutlineIcon />;
      case menu.utilisateurs.clients:
        return <PersonOutlineIcon />;
      case menu.données.bornes:
        return <ElectricBoltIcon />;
      case menu.données.vehicules:
        return <DirectionsCarOutlinedIcon />;
      case menu.données.accessoires:
        return <ConstructionOutlinedIcon />;
      case menu.données.objectifs:
        return <ViewKanbanIcon />;
      default:
        return <></>;
    }
  };

  return (
    <Button
      variant={dropdownOption ? "text" : "contained"}
      color={dropdownOption ? "inherit" : "info"}
      fullWidth
      disableElevation
      startIcon={<BtnIcon />}
      onClick={onClick}
      sx={{
        textTransform: "unset",
        justifyContent: "flex-start",
        borderBottomLeftRadius: dropdown ? "0" : "4px",
        borderBottomRightRadius: dropdown ? "0" : "4px",
        color: dropdownOption ? grey[500] : "",
        "&:hover": {
          color: dropdownOption ? "turquoise.main" : "",
        },
        // "&:active": {
        //   backgroundColor: "primary.dark",
        // },
      }}
    >
      {btnName}
      {dropdown && <AddIcon sx={{ position: "absolute", right: "10px" }} />}
    </Button>
  );
};

export default MenuBtn;
