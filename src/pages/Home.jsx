import { useGlobalContext } from "../context";

const Home = () => {
  const { query, handleChange, meals } = useGlobalContext();
  return (
    <main>
      <section className="section search">
        <form className="search-form">
          <h2>Search Your Favorite Meal</h2>
          <input type="text" value={query} onChange={handleChange} />
        </form>
      </section>
      <section>
        <h2>Meals</h2>
        <div className="meals-center">
          {meals.map((meal) => {
            return (
              <article>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="" />
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
