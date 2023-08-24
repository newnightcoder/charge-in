import AddIcon from "@mui/icons-material/Add";
import BusinessIcon from "@mui/icons-material/Business";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HouseIcon from "@mui/icons-material/House";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { HTMLAttributes } from "react";
import { button } from "../Buttons";

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
      case button.accueil:
        return <GridViewRoundedIcon />;
      case button.opportunités.maisons:
        return <HouseIcon />;
      case button.opportunités.appartements:
        return <HouseIcon />;
      case button.opportunités.études:
        return <BusinessIcon />;
      case button.utilisateurs.admin:
        return <VerifiedUserIcon />;
      case button.utilisateurs.managers:
        return <PersonOutlineIcon />;
      case button.utilisateurs.installateurs:
        return <PersonOutlineIcon />;
      case button.utilisateurs.clients:
        return <PersonOutlineIcon />;
      case button.données.bornes:
        return <ElectricBoltIcon />;
      case button.données.vehicules:
        return <DirectionsCarOutlinedIcon />;
      case button.données.accessoires:
        return <ConstructionOutlinedIcon />;
      case button.données.objectifs:
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
      onClick={dropdown ? onClick : undefined}
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
