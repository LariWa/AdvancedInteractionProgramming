import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  Flex,
  Button,
} from "@react-native-material/core";

const styles = StyleSheet.create({
  errorContainer: {
    position:"absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.01)",
    backdropFilter: "blur(10px)",
    paddingTop: 100,
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 200,
  },
  message:{
    width: "auto",
    height: "auto",
    backgroundColor: "white",
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
  },
  errorContainer_button: {
    backgroundColor: "#A7C6DA",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 300,
  },
});
export default function ErrorView(props: any) {
  const handleReturnACB = () => {
    props.onReturn();
  };
  return (
    <Flex fill style={styles.errorContainer}>
        <View style={styles.message}>
            <Text> {props.error}</Text>
            <Button
            onPress={handleReturnACB}
            title="Ge back"
            style={styles.errorContainer_button}
        />
        </View>
    </Flex>
  );
}