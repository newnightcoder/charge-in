import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PersonRoundedIcon from "@mui/icons-material/Person";
import PieChartRoundedIcon from "@mui/icons-material/PieChartRounded";
import PowerRoundedIcon from "@mui/icons-material/PowerRounded";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const CardHeader = ({ title }: { title: string }) => {
  const CustomIcon = () => {
    const iconStyle = { fill: "url(#linearColors)", fontSize: "2.5rem", mb: 1 };

    return (
      <>
        <svg width={0} height={0}>
          <linearGradient id="linearColors">
            <stop offset={0} stopColor="#8BDFDA" />
            <stop offset={1} stopColor="#369C96" />
          </linearGradient>
        </svg>
        {title.includes("Installateurs") ? (
          <PersonRoundedIcon sx={iconStyle} />
        ) : title.includes("Abonnements") ? (
          <PieChartRoundedIcon sx={iconStyle} />
        ) : title.includes("Devis") ? (
          <FolderCopyRoundedIcon sx={iconStyle} />
        ) : title.includes("charge") && !title.includes("supervisés") ? (
          <PowerRoundedIcon sx={iconStyle} />
        ) : title.includes("charge") && title.includes("supervisés") ? (
          <PeopleAltRoundedIcon sx={iconStyle} />
        ) : title.includes("conversion") ? (
          <DriveFileMoveRoundedIcon sx={iconStyle} />
        ) : title.includes("Chiffre") ? (
          <PaymentsRoundedIcon sx={iconStyle} />
        ) : null}
      </>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <CustomIcon />
      <Typography
        variant="subtitle1"
        color={grey[500]}
        width={title.includes("en cours") ? "12ch" : "16ch"}
        lineHeight={"1.3rem"}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CardHeader;
