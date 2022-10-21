import React from "react";
import { StyleSheet, ScrollView, ActivityIndicator, Text } from "react-native";
import { Flex } from "@react-native-material/core";
import DishCard from "../components/dishCard";
import Search from "../components/search";
import Header from "../components/header";
import DishCardPresenter from "../presenters/dishCardPresenter";

const styles = (props: any) => StyleSheet.create({
  mainContainer: {
    position: "relative",
    padding: 10,
    // top: 0,
    width: "100%",
    // position: "absolute",
    paddingTop: 10,
    alignContent: "center",
  },
  mainContainer_button: {
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 300,
  },
  mainContainer_filters: {
    borderRadius: 10,
    padding: 0,
    width: "100%",
    display: "flex",
    overflowX: "auto",
  },
  textInput: {
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    height: 45,
    paddingLeft: 10,
    fontStyle: "italic",
  },
  topRecipes: {
    backgroundColor: props.colorScheme == "dark" ? "black" : "#8D909B",
    borderRadius: 30,
    overflow: 'hidden',
    height: "auto",
    color: "white",
    padding: 20,
  },
});
export default function ResultsView(props: any) {
  return (
    <ScrollView style={styles(props).mainContainer}>
      <Flex fill>
        {props.header ? <Text style={styles(props).topRecipes}>{props.header}</Text> : null}
        {props.loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : null}

        {props.results.map((r: any) => (
          <DishCardPresenter
            key={r.idMeal}
            data={r}
            navigation={props.navigation}
            onClicked={props.onSelectedRecipe}
            colorScheme={props.colorScheme}
          />
        ))}
      </Flex>
    </ScrollView>
  );
}
