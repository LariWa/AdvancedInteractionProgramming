import { addIngredient, deleteIngredient } from "../../dbSource";
import { Dispatch } from "react";
import store from "../store";

export const addIngr = (id: string) => {
  return async (dispatch: Dispatch<addIng>) => {
    dispatch({ type: "ADD_TO_INGR" });
    console.log(id);
    addIngredient(id)
      .then(() => dispatch({ type: "ADD_TO_INGR_SUC", payload: id }))
      .catch((error) => {
        dispatch({
          type: "MANIPULATE_INGR_ERROR",
          payload: error.message,
        });
      });
  };
};
export const deleteIngr = (id: string) => {
  return async (dispatch: Dispatch<deleteIng>) => {
    var ingrs: Array<string> = store.getState().ingredients["data"];
    if (ingrs.includes(id)) {
      dispatch({ type: "DELETE_INGR" });
      console.log(id);
      deleteIngredient(id)
        .then(() => dispatch({ type: "DELETE_INGR_SUC", payload: id }))
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
