import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Fetch all meal plans
export const getMealPlans = async () => {
  const response = await api.get("/mealplans");
  return response.data;
};

// (Optional for later)
export const createMealPlan = async (mealPlanData) => {
  const response = await api.post("/mealplans", mealPlanData);
  return response.data;
};
