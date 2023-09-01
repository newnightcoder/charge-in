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
import { capitalizeWord } from "../helpers";
import { menu } from "./Buttons";

const PageTitle = ({ title }: { title: string }) => {
  const capitalizedTitle = capitalizeWord(title);

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
        ) : capitalizedTitle === menu.opportunités.maisons ? (
          <HouseIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.opportunités.appartements ? (
          <HouseIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.opportunités.études ? (
          <BusinessIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.utilisateurs.admin ? (
          <VerifiedUserIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.utilisateurs.managers ? (
          <PersonOutlineIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.utilisateurs.installateurs ? (
          <PersonOutlineIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.utilisateurs.clients ? (
          <PersonOutlineIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.données.bornes ? (
          <ElectricBoltIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.données.vehicules ? (
          <DirectionsCarOutlinedIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.données.accessoires ? (
          <ConstructionOutlinedIcon sx={iconStyle} />
        ) : capitalizedTitle === menu.données.objectifs ? (
          <ViewKanbanIcon sx={iconStyle} />
        ) : null}
      </>
    );
  };

  return (
    <Grid
      container
      item
      columnGap={1}
      flexWrap="nowrap"
      sx={{ width: "auto", alignItems: "center" }}
    >
      <Grid item>
        <TitleIcon />
      </Grid>
      <Grid item>
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}
          fontWeight={700}
          noWrap
        >
          {capitalizedTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PageTitle;
