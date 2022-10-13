import React, { useState } from "react";
import LoginView from "../views/loginView";
import ErrorView from "../views/errorView";
import { login } from "../loginSource";
import { useSelector, useDispatch } from "react-redux";
import { setUserData, setToken } from "../redux";
import { RootTabScreenProps } from "../types";

export default function LoginPresenter(
  props: any,
  { navigation }: RootTabScreenProps<"TabTwo">
) {
  const [name, setNameState] = useState("");
  const [pw, setPwState] = useState("");
  const dispatch = useDispatch<any>();
  const [loading, setLoadingState] = useState(false);
  const [error, setError] = useState();

  function onLoginACB() {
    props.navigation.navigate("Favourites");

    setLoadingState(true);
    login(name, pw)
      .then((res: any) => {
        console.log("succesfully logged in!");
        dispatch(setUserData(name, res.data.token));
        setLoadingState(false);

        // dispatch(setToken(res.data.token));
        //navigation.navigate("TabFour");
        props.navigation.navigate("TabFour");
        // props.navigation.navigate("SearchPresenter");
      })
      .catch((data) => {
        setError(data.response?.data?.error.toString());
        setLoadingState(false);
      });
  }

  function onRegistrationACB() {
    props.navigation.navigate("TabThree");
  }
  function onReturnACB() {
    props.navigation.navigate("TabThree");
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
      {error && <ErrorView error={error} onReturn={onReturnACB}></ErrorView>}
    </>
  );
}
