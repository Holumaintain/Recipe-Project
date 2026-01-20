// src/components/recipes/RecipeCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaCalendarPlus } from "react-icons/fa";
import { useMealPlanContext } from "../../context/MealPlanContext";

// Image handling
import Image from "../ui/Image";
import defaultRecipe from "../../assets/images/recipes/default.jpg";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  const { addToMealPlan } = useMealPlanContext();

  const handleAddToMealPlan = (e) => {
    e.stopPropagation(); // prevent navigation
    addToMealPlan("Monday", recipe);
  };

  return (
    <motion.div
      className="card recipe-card h-100 position-relative"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(`/recipes/${recipe.id}`)}
      style={{ cursor: "pointer" }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", borderRadius: "12px" }}>
        <Image
          src={recipe.image}
          fallback={defaultRecipe}
          alt={recipe.title}
          className="card-img-top"
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
          loading="lazy"
        />
      </div>

      {/* Add to Meal Plan */}
      <button
        className="btn btn-sm btn-outline-dark position-absolute top-0 end-0 m-2"
        onClick={handleAddToMealPlan}
        title="Add to meal plan"
      >
        <FaCalendarPlus />
      </button>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{recipe.title}</h5>

        {/* Tags */}
        {recipe.tags?.length > 0 && (
          <div className="mb-2">
            {recipe.tags.map((tag) => (
              <span key={tag} className="badge bg-light text-dark me-1">
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-muted small mb-1">{recipe.author}</p>
        <p className="fw-semibold mb-2">⏱ {recipe.time}</p>

        {/* Description (from simple version) */}
        {recipe.description && (
          <p className="card-text text-muted small">
            {recipe.description}
          </p>
        )}

        {/* Optional CTA */}
        <button
          className="btn btn-outline-dark mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/recipes/${recipe.id}`);
          }}
        >
          View Recipe
        </button>
      </div>
    </motion.div>
  );
};

export default RecipeCard;
