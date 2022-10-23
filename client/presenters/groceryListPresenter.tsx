import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngr, deleteIngr } from "../redux/actions/ingredientsActions";
import { setSnackbar } from "../redux";
import GroceryListView from "../views/groceryListView";
import { RootTabScreenProps } from "../types";
import { getGroceries } from "../dbSource";
import { useColorScheme } from "react-native";
import { Text } from "../components/Themed";


export default function GroceryListPresenter() {
  const ingredients = useSelector((state: any) => state.ingredients.data);
  const colorScheme = useColorScheme(); 

  return (
    <GroceryListView 
     ingredients={ingredients} 
     colorScheme={colorScheme}/>
  );
}