"use client";
import { useState } from "react";
import ingredients from "../data/ingredients.json";
import { MultiSelect } from "react-multi-select-component";

export default function SearchAndFilter({
  searchText,
  handleSearchChange,
  handleFilterByIngredients,
}) {
  const [selectedOption, setSelectedOption] = useState([]);

  return (
    <div className="w-[20%]">
      <div className="pe-5 border-r-2 border-slate-100 h-full">
        <div>
          <p className="font-semibold">Search Recipe</p>
          <div className="bg-slate-100 px-3 rounded-md mt-2">
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              className="outline-none bg-transparent h-12"
              placeholder="Type recipe name"
            />
          </div>
        </div>
        <div className="mt-4">
          <p className="font-semibold">Add Ingredients to search</p>
          <div className="mt-2">
            <MultiSelect
              options={ingredients}
              value={selectedOption}
              onChange={setSelectedOption}
              labelledBy={"Select"}
            />
          </div>
          <button
            className="p-2 bg-slate-900 rounded text-white text-sm hover:bg-slate-700 w-full mt-5"
            onClick={() => handleFilterByIngredients(selectedOption)}
          >
            Add Ingredients
          </button>
        </div>
      </div>
    </div>
  );
}
