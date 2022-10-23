import React from "react";
import { useSelector } from "react-redux";
import GroceryListView from "../views/groceryListView";
import { useColorScheme } from "react-native";

export default function GroceryListPresenter() {
  const ingredients = useSelector((state: any) => state.ingredients.data);
  const colorScheme = useColorScheme();

  return (
    <GroceryListView ingredients={ingredients} colorScheme={colorScheme} />
  );
}
