import React from "react";
import RecipeView from "../views/recipeView";

export default function RecipePresenter(
  { route }: any,
  props: any,
  ) {

  function addToListACB(){
    props.ingredients.addToList(props.model.currentIngredientPromiseState.name);
  }
  const { recipe } = route.params;
  return <RecipeView recipe={recipe}
          onAddToList={addToListACB} />;
}
