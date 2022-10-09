import React, { useState } from "react";
import LoginView from "../views/loginView";
import { login } from "../loginSource";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setToken } from "../redux";
import { RootTabScreenProps } from "../types";

export default function LoginPresenter(props: any, {navigation}: RootTabScreenProps<'TabTwo'>) {
  const [name, setNameState] = useState("");
  const [pw, setPwState] = useState("");
  const dispatch = useDispatch();

  function onLoginACB() {
    
    login(name, pw)
      .then((res: any) => {
        console.log("succesfully logged in!");
        dispatch(setUser(name));
        dispatch(setToken(res.data.token));
        //navigation.navigate("TabFour");
        props.navigation.navigate('TabFour')
        // props.navigation.navigate("SearchPresenter");
      })
      .catch((error) => {
        //TODO display error in View
        console.log(error);
      });
  }

  function onRegistrationACB() {
    props.navigation.navigate('TabThree')
  }
  return (

    <LoginView
      onLogin={onLoginACB}
      onRegistration={onRegistrationACB}
      onPWChanged={setPwState}
      onNameChanged={setNameState}
    ></LoginView>
  );
}
