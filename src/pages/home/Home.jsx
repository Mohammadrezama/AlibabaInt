import Searchbar from "features/searchbar/SearchBar";
import Countries from "features/countries/Countries.jsx";
import { useSearch } from "hooks";
const Home = () => {
  const { searchText, onFilterChange, onInputChange, countriesToShow } =
    useSearch();
  return (
    <div className="flex flex-col gap-y-[40px] mt-[40px] container mx-auto ">
      <Searchbar
        searchText={searchText}
        onInputChange={onInputChange}
        onFilterChange={onFilterChange}
      />
      {countriesToShow ? (
        <Countries countriesToShow={countriesToShow} />
      ) : (
        <div>No records to Show</div>
      )}
    </div>
  );
};

export default Home;
