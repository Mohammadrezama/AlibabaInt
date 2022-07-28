import React, { useEffect, useState } from "react";
import Searchbar from "features/searchbar/SearchBar";
import Countries from "features/countries/Countries.jsx";
import { commonFetch } from "services/api";
const Home = () => {
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    let countries = localStorage.getItem("countries");
    if (countries) {
      countries = JSON.parse(countries);
    }
    if (countries && Array.isArray(countries) && countries.length > 0) {
      setCountriesToShow(countries);
    } else {
      commonFetch("all")
        .then((res) => {
          localStorage.setItem("countries", JSON.stringify(res));
          setCountriesToShow(res);
        })
        .catch();
    }
  }, []);
  return (
    <div className="flex flex-col gap-y-[40px] mt-[40px] container mx-auto ">
      <Searchbar />
      <Countries countriesToShow={countriesToShow} />
    </div>
  );
};

export default Home;
