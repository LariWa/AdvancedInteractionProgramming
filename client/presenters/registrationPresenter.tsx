import React, { useState } from "react";
import RegistrationView from "../views/registrationView";
// import ErrorMessage from "../components/errorMessage";
import SuccessMessage from "../components/modalMessage";
import { signup } from "../loginSource";
import { useDispatch } from "react-redux";
import { setNewUserData } from "../redux";
import { Button, Snackbar } from 'react-native-paper';
import * as Yup from "yup";
import useColorScheme from "../hooks/useColorScheme";

export default function RegistrationPresenter(props: any) {
  const dispatch = useDispatch<any>();
  const [loading, setLoadingState] = useState(false);
  const [status, setStatusState] = useState(false);
  const [error, setError] = useState("");
  const [visibility, setModalVisible] = useState(false);
  const colorScheme = useColorScheme();

  function onRegistrationACB(registerData: {
    email: string;
    password: string;
  }) {
    setLoadingState(true);
    signup(registerData.email, registerData.password)
      .then((res: any) => {
        setStatusState(true);
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 3000);
        dispatch(setNewUserData(registerData.email, res.data));
        setLoadingState(false);
        props.navigation.navigate("Search");
      })
      .catch((data) => {
        setError(data.response.data?.message || data.message);
        setLoadingState(false);
      });
  }
  function onLoginACB() {
    props.navigation.navigate("Login");
  }
  function onReturnACB() {
    props.navigation.navigate("Register");
    setError(null);
  }
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  return (
    <>
      <RegistrationView
        onRegister={onRegistrationACB}
        onLogin={onLoginACB}
        loading={loading}
        signupSchema={SignupSchema}
        colorScheme={colorScheme}
      ></RegistrationView>
      {error && (
         <Snackbar
         duration={200}>
         Hey there! I'm a Snackbar.
        </Snackbar>
      )}
      {!error && status && (
        <SuccessMessage
          modalVisible={visibility}
          success="You've registered successfully!"
        ></SuccessMessage>
      )}
    </>
  );
}
