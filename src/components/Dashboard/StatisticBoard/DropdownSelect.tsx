import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const DropdownSelect = () => {
  const [val, setVal] = useState("Cette année");
  const handleChange = (e: SelectChangeEvent) => {
    setVal(e.target.value);
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
      <MenuItem value="Cette année">Cette année</MenuItem>
      <MenuItem value={"30 derniers jours"}>30 derniers jours</MenuItem>
      <MenuItem value={"Mois de juin"}>Mois de juin</MenuItem>
      <MenuItem value={"6 derniers mois"}>6 derniers mois</MenuItem>
      <MenuItem value={"12 derniers mois"}>12 derniers mois</MenuItem>
    </Select>
  );
};

export default DropdownSelect;
