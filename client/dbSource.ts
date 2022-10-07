import axios from "axios";
import store from "./redux/store";

axios.defaults.baseURL = "https://localhost:8080/db";

function addFavourite(id: string) {
  return axios.post(
    "/addFavourite",
    {
      id: id,
    },
    getHeader()
  );
}
function deleteFavourite(id: string) {
  return axios.post(
    "/deleteFavourite",
    {
      id: id,
    },
    getHeader()
  );
}
function getFavourites(id: string) {
  return axios.post(
    "/getFavourites",
    {
      id: id,
    },
    getHeader()
  );
}
function getHeader() {
  return { headers: { authorization: "bearer " + store.getState().token } };
}

export { addFavourite, deleteFavourite, getFavourites };
