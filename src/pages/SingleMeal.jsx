import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
const SingleCocktail = () => {
  const { id } = useParams();
  const { loading, setLoading } = useGlobalContext();
  const [meal, setMeal] = useState(null);

  const fetchMeal = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.meals === null) {
        setMeal(null);
      } else {
        const {
          strMeal: name,
          strMealThumb: image,
          strArea: info,
          strCategory: category,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.meals[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const newMeal = {
          name,
          image,
          info,
          category,
          instructions,
          ingredients,
        };
        console.log(newMeal);
        setMeal(newMeal);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeal(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!meal) {
    return (
      <h2 className="error-search singleMeal-error">No Meal To Display</h2>
    );
  }

  const { name, image, category, info, instructions, ingredients } = meal;

  return (
    <section className="meal-section section">
      <Link to="/">BACK HOME</Link>
      <h2>{name}</h2>
      <div className="meal-container">
        <img src={image} alt={name} />
        <div className="meal-info">
          <p>
            <span className="meal-data">Name :</span> {name}
          </p>
          <p>
            <span className="meal-data">Category :</span> {category}
          </p>
          <p>
            <span className="meal-data">Info :</span> {info}
          </p>
          <p>
            <span className="meal-data">Instructions : </span> {instructions}
          </p>
          <p>
            <span className="meal-data">Ingredients :</span>{" "}
            {ingredients.map((ingredient, index) => {
              return ingredient ? (
                <span className="ingredient" key={index}>
                  {ingredient}
                </span>
              ) : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
