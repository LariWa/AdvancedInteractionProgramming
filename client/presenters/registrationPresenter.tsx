import React, { useState } from "react";
import RegistrationView from "../views/registrationView";
import ErrorView from "../views/errorView";
import { signup } from "../loginSource";
import { useDispatch } from "react-redux";
import { setUserData, setToken, setNewUserData } from "../redux";
import { RootTabScreenProps } from "../types";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

export default function RegistrationPresenter(
  props: any,
  { navigation }: RootTabScreenProps<"TabThree">
) {
  const [name, setNameState] = useState("");
  const [pw, setPwState] = useState("");
  const [pwConfirm, setPwConfirmState] = useState("");
  const dispatch = useDispatch<any>();
  const [loading, setLoadingState] = useState(false);
  const [error, setError] = useState("");

  function onRegistrationACB() {
    console.log("inside onLoginACB");
    setLoadingState(true);
    props.navigation.navigate("Favourites");

    signup(name, pw)
      .then((res: any) => {
        console.log("succesfully signed in!");
        dispatch(setNewUserData(name, res.data));
        // props.navigation.navigate("TabFour");
        setLoadingState(false);

        // props.navigation.navigate("SearchPresenter");
      })
      .catch((data) => {
        console.log(data);
        //TODO display error in View
        setError("need to be adapted on server");
        setLoadingState(false);
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
    props.navigation.navigate("TabThree");
    setError(null);
  }
  return (
    <>
      <RegistrationView
        onRegistration={onRegistrationACB}
        onLogin={onLoginACB}
        onPWChanged={onPWChangedACB}
        onPWConfirmChanged={onPWConfirmChangedACB}
        onNameChanged={setNameState}
        loading={loading}
      ></RegistrationView>
      {error && <ErrorView error={error} onReturn={onReturnACB}></ErrorView>}
    </>
  );
}
