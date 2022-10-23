import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { Flex } from "@react-native-material/core";

import IngredientItemPresenter from "../presenters/ingredientItemPresenter";
import NoResultsView from "./noResultsView";

const styles = (props: any) =>
  StyleSheet.create({
    mainContianer: {
      height: "100%",
    },
    listItem: {
      color: props.colorScheme == "dark" ? "#313237" : "##0548EE",
      backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
      padding: 10,
    },
    listItemPressed: {
      color: props.colorScheme == "dark" ? "#0548EE" : "#9BB3EE",
      backgroundColor: props.colorScheme == "dark" ? "#040507" : "#083EC4",
      padding: 10,
    },
    details: {
      width: "100%",

      color: props.colorScheme == "dark" ? "#313237" : "##0548EE",
      backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
      height: "100%",
      padding: 10,
    },
    text: {
      fontWeight: "400",
      fontSize: 14,
      backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
      color: props.colorScheme == "dark" ? "white" : "black",
      padding: 10,
    },
  });

export default function GroceryListView(props: any) {
  function renderListCB(ingredient: any) {
    return (
      <IngredientItemPresenter
        style={styles(props).text}
        name={ingredient}
        quantity={""}
        colorScheme={props.colorScheme}
        showQuantity={false}
        key={ingredient}
      />
    );
  }

  return props.ingredients.length > 0 ? (
    <ScrollView style={styles(props).mainContianer}>
      <Text style={styles(props).text}>What do you need to buy?</Text>
      <Flex direction="column" style={styles(props).details}>
        <Flex direction="column" style={styles(props).listItem}>
          <Flex direction="column" style={styles(props).listItem}>
            {props.ingredients && props.ingredients.map(renderListCB)}
          </Flex>
        </Flex>
      </Flex>
    </ScrollView>
  ) : (
    <NoResultsView
      colorScheme={props.colorScheme}
      text={"The list is empty. Add ingredients to buy!"}
    />
  );
}
