import axios from "axios";
import store from "./redux/store";

function addFavourite(id: string) {
  return axios.post(
    "/db/addFavourite",
    {
      id: id,
    },
    getHeader()
  );
}
function deleteFavourite(id: string) {
  return axios.post(
    "/db/deleteFavourite",
    {
      id: id,
    },
    getHeader()
  );
}
function getFavourites() {
  return axios.get("/db/getFavourites", getHeader());
}

function addIngredient(ingredient: string) {
  return axios.post(
    "/db/addIngredient",
    {
      ingredient: ingredient,
    },
    getHeader()
  );
}
function deleteIngredient(ingredient: string) {
  return axios.post(
    "/db/deleteIngredient",
    {
      ingredient: ingredient,
    },
    getHeader()
  );
}
function getGroceries() {
  return axios.get("/db/getGroceries", getHeader());
}

function getTopFavourites() {
  return axios.get("/db/topTen").then((res) => {
    return axios.post("/api/mealsDetails", {
      ids: res.data,
    });
  });
}
function getHeader() {
  return { headers: { authorization: "bearer " + store.getState().token } };
}

export {
  addFavourite,
  deleteFavourite,
  getFavourites,
  getTopFavourites,
  addIngredient,
  deleteIngredient,
  getGroceries,
};
