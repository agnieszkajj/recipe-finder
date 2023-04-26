import Meals from "../components/Meals";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";

const Home = () => {
  return (
    <main>
      <SearchForm></SearchForm>
      <Meals></Meals>
    </main>
  );
};

export default Home;
