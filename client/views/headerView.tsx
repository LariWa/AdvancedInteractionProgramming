import React, { useState } from "react";
import { StyleSheet, Image, TextInput, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Flex, Button, Box, Spacer, HStack } from "@react-native-material/core";
import DishCard from "../components/dishCard";
import { FontAwesome } from "@expo/vector-icons";

const styles = (props: any) => StyleSheet.create({
    header:{
        width: "100%",
        height: 50,
        backgroundColor: props.colorScheme == "dark" ? "#121212" : "#FDFBF7",
        padding: 10,
    },
    header__text:{
        color: props.colorScheme == "dark" ? "#FDFBF7" : "#121212",
    },
    header__login:{
        color: props.colorScheme == "dark" ? "#FDFBF7" : "#121212",
    },
    button: {
        width: 155,
        height: 60,
        marginRight: "auto",
        marginLeft: "auto",
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 300,
        boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
      },
});


export default function HeaderView(props: any){
    return(
        <HStack spacing={6} style={styles(props).header}>
            <Text style={styles(props).header__text}>
                Name
            </Text>
            <Spacer />
            {props.user && <Button
                title="Logout"
                color="#A7C6DA"
                onPress={props.logout}
                style={styles.button}
                loading={props.loading}
            />}
        </HStack>
    );
}