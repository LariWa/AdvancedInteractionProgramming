import React from "react";
import { useSelector } from "react-redux";
import RecipeView from "../views/recipeView";
import useColorScheme from "../hooks/useColorScheme";

export default function RecipePresenter({route}: any) {
  const { recipe } = route.params;
  const colorScheme = useColorScheme();
  const currentRecipe = useSelector((state: any) => state.currentRecipe);
  return <RecipeView recipe={recipe} colorScheme={colorScheme}/>;
}