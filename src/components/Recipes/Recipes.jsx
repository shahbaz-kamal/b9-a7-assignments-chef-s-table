import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Sidebar from "../Sidebar/Sidebar";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  });

  return (
    <div className="container mx-auto mb-[100px]">
      <h3 className="text-center font-semibold text-3xl md:text-4xl mb-5 md:mb-6">
        Our Recipes
      </h3>
      <p className="text-center mx-auto max-w-[823px] text-sm md:text-base text-color-15 opacity-60 mb-10 md:mb-12 ">
        Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
        vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum
        mauris aenean neque.{" "}
      </p>
      <div className="flex gap-6">
        <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {recipes.map((recipe) => (
            <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
          ))}
        </div>

        <div className="w-1/3  rounded-2xl border border-color-28-20">
          {" "}
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
