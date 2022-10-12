import React, { useState } from "react";
import RegistrationView from "../views/registrationView";
import ErrorView from "../views/errorView";
import { signup } from "../loginSource";
import { useDispatch } from "react-redux";
import { setUser, setToken } from "../redux";
import { RootTabScreenProps } from "../types";

export default function RegistrationPresenter(
  props: any,
  { navigation }: RootTabScreenProps<"TabThree">
) {
  const [name, setNameState] = useState("");
  const [pw, setPwState] = useState("");
  const [pwConfirm, setPwConfirmState] = useState("");
  const dispatch = useDispatch();

  function onRegistrationACB() {
    console.log("inside onLoginACB");
    signup(name, pw)
      .then((res: any) => {
        console.log("succesfully signed in!");
        dispatch(setUser(name));
        dispatch(setToken(res.data));
        props.navigation.navigate("TabFour");
        // props.navigation.navigate("SearchPresenter");
      })
      .catch((error) => {
        //TODO display error in View
        console.log(error);
      });
    //props.navigation.navigate('SearchPresenter')
  }
  function onLoginACB() {
    navigation.navigate("TabTwo");
  }
  function onPWChangedACB(pw: string) {
    //TODO check if valid pw
    setPwState(pw);
  }
  function onPWConfirmChangedACB(pwConfirm: string) {
    //TODO check if pw matches pw
    setPwConfirmState(pwConfirm);
    if (pw !== pwConfirm) {
      //TODO if passwords do not match, abort and send error message
    }
  }
  function onReturnACB() {
    props.navigation.navigate('TabThree')
    props.error = null
  }
  return (
    <>
      <RegistrationView
        onRegistration={onRegistrationACB}
        onLogin={onLoginACB}
        onPWChanged={onPWChangedACB}
        onPWConfirmChanged={onPWConfirmChangedACB}
        onNameChanged={setNameState}
      ></RegistrationView>
      {props.error && <ErrorView
        error="Message"
        onReturn={onReturnACB}
      ></ErrorView>}
    </>
  );
}
