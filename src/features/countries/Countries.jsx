import React from "react";
import { Card } from "components";
import { useNavigate } from "react-router-dom";

const Countries = ({ countriesToShow }) => {
  let navigate = useNavigate();

  const onClick = (item) => {
    navigate(`details/${item.name.common}?fullText=true`);
  };
  return (
    <div className="grid grid-cols-4 gap-[40px]">
      {countriesToShow.map((item, index) => {
        return <Card key={index} item={item} onClick={onClick} />;
      })}
    </div>
  );
};

export default Countries;
