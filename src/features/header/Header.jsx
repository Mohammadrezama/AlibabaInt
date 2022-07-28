import React from "react";
import { Title } from "components";
const Header = () => {
  const changeMode = () => {
    const mode = localStorage.getItem("theme");
    if (mode === "light") {
      localStorage.setItem("theme", "dark");
      // 3
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");

      // 3
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  return (
    <div className="  bg-elementColor  shadow">
      <div className="h-[70px] container mx-auto  flex items-center justify-between">
        <Title>Where in the world?</Title>
        <button onClick={changeMode}>DarkMode</button>
      </div>
    </div>
  );
};

export default Header;
