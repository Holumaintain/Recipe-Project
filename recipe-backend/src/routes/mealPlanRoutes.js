import express from "express";

const router = express.Router();

// GET all meal plans
router.get("/", (req, res) => {
  res.json([]);
});

// POST new meal plan
router.post("/", (req, res) => {
  res.status(201).json(req.body);
});

export default router;
