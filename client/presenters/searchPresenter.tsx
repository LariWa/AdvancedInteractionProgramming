import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchView from "../views/SearchView";
import {
  filterMeals,
  getAreas,
  getCategories,
  getIngredients,
} from "../mealSouce";
import resolvePromise from "../resolvePromise";
import { promiseStateType } from "../types";
import { RootTabScreenProps } from "../types";

export default function SearchPresenter({
  navigation,
}: RootTabScreenProps<"TabFour">) {
  const dispatch = useDispatch();
  const [categories, setCategoriesState] = useState([]);
  const [areas, setAreasState] = useState([]);
  const [ingredientsToSelect, setIngrdsToSelectState] = useState([]);

  const [category, setCategoryState] = useState("");
  const [area, setAreaState] = useState("");
  const [ingredients, setIngredientsState] = useState<Array<string>>([]);
  const [query, setQueryState] = useState("");
  const [results, setResultsState] = useState([]);

  const [mealsPromiseState, setMealsPromiseState] = useState<promiseStateType>({
    promise: null,
    data: null,
    error: null,
  });

  React.useEffect(() => {
    // Runs after the first render() lifecycle
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
    resolvePromise(
      filterMeals(category, area, ingredients, query),
      mealsPromiseState,
      mealPromiseStateChanged
    );
  }
  function mealPromiseStateChanged(result: promiseStateType) {
    setMealsPromiseState(result);
    if (result.data && result.data.data) setResultsState(result.data.data);
  }

  return (
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
      results={results}
    ></SearchView>
  );
}
