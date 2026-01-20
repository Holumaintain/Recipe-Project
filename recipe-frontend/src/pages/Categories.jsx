// src/pages/Categories.jsx
import React, { useState } from "react";
import Image from "../components/ui/Image";
import { useRecipeContext } from "../context/RecipeContext";

// Category images
import dessertsImg from "../assets/images/categories/desserts.jpg";
import chickenImg from "../assets/images/categories/chicken.jpg";
import vegetarianImg from "../assets/images/categories/vegetarian.jpg";
import pastaImg from "../assets/images/categories/pasta.jpg";
import mainCourseImg from "../assets/images/categories/main-course.jpg";
import breakfastImg from "../assets/images/categories/breakfast.jpg";
import seafoodImg from "../assets/images/categories/seafood.jpg";
import placeholder from "../assets/images/ui/placeholder.jpg";

// Map category → image
const categoryImages = {
  Desserts: dessertsImg,
  Chicken: chickenImg,
  Vegetarian: vegetarianImg,
  "Pasta and Noodles": pastaImg,
  "Main Course": mainCourseImg,
  Breakfast: breakfastImg,
  Seafood: seafoodImg,
};

// Categories data
const categories = [
  { name: "Appetizers and Snacks", count: 179 },
  { name: "Beef", count: 67 },
  { name: "Bread and Buns", count: 83 },
  { name: "Breakfast", count: 89 },
  { name: "Cakes", count: 176 },
  { name: "Chicken", count: 159 },
  { name: "Comfort Food", count: 128 },
  { name: "Desserts", count: 442 },
  { name: "Holiday", count: 108 },
  { name: "Ice Cream", count: 35 },
  { name: "Main Course", count: 417 },
  { name: "Meal Prep", count: 96 },
  { name: "Pasta and Noodles", count: 107 },
  { name: "Pastries", count: 199 },
  { name: "Pork", count: 48 },
  { name: "Quick and Easy", count: 487 },
  { name: "Rice Dishes", count: 90 },
  { name: "Salads", count: 105 },
  { name: "Seafood", count: 60 },
  { name: "Soups and Stews", count: 49 },
  { name: "Vegetarian", count: 75 },
];

const Categories = () => {
  const { loading } = useRecipeContext();
  const [search, setSearch] = useState("");

  if (loading) return <p className="text-center py-5">Loading...</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4">Categories</h2>
      <p className="mb-4">
        Discover thousands of recipes organized by cuisine, meal type, and dietary needs.
      </p>

      {/* Search bar */}
      <input
        type="text"
        className="form-control mb-5"
        placeholder="Search categories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Categories Grid */}
      <div className="row g-4">
        {categories
          .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
          .map((category) => (
            <div key={category.name} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 category-card shadow-sm">
                {/* Image */}
                <div style={{ overflow: "hidden", borderRadius: "12px" }}>
                  <Image
                    src={categoryImages[category.name] || placeholder}
                    fallback={placeholder}
                    alt={category.name}
                    className="card-img-top"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>

                {/* Card body */}
                <div className="card-body text-center">
                  <h5 className="card-title">{category.name}</h5>
                  <p className="text-muted">{category.count} recipes</p>
                  <button className="btn btn-outline-dark btn-sm">Explore</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
