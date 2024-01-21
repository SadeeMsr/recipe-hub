"use client";
import Form from "@/components/Form";
import { formatOptions } from "@/lib/optionProcessor";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {
  const router = useRouter();
  const [submitting, setIsSubmitting] = useState(false);
  const [recipe, setRecipe] = useState({
    title: "",
    instruction: "",
    recipeView: "",
  });

  const [selectedOption, setSelectedOption] = useState([]);

  const createRecipe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const ingredients = formatOptions(selectedOption);
    recipe.ingredients = ingredients;

    try {
      const response = await fetch("/api/recipe/new", {
        method: "POST",
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

  return (
    <div className="min-h-screen flex flex-col items-center pt-14 pb-10">
      <Form
        type="Create"
        recipe={recipe}
        setRecipe={setRecipe}
        submitting={submitting}
        handleSubmit={createRecipe}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
}
