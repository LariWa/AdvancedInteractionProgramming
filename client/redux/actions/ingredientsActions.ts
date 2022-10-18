import { addIngredient, deleteIngredient } from "../../dbSource";
import { Dispatch } from "react";
import store from "../store";

export const addIngr = (ingredient: any) => {
  return async (dispatch: Dispatch<addIng>) => {
    dispatch({ type: "ADD_TO_INGR" });
    console.log(ingredient);
    addIngredient(ingredient)
      .then(() => dispatch({ type: "ADD_TO_INGR_SUC", payload: ingredient }))
      .catch((error) => {
        dispatch({
          type: "MANIPULATE_INGR_ERROR",
          payload: error.message,
        });
      });
  };
};
export const deleteIngr = (ingredient: any) => {
  return async (dispatch: Dispatch<deleteIng>) => {
    var ingrs: Array<string> = store.getState().ingredients["data"];
    if (ingrs.includes(ingredient)) {
      dispatch({ type: "DELETE_INGR" });
      console.log(ingredient);
      deleteIngredient(ingredient)
        .then(() => dispatch({ type: "DELETE_INGR_SUC", payload: ingredient }))
        .catch((error) => {
          console.log("error");
          dispatch({
            type: "MANIPULATE_INGR_ERROR",
            payload: error,
          });
        });
    }
  };
};

export const setIngrs = (ingrs: Array<string>) => {
  return async (dispatch: Dispatch<setIngrs>) => {
    dispatch({ type: "SET_INGRS", payload: ingrs });
  };
};
export type addIng = {
  readonly type: "ADD_TO_INGR" | "ADD_TO_INGR_SUC" | "MANIPULATE_INGR_ERROR";
  payload?: any;
};
export type deleteIng = {
  readonly type: "DELETE_INGR" | "DELETE_INGR_SUC" | "MANIPULATE_INGR_ERROR";
  payload?: any;
};
export type setIngrs = {
  readonly type: "SET_INGRS";
  payload: any;
};
