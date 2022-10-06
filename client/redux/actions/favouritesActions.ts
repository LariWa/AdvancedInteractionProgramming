import { addFavourite, deleteFavourite, getFavourites } from "../../dbSource";
import { useDispatch } from "react-redux";
const dispatch = useDispatch();

export const addFav = (id: string) => {
  dispatch({ type: "ADD_TO_FAV" });
  console.log(id);
  addFavourite(id)
    .then(() => dispatch({ type: "ADD_TO_FAV_SUC", payload: id }))
    .catch((error) => {
      dispatch({
        type: "MANIPULATE_FAV_ERROR",
        payload: error,
      });
    });
};
export const deleteFav = (id: string) => {
  dispatch({ type: "DELETE_FAV" });
  console.log(id);
  deleteFavourite(id)
    .then(() => dispatch({ type: "DELETE_FAV_SUC", payload: id }))
    .catch((error) => {
      dispatch({
        type: "MANIPULATE_FAV_ERROR",
        payload: error,
      });
    });
};
export const setFavs = (favs: Array<string>) => {
  dispatch({ type: "SET_FAVS", payload: favs });
};
