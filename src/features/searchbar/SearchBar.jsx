import React from "react";
import { Input } from "components";
import { Filter } from "./Filter";
const Searchbar = ({ onFilterChange, searchText, onInputChange }) => {
  return (
    <div className="flex justify-between">
      <Input onChange={onInputChange} value={searchText} pattern="[A-Za-z]" />
      <Filter onFilterChange={onFilterChange} />
    </div>
  );
};

export default Searchbar;
