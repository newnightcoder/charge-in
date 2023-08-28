import BusinessIcon from "@mui/icons-material/Business";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import HouseIcon from "@mui/icons-material/House";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import { Grid, Typography } from "@mui/material";
import { menu } from "./Buttons";

const PageTitle = ({ title }: { title: string }) => {
  const TitleIcon = () => {
    const iconStyle = {
      color: "primary.main",
      fontSize: "3rem",
    };

    return (
      <>
        {title.includes("Tableau") ? (
          <ElectricBoltOutlinedIcon sx={iconStyle} />
        ) : title.includes("Profil") ? (
          <PersonIcon sx={iconStyle} />
        ) : title === menu.opportunités.maisons ? (
          <HouseIcon sx={iconStyle} />
        ) : title === menu.opportunités.appartements ? (
          <HouseIcon sx={iconStyle} />
        ) : title === menu.opportunités.études ? (
          <BusinessIcon sx={iconStyle} />
        ) : title === menu.utilisateurs.admin ? (
          <VerifiedUserIcon sx={iconStyle} />
        ) : title === menu.utilisateurs.managers ? (
          <PersonOutlineIcon sx={iconStyle} />
        ) : title === menu.utilisateurs.installateurs ? (
          <PersonOutlineIcon sx={iconStyle} />
        ) : title === menu.utilisateurs.clients ? (
          <PersonOutlineIcon sx={iconStyle} />
        ) : title === menu.données.bornes ? (
          <ElectricBoltIcon sx={iconStyle} />
        ) : title === menu.données.vehicules ? (
          <DirectionsCarOutlinedIcon sx={iconStyle} />
        ) : title === menu.données.accessoires ? (
          <ConstructionOutlinedIcon sx={iconStyle} />
        ) : title === menu.données.objectifs ? (
          <ViewKanbanIcon sx={iconStyle} />
        ) : null}
      </>
    );
  };

  return (
    <Grid container item columnGap={1} sx={{ width: "auto" }}>
      <Grid item>
        <TitleIcon />
      </Grid>
      <Grid item>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "1.25rem", md: "2.5rem" } }}
          fontWeight={700}
          noWrap
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageTitle;
