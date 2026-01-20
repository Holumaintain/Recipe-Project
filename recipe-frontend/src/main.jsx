// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Context providers
import { AuthProvider } from "./context/AuthContext";
import { MealPlanProvider } from "./context/MealPlanContext";

// CSS imports
import "./index.css";               // reset styles
import "./theme.min.css";           // theme variables/vendor
import "./assets/css/custom.css";   // base/components/pages split
import "./App.css";                 // app wrapper

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <MealPlanProvider>
        <App />
      </MealPlanProvider>
    </AuthProvider>
  </React.StrictMode>
);
