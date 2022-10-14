import React, { useState } from "react";
import LoginView from "../views/loginView";
import ErrorMessage from "../components/errorMessage";
import SuccessMessage from "../components/modalMessage";
import { login } from "../loginSource";
import { useSelector, useDispatch } from "react-redux";
// import { setUserData, setToken } from "../redux";
import { RootTabScreenProps } from "../types";
import { setUserData } from "../redux";
import ModalMessage from "../components/modalMessage";

export default function LoginPresenter(props: any) {
  const [name, setNameState] = useState("");
  const [pw, setPwState] = useState("");
  const dispatch = useDispatch<any>();
  const [loading, setLoadingState] = useState(false);
  const [error, setError] = useState();
  const [status, setStatusState] = useState(false);
  const [visibility, setModalVisible] = useState(false);

  function onLoginACB() {
    // navigation.navigate("Registration");

    setLoadingState(true);
    login(name, pw)
      .then((res: any) => {
        setStatusState(true);
        setModalVisible(true);
        setTimeout(() => setModalVisible(false), 3000);
        console.log("succesfully logged in!");
        dispatch(setUserData(name, res.data.token));
        setLoadingState(false);

        // dispatch(setToken(res.data.token));
        //navigation.navigate("TabFour");
        props.navigation.navigate("Search");
        // props.navigation.navigate("SearchPresenter");
      })
      .catch((data) => {
        setError(data.response?.data?.error.toString());
        setLoadingState(false);
      });
  }

  function onRegistrationACB() {
    props.navigation.navigate("Registration");
  }
  function onReturnACB() {
    // props.navigation.navigate("TabThree");
    setError(null);
  }
  return (
    <>
      <LoginView
        onLogin={onLoginACB}
        onRegistration={onRegistrationACB}
        onPWChanged={setPwState}
        onNameChanged={setNameState}
        loading={loading}
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
