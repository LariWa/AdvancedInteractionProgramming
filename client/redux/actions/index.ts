import { Dispatch } from "react";
import { getFavourites } from "../../dbSource";

export const setToken = (token: String) => ({
  type: "SET_TOKEN",
  payload: token,
});
export const setCurrentRecipe = (recipe: any) => ({
  type: "SET_CURRENT_RECIPE",
  payload: recipe,
});
export const setUserData = (username: string, token: String) => {
  return async (dispatch: Dispatch<setUserData>) => {
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
    dispatch({
      type: "SET_USER",
      payload: username,
    });

    getFavourites()
      .then((result) => {
        dispatch({ type: "GET_FAVS_SUC", payload: result.data });
      })
      .catch((error) => {
        dispatch({
          type: "MANIPULATE_FAV_ERROR",
          payload: error,
        });
      });
  };
};
export const setNewUserData = (username: string, token: String) => {
  return async (dispatch: Dispatch<setUserData>) => {
    dispatch({
      type: "SET_TOKEN",
      payload: token,
    });
    dispatch({
      type: "SET_USER",
      payload: username,
    });
  };
};
export type setUserData = {
  readonly type:
    | "SET_TOKEN"
    | "SET_USER"
    | "GET_FAVS_SUC"
    | "MANIPULATE_FAV_ERROR";
  payload: any;
};
