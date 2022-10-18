import React from "react";
import RecipeView from "../views/recipeView";
import { useSelector, useDispatch } from "react-redux";
import { addIngr } from "../redux/actions/ingredientsActions";

export default function RecipePresenter({ route }: any, props: any) {
  const dispatch = useDispatch<any>();

  function addToListACB(ingredient: any) {
    dispatch(addIngr(ingredient));
  }
  const { recipe } = route.params;
  return <RecipeView recipe={recipe} onAddToList={addToListACB} />;
}
