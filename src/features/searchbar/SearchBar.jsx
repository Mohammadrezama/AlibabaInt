import React from "react";
import { Input } from "components";
import { Filter } from "./Filter";
const Searchbar = () => {
  return (
    <div className="flex justify-between">
      <Input />
      <Filter />
    </div>
  );
};

export default Searchbar;
