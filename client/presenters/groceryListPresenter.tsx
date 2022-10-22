import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngr, deleteIngr } from "../redux/actions/ingredientsActions";
import { setSnackbar } from "../redux";
import GroceryListView from "../views/groceryListView";
import { RootTabScreenProps } from "../types";
import { getGroceries } from "../dbSource";

export default function GroceryListPresenter() {
  
  const ingredients = useSelector((state: any) => state.ingredients.data);

  return <GroceryListView ingredients={ingredients} />;
}
