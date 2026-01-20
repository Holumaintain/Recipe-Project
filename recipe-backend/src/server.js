import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables FIRST
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
