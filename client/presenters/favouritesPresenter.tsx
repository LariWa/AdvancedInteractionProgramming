import React from "react";
import { useSelector } from "react-redux";
import { RootTabScreenProps } from "../types";
import FavouritesView from "../views/favouritesView";

export default function FavouritesPresenter(
  props: any,
  { navigation }: RootTabScreenProps<"Favourites">
) {
  const currentFavouritesList = useSelector(
    (state: any) => state.currentFavouritesList
  );
  return <FavouritesView meal={currentFavouritesList} />;
}
