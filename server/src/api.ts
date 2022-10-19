import axios from "axios";
import { NextFunction } from "express";
import { key, version } from "./mealAPI";
import express, { Request, Response } from "express";
var _ = require("lodash");
const router = express.Router();

axios.defaults.baseURL =
  "https://www.themealdb.com/api/json/" + version + "/" + key + "//";

//gets random meal
router.get("/randomMeal", (req: Request, res: Response) => {
  try {
    axios
      .get("/random.php")
      .then(getMeal)
      .then((meal) => res.send(meal));
  } catch (error) {
    res.status(500).json({ error });
  }
});

//get meal details
router.post("/mealDetails", (req: Request, res: Response) => {
  try {
    axios
      .get("/lookup.php?i=" + req.body.id)
      .then(getMeal)
      .then((data) => res.send(data));
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.post("/mealsDetails", (req: Request, res: Response) => {
  try {
    let requests = req.body.ids.map((id: string) =>
      axios.get("/lookup.php?i=" + id).then(getMeal)
    );
    axios.all(requests).then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

//get all meal categories
router.get("/categories", (req: Request, res: Response) => {
  try {
    axios
      .get("/categories.php")
      .then((response) => res.send(response.data.categories));
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.get("/areas", (req, res) => {
  try {
    axios
      .get("/list.php?a=list")
      .then((response) => res.send(response.data.meals));
  } catch (error) {
    res.status(500).json({ error });
  }
});
router.get("/ingredients", (req, res) => {
  try {
    axios
      .get("/list.php?i=list")
      .then((response) => res.send(response.data.meals));
  } catch (error) {
    res.status(500).json({ error });
  }
});

//gets meals filtered by category, area, ingredients
router.post("/filterMeals", (req: Request, res: Response) => {
  try {
    const filterPromises: Array<Promise<any>> = [];
    const categoriesPromises: Array<Promise<any>> = [];
    const areaPromises: Array<Promise<any>> = [];

    if (req.body.categories && req.body.categories.length > 0) {
      req.body.categories.forEach((category: string) => {
        categoriesPromises.push(axios.get("filter.php?c=" + category));
      });
      filterPromises.push(
        axios
          .all(categoriesPromises)
          .then((res) => res.flatMap((res) => getMeals(res.data)))
      );
    }
    if (req.body.areas && req.body.areas.length > 0) {
      req.body.areas.forEach((area: string) => {
        areaPromises.push(axios.get("filter.php?a=" + area));
      });
      filterPromises.push(
        axios
          .all(areaPromises)
          .then((res) => res.flatMap((res) => getMeals(res.data)))
      );
    }
    if (req.body.ingredients && req.body.ingredients.length > 0)
      filterPromises.push(
        axios
          .get("filter.php?i=" + req.body.ingredients.toString())
          .then((res) => getMeals(res.data))
      );
    if (req.body.query)
      filterPromises.push(
        axios
          .get("search.php?s=" + req.body.query)
          .then((res) => getMeals(res.data))
      );

    axios.all(filterPromises).then((response) => {
      var meals = _.intersectionBy(...response, "idMeal");
      var detailsReqs = meals.map((meal: Meal) =>
        axios.get("/lookup.php?i=" + meal.idMeal).then(getMeal)
      );
      axios.all(detailsReqs).then((mealDetails) => res.send(mealDetails));
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

function getMeal(response: MealAPIResponse) {
  try {
    if (
      response.data &&
      response.data.meals &&
      response.data.meals.length > 0
    ) {
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
  } catch {
    return null;
  }
}
function getMeals(data: { meals: Array<Meal | any> }) {
  return data.meals;
}
type Meal = {
  idMeal: string;
};
type MealAPIResponse = {
  data: { meals: Array<Meal | any> };
};

module.exports = router;
