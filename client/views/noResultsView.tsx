import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "../components/Themed";

export default function NoResultsView(props: {
  text: string;
  colorScheme: any;
}) {
  return (
    <View style={styles(props).modalView}>
      <Text style={styles(props).messageText}>{props.text}</Text>
      <Image
        style={styles(props).image}
        source={require("../styles/notfound.png")}
      ></Image>
    </View>
  );
}
const styles = (props: any) =>
  StyleSheet.create({
    image: {
      width: 200,
      height: 150,
      left: 0,
      top: "20%",
    },

    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    modalView: {
      margin: 20,
      marginTop: 100,
      backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    messageText: {
      fontWeight: "bold",
      color: props.colorScheme == "dark" ? "white" : "black",
    },
  });
