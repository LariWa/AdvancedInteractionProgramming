import axios from "axios";

const express = require("express");
const router = express.Router();

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
//gets random meal
router.get("/get/randomMeal", (req, res) => {
  axios
    .get("/random.php")
    .then(( response  => res.send(getMeal);
});

//get meal details
router.post("/post/mealDetails", (req, res) => {
  console.log(req.body);
  axios
    .get("/lookup.php?i=" + req.body.id)
    .then(getMeal)
    .then((data) => res.send(data));
});

//get all meal categories
router.get("/get/categories", (req, res) => {
  axios
    .get("/categories.php")
    .then((response) => res.send(response.data.categories));
});

//gets meals filtered by category, area, ingredientss
router.post("/post/filterMeals", (req, res) => {
  axios
    .get("filter.php?" + new URLSearchParams(req.body))
    .then(getMeals)
    .then((data) => res.send(data));
});

function getMeal(response) {
  console.log(response.data.meals[0]);
  return response.data.meals[0];
}
function getMeals(response) {
  return response.data.meals;
}
module.exports = router;
