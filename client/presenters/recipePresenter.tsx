import React from "react";
import { useSelector } from "react-redux";
import { RootTabScreenProps } from "../types";
import RecipeView from "../views/recipeView";

export default function RecipePresenter(props: any, {navigation}: RootTabScreenProps<'TabFive'>){
  return <RecipeView/>; //meal={currentRecipe}
}
