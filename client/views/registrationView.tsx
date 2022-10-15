import React from "react";
import { Image, TextInput, View } from "react-native";
import { Flex, Text, Button } from "@react-native-material/core";
import { styles_registrationPage } from "./styles";
import { Formik } from "formik";

export default function RegistrationView(props: any) {
  return (
    <Flex fill style={styles_registrationPage.mainContainer}>
      <Text style={styles_registrationPage.mainContainer_h5}>Sign up</Text>
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
              style={styles_registrationPage.mainContainer_textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email ? (
              <Text style={styles_registrationPage.error}>{errors.email}</Text>
            ) : null}
            <TextInput
              style={styles_registrationPage.mainContainer_textInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <Text style={styles_registrationPage.error}>
                {errors.password}
              </Text>
            ) : null}
            <TextInput
              style={styles_registrationPage.mainContainer_textInput}
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              value={values.confirmPassword}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <Text style={styles_registrationPage.error}>
                {errors.confirmPassword}
              </Text>
            ) : null}
            <Text
              style={styles_registrationPage.mainContainer_italics}
              onPress={props.onLogin}
            >
              Alredy have an account?
            </Text>
            <Button
              title="Get Started"
              style={styles_registrationPage.mainContainer_button}
              onPress={handleSubmit}
              loading={props.loading}
              disabled={props.loading}
            />
          </View>
        )}
      </Formik>

      <Image
        style={styles_registrationPage.maincontainer_image}
        source={require("../styles/registrationImage.png")}
      ></Image>
    </Flex>
  );
}
