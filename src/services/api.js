var BASE_URL = "https://restcountries.com/v3.1/";
export const commonFetch = async (url) => {
  let finalUrl = `${BASE_URL}${url}`;
  try {
    let res = await fetch(finalUrl);
    res = await res.json();
    return res;
  } catch (er) {
    throw er;
  }
};
