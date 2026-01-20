// src/components/meal-plan/MealPlanSidebar.jsx
import React from "react";
import { useMealPlanContext } from "../../context/MealPlanContext";
import "../../assets/css/custom.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const MealPlanSidebar = () => {
  const { mealPlans } = useMealPlanContext(); // ✅ Correct property

  return (
    <div className="meal-plan-sidebar">
      <h4 className="mb-3">Weekly Meal Plan</h4>

      {days.map((day) => {
        const dayRecipes = mealPlans?.[day] || [];

        // Skip day if no recipes
        if (dayRecipes.length === 0) return null;

        return (
          <div key={day} className="mb-4">
            <h6 className="fw-bold">{day}</h6>
            {dayRecipes.map((recipe, index) =>
              recipe ? ( // ✅ Check recipe exists
                <div key={index} className="meal-plan-card">
                  {recipe.title}
                </div>
              ) : null
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MealPlanSidebar;
