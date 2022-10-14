import React, { useState } from "react";
import ModalView from "../views/modalView";
import ErrorMessage from "../components/errorMessage";
import { login } from "../loginSource";
import { useSelector, useDispatch } from "react-redux";
// import { setUserData, setToken } from "../redux";
import { RootTabScreenProps } from "../types";

export default function ModalPresenter() {
  return (
    <>
      <ModalView></ModalView>
    </>
  );
}
