import React from "react";
import DishCard from "../components/dishCard";

export default function DishCardPresenter(props: {
  navigation: { navigate: (arg0: string, arg1: { recipe: any }) => void };
  data: any;
  colorScheme: any;
}) {
  function setCurrentRecipeACB() {
    props.navigation.navigate("Recipe", { recipe: props.data });
  }
  return (
    <DishCard
      data={props.data}
      onSelectedRecipe={setCurrentRecipeACB}
      colorScheme={props.colorScheme}
    />
  );
}
