import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // ✅ Import useLocation
import Header from "./Header";
import Footer from "./Footer";
import MealPlanSidebar from "../meal-plan/MealPlanSidebar";
import SearchBar from "../navigation/SearchBar";
import Loader from "../ui/Loader";

import { useRecipeContext } from "../../context/RecipeContext";
import { useMealPlanContext } from "../../context/MealPlanContext";

const MainLayout = ({ children }) => {
  const { searchRecipes } = useRecipeContext();
  const { mealPlans, fetchMealPlans, loading, error } = useMealPlanContext();
  const location = useLocation(); // ✅ Current route

  useEffect(() => {
    fetchMealPlans();
  }, [fetchMealPlans]);

  // ✅ Show sidebar only on certain pages
  const showSidebar = ["/mealplans", "/dashboard"].includes(location.pathname);

  return (
    <div className="app-wrapper d-flex flex-column min-vh-100">
      <Header />

      <div className="container my-3">
        <SearchBar onSearch={searchRecipes} />
      </div>

      <div className="container d-flex flex-grow-1 gap-4">
        <main className="flex-grow-1">
          {loading ? (
            <Loader />
          ) : error ? (
            <p className="text-danger">{error}</p>
          ) : (
            children
          )}
        </main>

        {showSidebar && <MealPlanSidebar mealPlans={mealPlans} />}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
