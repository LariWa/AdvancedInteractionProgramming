import React from "react";
import RecipeView from "../views/recipeView";
import useColorScheme from "../hooks/useColorScheme";

export default function RecipePresenter({ route }: any, props: any) {
  const { recipe } = route.params;
  const colorScheme = useColorScheme();

  return <RecipeView recipe={recipe} colorScheme={colorScheme} />;
}
