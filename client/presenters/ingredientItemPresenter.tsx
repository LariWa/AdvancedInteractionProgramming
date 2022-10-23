import { useSelector, useDispatch } from "react-redux";
import { setSnackbar } from "../redux";
import React from "react";
import { addIngr, deleteIngr } from "../redux/actions/ingredientsActions";
import IngredientItem from "../components/ingredientItem";

export default function IngredientItemPresenter(props: {
  name: string;
  quantity: string;
  colorScheme: any;
  showQuantity: boolean;
}) {
  const dispatch = useDispatch<any>();
  const addedToList = useSelector((state: any) =>
    state.ingredients.data.includes(props.name)
  );
  const user = useSelector((state: any) => state.user);
  function btnClickedACB() {
    if (!user)
      dispatch(
        setSnackbar("Please log in to add groceries to your shopping list!")
      );
    else {
      if (!addedToList) dispatch(addIngr(props.name));
      else dispatch(deleteIngr(props.name));
    }
  }
  return (
    <IngredientItem
      name={props.name}
      quantity={props.quantity}
      colorScheme={props.colorScheme}
      showQuantity={props.showQuantity}
      added={addedToList}
      onBtnClicked={btnClickedACB}
    />
  );
}
