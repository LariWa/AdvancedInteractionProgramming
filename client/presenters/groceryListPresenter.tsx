import React from "react";
import {StyleSheet} from "react-native";
import GroceryListView from "../views/groceryListView";
import PromiseNoData from "../views/promiseNoData";
import { RootTabScreenProps } from "../types";


export default function GroceryListPresenter(props: any, {navigation}: RootTabScreenProps<'TabSeven'>){

    const [ingredients, setIngredients] = React.useState(props.meal.ingredients); //React.useState<any>();

    function getIngredients(ingredients){
        return props.meal.ingredients;
    }

    function removeIngredientACB(ingredient){
        props.meal.removeFromList(ingredient);
    }

    return <GroceryListView ingredients={props.meal.ingredients} 
            onRemove={removeIngredientACB}    />; //meal={currentFavouritesList}
}