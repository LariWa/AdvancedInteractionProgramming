import React from "react";
import { useSelector } from "react-redux";
import ProfileView from "../views/profileView";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../redux";
import useColorScheme from "../hooks/useColorScheme";

export default function ProfilePresenter() {
  const user = useSelector((state: any) => state.user);
  const colorScheme = useColorScheme();
  const dispatch = useDispatch<any>();

  function handleLogoutACB() {
    dispatch(deleteUserData());
  }

  return (
    <ProfileView
      name={user}
      colorScheme={colorScheme}
      handleLogout={handleLogoutACB}
    />
  );
}
