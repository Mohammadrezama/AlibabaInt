import React from "react";
import { Input } from "components";
import { Filter } from "./Filter";
const Searchbar = ({
  onFilterChange,
  searchText,
  onInputChange,
  sortHandler,
}) => {
  return (
    <div className="grid grid-cols-12 justify-between">
      <div className="col-span-12  md:col-span-9 ">
        <Input onChange={onInputChange} value={searchText} pattern="[A-Za-z]" />
      </div>
      <div className="col-span-12  md:col-span-3 mt-[20px] md:mt-0 ">
        <Filter onFilterChange={onFilterChange} sortHandler={sortHandler} />
      </div>
    </div>
  );
};

export default Searchbar;
