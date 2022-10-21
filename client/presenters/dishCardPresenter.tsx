import React from "react";
import DishCard from "../components/dishCard";

export default function DishCardPresenter(props: any) {
  function setCurrentRecipeACB() {
    props.navigation.navigate("Recipe", { recipe: props.data });
  }

  return <DishCard
          data={props.data}
          onSelectedRecipe={setCurrentRecipeACB}
          colorScheme={props.colorScheme}
        />;
}