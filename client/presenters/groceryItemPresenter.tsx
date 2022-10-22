import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngr, deleteIngr } from "../redux/actions/ingredientsActions";
import { setSnackbar } from "../redux";
import GroceryListView from "../views/groceryListView";
import { RootTabScreenProps } from "../types";
import { getGroceries } from "../dbSource";
import { ListItem } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";

export default function GroceryItemPresenter(props: any) {
  const dispatch = useDispatch<any>();
  //   const addedToIngr = useSelector((state: any) =>
  //     state.ingredients.data.includes(props.ingredient.name)
  //   );
  //   const loading = useSelector((state: any) => state.ingredients.loading);

  function removeIngredientACB() {
    dispatch(deleteIngr(props.ingredient));
  }

  return (
    <ListItem
      onPress={removeIngredientACB}
      title={props.ingredient}
      trailing={(props) => (
        <AntDesign name="minuscircleo" size={24} color="black" />
      )}
    />
  );
}