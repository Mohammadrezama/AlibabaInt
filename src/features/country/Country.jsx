import React from "react";
import { Title, MappedDetails } from "components";
import {
  formatPopulation,
  arrayToString,
  findCurrencies,
  findLanguages,
} from "utils/utils";
import { Link } from "react-router-dom";
const Country = ({ country, borders }) => {
  const firstSeries = [
    { label: "Native Name", text: "unknown" },
    { label: "Population", text: formatPopulation(country?.population) },
    { label: "Region", text: country?.region },
    { label: "Sub Region", text: country?.subregion },
    {
      label: "Capital",
      text: arrayToString(country?.capital),
    },
  ];

  const secondSeries = [
    {
      label: "Top Level Domain",
      text: arrayToString(country?.tld),
    },
    { label: "Currencies", text: findCurrencies(country?.currencies) },
    { label: "Languages", text: findLanguages(country?.languages) },
  ];
  return (
    <div>
      <Link to="/">Back</Link>
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <img
            src={country.flags.png}
            alt={country.name.official}
            className="h-[200px] w-full"
            style={{ aspectRatio: 4 / 3, objectFit: "contain" }}
          />{" "}
        </div>
        <div className="col-span-6 grid-cols-12">
          <div className="col-span-6">
            <Title>{country.name.official}</Title>
            {firstSeries.map((item, index) => {
              return (
                <MappedDetails
                  text={item.text}
                  label={item.label}
                  key={index}
                />
              );
            })}
          </div>
          <div className="col-span-6">
            {secondSeries.map((item, index) => {
              return (
                <MappedDetails
                  text={item.text}
                  label={item.label}
                  key={index}
                />
              );
            })}
          </div>
          <div className="col-span-12 flex">
            <div className="mr-2">Border Countries:</div>
            {borders.map((item) => (
              <Link to={`/details/${item}?fullText=true`}>
                <button className="border mr-2 p-2"> {item}</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
