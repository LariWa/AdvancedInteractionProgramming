import React, { useState } from "react";
import LoginView from "../views/loginView";
import { login } from "../loginSource";
import { useDispatch } from "react-redux";
import { setUserData, setSnackbar } from "../redux";
import useColorScheme from "../hooks/useColorScheme";
import * as Yup from "yup";

export default function LoginPresenter(props: {
  navigation: { navigate: (arg0: string) => void };
}) {
  const dispatch = useDispatch<any>();
  const colorScheme = useColorScheme();
  const [loading, setLoadingState] = useState(false);

  function onLoginACB(loginData: { email: string; password: string }) {
    setLoadingState(true);
    login(loginData.email, loginData.password)
      .then((res: any) => {
        dispatch(setSnackbar("You logged in successfully"));
        dispatch(setUserData(loginData.email, res.data.token));
        setLoadingState(false);
        props.navigation.navigate("Search");
      })
      .catch((data) => {
        dispatch(setSnackbar(data.response.data?.error || data.message));
        setLoadingState(false);
      });
  }
  function onRegistrationACB() {
    props.navigation.navigate("Registration");
  }
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });
  return (
    <LoginView
      onLogin={onLoginACB}
      onNewUser={onRegistrationACB}
      loading={loading}
      signupSchema={SignupSchema}
      colorScheme={colorScheme}
    ></LoginView>
  );
}
