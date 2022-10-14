import React, { useState } from "react";
import { StyleSheet, Image, TextInput, Text, View } from "react-native";
import { ListItem } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';
import { Flex } from "@react-native-material/core";

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
      }
    }
);

export default function FavouritesView(props: any){
    return(
        <Flex>
            <Text>
                This is the favourites view
            </Text>
        </Flex>
    );
}