import React from "react";
import { Input } from "components";
import { Filter } from "./Filter";
const Searchbar = ({ onFilterChange, searchText, onInputChange }) => {
  return (
    <div className="grid grid-cols-12 justify-between">
      <div className="col-span-12 sm:col-span-6 md:col-span-8 ">
        <Input onChange={onInputChange} value={searchText} pattern="[A-Za-z]" />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 mt-[20px] sm:mt-0 sm:justify-self-end">
        <Filter onFilterChange={onFilterChange} />
      </div>
    </div>
  );
};

export default Searchbar;
