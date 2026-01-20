// src/app.js
import express from "express";
import cors from "cors";

import recipeRoutes from "./routes/recipeRoutes.js";
import mealPlanRoutes from "./routes/mealPlanRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);
app.use("/api/mealplans", mealPlanRoutes);

// Health check / root route
app.get("/", (req, res) => {
  res.send("🍽️ Recipe API is running");
});

export default app;
