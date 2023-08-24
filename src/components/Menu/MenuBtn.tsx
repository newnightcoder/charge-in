import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Button } from "@mui/material";

interface MenuBtnProps {
  btnName: string;
}

const MenuBtn = ({ btnName }: MenuBtnProps) => {
  const button = {
    utilisateurs: {
      admin: "CEO & Admins",
      managers: "Project Managers",
      installateurs: "Installateurs",
      clients: "Clients B2C",
    },
    données: {
      bornes: "Bornes",
      vehicules: "Véhicules",
      accessoires: "Accessoires",
      objectifs: "Objectifs",
    },
  };

  const BtnIcon = () => {
    switch (btnName) {
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
      variant="contained"
      color="info"
      fullWidth
      sx={{ textTransform: "unset", justifyContent: "flex-start" }}
      disableElevation
      startIcon={<BtnIcon />}
    >
      {btnName}
    </Button>
  );
};

export default MenuBtn;
