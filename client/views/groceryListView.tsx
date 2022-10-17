import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, ActivityIndicator } from "react-native";
import { ListItem } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Flex, Button, IconButton } from "@react-native-material/core";
import DishCard from "../components/dishCard";
import { getIngredients } from "../mealSouce";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#FDFBF7",
        padding: 10,
        top: 0,
        width: "100%",
        // height: "100%",
        // position: "absolute",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingTop: "30px",
        alignContent: "center",
      },
      mainContainer_button: {
        backgroundColor: "var(--dark-blue)",
        width: 155,
        height: 60,
        marginRight: "auto",
        marginLeft: "auto",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: 300,
        boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
      },
      details: {
        width: "100%",
        backgroundColor: "#FDFBF7",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: "100%",
        padding: 20,
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
        marginBottom: "10px",
        backgroundColor: "#F3F2E9",
        borderRadius: 10,
        width: "100%",
        height: 45,
        paddingLeft: 10,
        fontStyle: "italic",
      },
});


export default function GroceryListView(props: any){

    return props.loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
    ) : (
        <IconButton
          onPress={props.onRemoveIngredient}
          icon={() => (
            <AntDesign name="pluscircleo" size={24} color="black"/>
          )}
        />
    );

    /*function onRemoveIngredient(){
        props.onRemove();
    }
    function renderListCB(ingredient: any){
        return(
            <ListItem
                title={ingredient.name}

            />
        );
    }

    return(
        <ScrollView>
            <Flex fill direction="column">
            <Flex direction="column" style={styles.details}>
            <Text>Your grocery list</Text>
                <Flex direction="column">
                    {props.groceryList &&
                    props.groceryList.map(renderListCB)}
                </Flex>
            </Flex> 
            </Flex>
        </ScrollView>
    );*/
}