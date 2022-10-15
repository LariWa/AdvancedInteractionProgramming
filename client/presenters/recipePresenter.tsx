import React from "react";
import RecipeView from "../views/recipeView";

export default function RecipePresenter({ route }: any) {
  const { recipe } = route.params;
  return <RecipeView recipe={recipe} />;
}
