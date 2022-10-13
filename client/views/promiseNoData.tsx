import { promiseStateType } from "../types";
import { ActivityIndicator, Image, Text, View } from "react-native";
import React from "react";
export default function promiseNoData(promise: any, data: any, error: any) {
  if (!promise)
    //no promise
    //  return <Text> no data</Text>;
    return false; //display default data
  else {
    if (!(data || error)) {
      //promised, no data, no error
      //TODO add loading img
      console.log("loading");
      return <ActivityIndicator size="large" color="#00ff00" />;
    }
    if (!data && error)
      //promised, no data, with error
      return <Text>{error.toString()}</Text>;

    if (data && !error)
      //promised, defined data, no error
      return false;
  }
}
