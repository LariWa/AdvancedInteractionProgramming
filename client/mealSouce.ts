import axios from "axios";

axios.defaults.baseURL = "https://localhost:8080/api";

function getRandomMeal() {
  return axios.get("/randomMeal");
}
function getMealDetails(id: string) {
  return axios.post("/mealDetails", {
    id: id,
  });
}
function getCategories() {
  return axios.get("/categories");
}
function getAreas() {
  return axios.get("/areas");
}
function getIngredients() {
  return axios.get("/ingredients");
}
function filterMeals(
  category: string,
  area: string,
  ingredients: Array<string>,
  query: string
) {
  return axios.post("/mealDetails", {
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
