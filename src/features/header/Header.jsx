import React from "react";
import { Title } from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useUI } from "hooks";
const Header = () => {
  const { UIState, toggleDarkMode } = useUI();

  return (
    <div className="  bg-elementColor  shadow">
      <div className="h-[70px] container mx-auto  flex items-center justify-between p-[20px] sm:p-0">
        <Link to={"/"}>
          <Title>Where in the world?</Title>
        </Link>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faMoon} className="mr-2 mt-[2px]" />
          <button onClick={toggleDarkMode} className="font-semibold">
            DarkMode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
