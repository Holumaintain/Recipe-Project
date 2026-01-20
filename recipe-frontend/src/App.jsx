// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./components/layout/MainLayout";

// UI Components
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes"; // <-- Added import for Recipes page
import RecipeDetail from "./pages/RecipeDetail";
import CreateRecipe from "./pages/CreateRecipe";
import MealPlans from "./pages/MealPlans";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Context Providers
import { AuthProvider } from "./context/AuthContext";
import { RecipeProvider } from "./context/RecipeContext";
import { MealPlanProvider } from "./context/MealPlanContext";

function App() {
  return (
    <AuthProvider>
      <RecipeProvider>
        <MealPlanProvider>
          <Router>
            <Navbar /> {/* Navbar at top */}
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/recipes" element={<Recipes />} /> {/* New route */}
                <Route path="/recipes/:id" element={<RecipeDetail />} />
                <Route path="/create-recipe" element={<CreateRecipe />} />
                <Route path="/meal-plans" element={<MealPlans />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer /> {/* Footer at bottom */}
          </Router>
        </MealPlanProvider>
      </RecipeProvider>
    </AuthProvider>
  );
}

export default App;
