import { Text } from "react-native";
import React from "react";
import Loading from "../components/loading";
export default function promiseNoData(promise: any, data: any, error: any) {
  if (!promise)
    //no promise
    //  return <Text> no data</Text>;
    return false; //display default data
  else {
    if (!(data || error)) return <Loading />;

    if (!data && error)
      //promised, no data, with error
      return <Text>{error.toString()}</Text>;

    if (data && !error)
      //promised, defined data, no error
      return false;
  }
}
