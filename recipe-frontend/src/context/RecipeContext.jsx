// src/context/RecipeContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { getRecipes, getRecipeById } from "../services/recipeService";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const data = await getRecipes();
        // Ensure IDs are strings
        const normalized = data.map((r) => ({ ...r, id: r.id.toString() }));
        setRecipes(normalized);
      } catch (err) {
        console.error(err);
        setError(err.message || "Failed to load recipes");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const getRecipe = async (id) => {
    return recipes.find((r) => r.id.toString() === id) || null;
  };

  const addRecipe = async (recipeData) => {
    const newRecipe = { ...recipeData, id: Date.now().toString() }; // string ID
    setRecipes((prev) => [newRecipe, ...prev]);
    return newRecipe;
  };

  return (
    <RecipeContext.Provider value={{ recipes, loading, error, addRecipe, getRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);
