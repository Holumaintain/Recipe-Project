import { apiFetch } from "./api";

export function getAllRecipes() {
  return apiFetch("/recipes");
}

export function getRecipeById(id) {
  return apiFetch(`/recipes/${id}`);
}
