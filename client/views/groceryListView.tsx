import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
// import { ListItem } from 'react-native-elements'
import { AntDesign } from "@expo/vector-icons";
import {
  Flex,
  Button,
  IconButton,
  ListItem,
} from "@react-native-material/core";
import DishCard from "../components/dishCard";
import { getIngredients } from "../mealSouce";
import GroceryItemPresenter from "../presenters/groceryItemPresenter";
import { ingredientsReducer } from "../redux/reducers/ingredientsReducer";


const styles = (props: any) => StyleSheet.create({
      mainContianer:{
        height: "100%"
      },
      listItem:{
        color: props.colorScheme == "dark" ? "#313237" : "##0548EE",
        backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
        padding: 10,
      },
      listItemPressed:{
        color: props.colorScheme == "dark" ? "#0548EE" : "#9BB3EE",
        backgroundColor: props.colorScheme == "dark" ? "#040507" : "#083EC4",
        padding: 10,
      },
      details: {
        width: "100%",
        //backgroundColor: "#FDFBF7",
        //background: props.colorScheme == "dark" ? "white" : "black",
        color: props.colorScheme == "dark" ? "#313237" : "##0548EE",
        backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
        height: "100%",
        padding: 10,
      },
      text: {
        marginTop: 20,
        fontWeight: "700",
        fontSize: 14,
        backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
        color: props.colorScheme == "dark" ? "white" : "black",
        padding: 10,
      },
});

export default function GroceryListView(props: any) {
    function renderListCB(ingredient: any) {
      return (
        <GroceryItemPresenter style={styles(props).text}
          ingredient={ingredient}
          key={ingredient}
          trailing={() => (
            <AntDesign name="minuscircleo" size={24} color="black" />
          )}
        />
      );
    }
  
    return props.ingredients.length > 0 ? (
      <ScrollView style={styles(props).mainContianer}>
        <Text style={styles(props).text}>What do you need to buy?</Text>
        <Flex direction="column" style={styles(props).listItem}>
          {props.ingredients && props.ingredients.map(renderListCB)}
        </Flex>
      </ScrollView>    
    ) : (
      <Text style={styles(props).text}> The list is empty. Add ingredients to buy!</Text>
    );
}