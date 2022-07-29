import React from "react";
import { Card } from "components";
import { useNavigate } from "react-router-dom";

const Countries = ({ countriesToShow }) => {
  let navigate = useNavigate();

  const onClick = (item) => {
    navigate(`details/${item.name.common}?fullText=true`);
  };
  return (
    <div className="grid grid-cols-12 gap-y-[20px] sm:gap-[40px]">
      {countriesToShow.map((item, index) => {
        return (
          <div
            key={index}
            className=" sm:col-span-3 col-span-12 px-[20px] sm:px-[0]"
          >
            <Card item={item} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
