import React from "react";

const MealPlanCard = ({ plan }) => (
  <div className="meal-plan-card">
    <span>{plan.name}</span>
    <span>{plan.date}</span>
  </div>
);

export default MealPlanCard;
