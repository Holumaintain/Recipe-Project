// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { recipes } from "../data/recipes";
import RecipeCard from "../components/recipes/RecipeCard";
import heroBg from "../assets/images/hero/hero-bg.jpg";

const Home = () => {
  return (
    <div>
      {/* 🔥 Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="hero-overlay">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>RecipeShare</h1>
            <p>Discover, share, and plan your favorite recipes</p>
          </motion.div>
        </div>
      </section>

      <div className="container py-5">
        {/* 🔍 Search Section */}
        <motion.section
          className="text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Find Your Perfect Recipe</h2>
          <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">
            <input
              type="text"
              placeholder="Search recipes..."
              className="form-control"
              style={{ maxWidth: "400px" }}
            />
            <button className="btn btn-primary">Search</button>
          </div>
        </motion.section>

        {/* 🍽 Popular Recipes */}
        <motion.h2
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Popular Recipes
        </motion.h2>

        <div className="row g-4">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="col-sm-6 col-md-4 col-lg-4">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
