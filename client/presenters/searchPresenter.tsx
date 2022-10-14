import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchView from "../views/searchView";
import {
  filterMeals,
  getAreas,
  getCategories,
  getIngredients,
} from "../mealSouce";
import { addFavourite } from "../dbSource";
import resolvePromise from "../resolvePromise";
import { promiseStateType } from "../types";
import { RootTabScreenProps } from "../types";
import promiseNoData from "../views/promiseNoData";
import ResultsView from "../views/resultsView";
import { StyleSheet, View } from "react-native";
import { Flex } from "@react-native-material/core";
//import { setCurrentRecipe } from "../redux";
import RecipePresenter from "./recipePresenter";
import { getTopFavourites } from "../dbSource";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

export default function SearchPresenter({
  navigation,
}: RootTabScreenProps<"Search">) {
  const dispatch = useDispatch();
  const [categories, setCategoriesState] = useState([]);
  const [areas, setAreasState] = useState([]);
  const [ingredientsToSelect, setIngrdsToSelectState] = useState([]);

  const [category, setCategoryState] = useState("");
  const [area, setAreaState] = useState("");
  const [ingredients, setIngredientsState] = useState<Array<string>>([]);
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

  React.useEffect(() => {
    // Runs after the first render() lifecycle
    setTopFavsLoading(true);
    getTopFavourites().then((res) => {
      setTopFavs(res.data);
      setTopFavsLoading(false);
    });

    getCategories()
      .then((res) =>
        setCategoriesState(
          res.data.map((elem: { strCategory: string }) => ({
            label: elem.strCategory,
            value: elem.strCategory,
          }))
        )
      )
      .catch((e) => {
        //TODO do something to fix
        console.log(e);
      });
    getIngredients()
      .then((res) =>
        setIngrdsToSelectState(
          res.data.map((elem: { strIngredient: string }) => ({
            label: elem.strIngredient,
            value: elem.strIngredient,
          }))
        )
      )
      .catch((e) => {
        //TODO do something to fix
        console.log(e);
      });
    getAreas()
      .then((res) =>
        setAreasState(
          res.data.map((elem: { strArea: string }) => ({
            label: elem.strArea,
            value: elem.strArea,
          }))
        )
      )
      .catch((e) => {
        //TODO do something to fix
        console.log(e);
      });
  }, []);

  function onSearchACB() {
    setResultsState([]);
    setPromise(null);
    setData(null);
    setError(null);
    resolvePromise(
      filterMeals(category, area, ingredients, query),
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

  function handleFavoritesACB(id: string) {
    // addFavourite(id.toString())
    //   .then((res: any) => {
    //     console.log("succesfully added in!");
    //   })
    //   .catch((data) => {
    //     console.log("errrrror");
    //     setError(data.response?.data?.error.toString());
    //   });
  }
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "#FDFBF7",
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
        ingrToSelect={ingredientsToSelect}
        category={category}
        area={area}
        ingredients={ingredients}
        query={query}
        onCategorySelected={setCategoryState}
        onAreaSelected={setAreaState}
        onIngredientsSelected={setIngredientsState}
        onQueryChanged={setQueryState}
        onSearch={onSearchACB}
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
      {/* <RecipePresenter /> */}
    </Flex>
  );
}
