import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../components/Themed";
import { getMealsDetails } from "../mealSouce";
import { setCurrentRecipe } from "../redux";
import { promiseStateType } from "../types";

import ResultsView from "../views/resultsView";

export default function FavouritesPresenter() {
  const dispatch = useDispatch<any>();

  const favourites = useSelector((state: any) => state.favourites.data);
  const [loading, setLoadingState] = React.useState<boolean>();
  const [error, setError] = React.useState<null | string>();

  const [favouritesDetails, setFavouritesDetails] = React.useState<Array<any>>(
    []
  );
  function setCurrentRecipeACB(recipe: any) {
    dispatch(setCurrentRecipe(recipe));
  }
  React.useEffect(() => {
    setLoadingState(true);
    getMealsDetails(favourites)
      .then((res) => {
        console.log(res);
        setFavouritesDetails(res.data);
        setLoadingState(false);
        setError(null);
      })
      .catch((e) => {
        setLoadingState(false);
        setError("Could not fetch favourites from server, try reloading!");
        console.log(e);
      });
  }, [favourites]);

  return favouritesDetails.length > 0 ? (
    <ResultsView
      results={favouritesDetails}
      onSelectedRecipe={setCurrentRecipeACB}
    />
  ) : loading ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : (
    <Text> {error ? error : "You don't have any favourites!"}</Text>
  );
}
