import React from "react";
import { Image, StyleSheet } from "react-native";
import { IconButton, ListItem } from "@react-native-material/core";
import { MaterialIcons } from "@expo/vector-icons";
export default function IngredientItem(props: {
  name: string;
  quantity: string;
  colorScheme: any;
  showQuantity: boolean;
  added: boolean;
  onBtnClicked: any;
}) {
  let Image_Http_URL = {
    uri:
      "https://www.themealdb.com/images/ingredients/" +
      props.name +
      "-Small.png",
  };

  return (
    <ListItem
      onPress={props.onBtnClicked}
      style={styles(props).listItemPressed}
      leading={
        <Image source={Image_Http_URL} style={styles(props).imageIngr} />
      }
      title={props.name + ": " + (props.showQuantity ? props.quantity : "")}
      key={props.name}
      trailing={() => (
        <IconButton
          onPress={props.onBtnClicked}
          icon={() => (
            <MaterialIcons
              name={props.added ? "remove-shopping-cart" : "add-shopping-cart"}
              size={24}
              color={props.added ? "red" : "green"}
            />
          )}
        />
      )}
    />
  );
}
const styles = (props: any) =>
  StyleSheet.create({
    listItem: {
      color: props.colorScheme == "dark" ? "#313237" : "##0548EE",
      backgroundColor: props.colorScheme == "dark" ? "#313237" : "FDFBF7",
      borderRadius: 10,
    },
    listItemPressed: {
      color: props.colorScheme == "dark" ? "#0548EE" : "#9BB3EE",
      backgroundColor: props.colorScheme == "dark" ? "#040507" : "#083EC4",
      borderRadius: 10,
    },
    imageIngr: {
      width: 20,
      height: 20,
    },
  });
