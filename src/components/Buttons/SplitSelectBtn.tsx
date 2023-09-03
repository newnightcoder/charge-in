import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  ButtonGroup,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { useRef, useState } from "react";

interface SelectBtnProps {
  etape?: boolean;
}

const SplitSelectBtn = ({ etape }: SelectBtnProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = etape
    ? ["Etape 1", "Etape 2", "Etape 3", "Etape 4"]
    : ["Envoyer un mail", "Appeler client"];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const leftBtnStyle = {
    backgroundColor: etape ? "secondary.main" : "primary.main",
    "&:hover": {
      backgroundColor: etape ? "secondary.dark" : "primary.dark",
    },
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    textTransform: "unset",
    fontSize: "1rem",
  };

  const rightBtnStyle = {
    backgroundColor: etape ? "secondary.main" : "primary.main",
    "&:hover": {
      backgroundColor: etape ? "secondary.dark" : "primary.dark",
    },
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  };

  const menuItemStyle = {
    "&.MuiMenuItem-root.Mui-selected": {
      backgroundColor: etape ? "secondary.main" : "primary.main",
      color: "#fff",
      borderRadius: "8px",
      fontWeight: 500,
    },
  };

  return (
    <Box sx={{ position: "relative" }}>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        sx={{
          borderRadius: "8px",
          ".MuiButtonGroup-grouped:not(:last-of-type)": {
            borderRight: "1px solid white",
          },
        }}
      >
        <Button sx={leftBtnStyle}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select étape"
          aria-haspopup="menu"
          onClick={handleToggle}
          sx={rightBtnStyle}
        >
          <KeyboardArrowDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 2,
          ".MuiPopper-root": {
            position: "absolute",
            left: 0,
            width: anchorRef.current?.getBoundingClientRect().width,
          },
        }}
        open={open}
        anchorEl={anchorRef.current}
      >
        <Paper>
          <MenuList id="split-button-menu" autoFocusItem>
            {options.map((option, i) => (
              <MenuItem
                key={option}
                selected={i === selectedIndex}
                onClick={() => handleClick(i)}
                sx={menuItemStyle}
              >
                {option}
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  );
};

export default SplitSelectBtn;
