import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const DropdownSelect = () => {
  const [val, setVal] = useState("Cette année");
  const handleChange = (e: SelectChangeEvent) => {
    setVal(e.target.value);
  };

  const menuItemStyle = {
    "&.MuiMenuItem-root.Mui-selected": {
      backgroundImage: "linear-gradient(to right,#82c4c1, #369C96)",
      color: "#fff",
      borderRadius: "8px",
      fontWeight: 500,
    },
  };

  return (
    <Select
      value={val}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      IconComponent={KeyboardArrowDownIcon}
      sx={{
        borderRadius: "8px",
        backgroundImage: "linear-gradient(to right,#82c4c1, #369C96)",
        color: "#FFF",
        border: "none",

        "& .MuiSvgIcon-root": {
          fill: "#FFF",
        },
        "& fieldset": {
          border: "none",
        },
        "& .MuiSelect-select": {
          width: "150px",
          py: 1,
          fontWeight: 500,
        },
      }}
    >
      <MenuItem sx={menuItemStyle} value="Cette année">
        Cette année
      </MenuItem>
      <MenuItem sx={menuItemStyle} value={"30 derniers jours"}>
        30 derniers jours
      </MenuItem>
      <MenuItem sx={menuItemStyle} value={"Mois de juin"}>
        Mois de juin
      </MenuItem>
      <MenuItem sx={menuItemStyle} value={"6 derniers mois"}>
        6 derniers mois
      </MenuItem>
      <MenuItem sx={menuItemStyle} value={"12 derniers mois"}>
        12 derniers mois
      </MenuItem>
    </Select>
  );
};

export default DropdownSelect;
