import React from "react";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text } from "../components/Themed";
import { getMealsDetails } from "../mealSouce";
import { setSnackbar } from "../redux";
import ResultsView from "../views/resultsView";

export default function FavouritesPresenter() {
  const dispatch = useDispatch<any>();
  const favourites = useSelector((state: any) => state.favourites.data);
  const [loading, setLoadingState] = React.useState<boolean>();
  const [favouritesDetails, setFavouritesDetails] = React.useState<Array<any>>(
    []
  );

  React.useEffect(() => {
    setLoadingState(true);
    getMealsDetails(favourites)
      .then((res) => {
        setFavouritesDetails(res.data);
        setLoadingState(false);
      })
      .catch((e) => {
        setLoadingState(false);
        dispatch(
          setSnackbar(
            "Something went wrong fetching your favourites from the server: " +
              e.message
          )
        );
      });
  }, [favourites]);

  return favouritesDetails.length > 0 ? (
    <ResultsView results={favouritesDetails} />
  ) : loading ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : (
    <Text> You don't have any favourites!</Text>
  );
}
