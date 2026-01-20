// src/pages/Recipes.jsx
import React from "react";
import { useRecipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/recipes/RecipeCard";

export default function Recipes() {
  const { recipes, loading } = useRecipeContext();

  if (loading) return <p className="text-center py-5">Loading recipes...</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">All Recipes</h2>
      <div className="row g-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-md-6 col-lg-4">
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </div>
  );
}
