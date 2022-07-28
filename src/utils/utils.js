import Countries from "features/countries/Countries";

export const formatPopulation = (text) => {
  const numberFormatter = Intl.NumberFormat("en-US");
  const formatted = numberFormatter.format(+text);
  return formatted;
};

export const arrayToString = (arr) => {
  if (!Array.isArray(arr)) {
    return "";
  } else {
    return arr.join(",");
  }
};

export const findCurrencies = (obj) => {
  var currencies = "";
  if (!obj) {
    return currencies;
  }
  Object.keys(obj).forEach(
    (key, index) =>
      (currencies =
        currencies + (index === 0 ? obj[key]?.name : `, ${obj[key].name}`))
  );
  return currencies;
};

export const findLanguages = (obj) => {
  var languages = "";
  if (!obj) {
    return languages;
  }
  Object.keys(obj).forEach((key, index) => {
    languages = languages + (index === 0 ? obj[key] : `, ${obj[key]}`);
  });

  return languages;
};
