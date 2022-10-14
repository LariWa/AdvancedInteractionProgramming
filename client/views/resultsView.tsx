import React from "react";
import { StyleSheet, ScrollView, ActivityIndicator, Text } from "react-native";
import { Flex } from "@react-native-material/core";
import DishCard from "../components/dishCard";
import Search from "../components/search";
import Header from "../components/header";
import DishCardPresenter from "../presenters/dishCardPresenter";

const styles = StyleSheet.create({
  mainContainer: {
    position: "relative",
    backgroundColor: "#FDFBF7",
    padding: 10,
    // top: 0,
    width: "100%",
    // position: "absolute",
    paddingTop: 10,
    alignContent: "center",
  },
  mainContainer_button: {
    backgroundColor: "var(--dark-blue)",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 300,
  },
  mainContainer_filters: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 0,
    width: "100%",
    display: "flex",
    overflowX: "auto",
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: "#F3F2E9",
    borderRadius: 10,
    width: "100%",
    height: 45,
    paddingLeft: 10,
    fontStyle: "italic",
  },
});
export default function ResultsView(props: any) {
  return (
    <ScrollView style={styles.mainContainer}>
      <Flex fill>
        {props.header ? <Text>{props.header}</Text> : null}
        {props.loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : null}

        {props.results.map((r) => (
          <DishCardPresenter
            key={r.idMeal}
            data={r}
            navigation={props.navigation}
            onClicked={props.onSelectedRecipe}
          />
        ))}
      </Flex>
    </ScrollView>
  );
}
