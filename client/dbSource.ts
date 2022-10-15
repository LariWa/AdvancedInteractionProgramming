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

export { addFavourite, deleteFavourite, getFavourites, getTopFavourites };
