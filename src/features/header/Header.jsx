import React from "react";
import { Title } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
      <div className="h-[70px] container mx-auto  flex items-center justify-between p-[20px] sm:p-0">
        <Link to={"/"}>
          <Title>Where in the world?</Title>
        </Link>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMoon} className="mr-2 mt-[2px]" />
          <button onClick={changeMode} className="font-semibold">
            DarkMode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
