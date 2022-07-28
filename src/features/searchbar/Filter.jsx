import React from "react";
import { Select } from "components";
export const Filter = () => {
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "America", label: "America" },
    { value: "Oceania", label: "Oceania" },
  ];

  return (
    <div className="w-[200px]">
      <Select
        options={options}
        placeholder="Filter by region"
        className={"w-full"}
      />
    </div>
  );
};
