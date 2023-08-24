import { useState } from "react";
import AnimateHeight from "react-animate-height";
import { button } from "../Buttons";
import MenuBtn from "./MenuBtn";

interface MenuDropdownProps {
  btnName: string;
}

const MenuDropdown = ({ btnName }: MenuDropdownProps) => {
  const [animateHeight, setAnimateHeight] = useState<number | "auto">(0);
  const [open, setOpen] = useState<boolean>(false);
  const options = Object.values(button.sous_menu);

  const handleClick = () => {
    setAnimateHeight(animateHeight === 0 ? "auto" : 0);
    setOpen((prev) => !prev);
  };

  return (
    <>
      <MenuBtn
        btnName={btnName}
        dropdown={true}
        onClick={handleClick}
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
