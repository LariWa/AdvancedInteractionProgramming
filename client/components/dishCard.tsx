import React from "react";
import { StyleSheet, Image, TextInput, View } from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
  HStack,
} from "@react-native-material/core";
import { Dropdown } from "react-native-element-dropdown";

const styles = StyleSheet.create({
  dishcard: {
    marginTop: 30,
    position: "relative",
    alignContent: "center",
  },
  dishcard_img: {
    width: "50%",
    height: "120px",
    backgroundColor: "#faf089",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  dishcard_details: {
    width: "50%",
    height: "120px",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  dishcard_details_header: {
    fontWeight: "700",
  },
  dishcard_details_description: {
    fontSize: 9,
  },
});
export default function DishCard(props: any) {
  const onRegistrationACB = () => {
    props.onRegistration();
  };
  const onLoginACB = () => {
    props.onLogin();
  };
  return (
    <HStack spacing={0} style={styles.dishcard}>
      <View style={styles.dishcard_img} />
      <View style={styles.dishcard_details}>
        <Text style={styles.dishcard_details_header}>{props.data.strMeal}</Text>
        <Text style={styles.dishcard_details_description}>
          Quisque dictum sapien ut commodo maximus.
        </Text>
        <Button title="select" onPress={() => props.onClicked(props.data)} />
      </View>
    </HStack>
  );
}
