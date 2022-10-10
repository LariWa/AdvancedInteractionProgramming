import { Flex } from "@react-native-material/core";
import React from "react";

export default function RecipeView(props: any) {
  return <Flex>{props.meal.strMeal}</Flex>;
}
