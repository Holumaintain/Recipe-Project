// src/data/recipes.js

import greekPotatoes from "../assets/images/greek-potatoes.jpg";
import sausagePasta from "../assets/images/sausage-pasta-shells.jpg";
import crispyLambPasta from "../assets/images/crispy-lamb-pasta.jpg";
import coconutChicken from "../assets/images/coconut-chicken-meatballs.jpg";

export const recipes = [
  {
    id: "greek-potatoes",
    title: "Crispy Greek-Style Potatoes",
    tags: ["Vegetarian"],
    time: "70 min",
    description: "Golden crispy potatoes served with creamy tzatziki sauce.",
    image: greekPotatoes,
  },
  {
    id: "sausage-pasta-shells",
    title: "Sausage Stuffed Pasta Shells",
    tags: ["Pasta", "Comfort Food"],
    time: "55 min",
    description: "Cheesy baked pasta shells stuffed with savory sausage.",
    image: sausagePasta,
  },
  {
    id: "crispy-lamb-pasta",
    title: "Crispy Lamb Pasta Sheets with Garlicky Yogurt",
    tags: ["Main Course"],
    time: "40 min",
    description: "Tender lamb with pasta sheets and garlicky yogurt sauce.",
    image: crispyLambPasta,
  },
  {
    id: "coconut-chicken-meatballs",
    title: "Creamy Coconut Sriracha Chicken Meatballs",
    tags: ["Main Course", "Chicken"],
    time: "30 min",
    description: "Spicy and creamy chicken meatballs with coconut sauce.",
    image: coconutChicken,
  },
];
