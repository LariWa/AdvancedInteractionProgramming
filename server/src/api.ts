import axios from "axios";
var _ = require("lodash");
const express = require("express");
const router = express.Router();

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v2/9973533/";
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
    .then(getMeal)
    .then((meal) => res.send(meal));
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

//gets meals filtered by category, area, ingredients
router.post("/post/filterMeals", (req, res) => {
  const mealByCategory = axios.get("filter.php?c=" + req.body.category);
  const mealByArea = axios.get("filter.php?a=" + req.body.area);
  const mealByIngredients = axios.get(
    "filter.php?i=" + req.body.ingredients.toString()
  );
  const mealByQuery = axios.get("search.php?s=" + req.body.query);

  axios
    .all([mealByCategory, mealByArea, mealByIngredients, mealByQuery])
    .then((response) => {
      console.log(_.intersectionBy(...response.map(getMeals), "idMeal"));
      res.send(_.intersectionBy(...response.map(getMeals), "idMeal"));
    });
});

function getMeal(response) {
  console.log(response.data.meals[0]);
  return response.data.meals[0];
}
function getMeals(response) {
  return response.data.meals;
}

module.exports = router;
