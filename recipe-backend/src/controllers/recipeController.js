import recipes from "../data/recipes.js";

export const getAllRecipes = (req, res) => {
  res.json(recipes);
};

export const getRecipeById = (req, res) => {
  const recipe = recipes.find(r => r.id === req.params.id);

  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  res.json(recipe);
};
