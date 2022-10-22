import React, { useState } from "react";
import SearchView from "../views/searchView";
import { filterMeals, getAllFilterData } from "../mealSouce";
import resolvePromise from "../resolvePromise";
import { promiseStateType } from "../types";
import { RootTabScreenProps } from "../types";
import promiseNoData from "../views/promiseNoData";
import ResultsView from "../views/resultsView";
import { StyleSheet } from "react-native";
import { Flex } from "@react-native-material/core";
import { getTopFavourites } from "../dbSource";
import { useDispatch } from "react-redux";
import { setSnackbar } from "../redux";
import useColorScheme from "../hooks/useColorScheme";

export default function SearchPresenter({
  navigation,
}: RootTabScreenProps<"Search">) {
  const dispatch = useDispatch<any>();

  const [categories, setCategoriesState] = useState([]);
  const [areas, setAreasState] = useState([]);
  const [ingredients, setIngredientsState] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );
  const [selectedAreas, setSelectedAreas] = useState<Array<string>>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<Array<string>>(
    []
  );
  const [query, setQueryState] = useState("");
  const [results, setResultsState] = useState([]);
  const [topFavs, setTopFavs] = React.useState<Array<any>>([]);
  const [topFavsLoading, setTopFavsLoading] = React.useState<boolean>();

  const [mealsPromiseState, setMealsPromiseState] = useState<promiseStateType>({
    promise: null,
    data: null,
    error: null,
  });
  const [promise, setPromise] = React.useState<any>();
  const [data, setData] = React.useState<any>();
  const [error, setError] = React.useState<any>();
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    getAllFilterData()
      .then((res) => {
        setCategoriesState(
          res[0].data.map((elem: { strCategory: string }) => ({
            label: elem.strCategory,
            value: elem.strCategory,
          }))
        );
        setAreasState(
          res[1].data.map((elem: { strArea: string }) => ({
            label: elem.strArea,
            value: elem.strArea,
          }))
        );
        setIngredientsState(
          res[2].data.map((elem: { strIngredient: string }) => ({
            label: elem.strIngredient,
            value: elem.strIngredient,
          }))
        );
      })
      .catch((error) =>
        dispatch(
          setSnackbar(
            "Could not fetch filter values from server: " + error.message
          )
        )
      );
    setTopFavsLoading(true);
    getTopFavourites()
      .then((res) => {
        setTopFavs(res.data);
        setTopFavsLoading(false);
      })
      .catch((error) =>
        dispatch(
          setSnackbar(
            "Could not fetch top favourites from server: " + error.message
          )
        )
      );
  }, []);

  function onSearchACB() {
    setResultsState([]);
    setPromise(null);
    setData(null);
    setError(null);
    resolvePromise(
      filterMeals(
        selectedCategories,
        selectedAreas,
        selectedIngredients,
        query
      ),
      mealsPromiseState,
      mealPromiseStateChanged
    );
  }
  function mealPromiseStateChanged(result: promiseStateType) {
    setMealsPromiseState(result);
    setPromise(result.promise);
    setData(result.data);
    setError(result.error);
    if (result.data && result.data.data) setResultsState(result.data.data);
  }

  const styles = (props: any) => StyleSheet.create({
    mainContainer: {
      //backgroundColor: "#FDFBF7",
      backgroundColor: props.colorScheme == "dark" ? "#18191A" : "#FDFBF7", //this is for the darkmode
      padding: 10,
      top: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
      paddingTop: "0px",
      alignContent: "center",
    },
  });
  return (
    <Flex style={styles.mainContainer}>
      <SearchView
        categories={categories}
        areas={areas}
        ingrToSelect={ingredients}
        query={query}
        onCategoriesSelected={setSelectedCategories}
        onAreasSelected={setSelectedAreas}
        onIngredientsSelected={setSelectedIngredients}
        onQueryChanged={setQueryState}
        onSearch={onSearchACB}
        colorScheme={colorScheme}
      ></SearchView>

      {promiseNoData(promise, data, error) ||
        (results && results.length > 0 ? (
          <ResultsView results={results} navigation={navigation} />
        ) : (
          <ResultsView
            header="No data was found :( But you can get inspired by the Top Favourites of other users:"
            loading={topFavsLoading}
            results={topFavs}
            navigation={navigation}
          />
        ))}
    </Flex>
  );
}
