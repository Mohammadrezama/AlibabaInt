import React from "react";
import { Title, MappedDetails } from "components";
import {
  formatPopulation,
  arrayToString,
  findCurrencies,
  findLanguages,
} from "utils/utils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
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
    <div className="">
      <Link
        to="/"
        className="flex items-center justify-center  shadow w-[100px] h-[30px]"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2" size="lg" />
        <button>Back</button>
      </Link>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <img
            src={country.flags.png}
            alt={country.name.official}
            className="h-[200px] w-full"
            style={{ aspectRatio: 4 / 3, objectFit: "contain" }}
          />{" "}
        </div>

        <div className=" grid grid-cols-12 col-span-12 md:col-span-6 ">
          <div className="col-span-12 font-">
            {" "}
            <Title>{country.name.official}</Title>
          </div>
          <div className="col-span-12 md:col-span-6">
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
          <div className="col-span-12 md:col-span-6">
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
          <div className="grid-cols-12 col-span-12">
            <div className="mr-2 col-span-12 md:col-span-6 semibold">
              Border Countries:
            </div>
            <div className="col-span-12 md:col-span-6">
              {borders.map((item, index) => (
                <Link to={`/details/${item}?fullText=true`} key={index}>
                  <button className="border mr-2 p-2 shadow"> {item}</button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
