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

export const findNativeNames = (obj) => {
  let names = Object.keys(obj).map((key, index) => {
    return index === 0 ? obj[key]?.common : `, ${obj[key]?.common}`;
  });
  return names;
};
// this function check the search key contain in a word or not:
// it returns true for grmn when we want to check germany
export const findIncludedLetters = (name, searchKey) => {
  let nameToLower = name.toLowerCase();
  let searchKeyTolower = searchKey.toLowerCase();
  let nameArr = nameToLower.split(""); //  ["a", "h", "m", "a", "d"];

  let searchArr = searchKeyTolower.split(""); //  ["m", "a", "d"];

  let isIncluded = searchArr.every((searchItem) => {
    if (nameArr.includes(searchItem)) {
      return true;
    } else {
      return false;
    }
  });

  return isIncluded;
};

export const findWordsCaseInsensitive = (name, searchKey) => {
  let nameToLower = name.toLowerCase().trim();
  let searchKeyTolower = searchKey.toLowerCase().trim();
  return nameToLower.includes(searchKeyTolower);
};
