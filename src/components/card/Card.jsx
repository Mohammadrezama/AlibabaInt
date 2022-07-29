import React from "react";
import { Title, MappedDetails } from "components";
import { formatPopulation, arrayToString } from "utils/utils";
export const Card = ({ item, onClick }) => {
  const details = [
    {
      label: "Population",
      text: item?.population ? formatPopulation(item.population) : "",
    },
    {
      label: "Region",
      text: item?.region ? item.region : "",
    },
    {
      label: "Capital",
      text: arrayToString(item?.capital),
    },
  ];
  return (
    <div
      className="flex flex-col bg-elementColor cursor-pointer"
      onClick={() => onClick(item)}
    >
      <div className="md:relative md:pt-[75%]">
        <img
          src={item.flags.png}
          alt={item.name.official}
          className="  md:absolute md:top-0 object-cover h-[200px]"
        />
      </div>
      <div className="p-4">
        <Title>{item.name.common}</Title>
        {details.map((item, index) => {
          return (
            <MappedDetails key={index} label={item.label} text={item.text} />
          );
        })}
      </div>
    </div>
  );
};
