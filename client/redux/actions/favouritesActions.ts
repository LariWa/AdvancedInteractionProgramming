import { addFavourite, deleteFavourite } from "../../dbSource";
import { Dispatch } from "react";
import store from "../store";

export const addFav = (id: string) => {
  return async (dispatch: Dispatch<addFav>) => {
    dispatch({ type: "ADD_TO_FAV" });
    console.log(id);
    addFavourite(id)
      .then(() => dispatch({ type: "ADD_TO_FAV_SUC", payload: id }))
      .catch((error) => {
        dispatch({
          type: "MANIPULATE_FAV_ERROR",
          payload: error.message,
        });
      });
  };
};
export const deleteFav = (id: string) => {
  return async (dispatch: Dispatch<deleteFav>) => {
    var favs: Array<string> = store.getState().favourites["data"];
    if (favs.includes(id)) {
      dispatch({ type: "DELETE_FAV" });
      console.log(id);
      deleteFavourite(id)
        .then(() => dispatch({ type: "DELETE_FAV_SUC", payload: id }))
        .catch((error) => {
          console.log("error");
          dispatch({
            type: "MANIPULATE_FAV_ERROR",
            payload: error,
          });
        });
    }
  };
};

export const setFavs = (favs: Array<string>) => {
  return async (dispatch: Dispatch<setFavs>) => {
    dispatch({ type: "SET_FAVS", payload: favs });
  };
};
export type addFav = {
  readonly type: "ADD_TO_FAV" | "ADD_TO_FAV_SUC" | "MANIPULATE_FAV_ERROR";
  payload?: any;
};
export type deleteFav = {
  readonly type: "DELETE_FAV" | "DELETE_FAV_SUC" | "MANIPULATE_FAV_ERROR";
  payload?: any;
};
export type setFavs = {
  readonly type: "SET_FAVS";
  payload: any;
};
