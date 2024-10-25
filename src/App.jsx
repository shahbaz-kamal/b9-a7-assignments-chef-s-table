import React, { useState } from "react";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAddToRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );
    if (!isExist) {
      const newRecipe = [...recipeQueue, recipe];
      setRecipeQueue(newRecipe);
    } else {
      alert("Recipe already added");
    }
  };

  const handleRemove = (id) => {
    const deleteRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    const newPreparedRecipe = [...preparedRecipe, deleteRecipe];
    setPreparedRecipe(newPreparedRecipe);
  };

  const calculateTimeAndCalories = (time, calory) => {
    const newTotalTime = time + totalTime;
    setTotalTime(newTotalTime);
    const newCalories = calory + totalCalories;
    setTotalCalories(newCalories);

    console.log("clicked");
  };
  console.log(totalTime, totalCalories);

  return (
    <div className="">
      <Header></Header>
      <Recipes
        handleAddToRecipeQueue={handleAddToRecipeQueue}
        recipeQueue={recipeQueue}
        handleRemove={handleRemove}
        preparedRecipe={preparedRecipe}
        calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
      ></Recipes>
    </div>
  );
};

export default App;
