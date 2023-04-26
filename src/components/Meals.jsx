import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const Meals = () => {
  const { loading, meals } = useGlobalContext();
  if (loading) {
    return <Loading></Loading>;
  }
  if (meals.length < 1) {
    return (
      <h2 className="error-search">No Meals Matched Your Search Criteria</h2>
    );
  }

  return (
    <section className="section-meals">
      <h2>Meals</h2>
      <div className="meals-center">
        {meals.map((meal) => {
          return (
            <article key={meal.idMeal}>
              <div className="img-container">
                <img src={meal.strMealThumb} alt="" />
              </div>
              <div className="info">
                <h2>{meal.strMeal}</h2>
                <h4>{meal.strCategory}</h4>
                <p>{meal.strArea}</p>
                <Link to={`/meals/${meal.idMeal}`} className="details-button">
                  Details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Meals;
