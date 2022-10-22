import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import React from "react";

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace("Root")}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
