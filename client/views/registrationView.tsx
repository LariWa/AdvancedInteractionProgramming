import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
} from "@react-native-material/core";
import { styles } from "./styles";

export default function RegistrationView(props: any) {
  return (
    <Flex fill style={styles.mainContainer}>
      <Text style={styles.mainContainer_h5}>Sign up</Text>
      <TextInput
        placeholder="Name"
        style={styles.mainContainer_textInput}
        onChangeText={props.onNameChanged}
      />
      <TextInput
        placeholder="Password"
        style={styles.mainContainer_textInput}
        onChangeText={props.onPWChanged}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.mainContainer_textInput}
        onChangeText={props.onPWConfirmChanged}
      />
      <Text style={styles.mainContainer_italics} onPress={props.onLoginA}>
        Alredy have an account?
      </Text>
      <Button
        title="Get Started"
        style={styles.mainContainer_button}
        onPress={props.onRegistration}
      />
      <Image
        style={styles.maincontainer_image}
        source={require("../styles/registrationImage.png")}
      ></Image>
    </Flex>
  );
}
