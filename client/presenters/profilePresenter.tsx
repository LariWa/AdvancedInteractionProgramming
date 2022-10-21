import React, {useState} from "react";
import { useSelector } from "react-redux";
import ProfileView from "../views/profileView";
import {emailToName} from "email-to-name"
import { useDispatch } from "react-redux";
import { setUserData,setSnackbar } from "../redux";
import useColorScheme from "../hooks/useColorScheme";
import { processColor } from "react-native";

export default function ProfilePresenter() {
  const user = useSelector((state: any) => state.user);
  const colorScheme = useColorScheme();
  const [loading, setLoadingState] = useState(false);
  const dispatch = useDispatch<any>();

  function handleLogoutACB(){
    setLoadingState(true);
    dispatch(setUserData(null, null));
    dispatch(setUserData(null, null));
    setLoadingState(false);
  }

  return <ProfileView 
  name={emailToName.process(user)} 
  loading={loading}
  colorScheme={colorScheme}
  handleLogout={handleLogoutACB}/>;
}