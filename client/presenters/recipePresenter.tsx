import React from "react";
import { useSelector } from "react-redux";

import RecipeView from "../views/RecipeView";
export default function RecipePresenter(props: any) {
  const currentRecipe = useSelector((state: any) => state.currentRecipe);
  return <RecipeView meal={currentRecipe} />;
}