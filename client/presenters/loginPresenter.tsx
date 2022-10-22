import React, { useState } from "react";
import LoginView from "../views/loginView";
import { login } from "../loginSource";
import { useDispatch } from "react-redux";
import { setUserData,setSnackbar } from "../redux";
import ModalMessage from "../components/modalMessage";
import { Button, Snackbar } from 'react-native-paper';
import useColorScheme from "../hooks/useColorScheme"; 
import * as Yup from "yup";

export default function LoginPresenter(props: any) {
  const dispatch = useDispatch<any>();
  const colorScheme = useColorScheme(); //getting color schema for the login page
  const [loading, setLoadingState] = useState(false);
  const [error, setError] = useState();
  const [status, setStatusState] = useState(false);
  const [visibility, setModalVisible] = useState(false);

  function onLoginACB(loginData: { email: string; password: string }) {
    setLoadingState(true);
    login(loginData.email, loginData.password)
      .then((res: any) => {
        setStatusState(true);
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 3000);
        dispatch(setSnackbar("You logged in successfully"))
        dispatch(setUserData(loginData.email, res.data.token));
        setLoadingState(false);
        props.navigation.navigate("Search");
      })
      .catch((data) => {
        // setError(data.response.data?.error || data.message);
        dispatch(setSnackbar(data.response.data?.error || data.message))
        setLoadingState(false);
      });
  }
  function onReturnACB() {
    props.navigation.navigate("Login");
    setError(null);
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
    <>
      <LoginView
        onLogin={onLoginACB}
        onNewUser={onRegistrationACB}
        loading={loading}
        signupSchema={SignupSchema}
        colorScheme={colorScheme}
      ></LoginView>

      {!error && status && (
        <ModalMessage
          modalVisible={visibility}
          message="You've logged in successfully!"
        ></ModalMessage>
      )}
    </>
  );
}
