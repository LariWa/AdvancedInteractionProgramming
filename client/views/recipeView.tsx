import { Flex, Text, ListItem } from "@react-native-material/core";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Image, TextInput, View, ScrollView } from "react-native";
import FavouriteBtnPresenter from "../presenters/favouriteBtnPresenter";
import IngredientItem from "../components/ingredientItem";
import IngredientItemPresenter from "../presenters/ingredientItemPresenter";

const styles = (props: any) =>
  StyleSheet.create({
    image: {
      top: 0,
      left: 0,
      width: "100%",
      height: 210,
    },
    details: {
      width: "100%",
      backgroundColor: props.colorScheme == "dark" ? "#18191A" : "#FDFBF7",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      padding: 20,
    },
    header: {
      marginTop: 20,
      fontWeight: "700",
      fontSize: 32,
      color: props.colorScheme == "dark" ? "white" : "black",
    },
    subheader: {
      marginTop: 20,
      fontWeight: "700",
      fontSize: 16,
      color: props.colorScheme == "dark" ? "white" : "black",
    },
    text: {
      fontWeight: "400",
      fontSize: 14,
      color: props.colorScheme == "dark" ? "white" : "black",
    },
    imageIngr: {
      width: 20,
      height: 20,
    },
    details_header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      gap: "auto",
      color: props.colorScheme == "dark" ? "white" : "black",
    },
    /*listItem:{
    color: props.colorScheme == "dark" ? "#313237" : "#0548EE",
    backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
    borderRadius: 10,
  },*/
    listItem: {
      color: props.colorScheme == "dark" ? "black" : "white",
      backgroundColor: props.colorScheme == "dark" ? "black" : "white",
      borderRadius: 10,
    },
    listItemPressed: {
      color: props.colorScheme == "dark" ? "#0548EE" : "#9BB3EE",
      backgroundColor: props.colorScheme == "dark" ? "#040507" : "#083EC4",
      borderRadius: 10,
    },
    tags: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    tag: {
      width: "auto",
      backgroundColor: "#8D909B",
      borderRadius: 15,
      marginRight: 20,
      marginBottom: 5,
      marginTop: 5,
      padding: 5,
      fontSize: 12,
    },
    mainContainer: {
      height: "100%",
    },
  });

export default function RecipeView(props: any) {
  function renderArrayCB(ingredient: any) {
    return (
      <IngredientItemPresenter
        name={ingredient.name}
        quantity={ingredient.quantity}
        colorScheme={props.colorScheme}
        showQuantity={true}
        key={ingredient.name + ingredient.quantity}
      />
    );
  }
  function renderTagsArrayCB(tag: any) {
    return (
      <Text style={styles(props).tag} key={tag}>
        {tag}
      </Text>
    );
  }
  return (
    <View style={styles(props).mainContainer}>
      <ScrollView vertical={true}>
        <Flex fill direction="column">
          {props.recipe.strMealThumb && (
            <Image
              style={styles(props).image}
              source={{ uri: props.recipe.strMealThumb }}
            ></Image>
          )}
          {!props.recipe.strMealThumb && (
            <Image
              style={styles(props).image}
              source={require("../styles/notFoundImage.png")}
            ></Image>
          )}
          <Flex direction="column" style={styles(props).details}>
            <View style={styles(props).details_header}>
              <Text style={styles(props).header}>{props.recipe.strMeal}</Text>
              <FavouriteBtnPresenter
                colorScheme={props.colorScheme}
                id={props.recipe.idMeal}
              />
            </View>
            <Text style={styles(props).tags}>
              {props.recipe.strTags &&
                props.recipe.strTags.split(",").map(renderTagsArrayCB)}
              <Text style={styles(props).tag} key={props.recipe.strArea}>
                {props.recipe.strArea}
              </Text>
            </Text>
            <Text style={styles(props).subheader}>What do you need?</Text>
            <View style={styles(props).listItem}>
              <Flex direction="column">
                {props.recipe.ingredients &&
                  props.recipe.ingredients.map(renderArrayCB)}
              </Flex>
            </View>
            <Text style={styles(props).subheader}>How to make it?</Text>
            <Text style={styles(props).text}>
              {props.recipe.strInstructions}
            </Text>
          </Flex>
        </Flex>
      </ScrollView>
    </View>
  );
}
