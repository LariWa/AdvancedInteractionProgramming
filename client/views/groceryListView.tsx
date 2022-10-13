import React, { useState } from "react";
import { StyleSheet, Image, TextInput, Text, View } from "react-native";
import { ListItem } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Flex, Button } from "@react-native-material/core";

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
    return(
        <Flex fill style={styles.mainContainer}>
            <Text>
                Your grocery list
            </Text>
        <div style={styles.mainContainer_filters}>
            <Text>
                    Here goes an ingredient
            </Text>
            <Button title="Search"  onPress={props.onRemove}/>
                <AntDesign name="minuscircle" size={24} color="black" />
        </div>
        </Flex>
    );
}