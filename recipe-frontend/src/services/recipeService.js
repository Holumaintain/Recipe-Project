// src/services/recipeService.js
import axios from "axios";

// Base URL for backend API (from .env or default)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create Axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// === Recipe Services ===

// Get all recipes
export const getRecipes = async () => {
  const response = await api.get("/recipes");
  return response.data;
};

// Get a single recipe by ID
export const getRecipeById = async (id) => {
  const response = await api.get(`/recipes/${id}`);
  return response.data;
};

// Create a new recipe (requires auth token)
export const createRecipe = async (recipeData, token) => {
  const response = await api.post("/recipes", recipeData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Update a recipe by ID (requires auth token)
export const updateRecipe = async (id, recipeData, token) => {
  const response = await api.put(`/recipes/${id}`, recipeData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Delete a recipe by ID (requires auth token)
export const deleteRecipe = async (id, token) => {
  const response = await api.delete(`/recipes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
