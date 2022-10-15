import React from "react";
import { Image, TextInput, View } from "react-native";
import { Flex, Text, Button } from "@react-native-material/core";
import { styles_loginPage } from "./styles";
import { Formik } from "formik";
export default function LoginView(props: any) {
  return (
    <>
      <Flex fill style={styles_loginPage.mainContainer}>
        <Text style={styles_loginPage.mainContainer_h5}>Sign in</Text>
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
                style={styles_loginPage.mainContainer_textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <Text style={styles_loginPage.error}>{errors.email}</Text>
              ) : null}
              <TextInput
                style={styles_loginPage.mainContainer_textInput}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
                secureTextEntry={true}
              />
              {errors.password && touched.password ? (
                <Text style={styles_loginPage.error}>{errors.password}</Text>
              ) : null}
              <Text
                style={styles_loginPage.mainContainer_italics}
                onPress={props.onNewUser}
              >
                New user
              </Text>
              <Button
                onPress={handleSubmit}
                title="Submit"
                style={styles_loginPage.mainContainer_button}
                loading={props.loading}
              />
            </View>
          )}
        </Formik>
        <Image
          style={styles_loginPage.maincontainer_image}
          source={require("../styles/loginImage.png")}
        ></Image>
      </Flex>
    </>
  );
}
