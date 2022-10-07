import React, { useState } from "react";
import RegistrationView from "../views/registrationView";
import { signup } from "../loginSource";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../redux";
import { RootTabScreenProps } from "../types";

export default function RegistrationPresenter({
  navigation,
}: RootTabScreenProps<"TabTwo">) {
  const [name, setNameState] = useState("");
  const [pw, setPwState] = useState("");
  const [pwConfirm, setPwConfirmState] = useState("");
  const dispatch = useDispatch();

  function onRegistrationACB() {
    signup(name, pw)
      .then((res: any) => {
        console.log("succesfully signed in!");
        dispatch(setUser(name));
        dispatch(setToken(res.data));
        navigation.navigate("TabFour");
        // props.navigation.navigate("SearchPresenter");
      })
      .catch((error) => {
        //TODO display error in View
        console.log(error);
      });
    //props.navigation.navigate('SearchPresenter')
  }
  function onLoginACB() {
    props.navigation.navigate("LoginPresenter");
  }
  function onPWChangedACB(pw: string) {
    //TODO check if valid pw
    setPwState(pw);
  }
  function onPWConfirmChangedACB(pw: string) {
    //TODO check if pw matches pw
    setPwConfirmState(pw);
  }

  return (
    <RegistrationView
      onRegistration={onRegistrationACB}
      onLogin={onLoginACB}
      onPWChanged={onPWChangedACB}
      onPWConfirmChanged={onPWConfirmChangedACB}
      onNameChanged={setNameState}
    ></RegistrationView>
  );
}
