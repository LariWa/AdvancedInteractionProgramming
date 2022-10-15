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
function getAllFilterData() {
  return axios.all([getCategories(), getAreas(), getIngredients()]);
}
function filterMeals(
  categories: Array<string>,
  areas: Array<string>,
  ingredients: Array<string>,
  query: string
) {
  return axios.post("api/filterMeals", {
    categories: categories,
    areas: areas,
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
  getAllFilterData,
};
