import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Input = () => {
  return (
    <div className="relative flex items-center h-[40px] w-[400px]  rounded-sm  text-inputColor">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-[15px]"
      />
      <input
        className="w-full h-full bg-elementColor pl-[40px] rounded-sm focus:outline-none"
        placeholder="Search for a country"
      />
    </div>
  );
};
