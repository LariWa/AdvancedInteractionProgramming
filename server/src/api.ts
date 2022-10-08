import axios from "axios";
import { key, version } from "./mealAPI";
var _ = require("lodash");
const express = require("express");
const router = express.Router();

axios.defaults.baseURL =
  "https://www.themealdb.com/api/json/" + version + "/" + key + "//";
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
//gets random meal
router.get("/randomMeal", (req, res) => {
  console.log(1);
  axios
    .get("/random.php")
    .then(getMeal)
    .then((meal) => res.send(meal));
});

//get meal details
router.post("/mealDetails", (req, res) => {
  console.log(req.body);
  axios
    .get("/lookup.php?i=" + req.body.id)
    .then(getMeal)
    .then((data) => res.send(data));
});
router.post("/mealsDetails", (req, res) => {
  let requests = req.body.ids.map((id) =>
    axios.get("/lookup.php?i=" + id).then(getMeal)
  );
  axios.all(requests).then((data) => {
    res.send(data);
  });
});

//get all meal categories
router.get("/categories", (req, res) => {
  axios
    .get("/categories.php")
    .then((response) => res.send(response.data.categories));
});
router.get("/areas", (req, res) => {
  axios
    .get("/list.php?a=list")
    .then((response) => res.send(response.data.meals));
});
router.get("/ingredients", (req, res) => {
  axios
    .get("/list.php?i=list")
    .then((response) => res.send(response.data.meals));
});

//gets meals filtered by category, area, ingredients
router.post("/filterMeals", (req, res) => {
  try {
    let filterPromises = [];
    if (req.body.category)
      filterPromises.push(axios.get("filter.php?c=" + req.body.category));
    if (req.body.area)
      filterPromises.push(axios.get("filter.php?a=" + req.body.area));
    if (req.body.ingredients)
      filterPromises.push(
        axios.get("filter.php?i=" + req.body.ingredients.toString())
      );
    if (req.body.query)
      filterPromises.push(axios.get("search.php?s=" + req.body.query));

    axios.all(filterPromises).then((response) => {
      var meals = _.intersectionBy(...response.map(getMeals), "idMeal");
      var detailsReqs = meals.map((meal) =>
        axios.get("/lookup.php?i=" + meal.idMeal).then(getMeal)
      );
      axios.all(detailsReqs).then((mealDetails) => res.send(mealDetails));
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

function getMeal(response) {
  if (response.data.meals.length > 0) {
    const meal = response.data.meals[0];
    const ingredients = [];
    for (let i = 0; i <= 20; i++) {
      if (meal["strIngredient" + i])
        ingredients.push({
          name: meal["strIngredient" + i],
          quantity: meal["strMeasure" + i],
        });
    }
    return { ...meal, ingredients: ingredients };
  } else return null;
}
function getMeals(response) {
  return response.data.meals;
}

module.exports = router;
