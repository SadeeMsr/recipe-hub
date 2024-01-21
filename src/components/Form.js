import React from "react";
import { MultiSelect } from "react-multi-select-component";
import options from "../data/ingredients.json"

export default function Form({
  type,
  recipe,
  setRecipe,
  submitting,
  handleSubmit,
  selectedOption,
  setSelectedOption,
  isEditBtnClicked,
  setEditBtnClicked,
}) {
   
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">{type} Recipe</h1>
      <form onSubmit={handleSubmit} className=" mt-10">
        {/* Image to integrate later */}
        
        {/* <div>
          <p className="font-semibold">Meal Photo</p>
          <div className="mt-2">
            <input type="file" name="recipeView" accept="image/*" />
          </div>
        </div> */}

      {/* Recipe title */}
        <div className="mt-5">
          <p className="font-semibold">Recipe Title</p>
          <div className="bg-slate-100 px-3 rounded-md mt-2">
            <input
              type="text"
              name="title"
              value={recipe?.title}
              onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
              className="outline-none bg-transparent h-12"
              required
              placeholder="Type recipe title"
            />
          </div>
        </div>

        {/* Recipe Ingredients */}
        <div className="mt-5">
          <p className="font-semibold">Recipe Ingredients</p>
          <MultiSelect
             options={options}
             value={selectedOption}
             onChange={setSelectedOption}
             labelledBy={"Select"}
          />
        </div>

        {/* Recipe Instruction */}
        <div className="mt-5">
          <p className="font-semibold">Recipe Instruction</p>
          <div className="bg-slate-100 rounded-md mt-2 ps-2 pt-2">
            <textarea
              type="text"
              name="instruction"
              value={recipe?.instruction}
              onChange={(e) =>
                setRecipe({ ...recipe, instruction: e.target.value })
              }
              required
              className="outline-none bg-transparent w-full"
              placeholder="Type recipe Instructions"
            />
          </div>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="cursor-pointer w-full bg-slate-800 text-white text-xl py-2 rounded mt-8 shadow-md hover:bg-slate-700"
        >
          {submitting ? `Processing...` : type}
        </button>
      </form>

      {/* Button to get back to recipe profile  */}
      {isEditBtnClicked && (
        <button
          onClick={() => setEditBtnClicked(false)}
          className="p-2 bg-slate-400 rounded-md text-white text-xl shadow-md hover:bg-slate-300 w-full mt-5"
        >
          Cancel
        </button>
      )}
    </div>
  );
}
