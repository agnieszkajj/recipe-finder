import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [query, setQuery] = useState("a");
  const [meals, setMeals] = useState([]);

  const fetchData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMeals(data.meals);
    console.log(meals);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  }, [query]);

  return (
    <GlobalContext.Provider value={{ query, handleChange, meals }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default AppContext;
