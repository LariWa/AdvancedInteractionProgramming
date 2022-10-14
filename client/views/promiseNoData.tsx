import { promiseStateType } from "../types";
import { Image, Text, StyleSheet, View } from "react-native";
import React from "react";
import ModalMessage from "../components/modalMessage"

const styles = StyleSheet.create({
  gif:{
    width: "100%",
    height: 200,
    left: 0,
    top: "20%",
  },
  image:{
    width: 200,
    height: 150,
    left: 0,
    top: "20%",
  },
  message:{
    width: 100,
    height: 50,
    left: 0,
    top: "20%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
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
      height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5
  },
  messageText:{
    fontWeight: 'bold',
  }
})

export default function promiseNoData(promise: any, data: any, error: any) {
  if (!promise)
    //no promise
    return <View style={styles.modalView}>
      <Text style={styles.messageText}>Nothing was found</Text>
      <Image 
        style={styles.image}
        source={require("../styles/notfound.png")}> 
      </Image> 
      </View>;
  else {
    if (!(data || error))
      //promised, no data, no error
      //TODO add loading img
      return <Image 
        style={styles.gif}
        source={{uri:"https://i.pinimg.com/originals/8a/69/8f/8a698f09c9c4982662767b1dc116e385.gif"}}> 
      </Image>;

    if (!data && error)
      //promised, no data, with error
      return <View
        style={styles.message}>
        <Text>{error.toString()}</Text>
      </View>

    if (data && !error)
      //promised, defined data, no error
      return false;
  }
}
