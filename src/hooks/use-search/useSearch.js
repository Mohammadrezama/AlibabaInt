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
  const [sortBy, setSortBy] = useState(null);

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
  const sortHandler = (value) => {
    setSortBy(value);
  };

  const onSort = (arr, sortValue) => {
    arr.sort((a, b) => {
      if (sortValue === "countryName") {
        let value = 0;
        const nameA = a.name.common.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.common.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          value = -1;
        }
        if (nameA > nameB) {
          value = 1;
        }
        return value;
      } else if (sortValue === "population") {
        let value = b.population - a.population;
        return value;
      }
    });

    return arr;
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
      let filteredData = countriesData;
      if (region) {
        filteredData = filterByRegion(countriesData);
      }
      if (debouncedSearchText) {
        filteredData = filterByText(filteredData);
      }
      // if (sortBy) {
      //   filteredData = onSort(filteredData, sortBy);
      // }
      setCountriesToShow(filteredData);
    }
  }, [region, debouncedSearchText, countriesData, sortBy]);

  return {
    countriesToShow,
    searchText,
    onInputChange,
    onFilterChange,
    sortHandler,
  };
};
