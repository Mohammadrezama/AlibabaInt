import Searchbar from "features/searchbar/SearchBar";
import Countries from "features/countries/Countries.jsx";
import { useSearch } from "hooks";
import { NotFound } from "components";
const Home = () => {
  const { searchText, onFilterChange, onInputChange, countriesToShow } =
    useSearch();
  return (
    <div className="flex flex-col gap-y-[20px] sm:gap-y-[40px] sm:mt-[40px] container mx-auto p-[20px]  sm:p-0 ">
      <Searchbar
        searchText={searchText}
        onInputChange={onInputChange}
        onFilterChange={onFilterChange}
      />
      {countriesToShow && countriesToShow.length > 0 ? (
        <Countries countriesToShow={countriesToShow} />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Home;
