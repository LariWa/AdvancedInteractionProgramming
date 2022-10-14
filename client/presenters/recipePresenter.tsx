import React from "react";
import { useSelector } from "react-redux";
import { RootTabScreenProps } from "../types";
import RecipeView from "../views/recipeView";

export default function RecipePresenter({ route }: any) {
  const { recipe } = route.params;
  const currentRecipe = useSelector((state: any) => state.currentRecipe);
  return <RecipeView recipe={recipe} />;
}
