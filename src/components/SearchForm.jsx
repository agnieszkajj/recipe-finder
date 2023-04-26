import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setQuery } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h2>Search Your Favorite Meal</h2>
        <input
          type="text"
          ref={searchValue}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchForm;
