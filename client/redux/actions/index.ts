export const setUser = (user: String) => ({
  type: "SET_USER",
  payload: user,
});
export const setToken = (token: String) => ({
  type: "SET_TOKEN",
  payload: token,
});
export const setCurrentRecipe = (recipe: any) => ({
  type: "SET_CURRENT_RECIPE",
  payload: recipe,
});
