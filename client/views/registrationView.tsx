import React from "react";
import { Image, TextInput, View, StyleSheet } from "react-native";
import { Flex, Text, Button } from "@react-native-material/core";
import { styles_registrationPage } from "./styles";
import { Field, Formik } from "formik";

export default function RegistrationView(props: any) {
  return (
    <Flex  fill style={styles(props).mainContainer} direction="column">
      <View>
          <Text style={styles(props).mainContainer__h5}>Sign up</Text>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={props.onRegister}
          validationSchema={props.signupSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                style={styles(props).mainContainer__textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <Text style={styles(props).mainContainer__error}>{errors.email}</Text>
              ) : null}
              <TextInput
                style={styles(props).mainContainer__textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              {errors.password && touched.password ? (
                <Text style={styles(props).mainContainer__error}>
                  {errors.password}
                </Text>
              ) : null}

              <TextInput
                style={styles(props).mainContainer__textInput}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                placeholder="Confirm your password"
                secureTextEntry={true}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <Text style={styles(props).mainContainer__error}>
                  {errors.confirmPassword}
                </Text>
              ) : null}
              <Text
                style={styles(props).mainContainer__italics}
                onPress={props.onLogin}
              >
                Alredy have an account?
              </Text>
              <Button
                title="Get Started"
                color="#A7C6DA"
                style={styles(props).mainContainer__button}
                onPress={handleSubmit}
                loading={props.loading}
                disabled={props.loading}
              />
            </View>
          )}
        </Formik>
      </View>
      <Image
        style={styles(props).maincontainer__image}
        source={require("../styles/registrationImage.png")}
      ></Image>
    </Flex>
  );
}

const styles = (props: any) => StyleSheet.create({
  mainContainer: {
    backgroundColor: props.colorScheme == "dark" ? "#18191A" : "#FDFBF7",
    padding: 10,
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    alignContent: "center",
  },
  mainContainer__textInput: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    border: "1px solid #314959",
    borderRadius: 10,
    width: 264,
    height: 45,
    paddingLeft: 10,
    color: "#A7C6DA",
  },
  mainContainer__h5: {
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 32,
    marginBottom: 20,
    color: "#A7C6DA",
  },
  mainContainer__italics: {
    fontStyle: "italic",
    fontSize: 16,
    marginRight: "auto",
    marginLeft: "auto",
    textDecorationLine: "underline",
    marginBottom: 30,
    overflow: "hidden",
    color: "#A7C6DA",
  },
  mainContainer__button: {
    // backgroundColor: "#314959",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 300,
    boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
    color: "#A7C6DA",
  },
  maincontainer__image: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: "50%",
    width: "50%",
  },
  mainContainer__error: {
    marginRight: "auto",
    marginLeft: "auto",
    color: "red",
    width: 264,
    height: 45,
    paddingLeft: 10,
  },
});

