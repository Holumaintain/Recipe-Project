// src/context/MealPlanContext.jsx
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const MealPlanContext = createContext();

const defaultPlan = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: [],
};

export const MealPlanProvider = ({ children }) => {
  const [mealPlans, setMealPlans] = useState(() => {
    const saved = localStorage.getItem("mealPlans");
    return saved ? JSON.parse(saved) : defaultPlan;
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔄 Fetch from backend
  const fetchMealPlans = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/mealplans");
      const data = response.data;

      // Expect backend to return either:
      // - Object { Monday: [...], Tuesday: [...], ... }
      // - Or array of recipes (normalize if needed)
      if (Array.isArray(data)) {
        setMealPlans((prev) => ({ ...prev, ...defaultPlan })); // fallback
      } else if (typeof data === "object") {
        setMealPlans((prev) => ({ ...prev, ...data }));
      }
    } catch (err) {
      console.warn("Backend unavailable, using local meal plans", err);
      setError("Using local meal plans");
    } finally {
      setLoading(false);
    }
  }, []);

  // 💾 Persist locally
  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans));
  }, [mealPlans]);

  // ➕ Add recipe
  const addToMealPlan = (day, recipe) => {
    setMealPlans((prev) => ({
      ...prev,
      [day]: [...prev[day], recipe],
    }));
  };

  // ➖ Remove recipe
  const removeFromMealPlan = (day, recipeId) => {
    setMealPlans((prev) => ({
      ...prev,
      [day]: prev[day].filter((r) => r.id !== recipeId),
    }));
  };

  // 🛒 Get a flat grocery list
  const getGroceryList = () =>
    Object.values(mealPlans)
      .flat()
      .flatMap((recipe) => recipe.ingredients || []);

  // ✅ Fetch from backend on mount
  useEffect(() => {
    fetchMealPlans();
  }, [fetchMealPlans]);

  return (
    <MealPlanContext.Provider
      value={{
        mealPlans,
        addToMealPlan,
        removeFromMealPlan,
        getGroceryList,
        fetchMealPlans,
        loading,
        error,
        setMealPlans, // for drag & drop
      }}
    >
      {children}
    </MealPlanContext.Provider>
  );
};

// ✅ Custom hook
export const useMealPlanContext = () => useContext(MealPlanContext);
