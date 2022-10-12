import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
} from "@react-native-material/core";
import { styles_registrationPage } from "./styles";


export default function RegistrationView(props: any) {
  const handleLoginACB = () => {
    props.onLogin();
  };
  return (
    <Flex fill style={styles_registrationPage.mainContainer}>
      <Text style={styles_registrationPage.mainContainer_h5}>Sign up</Text>
      <TextInput
        placeholder="Name"
        style={styles_registrationPage.mainContainer_textInput}
        onChangeText={props.onNameChanged}
      />
      <TextInput
        placeholder="Password"
        style={styles_registrationPage.mainContainer_textInput}
        onChangeText={props.onPWChanged}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles_registrationPage.mainContainer_textInput}
        onChangeText={props.onPWConfirmChanged}
      />
      <Text style={styles_registrationPage.mainContainer_italics} 
        onPress={props.onLogin}>
        Alredy have an account?
      </Text>
      <Button
        title="Get Started"
        style={styles_registrationPage.mainContainer_button}
        onPress={props.onRegistration}
      />
      <Image
        style={styles_registrationPage.maincontainer_image}
        source={require("../styles/registrationImage.png")}
      ></Image>
    </Flex>
  ); 
}


