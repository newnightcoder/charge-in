import BusinessIcon from "@mui/icons-material/Business";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { menu } from "..";

const BtnIcon = ({ btnName }: { btnName: string }) => {
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

export default BtnIcon;
