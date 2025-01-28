import axios from "axios";
import MealSearch from "./components/MealSearch";

const MealsData = async ({ searchParams }) => {
  const query = (await searchParams?.search) || "";
  // for load data
  const fetchData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      return response.data.meals;

  };

  const data = await fetchData();

  return (
    <div>
      <div className="w-1/2 mx-auto text-center mt-5 space-y-2">
        <h1 className="text-4xl">Our Meals</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          ipsa vero aliquam! Omnis expedita quod recusandae accusantium laborum
          officia culpa exercitationem quasi vitae. Incidunt quisquam deserunt
          non magni reiciendis nisi.
        </p>
        <MealSearch />
      </div>

      <div className="grid grid-cols-4 gap-5 px-16 mt-10">
        {data ? (
          data.map((meal) => (
            <div key={meal.idMeal} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={meal.strMealThumb} alt={meal.strMeal} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{meal.strMeal}</h2>
                <p>{meal.strInstructions.slice(0, 100)}...</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Recipe</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-red-500">
            No meals found. Try searching for something else.
          </div>
        )}
      </div>
    </div>
  );
};

export default MealsData;
