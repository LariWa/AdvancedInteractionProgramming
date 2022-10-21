import React from "react";
import { Image, TextInput, View, StyleSheet } from "react-native";
import { Flex, Text, Button } from "@react-native-material/core";
import { styles_loginPage } from "./styles";
import { Formik } from "formik";
export default function LoginView(props: any) {
  return (
    <>
      <Flex fill style={styles(props).mainContainer}>
        <Text style={styles(props).mainContainer_h5}>Sign in</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={props.onLogin}
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
                style={styles(props).mainContainer_textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <Text style={styles(props).error}>{errors.email}</Text>
              ) : null}
              <TextInput
                style={styles(props).mainContainer_textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              {errors.password && touched.password ? (
                <Text style={styles(props).error}>{errors.password}</Text>
              ) : null}
              <Text
                style={styles(props).mainContainer_italics}
                onPress={props.onNewUser}
              >
                New user?
              </Text>
              <Button
                title="Get Started"
                color="#A7C6DA"
                onPress={handleSubmit}
                style={styles(props).mainContainer_button}
                loading={props.loading}
              />
            </View>
          )}
        </Formik>
        <Image
          style={styles(props).maincontainer_image}
          source={require("../styles/loginImage.png")}
        ></Image>
      </Flex>
    </>
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
    paddingTop: 0,
    alignContent: "center",
  },
  mainContainer_textInput: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 10,
    // border: "1px solid #A7C6DA",
    borderColor: "#A7C6DA",
    borderWidth: 2,
    color: "#A7C6DA",
    borderRadius: 10,
    width: 264,
    height: 45,
    paddingLeft: 10,
  },
  mainContainer_h5: {
    fontWeight: "bold",
    marginRight: "auto",
    marginLeft: "auto",
    fontSize: 32,
    marginBottom: 20,
    color: "#A7C6DA",
  },
  mainContainer_italics: {
    fontStyle: "italic",
    fontSize: 16,
    marginRight: "auto",
    marginLeft: "auto",
    color: "#A7C6DA",
    textDecorationLine: "underline",
    marginBottom: 30,
    overflow: "hidden",
  },
  mainContainer_button: {
    // backgroundColor: "#A7C6DA",
    width: 155,
    height: 60,
    marginRight: "auto",
    marginLeft: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 300,
    boxShadow: "0px 0px 100px rgba(162, 170, 106, 0.2)",
  },
  maincontainer_image: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "50%",
    width: "40%",
  },
  error: {
    marginRight: "auto",
    marginLeft: "auto",
    color: "red",
    width: 264,
    height: 45,
    paddingLeft: 10,
  },
});
