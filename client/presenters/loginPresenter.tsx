import React, { useState } from "react";
import LoginView from "../views/loginView";
import { login } from "../loginSource";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux";
import ModalMessage from "../components/modalMessage";
import * as Yup from "yup";

export default function LoginPresenter(props: any) {
  const [name, setNameState] = useState("");
  const [pw, setPwState] = useState("");
  const dispatch = useDispatch<any>();
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
        dispatch(setUserData(loginData.email, res.data.token));
        setLoadingState(false);
        props.navigation.navigate("Search");
      })
      .catch((data) => {
        setError(data.response?.data?.error.toString());
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
    <>
      <LoginView
        onLogin={onLoginACB}
        onNewUser={onRegistrationACB}
        loading={loading}
        signupSchema={SignupSchema}
      ></LoginView>
      {error && (
        <ModalMessage modalVisible={visibility} message={error}></ModalMessage>
      )}
      {!error && status && (
        <ModalMessage
          modalVisible={visibility}
          message="You've logged in successfully!"
        ></ModalMessage>
      )}
    </>
  );
}
