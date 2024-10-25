import "./Recipe.css";
const Recipe = ({ recipe, handleAddToRecipeQueue }) => {
  const {
    recipe_id,
    recipe_name,
    image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card rounded-2xl border border-color-28-20 shadow-md pb-6">
        <figure className="px-6 pt-6 mb-6 h-[200px]">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl h-full w-full object-cover"
          />
        </figure>
        <div className="px-6 ">
          <h2 className="font-semibold text-lg md:text-xl text-color-28">
            {recipe_name}
          </h2>
          <p className="text-color-87 text-sm md:text-base">
            {short_description}
          </p>

          <h3 className="mt-3 md:mt-5 font-medium text-color-28 text-sm md:text-base mb-2 md:mb-4">
            Ingredients: 6
          </h3>
          <ul className="ml-6 mb-3 md:mb-4">
            {ingredients.map((ingredient, idx) => (
              <li
                key={idx}
                className="list-disc text-color-87 text-base md:text-lg font-fira"
              >
                {ingredient}
              </li>
            ))}
          </ul>
          <hr className="border border-color-28-10 mb-5 md:mb-6" />
          {/* minute & calories */}
          <div className="font-fira flex justify-around text-sm md:text-base text-color-28-80 ">
            {/* minutes */}
            <div className="flex items-center gap-2">
              <i className="fa-regular fa-clock"></i>
              <p className="">{preparing_time} minutes</p>
            </div>
            {/* calories */}
            <div className="flex items-center gap-2">
              <i
                className="fa-solid fa-fire opacity-80"
                style={{ color: "#282828" }}
              ></i>
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <button
              onClick={() => handleAddToRecipeQueue(recipe)}
              className="bg-color-ob px-4 md:px-6 py-2 md:py-3 rounded-[50px] mt-4 md:mt-6 font-medium text-color-15 text-base md:text-lg hover:bg-[#33EFA2]"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
