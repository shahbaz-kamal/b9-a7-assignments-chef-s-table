import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Sidebar from "../Sidebar/Sidebar";

const Recipes = ({
  handleAddToRecipeQueue,
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalCalories,
  totalTime,
}) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto mb-[100px]">
      <h3 className="text-center font-semibold text-3xl md:text-4xl mb-5 md:mb-6">
        Our Recipes
      </h3>
      <p className="text-center mx-auto max-w-[823px] text-sm md:text-base text-color-15 opacity-60 mb-10 md:mb-12 px-2 md:px-0">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
      <div className="mx-auto md:mx-0 flex flex-col md:flex-row gap-6 px-2 md:px-0">
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleAddToRecipeQueue={handleAddToRecipeQueue}
            ></Recipe>
          ))}
        </div>

        <div className="md:w-1/3  rounded-2xl border border-color-28-20">
          {" "}
          <Sidebar
            recipeQueue={recipeQueue}
            handleRemove={handleRemove}
            preparedRecipe={preparedRecipe}
            calculateTimeAndCalories={calculateTimeAndCalories}
            totalTime={totalTime}
            totalCalories={totalCalories}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
