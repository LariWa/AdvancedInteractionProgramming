import React, { useState } from "react";
import RegistrationView from "../views/registrationView";
import { signup } from "../loginSource";
import { useDispatch } from "react-redux";
import { setNewUserData, setSnackbar } from "../redux";
import * as Yup from "yup";
import useColorScheme from "../hooks/useColorScheme";

export default function RegistrationPresenter(props: any) {
  const dispatch = useDispatch<any>();
  const [loading, setLoadingState] = useState(false);
  const colorScheme = useColorScheme();

  function onRegistrationACB(registerData: {
    email: string;
    password: string;
  }) {
    setLoadingState(true);
    signup(registerData.email, registerData.password)
      .then((res: any) => {
        dispatch(setNewUserData(registerData.email, res.data));
        dispatch(setSnackbar("You registered successfully"));
        props.navigation.navigate("Search");
      })
      .catch((data) => {
        dispatch(setSnackbar(data.response.data?.message || data.message));
      });
  }
  function onLoginACB() {
    props.navigation.navigate("Login");
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
    </>
  );
}
