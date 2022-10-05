import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getMealAction } from "../redux";
import SearchView from "../views/searchView";
import { filterMeals, getCategories } from "../mealSouce";
import resolvePromise from "../resolvePromise";
import { promiseStateType } from "../types";
export default function SearchPresenter(props: any) {
  const dispatch = useDispatch();
  const [categories, setCategoriesState] = useState("");

  const [category, setCategoryState] = useState("");
  const [area, setAreaState] = useState("");
  const [ingredients, setIngredientsState] = useState<Array<string>>([]);
  const [query, setQueryState] = useState("");
  const [mealsPromiseState, setMealsPromiseState] = useState<promiseStateType>({
    promise: null,
    data: null,
    error: null,
  });
  React.useEffect(() => {
    // Runs after the first render() lifecycle
    getCategories()
      .then((res) => setCategoriesState(res.data))
      .catch((e) => {
        //TODO do something to fix
        console.log(e);
      });
  }, []);

  function onSearchACB() {
    resolvePromise(
      filterMeals(category, area, ingredients, query),
      mealsPromiseState,
      setMealsPromiseState
    );
  }

  return (
    <SearchView
      categories={categories}
      category={category}
      area={area}
      ingredients={ingredients}
      query={query}
      onCategorySelected={setCategoryState}
      onAreaSelected={setAreaState}
      onInregedientsSelected={setIngredientsState}
      onQuerySelected={setQueryState}
      onSearch={onSearchACB}
    ></SearchView> ////chnage
  );
}
function componentDidMount() {
  throw new Error("Function not implemented.");
}
