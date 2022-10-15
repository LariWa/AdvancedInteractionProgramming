import React, { useState } from "react";
import LoginView from "../views/loginView";
import { login } from "../loginSource";
import { useSelector, useDispatch } from "react-redux";
import { RootTabScreenProps } from "../types";
import DishCard from "../components/dishCard";
import { addFav, deleteFav } from "../redux/actions/favouritesActions";
import { setSnackbar } from "../redux";

export default function DishCardPresenter(props: any) {
  const dispatch = useDispatch<any>();
  const addedToFav = useSelector((state: any) =>
    state.favourites.data.includes(props.data.idMeal)
  );
  const loading = useSelector((state: any) => state.favourites.loading);
  const user = useSelector((state: any) => state.user);
  function favBtnClickedACB() {
    if (!user)
      dispatch(setSnackbar("Please log in to add your favourite recipes!"));
    else {
      if (!addedToFav) dispatch(addFav(props.data.idMeal));
      else dispatch(deleteFav(props.data.idMeal));
    }
  }
  function setCurrentRecipeACB() {
    //dispatch(setCurrentRecipe(recipe));
    //TODO go to RecipePresenter
    console.log(props.data);
    props.navigation.navigate("Recipe", { recipe: props.data });
  }
  return (
    <DishCard
      data={props.data}
      addedToFav={addedToFav}
      loading={loading}
      onFavBtnClicked={favBtnClickedACB}
      onSelectedRecipe={setCurrentRecipeACB}
    />
  );
}
