import { commonFetch } from "services/api";
import React, { useEffect, useState, useRef } from "react";
import { useDebounce } from "hooks";
import { findIncludedLetters, findWordsCaseInsensitive } from "utils/utils";
export const useSearch = () => {
  let firstRender = useRef(true);
  const [searchText, setSearchText] = useState("");
  let debouncedSearchText = useDebounce(searchText, 500);
  const [countriesData, setCountriesData] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);
  const [region, setRegion] = useState(null);

  const onFilterChange = (value) => {
    setRegion(value);
  };
  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const filterByText = (arr) => {
    return arr.filter((item) => {
      return findWordsCaseInsensitive(item.name.common, debouncedSearchText);
    });
  };

  const filterByRegion = (arr) => {
    return arr.filter((item) => {
      return item.region === region;
    });
  };

  useEffect(() => {
    let countries = localStorage.getItem("countries");
    if (countries) {
      countries = JSON.parse(countries);
    }
    if (countries && Array.isArray(countries) && countries.length > 0) {
      setCountriesData(countries);
      setCountriesToShow(countries);
    } else {
      commonFetch("all")
        .then((res) => {
          localStorage.setItem("countries", JSON.stringify(res));
          setCountriesData(res);
          setCountriesToShow(res);
        })
        .catch();
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (countriesData) {
      if (!firstRender.current && !region && !debouncedSearchText) {
        setCountriesToShow(countriesData);
      }
      let filteredData = countriesData;
      if (region) {
        filteredData = filterByRegion(countriesData);
      }
      if (debouncedSearchText) {
        filteredData = filterByText(filteredData);
      }
      setCountriesToShow(filteredData);
    }
  }, [region, debouncedSearchText, countriesData]);

  console.log({ countriesToShow });

  return {
    countriesToShow,
    searchText,
    onInputChange,
    onFilterChange,
  };
};
