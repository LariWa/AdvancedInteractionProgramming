import React from "react";
import RecipeView from "../views/recipeView";
import useColorScheme from "../hooks/useColorScheme";
import { useSelector, useDispatch } from "react-redux";
import { addIngr } from "../redux/actions/ingredientsActions";

export default function RecipePresenter({ route }: any, props: any) {
  const dispatch = useDispatch<any>();
  const { recipe } = route.params;
  const colorScheme = useColorScheme();

  function addToListACB(ingredient: any){
    dispatch(addIngr(ingredient));
  }
  return <RecipeView recipe={recipe} onAddToList = {addToListACB} colorScheme={colorScheme} />;
}
