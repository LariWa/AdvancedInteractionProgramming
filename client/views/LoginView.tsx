import React from "react";
import { StyleSheet, Image, TextInput } from "react-native";
import {
  Stack,
  IconButton,
  Flex,
  Text,
  Button,
} from "@react-native-material/core";
import { styles_loginPage } from "./styles";


export default function LoginView(props: any) {
  const handleLoginACB = () => {
    console.log("loginView");
    props.onLogin();
  };
  const handleRegistrationACB = () => {
    props.onRegistration();
  };
  return (
    <>
        <Flex fill style={styles_loginPage.mainContainer}>
        <Text style={styles_loginPage.mainContainer_h5}>Sign in</Text>
        <TextInput
            onChangeText={props.onNameChanged}
            placeholder="Name"
            style={styles_loginPage.mainContainer_textInput}
        />
        <TextInput
            placeholder="Password"
            style={styles_loginPage.mainContainer_textInput}
            onChangeText={props.onPWChanged}
        />
        <Text
            style={styles_loginPage.mainContainer_italics}
            onPress={handleRegistrationACB}
        >
            New user
        </Text>
        <Button
            onPress={handleLoginACB}
            title="Get Started"
            style={styles_loginPage.mainContainer_button}
        />
        <Image
            style={styles_loginPage.maincontainer_image}
            source={require("../styles/loginImage.png")}
        ></Image>
        </Flex>
    </>
  );
}