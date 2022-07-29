import React from "react";
import { Select } from "components";
export const Filter = ({ onFilterChange }) => {
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Americas", label: "America" },
    { value: "Oceania", label: "Oceania" },
  ];

  const sortOptions = [
    {
      value: "population",
      label: "Population",
    },
    { value: "countryName", label: "Country Name" },
  ];
  return (
    <div className="w-full  md:w-[300px] flex gap-x-2">
      <Select
        options={options}
        placeholder="Filter by region"
        className={"w-full"}
        onChange={onFilterChange}
      />
      {/* <Select
        options={sortOptions}
        placeholder="Sort by "
        className={"w-full"}
      /> */}
    </div>
  );
};
