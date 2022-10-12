import { Flex, Text, ListItem } from "@react-native-material/core";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Image, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: 200,
  },
  details: {
    width: "100%",
    backgroundColor: "#FDFBF7",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "100%",
    padding: 20,
  },
  header: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 32,
  },
  subheader: {
    marginTop: 20,
    fontWeight: "700",
    fontSize: 16,
  },
  text: {
    fontWeight: "400",
    fontSize: 14,
  },
});

export default function RecipeView(props: any) {
  return (
    <Flex fill direction="column">
      <Image
        style={styles.image}
        source={require("../styles/loginImage.png")}
      ></Image>
      <Flex direction="column" style={styles.details}>
        <Text style={styles.header}>Title</Text>
        <Text style={styles.subheader}>What do you need?</Text>
        <>
          <ListItem
            title="Ingr1"
            trailing={(props) => (
              <AntDesign name="pluscircleo" size={24} color="black" />
            )}
          />
          <ListItem
            title="Ingr2"
            trailing={(props) => (
              <AntDesign name="pluscircleo" size={24} color="black" />
            )}
          />
        </>
        <Text style={styles.subheader}>How to make it?</Text>
        <Text style={styles.text}>instructions</Text>
      </Flex>
    </Flex>
  );
}
