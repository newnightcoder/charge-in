import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { useNavigate } from "react-router-dom";
import { formatRouteName } from "../../helpers";
import { menu, MenuBtn } from "../Buttons";

interface MenuDropdownProps {
  btnName: string;
}

const MenuDropdown = ({ btnName }: MenuDropdownProps) => {
  const [animateHeight, setAnimateHeight] = useState<number | "auto">(0);
  const [open, setOpen] = useState<boolean>(false);
  const options = Object.values(menu.sous_menu);
  const navigate = useNavigate();

  const handleClickDropdown = () => {
    setAnimateHeight(animateHeight === 0 ? "auto" : 0);
    setOpen((prev) => !prev);
    navigate(`/dashboard/${formatRouteName(btnName)}`);
  };

  return (
    <>
      <MenuBtn
        btnName={btnName}
        dropdown={true}
        onClick={handleClickDropdown}
        open={open}
      />

      <AnimateHeight
        height={animateHeight}
        duration={500}
        style={{
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          backgroundColor: "#0b3047",
          overflow: "hidden",
        }}
      >
        {options.map((opt, i) => (
          <MenuBtn key={i} btnName={opt} dropdownOption={true} />
        ))}
      </AnimateHeight>
    </>
  );
};

export default MenuDropdown;
