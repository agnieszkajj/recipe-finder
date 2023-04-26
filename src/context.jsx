import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [query, setQuery] = useState("a");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.meals === null) {
        setMeals([]);
      } else {
        setMeals(data.meals);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  }, [query]);

  return (
    <GlobalContext.Provider value={{ setQuery, meals, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default AppContext;
