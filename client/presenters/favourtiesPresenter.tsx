import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMealsDetails } from "../mealSouce";
import { setSnackbar } from "../redux";
import { RootTabScreenProps } from "../types";
import ResultsView from "../views/resultsView";
import useColorScheme from "../hooks/useColorScheme";
import NoResultsView from "../views/noResultsView";
import Loading from "../components/loading";

export default function FavouritesPresenter({
  navigation,
}: RootTabScreenProps<"Favourites">) {
  const dispatch = useDispatch<any>();
  const favourites = useSelector((state: any) => state.favourites.data);
  const [loading, setLoadingState] = React.useState<boolean>();
  const [favouritesDetails, setFavouritesDetails] = React.useState<Array<any>>(
    []
  );
  const colorScheme = useColorScheme();

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
    <ResultsView
      results={favouritesDetails}
      navigation={navigation}
      colorScheme={colorScheme}
    />
  ) : loading ? (
    <Loading />
  ) : (
    <NoResultsView
      text="You don't have any favourites yet!"
      colorScheme={colorScheme}
    />
  );
}
