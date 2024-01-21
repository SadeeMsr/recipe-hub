"use client";

import { useEffect, useState } from "react";
import Profile from "@/components/Profile";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import { convertStringToObjectArray, formatOptions } from "@/lib/optionProcessor";

export default function page({ params }) {
  const router = useRouter();
  const [recipe, setRecipe] = useState({
    title: "",
    instruction: "",
    recipeView: "",
  });
  const [selectedOption, setSelectedOption] = useState([]);

  const [submitting, setIsSubmitting] = useState(false);
  const [isEditBtnClicked, setEditBtnClicked] = useState(false);


  //Loads the Recipe by ID in the param
  const fetchPosts = async () => {
    const response = await fetch(`/api/recipe/${params?.id}`);
    const data = await response.json();
    const formatIngredients = convertStringToObjectArray(data.ingredients);
    data.ingredients = formatIngredients;
    setRecipe(data);
    setSelectedOption(formatIngredients)
  };

  useEffect(() => {
    fetchPosts();
  }, []);


  //Function to Edit the recipe
  const updateRecipe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const ingredients = formatOptions(selectedOption);
    recipe.ingredients = ingredients;

    if (!params?.id) return alert("Missing Recipe id!");

    try {
      const response = await fetch(`/api/recipe/${params?.ids}`, {
        method: "PATCH",
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

// function to Delete the Recipe
  const handleDelete = async () => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/recipe/${params?.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-14 pb-10">
      {/* Profile section */}
      <div className=" w-[50%] flex flex-col items-start">
        {!isEditBtnClicked && <Profile recipe={recipe} />}
        {isEditBtnClicked && (
          <Form
            type="Edit"
            recipe={recipe}
            setRecipe={setRecipe}
            submitting={submitting}
            handleSubmit={updateRecipe}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            isEditBtnClicked={isEditBtnClicked}
            setEditBtnClicked={setEditBtnClicked}
          />
        )}

        {/* Manage recipes buttons */}
        {!isEditBtnClicked && (
          <div className="flex gap-3 mt-5">
            <button onClick={() => handleDelete()} className="text-red-500">
              Delete
            </button>

            <button
              onClick={() => setEditBtnClicked(true)}
              className="p-2 bg-black rounded-md text-white shadow-md hover:bg-slate-800"
            >
              Edit Recipe
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
