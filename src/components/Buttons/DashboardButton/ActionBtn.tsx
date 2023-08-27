import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import EvStationOutlinedIcon from "@mui/icons-material/EvStationOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Button, styled } from "@mui/material";
import actions from "./actionBtnList";

interface ActionBtnProps {
  index: number;
  btnName: string;
}

const ActionBtn = ({ index, btnName }: ActionBtnProps) => {
  const ActionBtn = styled(Button)(() => ({
    whiteSpace: "nowrap",
    textTransform: "unset",
    borderRadius: "8px",
  }));

  const BtnIcon = () => {
    switch (btnName) {
      case actions.installateur:
        return <PersonOutlineOutlinedIcon />;
      case actions.étude:
        return <InsertDriveFileOutlinedIcon />;
      case actions.borne:
        return <EvStationOutlinedIcon />;
      case actions.véhicule:
        return <DirectionsCarFilledOutlinedIcon />;
      case actions.accessoire:
        return <BuildOutlinedIcon />;
      case actions.objectif:
        return <DirectionsCarFilledOutlinedIcon />;
      default:
        return <></>;
    }
  };

  return (
    <ActionBtn
      variant="contained"
      color={index % 2 === 0 ? "secondary" : "primary"}
      startIcon={<BtnIcon />}
      fullWidth
    >
      {btnName}
    </ActionBtn>
  );
};

export default ActionBtn;
