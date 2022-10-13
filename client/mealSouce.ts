import axios from "axios";

function getRandomMeal() {
  return axios.get("api/randomMeal");
}
function getMealsDetails(ids: Array<String>) {
  return axios.post("api/mealsDetails", {
    ids: ids,
  });
}
function getCategories() {
  return axios.get("api/categories");
}
function getAreas() {
  return axios.get("api/areas");
}
function getIngredients() {
  return axios.get("api/ingredients");
}
function filterMeals(
  category: string,
  area: string,
  ingredients: Array<string>,
  query: string
) {
  return axios.post("api/filterMeals", {
    category: category,
    area: area,
    ingredients: ingredients,
    query: query,
  });
}

export {
  getRandomMeal,
  getMealsDetails,
  getCategories,
  getAreas,
  getIngredients,
  filterMeals,
};
