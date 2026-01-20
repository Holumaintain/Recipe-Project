// src/pages/RecipeDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRecipeContext } from "../context/RecipeContext";
import { useCollections } from "../hooks/useCollections";

import Image from "../components/ui/Image";
import defaultRecipe from "../assets/images/recipes/default.jpg";

export default function RecipeDetail() {
  const { id } = useParams();
  const { getRecipe } = useRecipeContext();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  const favorites = useCollections("favorites");
  const mealPlan = useCollections("mealPlan");

  useEffect(() => {
    const loadRecipe = async () => {
      setLoading(true);
      const data = await getRecipe(id);
      setRecipe(data);
      setLoading(false);
    };

    loadRecipe();
  }, [id, getRecipe]);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (!recipe) return <p className="text-center py-5">Recipe not found</p>;

  const isFavorite = favorites.items.some((i) => i.id === recipe.id);
  const isInMealPlan = mealPlan.items.some((i) => i.id === recipe.id);

  return (
    <motion.div
      className="container py-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="position-relative overflow-hidden rounded mb-4 recipe-header"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={recipe.image}
          fallback={defaultRecipe}
          alt={recipe.title}
          className="img-fluid w-100"
          style={{ maxHeight: "400px", objectFit: "cover" }}
          loading="lazy"
        />

        <div className="header-overlay d-flex align-items-center justify-content-center">
          <h2 className="text-white text-center px-3">{recipe.title}</h2>
        </div>
      </motion.div>

      <p className="text-muted">{recipe.author}</p>
      <p className="fw-semibold">⏱ {recipe.time}</p>
      {recipe.description && <p className="mt-3">{recipe.description}</p>}

      <div className="my-4 d-flex flex-wrap gap-2">
        <button
          className={`btn ${isFavorite ? "btn-danger" : "btn-outline-danger"}`}
          onClick={() => favorites.toggleItem(recipe)}
        >
          ❤️ {isFavorite ? "Remove Favorite" : "Add to Favorites"}
        </button>

        <button
          className={`btn ${isInMealPlan ? "btn-success" : "btn-outline-success"}`}
          onClick={() => mealPlan.toggleItem(recipe)}
        >
          🗓️ {isInMealPlan ? "Remove from Meal Plan" : "Add to Meal Plan"}
        </button>
      </div>
    </motion.div>
  );
}
