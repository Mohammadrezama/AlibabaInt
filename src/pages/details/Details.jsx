import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { commonFetch } from "services/api";
import { arrayToString } from "utils/utils";
import Country from "features/country/Country";
const Details = () => {
  const [countryToShow, setCountryToShow] = useState(null);
  const [borders, setBorders] = useState([]);
  const params = useParams();
  const mode = localStorage.getItem("theme");

  useEffect(() => {
    commonFetch(`name/${params.name}?fullText=true`)
      .then((res) => {
        setCountryToShow(res[0]);
      })
      .catch();
  }, [params]);

  useEffect(() => {
    if (countryToShow?.borders && Array.isArray(countryToShow?.borders)) {
      let queryString = arrayToString(countryToShow?.borders);
      commonFetch(`alpha?codes=${queryString}`)
        .then((res) => {
          if (Array.isArray(res)) {
            let names = res.map((item) => item.name.common);
            setBorders(names);
          }
        })
        .catch();
    }
  }, [countryToShow]);

  return (
    <div className={`h-screen`}>
      <div className="container mx-auto ">
        {countryToShow && <Country country={countryToShow} borders={borders} />}
      </div>
    </div>
  );
};

export default Details;
