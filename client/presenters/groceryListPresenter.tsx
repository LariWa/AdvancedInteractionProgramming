import React from "react";
import { StyleSheet } from "react-native";
import GroceryListView from "../views/groceryListView";
import PromiseNoData from "../views/promiseNoData";
import { RootTabScreenProps } from "../types";

export default function GroceryListPresenter(
  props: any,
  { navigation }: RootTabScreenProps<"Groceries">
) {
  //const [ingredients, setIngredients] = React.useState(props.meal.ingredients); //React.useState<any>();
  const [ingredients, setIngredients] = React.useState<any>();

  function observerACB() {
    setIngredients(props.meal.ingredients);
  }

  function observerItWasCreatedACB() {
    observerACB(); //create Object and set props
    props.meal.addObserver(observerACB); //add the observer to the model

    return function isPutDownACB() {
      //function to be called when removing the observer
      props.meal.removeObserver(observerACB);
    };
  }

  /*function removeIngredientACB(ingredient){
        props.meal.removeFromList(ingredient);
    }*/

  return <GroceryListView></GroceryListView>; //ingredients={props.meal.ingredients}
  /*onRemove={removeIngredientACB}*/
}
