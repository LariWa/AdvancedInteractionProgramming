import axios from "axios";

axios.defaults.baseURL = "https://localhost:8080/";

function getRandomMeal() {
  return axios.get("api/randomMeal");
}
function getMealDetails(id: string) {
  return axios.post("api//mealDetails", {
    id: id,
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
  getMealDetails,
  getCategories,
  getAreas,
  getIngredients,
  filterMeals,
};
