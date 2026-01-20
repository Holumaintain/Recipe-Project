// src/pages/CreateRecipe.jsx
import React, { useState } from "react";
import { useRecipeContext } from "../context/RecipeContext";
import Image from "../components/ui/Image";

// category images
import placeholder from "../assets/images/ui/placeholder.jpg";
import mainCourseImg from "../assets/images/categories/main-course.jpg";
import dessertsImg from "../assets/images/categories/desserts.jpg";
import breakfastImg from "../assets/images/categories/breakfast.jpg";
import vegetarianImg from "../assets/images/categories/vegetarian.jpg";
import seafoodImg from "../assets/images/categories/seafood.jpg";

// map category → image
const categoryImages = {
  "Main Course": mainCourseImg,
  "Desserts": dessertsImg,
  "Breakfast": breakfastImg,
  "Vegetarian": vegetarianImg,
  "Seafood": seafoodImg,
};

const categories = [
  { name: "Main Course", recipes: 417 },
  { name: "Appetizers and Snacks", recipes: 179 },
  { name: "Salads", recipes: 105 },
  { name: "Soups and Stews", recipes: 49 },
  { name: "Rice Dishes", recipes: 90 },
  { name: "Pasta and Noodles", recipes: 107 },
  { name: "Breakfast", recipes: 89 },
  { name: "Chicken", recipes: 159 },
  { name: "Beef", recipes: 67 },
  { name: "Pork", recipes: 48 },
  { name: "Seafood", recipes: 60 },
  { name: "Vegetarian", recipes: 75 },
  { name: "Desserts", recipes: 442 },
];

const CreateRecipe = () => {
  const { addRecipe } = useRecipeContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await addRecipe({
      title,
      description,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    });

    setTitle("");
    setDescription("");
    setIngredients("");
    setSteps("");
    setLoading(false);
  };

  return (
    <div className="container my-5">
      <h2>Create New Recipe</h2>

      {/* ===================== FORM ===================== */}
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          className="form-control mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
        />
        <textarea
          className="form-control mb-3"
          placeholder="Ingredients (one per line)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows="4"
          required
        />
        <textarea
          className="form-control mb-3"
          placeholder="Steps (one per line)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          rows="4"
          required
        />
        <button className="btn btn-outline-dark" disabled={loading}>
          {loading ? "Creating..." : "Create Recipe"}
        </button>
      </form>

      {/* ===================== CATEGORIES ===================== */}
      <section className="mb-5">
        <h3 className="mb-3">Categories</h3>

        <div className="row">
          {categories.map((cat) => (
            <div key={cat.name} className="col-md-3 mb-4">
              <div className="card h-100 text-center category-card">
                <Image
                  src={categoryImages[cat.name] || placeholder}
                  fallback={placeholder}
                  alt={cat.name}
                  loading="lazy"
                  className="img-fluid rounded-top"
                />

                <div className="card-body">
                  <h5 className="card-title">{cat.name}</h5>
                  <p className="text-muted">{cat.recipes} recipes</p>
                  <button className="btn btn-outline-dark btn-sm">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CreateRecipe;
