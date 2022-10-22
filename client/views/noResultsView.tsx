import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "../components/Themed";

export default function NoResultsView() {
  return (
    <View style={styles.modalView}>
      <Text style={styles.messageText}>Nothing was found</Text>
      <Image
        style={styles.image}
        source={require("../styles/notfound.png")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
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
    backgroundColor: "white",
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
    color: "black",
  },
});
