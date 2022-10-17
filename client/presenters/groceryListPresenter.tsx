import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addIngr, deleteIngr } from "../redux/actions/ingredientsActions";
import { setSnackbar } from "../redux";
import GroceryListView from "../views/groceryListView";
import { RootTabScreenProps } from "../types";

export default function GroceryListPresenter(
  props: any,
  { navigation }: RootTabScreenProps<"Groceries">
) {
  const [ingredients, setIngredients] = React.useState<any>();
  const dispatch = useDispatch<any>();
  const addedToIngr = useSelector((state: any) =>
    state.list.data.includes(props.id)
  );
  const loading = useSelector((state: any) => state.user);
  const user = useSelector((state: any) => state.user);
  
  function removeIngredientACB() {
    if (!user)
      dispatch(setSnackbar("Please log in to add your ingredients to the grocery list!"));
    else {
      if (!addedToIngr) dispatch(addIngr(props.id));
      else dispatch(deleteIngr(props.id));
    }
  }

  return (
    <GroceryListView
        ingredients={props.list}
        onRemoveIngredient={removeIngredientACB}
        addedToIngr={addedToIngr}
    />
  );
}
