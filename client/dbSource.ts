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
function getFavourites(id: string) {
  return axios.post(
    "/db/getFavourites",
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
