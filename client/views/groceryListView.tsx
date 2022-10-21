import React, { useState } from "react";
import { StyleSheet, Image, TextInput, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Flex, Button } from "@react-native-material/core";
import DishCard from "../components/dishCard";

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
      mainContainer__filters: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 0,
        width: "100%",
        display: "flex",
        overflowX: "auto",
      },
      mainContainer__textInput: {
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
    return(
        <Flex fill style={styles.mainContainer}>
            <Text>
                Your grocery list
            </Text>
        <div style={styles.mainContainer__filters}>
            {/*renderIngredients(ingredients, onRemove)*/}
            <Text>
                    Ingredient1 
            </Text>
            <AntDesign name="minuscircle" size={24} color="black" onPress={props.onRemove} />
        </div>
        <div style={styles.mainContainer__filters}>
            <Text>
                    Ingredient2 
            </Text>
            <AntDesign name="minuscircle" size={24} color="black" onPress={props.onRemove} />
        </div>
        <div style={styles.mainContainer__filters}>
            <Text>
                    Ingredient3
            </Text>
            <td></td>
            <AntDesign name="minuscircle" size={24} color="black" onPress={props.onRemove} />
        </div>
        </Flex>
    );
}