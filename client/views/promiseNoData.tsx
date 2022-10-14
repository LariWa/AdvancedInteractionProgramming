import { promiseStateType } from "../types";
import { Image, Text, StyleSheet, View } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  image:{
    width: "100%",
    height: 200,
    left: 0,
    top: "20%",
  },
  message:{
    width: 100,
    height: 50,
    left: 0,
    top: "20%",

  }
})

export default function promiseNoData(promise: any, data: any, error: any) {
  if (!promise)
    //no promise
    return <Text> no data</Text>;
  else {
    if (!(data || error))
      //promised, no data, no error
      //TODO add loading img
      return <Image 
        style={styles.image}
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
