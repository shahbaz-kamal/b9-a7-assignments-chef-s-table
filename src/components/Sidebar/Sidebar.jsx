import React from "react";

const Sidebar = ({
  recipeQueue,
  handleRemove,
  preparedRecipe,
  calculateTimeAndCalories,
  totalCalories,
  totalTime,
}) => {
  console.log(recipeQueue);
  return (
    <div className="">
      <h3 className="w-[350px] mx-auto mt-8 text-center text-color-28 font-semibold text-xl md:text-2xl pb-3 md:pb-4 border-b mb-3 md:mb-4">
        Want to Cook: 0{recipeQueue.length}
      </h3>

      {/* Want to cook table */}
      <div className="overflow-x-auto">
        <table className="table border-none">
          {/* head */}
          <thead>
            <tr className="border-none">
              <th></th>
              <th>Name</th>
              <th>Times</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="font-fira border-none bg-color-28-3">
                <th className="text-base text-color-28-80 font-semibold">
                  {index + 1}
                </th>
                <td className="text-base text-color-28-70">
                  {recipe.recipe_name}
                </td>
                <td className="text-base text-color-28-70">
                  {recipe.preparing_time}
                </td>
                <td className="text-base text-color-28-70">
                  {recipe.calories}
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleRemove(recipe.recipe_id),
                        calculateTimeAndCalories(
                          recipe.preparing_time,
                          recipe.calories
                        );
                    }}
                    className="bg-color-ob  rounded-[50px]  font-medium text-color-15 text-base md:text-lg hover:bg-[#33EFA2] px-4 py-1"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Currently cooking*/}
      <h3 className="w-[350px] mx-auto mt-8 text-center text-color-28 font-semibold text-xl md:text-2xl pb-3 md:pb-4 border-b mb-3 md:mb-4">
        Want to Cook: 0{preparedRecipe.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table border-none">
          {/* head */}
          <thead>
            <tr className="border-none">
              <th></th>
              <th>Name</th>
              <th>Times</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="font-fira border-none bg-color-28-3">
                <th className="text-base text-color-28-80 font-semibold">
                  {index + 1}
                </th>
                <td className="text-base text-color-28-70">
                  {recipe.recipe_name}
                </td>
                <td className="text-base text-color-28-70">
                  {recipe.preparing_time}
                </td>
                <td className="text-base text-color-28-70">
                  {recipe.calories}
                </td>
                <td></td>
              </tr>
            ))}

            {/* totaltime */}
            <tr className="font-fira border-none bg-color-28-3">
              <th className="text-base text-color-28-80 font-semibold"></th>
              <td className="text-base text-color-28-70"></td>
              <td className="text-base text-color-28-70">
                Total Time={totalTime}
              </td>
              <td className="text-base text-color-28-70">
                TotalCalory={totalCalories}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sidebar;
